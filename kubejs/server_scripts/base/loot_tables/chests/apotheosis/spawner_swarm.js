ServerEvents.chestLootTables((event) => {
    // Override Spawner Swarm Loot Table
    event.addChest('apotheosis:spawner_swarm', (table) => {
        table.addPool((pool) => {
            pool.rolls = [5, 6];
            pool.bonusRolls = [1, 4];
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 3,
                quality: 4,
                min: 1,
                max: 3,
                stack: { item: 'minecraft:diamond', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 3,
                quality: 4,
                min: 1,
                max: 3,
                stack: { item: 'minecraft:emerald', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 10,
                quality: 1,
                min: 1,
                max: 5,
                stack: { item: 'minecraft:raw_iron', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 10,
                quality: 3,
                min: 1,
                max: 5,
                stack: { item: 'minecraft:raw_gold', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                quality: 2,
                min: 1,
                max: 1,
                stack: { item: 'minecraft:golden_apple', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 5,
                quality: 1,
                min: 1,
                max: 1,
                stack: { item: 'minecraft:name_tag', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 5,
                quality: 1,
                min: 1,
                max: 1,
                stack: { item: 'minecraft:lead', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 3,
                quality: 1,
                min: 1,
                max: 1,
                stack: { item: 'minecraft:saddle', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                quality: 3,
                min: 1,
                max: 1,
                stack: { item: 'minecraft:diamond_horse_armor', count: 1 }
            });
            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 3,
                min: 1,
                max: 3,
                stack: { item: 'minecraft:slime_ball', count: 1 }
            });

            pool.addEntry({
                type: 'placebo:stack_entry',
                weight: 3,
                quality: 5,
                functions: [
                    {
                        function: 'minecraft:enchant_randomly'
                    }
                ],
                min: 1,
                max: 1,
                stack: {
                    item: 'minecraft:book',
                    count: 1
                }
            });
        });
    });
});
