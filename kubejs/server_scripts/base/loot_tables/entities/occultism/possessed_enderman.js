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
            pool.addEntry({ type: 'empty', weight: 15 });
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:enderman_gate_small"}'), 45, 1);
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:enderman_gate"}'), 25, 1);
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:enderman_gate_large"}'), 15, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.killedByPlayer();
            pool.addItem('supplementaries:enderman_head', 100, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = [0, 1];
            pool.killedByPlayer();
            pool.addEntry({ type: 'loot_table', weight: 100, name: 'minecraft:chests/end_city_treasure' });
        });
    });
});
