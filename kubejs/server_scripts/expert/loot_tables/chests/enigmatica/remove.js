LootJS.modifiers((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.addLootTableModifier(/.*/).removeLoot('minecraft:heart_of_the_sea');
});
