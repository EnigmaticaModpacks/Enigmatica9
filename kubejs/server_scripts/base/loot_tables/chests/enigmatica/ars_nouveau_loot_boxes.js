ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/ars_nouveau/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('emendatusenigmatica:source_gem', 1, 16);
            pool.addItem('ars_nouveau:source_jar', 1, 2);
            pool.addItem('ars_nouveau:relay', 1, 2);
            pool.addItem('ars_nouveau:relay_splitter', 1, 2);
            pool.addItem('ars_nouveau:potion_jar', 1, 1);
            pool.addItem('ars_nouveau:ritual_challenge', 1, 1);
            pool.addItem('ars_nouveau:ritual_overgrowth', 1, 1);
            pool.addItem('ars_nouveau:ritual_fertility', 1, 1);
            pool.addItem('ars_nouveau:ritual_harvest', 1, 1);
            pool.addItem('ars_nouveau:ritual_awakening', 1, 1);
            pool.addItem('ars_nouveau:starbuncle_charm', 1, 2);
            pool.addItem(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_regen', 2), 1, 2);
            pool.addItem(Item.of('minecraft:enchanted_book').enchant('ars_nouveau:mana_boost', 2), 1, 2);
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"apotheosis:long_knowledge"},count:8}}'
                ),
                1,
                [1, 3]
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"ars_nouveau:spell_damage_potion_long"},count:8}}'
                ),
                1,
                [1, 3]
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"ars_nouveau:mana_regen_potion_long"},count:8}}'
                ),
                1,
                [1, 3]
            );
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });
});
