ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/industrial_foregoing/rare', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('industrialforegoing:machine_frame_simple', 10, 1);
            pool.addItem('industrialforegoing:item_transporter_type', 10, 2);
            pool.addItem('industrialforegoing:fluid_transporter_type', 10, 2);
            pool.addItem('thermal:rubber', 10, [8, 16]);
            pool.addItem('industrialforegoing:plastic', 10, [8, 16]);
            pool.addItem('industrialforegoing:laser_drill', 1, 1);
            pool.addItem('industrialforegoing:mechanical_dirt', 1, [1, 3]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.addItem(Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}'), 1, 1);
            pool.addItem(
                Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}'),
                1,
                1
            );
            pool.addItem(
                Item.of('industrialforegoing:processing_addon_1', '{TitaniumAugment:{Processing:2.0f}}'),
                1,
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/special' });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/industrial_foregoing/epic', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('industrialforegoing:mob_imprisonment_tool', 5, 1);
            pool.addItem('industrialforegoing:machine_frame_advanced', 30, 1);
            pool.addItem(
                Item.of(
                    'pneumaticcraft:huge_tank',
                    '{BlockEntityTag:{SavedTanks:{Tank:{Amount:512000,FluidName:"industrialforegoing:sludge"}}}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'pneumaticcraft:huge_tank',
                    '{BlockEntityTag:{SavedTanks:{Tank:{Amount:512000,FluidName:"industrialforegoing:biofuel"}}}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'pneumaticcraft:huge_tank',
                    '{BlockEntityTag:{SavedTanks:{Tank:{Amount:512000,FluidName:"industrialforegoing:essence"}}}}'
                ),
                1,
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.addItem(Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}'), 1, 1);
            pool.addItem(
                Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}'),
                1,
                1
            );
            pool.addItem(
                Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}'),
                1,
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'loot_table', weight: 1, name: 'enigmatica:loot_boxes/industrial_foregoing/rare' });
        });
    });
});
