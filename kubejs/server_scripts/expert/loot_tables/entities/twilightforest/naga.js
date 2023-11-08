ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/naga', (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem(Item.of('twilightforest:naga_scale'), 1, [5, 15]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem(
                Item.of('twilightforest:ironwood_hoe')
                    .enchant('minecraft:unbreaking', 5)
                    .enchant('apotheosis:natures_blessing', 3),
                1,
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem(
                Item.of('minecraft:bundle', {
                    Items: [
                        { id: 'quark:blue_blossom_sapling', Count: 1 },
                        { id: 'quark:lavender_blossom_sapling', Count: 1 },
                        { id: 'quark:orange_blossom_sapling', Count: 1 },
                        { id: 'quark:pink_blossom_sapling', Count: 1 },
                        { id: 'quark:yellow_blossom_sapling', Count: 1 },
                        { id: 'quark:red_blossom_sapling', Count: 1 },

                        { id: 'hexerei:willow_sapling', Count: 2 },
                        { id: 'hexerei:mahogany_sapling', Count: 2 },

                        { id: 'hexerei:mandrake_flower', Count: 3 },
                        { id: 'hexerei:yellow_dock_bush', Count: 3 },
                        { id: 'hexerei:mugwort_bush', Count: 3 },
                        { id: 'hexerei:belladonna_flower', Count: 3 },

                        { id: 'hexerei:sage_seed', Count: 4 },
                        { id: 'immersiveengineering:seed', Count: 4 },

                        { id: 'occultism:datura_seeds', Count: 1 },
                        { id: 'minecraft:pumpkin_seeds', Count: 1 },
                        { id: 'minecraft:beetroot_seeds', Count: 1 },
                        { id: 'minecraft:wheat_seeds', Count: 1 },
                        { id: 'minecraft:melon_seeds', Count: 1 },
                        { id: 'thermal:spinach_seeds', Count: 1 },
                        { id: 'thermal:sadiroot_seeds', Count: 1 },

                        { id: 'ars_nouveau:frostaya_pod', Count: 3 },
                        { id: 'ars_nouveau:mendosteen_pod', Count: 3 },
                        { id: 'ars_nouveau:bombegranate_pod', Count: 3 },
                        { id: 'ars_nouveau:bastion_pod', Count: 3 },
                        { id: 'ars_elemental:flashpine_pod', Count: 3 },

                        { id: 'twilightforest:raven_feather', Count: 3 },

                        { id: 'byg:aloe_vera', Count: 3 }
                    ],
                    display: {
                        Name: `{"text":"Druid's Pouch","color":"dark_green"}`,
                        Lore: [`{"text":"It bears the mark of the Wilden Grove.","color":"gold"}`]
                    }
                }),
                1
            );
        });
    });
});
