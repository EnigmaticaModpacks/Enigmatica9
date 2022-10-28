ServerEvents.lowPriorityData((event) => {
    /*          
                Negative values permitted
                maxEterna: max 50,
                eterna: max 50,             // Enchanting Level
                quanta: max 100,            // Increases variability 
                arcana: max 100,            // Increases Rarity
                clues: max useful probably around 10,
                rectification: max 100      // Reduces variance from Quanta
    */
    let recipes = [
        // {
        //     block: 'botania:mana_pylon',
        //     stats: {
        //         maxEterna: 20,
        //         eterna: 10,
        //         arcana: 15,
        //         clues: 1
        //     }
        // },
        // {
        //     block: 'botania:natura_pylon',
        //     stats: {
        //         maxEterna: 30,
        //         eterna: 15,
        //         arcana: 30,
        //         clues: 5
        //     }
        // },
        // {
        //     block: 'botania:gaia_pylon',
        //     stats: {
        //         maxEterna: 40,
        //         eterna: 20,
        //         arcana: -30,
        //         quanta: 25,
        //         rectification: -15
        //     }
        // },
        // {
        //     block: 'botania:floating_rosa_arcana',
        //     stats: {
        //         maxEterna: 30,
        //         eterna: 15,
        //         arcana: 15
        //     }
        // },
        {
            block: 'occultism:spirit_attuned_crystal',
            stats: {
                arcana: 15,
                clues: 1,
                quanta: -15
            }
        },
        {
            block: 'ars_nouveau:bookwyrm_lectern',
            stats: {
                arcana: 30,
                quanta: -30,
                rectification: 30,
                clues: 3
            }
        },
        {
            block: 'ars_nouveau:arcane_pedestal',
            stats: {
                maxEterna: 15,
                eterna: 1,
                arcana: 2,
                quanta: -2
            }
        },
        {
            block: 'ars_nouveau:arcane_core',
            stats: {
                maxEterna: 15,
                eterna: 3.5,
                quanta: 8
            }
        },
        {
            block: 'ars_nouveau:enchanting_apparatus',
            stats: {
                maxEterna: 15,
                eterna: 3.5,
                quanta: 8
            }
        },
        {
            block: 'supplementaries:book_pile',
            stats: {
                maxEterna: 7.5,
                eterna: 1
            }
        }
    ];

    // colors.forEach((color) => {
    //     recipes.push({
    //         block: `botania:${color}_floating_flower`,
    //         stats: {
    //             maxEterna: 10,
    //             eterna: 1,
    //             arcana: 1.5
    //         }
    //     });
    // });

    getItemsInTag('#forge:bookshelves').forEach((bookshelf) => {
        recipes.push({
            block: bookshelf,
            stats: {
                maxEterna: 7.5,
                eterna: 1
            }
        });
    });

    getItemsInTag('#minecraft:candles').forEach((candle) => {
        recipes.push({
            block: candle,
            stats: {
                arcana: 1.25
            }
        });
    });

    recipes.forEach((enchantingBlock) => {
        event.addJson(`apotheosis:enchanting_stats/${enchantingBlock.block.replace(':', '_')}.json`, enchantingBlock);
    });
});
