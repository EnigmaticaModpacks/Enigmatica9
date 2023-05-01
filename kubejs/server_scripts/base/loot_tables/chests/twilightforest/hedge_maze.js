ServerEvents.genericLootTables((event) => {
    event.addGeneric(`twilightforest:structures/hedge_maze`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [4, 6];
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'twilightforest:structures/useless' });
            pool.addItem('minecraft:brown_mushroom', 75, [1, 6]);
            pool.addItem('minecraft:red_mushroom', 75, [1, 6]);
            pool.addItem('twilightforest:mushgloom', 75, [1, 4]);
            pool.addItem('minecraft:wheat', 75, [1, 4]);
            pool.addItem('minecraft:string', 75, [1, 4]);
            pool.addItem('minecraft:stick', 75, [1, 6]);
        });

        table.addPool((pool) => {
            pool.rolls = [2, 4];
            pool.addItem('minecraft:melon_slice', 1, [1, 6]);
            pool.addItem('minecraft:melon_seeds', 1, [1, 6]);
            pool.addItem('minecraft:pumpkin_seeds', 1, [1, 4]);
            pool.addItem('immersiveengineering:seed', 1, [2, 5]);
            pool.addItem('occultism:datura_seeds', 1, [2, 5]);
            pool.addItem('hexerei:sage_seed', 1, [2, 5]);
            pool.addItem('minecraft:arrow', 1, [1, 12]);
            pool.addItem('twilightforest:firefly', 1, [1, 12]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('minecraft:cobweb', 75, [1, 6]);
            pool.addItem('minecraft:apple', 75, [1, 6]);
            pool.addItem('minecraft:shears', 75, 1);
            pool.addItem('minecraft:bow', 75, 1);
            pool.addItem('minecraft:crossbow', 75, 1);
            pool.addItem('minecraft:golden_apple', 25, 1);
            pool.addItem('minecraft:mushroom_stew', 25, 1);
            pool.addItem('minecraft:diamond', 25, 1);
            pool.addItem('naturesaura:infused_iron_hoe', 25, 1);
            pool.addItem('hexerei:mushroom_witch_hat', 25, 1);
            pool.addItem('twilightforest:music_disc_motion', 15, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.randomChance(0.15);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:deer_familiar"}'), 1, 1);
        });
    });
});
