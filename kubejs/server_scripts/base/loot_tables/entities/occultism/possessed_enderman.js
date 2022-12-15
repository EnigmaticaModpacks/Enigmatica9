ServerEvents.genericLootTables((event) => {
    event.addGeneric('occultism:entities/possessed_enderman', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:ender_pearl', 100, [1.0, 3.0]).addFunction({
                function: 'looting_enchant',
                count: { min: 0, max: 1 }
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:enderman_gate_small"}'), 100, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addCondition({ condition: 'killed_by_player' });
            pool.addItem('supplementaries:enderman_head', 100, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = [0, 1];
            pool.addCondition({ condition: 'killed_by_player' });
            pool.addEntry({ type: 'loot_table', weight: 100, name: 'minecraft:chests/end_city_treasure' });
        });
    });
});
