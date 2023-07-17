LootJS.modifiers((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.addLootTableModifier(/.*/).removeLoot('minecraft:heart_of_the_sea');
    event.addLootTableModifier(/.*/).removeLoot('sophisticatedbackpacks:feeding_upgrade');
    event.addLootTableModifier(/.*/).removeLoot('sophisticatedbackpacks:advanced_feeding_upgrade');
    event.addLootTableModifier('minecraft:entities/warden').removeLoot('minecraft:sculk_catalyst');
    event.disableWitherStarDrop();
});
