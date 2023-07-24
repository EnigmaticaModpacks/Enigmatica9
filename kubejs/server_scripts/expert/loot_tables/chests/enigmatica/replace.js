LootJS.modifiers((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event
        .addLootTableModifier(/.*/)
        .matchLoot('minecraft:shears')
        .addLoot('minecraft:shears')
        .addNBT({ Enchantments: [{ id: 'naturesaura:aura_mending', lvl: 1 }] });
});
