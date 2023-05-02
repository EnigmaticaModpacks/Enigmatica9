LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/idas:.*/)
        .replaceLoot('quark:seed_pouch', LootEntry.of('ars_nouveau:warp_scroll').limitCount(3, 15))
        .replaceLoot(/.*zinc.*/, 'emendatusenigmatica:raw_silver', true)
        .replaceLoot('create:experience_nugget', 'minecraft:experience_bottle', true)
        .replaceLoot('quark:dirty_shard', 'minecraft:prismarine_shard', true)
        .replaceLoot('supplementaries:wrench', 'farmersdelight:iron_knife', true);
});
