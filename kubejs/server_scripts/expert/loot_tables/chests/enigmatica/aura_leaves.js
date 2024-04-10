ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.addGeneric('enigmatica:loot_boxes/aura_leaves/tiny', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('kubejs:aura_leaf', '{aura_amount:300000.0d,aura_max:2500000.0d}'), 1, 1);
        });
    });

    event.addGeneric('enigmatica:loot_boxes/aura_leaves/small', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('kubejs:aura_leaf', '{aura_amount:600000.0d,aura_max:2500000.0d}'), 1, 1);
        });
    });

    event.addGeneric('enigmatica:loot_boxes/aura_leaves/medium', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('kubejs:aura_leaf', '{aura_amount:900000.0d,aura_max:2500000.0d}'), 1, 1);
        });
    });

    event.addGeneric('enigmatica:loot_boxes/aura_leaves/large', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem(Item.of('kubejs:aura_leaf', '{aura_amount:1200000.0d,aura_max:2500000.0d}'), 1, 1);
        });
    });
});
