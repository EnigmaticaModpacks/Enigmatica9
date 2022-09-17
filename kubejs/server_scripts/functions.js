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

const enchantRandom = (item, level, treasure) => {
    let EnchantHelper = java('net.minecraft.world.item.enchantment.EnchantmentHelper');
    let RandomSource = java('net.minecraft.util.RandomSource');
    return EnchantHelper.m_220292_(RandomSource.m_216327_(), Item.of(item), level, treasure);
    // let helmet = EnchantHelper.enchantItem(RandomSource.create(), Item.of('minecraft:netherite_helmet'), 5, true);
};

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
