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
                Item.of('minecraft:bundle', {
                    Items: [
                        { id: 'quark:blue_blossom_sapling', Count: 3 },
                        { id: 'quark:lavender_blossom_sapling', Count: 3 },
                        { id: 'quark:orange_blossom_sapling', Count: 3 },
                        { id: 'quark:pink_blossom_sapling', Count: 3 },
                        { id: 'quark:yellow_blossom_sapling', Count: 3 },
                        { id: 'quark:red_blossom_sapling', Count: 3 },

                        { id: 'hexerei:willow_sapling', Count: 3 },
                        { id: 'hexerei:mahogany_sapling', Count: 3 },
                        { id: 'hexerei:mandrake_flower', Count: 3 },
                        { id: 'hexerei:yellow_dock_bush', Count: 3 },
                        { id: 'hexerei:mugwort_bush', Count: 3 },
                        { id: 'hexerei:belladonna_flower', Count: 3 },
                        { id: 'hexerei:sage_seed', Count: 3 },

                        { id: 'minecraft:pumpkin_seeds', Count: 3 },
                        { id: 'minecraft:beetroot_seeds', Count: 3 },
                        { id: 'minecraft:wheat_seeds', Count: 3 },
                        { id: 'minecraft:melon_seeds', Count: 3 },

                        { id: 'immersiveengineering:seed', Count: 3 },
                        { id: 'occultism:datura_seeds', Count: 3 },

                        { id: 'ars_nouveau:frostaya_pod', Count: 1 },
                        { id: 'ars_nouveau:mendosteen_pod', Count: 1 },
                        { id: 'ars_nouveau:bombegranate_pod', Count: 1 },
                        { id: 'ars_nouveau:bastion_pod', Count: 1 },
                        { id: 'ars_elemental:flashpine_pod', Count: 1 }
                    ],
                    display: {
                        Name: `{"text":"Druid's Herb Pouch","color":"dark_green"}`,
                        Lore: [
                            `{"text":"It seems whoever summoned this Naga didn't survive the process...","color":"dark_red"}`
                        ]
                    }
                }),
                1
            );
        });
    });
});
