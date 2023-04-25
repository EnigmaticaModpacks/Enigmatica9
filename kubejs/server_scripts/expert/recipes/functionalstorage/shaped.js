ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/functionalstorage/shaped/';

    const recipes = [
        {
            output: 'functionalstorage:storage_controller',
            pattern: ['ABA', 'DCD', 'AEA'],
            key: {
                A: '#forge:plates/tin',
                B: 'pneumaticcraft:logistics_core',
                C: 'create:andesite_casing',
                D: '#forge:plastic',
                E: 'ars_nouveau:ritual_warping'
            },
            id: 'functionalstorage:storage_controller'
        },
        {
            output: 'functionalstorage:iron_downgrade',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: ['#forge:ingots/tin', '#forge:ingots/iron'],
                B: '#functionalstorage:drawer'
            },
            id: 'functionalstorage:iron_downgrade'
        },
        {
            output: 'functionalstorage:armory_cabinet',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: '#forge:stone',
                B: '#functionalstorage:drawer',
                C: 'minecraft:comparator',
                D: '#forge:ingots/energized_steel'
            },
            id: 'functionalstorage:armory_cabinet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
