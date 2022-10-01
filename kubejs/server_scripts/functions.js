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
    let EnchantHelper = java('net.minecraft.world.item.enchantment.EnchantmentHelper');
    let RandomSource = java('net.minecraft.util.RandomSource');
    return EnchantHelper.m_220292_(RandomSource.m_216327_(), Item.of(item), level, treasure);
    // let helmet = EnchantHelper.enchantItem(RandomSource.create(), Item.of('minecraft:netherite_helmet'), 5, true);
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

        loot_table.loot_items.forEach((loot_item) => {
            pool.addItem(Item.of(loot_item.item), loot_item.weight);
        });
    });
}

function addEntityTable(event, entity, loot_table) {
    event.modifyEntity(entity, (table) => {
        generatePool(table, loot_table);
    });
}
