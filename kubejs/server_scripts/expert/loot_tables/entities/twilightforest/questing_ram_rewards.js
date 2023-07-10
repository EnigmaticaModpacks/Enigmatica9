ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Override Questing Ram Rewards Loot Table
    event.addGeneric('twilightforest:entities/questing_ram_rewards', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('twilightforest:crumble_horn', 1);
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(
                Item.of('minecraft:bundle', 1, {
                    Items: [
                        { id: 'twilightforest:quest_ram_trophy', Count: 1 },
                        { id: 'byg:therium_crystal_block', Count: 16 },
                        { id: 'minecraft:sea_lantern', Count: 16 },
                        { id: 'twilightforest:steeleaf_block', Count: 16 }
                    ]
                })
            );
        });
    });
});
