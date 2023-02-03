ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/naga', (table) => {
        table.addPool((pool) => {
            pool.rolls = [5, 15];
            pool.addItem(Item.of('twilightforest:naga_scale'), 1);
        });

        table.addPool((pool) => {
            pool.rolls = [1];
            pool.addItem(
                Item.of(
                    'minecraft:bundle',
                    '{Items:[{Count:8b,id:"hexerei:yellow_dock_bush"},{Count:8b,id:"hexerei:mugwort_bush"},{Count:8b,id:"hexerei:sage_seed"},{Count:8b,id:"occultism:datura_seeds"},{Count:8b,id:"hexerei:belladonna_flower"},{Count:8b,id:"hexerei:mandrake_flower"},{Count:8b,id:"hexerei:willow_sapling"},{Count:8b,id:"hexerei:mahogany_sapling"}],display:{Lore:[\'{"text":"It seems whoever summoned this Naga didn\\\'t survive the process...","color":"dark_red"}\'],Name:\'{"text":"Druid\\\'s Herb Pouch","color":"dark_green"}\'}}'
                ),
                1
            );
        });
    });
});
