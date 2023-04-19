ServerEvents.chestLootTables((event) => {
    let village_chests = [
        'village_desert_house',
        'village_plains_house',
        'village_savanna_house',
        'village_snowy_house',
        'village_taiga_house'
    ];

    village_chests.forEach((village_chest) => {
        event.modify(`minecraft:village/${village_chest}`, (table) => {
            table.addPool((pool) => {
                pool.rolls = [1, 2];
                pool.addItem(Item.of('immersiveengineering:seed'), 1, [5, 10]);
                pool.addItem(Item.of('occultism:datura_seeds'), 1, [5, 10]);
                pool.addItem(Item.of('hexerei:sage_seed'), 1, [5, 10]);
                pool.addItem(Item.of('hexerei:yellow_dock_bush'), 1, [5, 10]);
                pool.addItem(Item.of('hexerei:mugwort_bush'), 1, [5, 10]);
                pool.addItem(Item.of('hexerei:mandrake_flower'), 1, [5, 10]);
                pool.addItem(Item.of('hexerei:belladonna_flower'), 1, [5, 10]);
            });
        });
    });
});
