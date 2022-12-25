//priority: 1005
const PowahAPI = Java.loadClass('owmii.powah.api.PowahAPI');

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

const RandomSource = Java.loadClass('net.minecraft.util.RandomSource');
const RealEnchantHelper = Java.loadClass('shadows.apotheosis.ench.table.RealEnchantmentHelper');

function randomEnchant(item, level, treasure) {
    if (level == 0) {
        return Item.of(item);
    }

    // shadows.apotheosis.ench.table.RealEnchantmentHelper.selectEnchantment(RandomSource rand, ItemStack stack, int level, float quanta, float arcana, float rectification, boolean treasure)
    let enchants = RealEnchantHelper.selectEnchantment(
        RandomSource.create(),
        Item.of(item),
        level,
        30.0,
        0.0,
        0.0,
        treasure
    );

    let enchantedItem = Item.of(item);
    enchants.forEach((enchant) => {
        enchantedItem = Item.of(enchantedItem).enchant(enchant.enchantment, enchant.level);
    });

    return enchantedItem;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function generatePentacleEntry(ritual_name, x_placement, y_placement, parents) {
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
        parents: parents,
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

function printSpawnChances(recipes, caller) {
    // For use with Apotheosis Bosses scripts for checking spawn rates.
    console.log(`==========${caller}==========`);
    var spawn_total = [];
    recipes.forEach((recipe) => {
        if (recipe.weight) {
            recipe.dimensions.forEach((dimension) => {
                if (spawn_total[dimension]) {
                    spawn_total[dimension] = spawn_total[dimension] + recipe.weight;
                } else {
                    spawn_total[dimension] = recipe.weight;
                }
            });
        }
    });

    recipes.forEach((recipe) => {
        if (recipe.weight) {
            recipe.dimensions.forEach((dimension) => {
                console.log(
                    `Entity: ${recipe.entity.split(':')[1]}, Dimension: ${dimension.split(':')[1]}, Weight: ${
                        recipe.weight
                    }, Spawn Chance: ${100 * (recipe.weight / spawn_total[dimension])}%`
                );
            });
        }
    });
}
