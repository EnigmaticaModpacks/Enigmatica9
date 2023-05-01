ServerEvents.genericLootTables((event) => {
    event.modify(`twilightforest:structures/foundation_basement`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem('ars_nouveau:wixie_charm', 1, 1);

            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:knowledge"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:haste"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:absorption"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:resistance"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"quark:resilience"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"ars_nouveau:shielding_potion"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"ars_nouveau:recovery_potion"}'), 1, 1);
            pool.addItem(
                Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"ars_nouveau:spell_damage_potion"}'),
                1,
                1
            );
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"ars_nouveau:mana_regen_potion"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:slow_falling"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:luck"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:strength"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:regeneration"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:water_breathing"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:swiftness"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:fire_resistance"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:leaping"}'), 1, 1);
            pool.addItem(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:night_vision"}'), 1, 1);
        });
    });
});
