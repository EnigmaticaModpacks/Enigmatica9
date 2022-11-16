ServerEvents.entityLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Override Zombie Loot Table
    event.addEntity('minecraft:zombie', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:rotten_flesh', 1)
                .addFunction({
                    function: 'minecraft:set_count',
                    count: { type: 'minecraft:uniform', max: 2.0, min: 0.0 },
                    add: false
                })
                .addFunction({
                    function: 'minecraft:looting_enchant',
                    count: { type: 'minecraft:uniform', max: 1.0, min: 0.0 }
                });
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addCondition({ condition: 'minecraft:killed_by_player' });
            pool.addCondition({
                chance: 0.025,
                condition: 'minecraft:random_chance_with_looting',
                looting_multiplier: 0.01
            });

            pool.addItem('minecraft:carrot', 1);
            pool.addItem('farmersdelight:onion', 1);
            pool.addItem('farmersdelight:brown_mushroom_colony', 1);
            pool.addItem('farmersdelight:red_mushroom_colony', 1);
            pool.addItem('minecraft:potato', 1).addFunction({
                function: 'minecraft:furnace_smelt',
                conditions: [
                    {
                        condition: 'minecraft:entity_properties',
                        entity: 'this',
                        predicate: { flags: { is_on_fire: true } }
                    }
                ]
            });
        });
    });
});
