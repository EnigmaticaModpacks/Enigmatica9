LootJS.modifiers((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.addLootTableModifier(/.*/).removeLoot('minecraft:heart_of_the_sea');
    event.addLootTableModifier(/.*/).removeLoot('sophisticatedbackpacks:feeding_upgrade');
    event.addLootTableModifier(/.*/).removeLoot('sophisticatedbackpacks:advanced_feeding_upgrade');
    event.addLootTableModifier(/.*/).removeLoot('sophisticated_storage:feeding_upgrade');
    event.addLootTableModifier(/.*/).removeLoot('sophisticated_storage:advanced_feeding_upgrade');
    event.addLootTableModifier(/.*/).removeLoot('minecraft:sculk_catalyst');
    event.disableWitherStarDrop();
});
