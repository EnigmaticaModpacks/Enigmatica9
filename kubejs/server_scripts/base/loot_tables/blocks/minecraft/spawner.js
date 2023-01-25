ServerEvents.blockLootTables((event) => {
    event.modifyBlock('minecraft:spawner', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(
                Item.of('gateways:gate_pearl', '{gateway:"gateways:spawner_rift", radius:2.5}'),
                1,
                1
            ).randomChance(0.25);
        });
    });
});
