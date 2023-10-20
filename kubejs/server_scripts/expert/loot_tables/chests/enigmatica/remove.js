LootJS.modifiers((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.addLootTableModifier(/.*/).removeLoot('sophisticatedbackpacks:feeding_upgrade');
    event.addLootTableModifier(/.*/).removeLoot('sophisticatedbackpacks:advanced_feeding_upgrade');
    event.addLootTableModifier(/.*/).removeLoot('create:experience_nugget');
    event.addLootTableModifier(/.*/).removeLoot('create:electron_tube');
    event.addLootTableModifier(/.*/).removeLoot('create:raw_zinc');
    event.addLootTableModifier(/.*/).removeLoot('emendatusenigmatica:raw_zinc');
    event.addLootTableModifier(/.*/).removeLoot('quark:dirty_shard');
    event.addLootTableModifier(/.*/).removeLoot('ars_nouveau:ritual_wilden_summon');

    event.disableWitherStarDrop();
});
