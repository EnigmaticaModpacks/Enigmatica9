//priority: 1005

const unificationBlacklistEntry = (material, type) => {
    return { material: material, type: type };
};

const entryIsBlacklisted = (material, type) => {
    for (var i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
};

const tagIsEmpty = (tag) => {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
};
/*
const getPreferredItemInTag = (tag) => {
    let pref =
        Utils.listOf(tag.stacks)
            .toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || Item.of(air);
    return pref;
};

const getPreferredItemInTag = (tag) => {
    let pref = AlmostUnified.getPreferredItemForTag(tag);
    return pref;
};

const compareIndices = (a, b, tag) => {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
};
*/
const getStrippedLogFrom = (logBlock) => {
    let result = air;
    buildWoodVariants.find((wood) => {
        if (wood.logBlock == logBlock) {
            result = wood.logBlockStripped;
            return result;
        }
    });
    return result;
};

const unificationBlacklist = [
    // Botania adds several quartz-types, which is why we don't unify these tags.
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

const playerHas = (item, player) => {
    return player.inventory.find(item) != -1;
};

const randomEnchant = (item, level, treasure) => {
    if (level == 0) {
        return Item.of(item);
    }
    let EnchantHelper = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentHelper');
    let RandomSource = Java.loadClass('net.minecraft.util.RandomSource');
    // return EnchantHelper.m_220292_(RandomSource.m_216327_(), Item.of(item), level, treasure);
    return EnchantHelper.enchantItem(RandomSource.create(), Item.of(item), level, treasure);
};

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function weightedEquipment(options) {
    let i;
    let weights = [];

    for (i = 0; i < options.length; i++) {
        weights[i] = options[i].weight + (weights[i - 1] || 0);
    }

    let random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++) {
        if (weights[i] > random) {
            break;
        }
    }

    return options[i].set;
}

function randomFloat(number, offset) {
    let min = number - offset;
    let max = number + offset;

    return Math.random() * (max - min + 1) + min;
}

function generatePool(table, loot_table) {
    // For help setting up conditions, functions, and non item entries: https://amaury.carrade.eu/minecraft/loot_tables
    // Minecraft wiki also has great information on how these work
    table.addPool((pool) => {
        pool.rolls = pool.rolls ? loot_table.rolls : 1;

        // For special conditions
        if (loot_table.loot_conditions) {
            loot_table.loot_conditions.forEach((loot_condition) => {
                pool.addCondition(loot_condition);
            });
        }

        // For special functions
        if (loot_table.loot_functions) {
            loot_table.loot_functions.forEach((loot_function) => {
                pool.addFunction(loot_function);
            });
        }

        // For external loot tables
        if (loot_table.loot_entries) {
            loot_table.loot_entries.forEach((loot_entry) => {
                pool.addEntry(loot_entry);
            });
        }

        if (loot_table.loot_items) {
            loot_table.loot_items.forEach((loot_item) => {
                pool.addItem(Item.of(loot_item.item), loot_item.weight);
            });
        }

        if (loot_table.generic_entries) {
            loot_table.generic_entries.forEach((generic_entry) => {
                pool.addEntry(generic_entry);
            });
        }
    });
}

function addEntityLootTable(event, entity, loot_table) {
    event.addEntity(entity, (table) => {
        generatePool(table, loot_table);
    });
}

function modifyEntityLootTable(event, entity, loot_table) {
    event.modifyEntity(entity, (table) => {
        generatePool(table, loot_table);
    });
}

function modifyLootTable(event, loot_id, loot_table) {
    event.modify(loot_id, (table) => {
        generatePool(table, loot_table);
    });
}

function addLootTable(event, loot_id, loot_table) {
    event.add(loot_id, (table) => {
        generatePool(table, loot_table);
    });
}

function generatePentacleEntry(ritual_name, x_placement, y_placement) {
    let entry = {
        name: ritual_name,
        background_u_index: 0,
        background_v_index: 0,
        category: 'occultism:pentacles',
        description: '',
        hide_while_locked: false,
        icon: 'occultism:pentacle',
        name: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.name`,
        pages: [
            {
                type: 'modonomicon:text',
                anchor: '',
                show_title_separator: true,
                text: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.text`,
                title: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.title`,
                use_markdown_in_title: false
            },
            {
                type: 'modonomicon:multiblock',
                anchor: '',
                multiblock_id: `occultism:${ritual_name}`,
                multiblock_name: '',
                show_visualize_button: true,
                text: ''
            }
        ],
        x: x_placement,
        y: y_placement
    };

    return entry;
}

function getSelectorArea(x_coord, y_coord, z_coord, diameter) {
    let r = diameter / 2,
        x = x_coord - r,
        y = y_coord - r,
        z = z_coord - r;
    return `x=${x},dx=${diameter},z=${z},dz=${diameter},y=${y},dy=${diameter}`;
}

function getItemsInTag(tag) {
    let out_items = [];

    Ingredient.of(tag).itemIds.forEach((entry) => {
        if (entry.startsWith('#')) {
            out_items.concat(getItemsInTag(entry));
        } else {
            out_items.push(entry);
        }
    });

    return out_items;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function generateGatewayWave(entries, loot_per_mob, modifiers, max_wave_time, setup_time) {
    let wave = { entities: [], rewards: [], max_wave_time: max_wave_time, setup_time: setup_time };

    // Set modifiers if present
    if (modifiers !== 'none') {
        wave.modifiers = modifiers;
    }

    // build entities and rewards arrays
    entries.forEach((entry) => {
        wave.entities.push({ entity: entry.entity, nbt: entry.nbt });

        let index = wave.rewards.findIndex((reward) => reward.entity === entry.entity);
        // Increment existing entries or create if new
        if (index >= 0) {
            wave.rewards[index].rolls = wave.rewards[index].rolls + loot_per_mob;
        } else {
            // Slimes and Magma Cubes need special NBT to drop loots.
            if (entry.entity == 'minecraft:slime') {
                entry.nbt = '{"Size": 0}';
            }
            if (entry.entity == 'minecraft:magma_cube') {
                entry.nbt = '{"Size": 1}';
            }
            wave.rewards.push({ type: 'entity_loot', entity: entry.entity, nbt: entry.nbt, rolls: loot_per_mob });
        }
    });
    return wave;
}
