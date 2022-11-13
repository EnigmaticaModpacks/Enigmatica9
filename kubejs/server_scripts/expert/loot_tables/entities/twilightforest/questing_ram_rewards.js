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
            pool.addItem('minecraft:bundle', 1).addFunction({
                function: 'minecraft:set_nbt',
                tag: '{Items:[{Count:1b,id:"twilightforest:quest_ram_trophy"},{Count:1b,id:"minecraft:coal_block"},{Count:1b,id:"minecraft:prismarine_bricks"},{Count:1b,id:"minecraft:lapis_block"}]}'
                // TODO: This is really boring. Find some fun things to stick in here in the future.
            });
        });
    });
});
