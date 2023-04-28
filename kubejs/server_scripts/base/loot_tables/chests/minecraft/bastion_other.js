ServerEvents.chestLootTables((event) => {
    event.modify(`minecraft:bastion_other`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.5);
            pool.addItem('emendatusenigmatica:raw_copper', 2, [6, 10]);
            pool.addItem('emendatusenigmatica:raw_silver', 1, [6, 10]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.25);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:devil_familiar"}'), 1, 1);
            pool.addItem('ars_nouveau:warp_scroll', 1, [3, 5]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.randomChance(0.3);
            pool.addItem(
                Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"ars_nouveau:spell_damage_potion_long"}'),
                1,
                1
            );
            pool.addItem(
                Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"ars_nouveau:mana_regen_potion_long"}'),
                1,
                1
            );
        });
    });
});
