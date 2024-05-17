ServerEvents.genericLootTables((event) => {
    event.addGeneric('cnb:entities/sporeling', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:brown_mushroom', 1, [1, 3]);
            pool.addItem('minecraft:red_mushroom', 1, [1, 3]);
            pool.addItem('twilightforest:mushgloom', 1, [1, 3]);
            pool.addItem('quark:glow_shroom', 1, [1, 3]);
            pool.addItem('byg:green_mushroom', 1, [1, 3]);
            pool.addItem('byg:wood_blewit', 1, [1, 3]);
            pool.addItem('byg:weeping_milkcap', 1, [1, 3]);

            pool.addCondition({
                condition: 'minecraft:inverted',
                term: { condition: 'minecraft:location_check', predicate: { dimension: 'minecraft:the_nether' } }
            });
            pool.addCondition({
                condition: 'minecraft:inverted',
                term: { condition: 'minecraft:location_check', predicate: { dimension: 'minecraft:the_end' } }
            });
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:crimson_fungus', 1, [1, 3]);
            pool.addItem('minecraft:warped_fungus', 1, [1, 3]);
            pool.addItem('byg:soul_shroom', 1, [1, 3]);
            pool.addItem('byg:sythian_fungus', 1, [1, 3]);
            pool.addItem('byg:embur_wart', 1, [1, 3]);
            pool.addItem('byg:death_cap', 1, [1, 3]);

            pool.addCondition({
                condition: 'minecraft:location_check',
                predicate: { dimension: 'minecraft:the_nether' }
            });
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('byg:imparius_mushroom', 1, [1, 3]);
            pool.addItem('byg:shulkren_fungus', 1, [1, 3]);
            pool.addItem('byg:purple_bulbis_oddity', 1, [1, 3]);
            pool.addItem('byg:bulbis_oddity', 1, [1, 3]);
            pool.addItem('byg:fungal_imparius', 1, [1, 3]);

            pool.addCondition({
                condition: 'minecraft:location_check',
                predicate: { dimension: 'minecraft:the_end' }
            });
            pool.addCondition({
                chance: 0.25,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });
        });
    });
});
