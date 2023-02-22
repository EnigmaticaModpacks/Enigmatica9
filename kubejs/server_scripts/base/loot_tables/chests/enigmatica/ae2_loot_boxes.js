ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/ae2/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('ae2:sky_stone_block', 1, [16, 32]);
            pool.addItem('ae2:cell_component_1k', 1, [1, 3]);
            pool.addItem('ae2:fluix_glass_cable', 1, [5, 10]);
            pool.addItem('ae2:storage_bus', 1, 2);
            pool.addItem('ae2:capacity_card', 1, 2);
            pool.addItem('ae2:quartz_fixture', 1, 1);
            pool.addItem('ae2:certus_quartz_crystal', 1, [7, 14]);
            pool.addItem('ae2:quartz_glass', 1, [16, 32]);
            pool.addItem('ae2:fluix_crystal', 1, [3, 10]);
            pool.addItem('chimes:amethyst_chimes', 1, [3, 10]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('sophisticatedstorage:stack_upgrade_tier_1', 2, 1);
            pool.addItem('sophisticatedstorage:stack_upgrade_tier_2', 1, 1);
            pool.addItem('sophisticatedstorage:basic_to_iron_tier_upgrade', 2, 1);
            pool.addItem('sophisticatedstorage:iron_to_gold_tier_upgrade', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/ae2/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('ae2:cell_component_4k', 1, [1, 2]);
            pool.addItem('ae2:fluix_covered_cable', 1, [5, 10]);
            pool.addItem('ae2:fluix_covered_dense_cable', 1, [5, 10]);
            pool.addItem('ae2:speed_card', 1, [1, 2]);
            pool.addItem('ars_nouveau:amethyst_golem_charm', 1, 1);
            pool.addItem('ae2:interface', 1, 1);
            pool.addItem('ae2:logic_processor', 1, [1, 3]);
            pool.addItem('ae2:calculation_processor', 1, [1, 3]);
            pool.addItem('ae2:engineering_processor', 1, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('sophisticatedstorage:stack_upgrade_tier_3', 2, 1);
            pool.addItem('sophisticatedstorage:stack_upgrade_tier_4', 1, 1);
            pool.addItem('sophisticatedstorage:gold_to_diamond_tier_upgrade', 2, 1);
            pool.addItem('sophisticatedstorage:diamond_to_netherite_tier_upgrade', 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/ae2/rare' });
        });
    });
});
