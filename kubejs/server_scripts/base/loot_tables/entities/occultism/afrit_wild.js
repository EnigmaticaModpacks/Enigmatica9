ServerEvents.genericLootTables((event) => {
    event.addGeneric('occultism:entities/afrit_wild', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('occultism:afrit_essence', 100, [0, 1]).addFunction({
                function: 'looting_enchant',
                count: { min: 0, max: 1 }
            });
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addEntry({ type: 'empty', weight: 10 });
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:blaze_gate_small"}'), 20, 1);
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:blaze_gate"}'), 15, 1);
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:blaze_gate_large"}'), 10, 1);
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:blitz_gate_small"}'), 20, 1);
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:blitz_gate"}'), 15, 1);
            pool.addItem(Item.of('gateways:gate_pearl', '{gateway:"gateways:blitz_gate_large"}'), 10, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.bonusRolls = [0, 1];
            pool.killedByPlayer();
            pool.addItem('minecraft:book', 5, 1).enchantWithLevels([20, 50], true);
            pool.addEntry({ type: 'loot_table', weight: 95, name: 'minecraft:chests/nether_bridge' });
        });
    });
});
