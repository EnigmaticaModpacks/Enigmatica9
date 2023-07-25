LootJS.modifiers((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event
        .addLootTypeModifier(LootType.CHEST)
        .modifyLoot('minecraft:shears', (itemStack) => Item.of(itemStack).enchant('naturesaura:aura_mending', 1));
});
