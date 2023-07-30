ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/hexerei/shaped/';

    const recipes = [
        {
            output: 'hexerei:pestle_and_mortar',
            pattern: ['  A', 'BCB', 'BBB'],
            key: {
                A: '#forge:bones',
                B: ['minecraft:andesite', 'twilightforest:nagastone'],
                C: 'twilightforest:liveroot'
            },
            id: `${id_prefix}pestle_and_mortar`
        },
        {
            output: 'hexerei:witch_hazel_woodcutter',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'manyideas_core:saw_stone',
                B: 'hexerei:witch_hazel_planks',
                C: 'minecraft:andesite'
            },
            id: `${id_prefix}witch_hazel_woodcutter`
        },
        {
            output: 'hexerei:willow_woodcutter',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'manyideas_core:saw_stone',
                B: 'hexerei:willow_planks',
                C: 'minecraft:andesite'
            },
            id: `${id_prefix}willow_woodcutter`
        },
        {
            output: 'hexerei:mahogany_woodcutter',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'manyideas_core:saw_stone',
                B: 'hexerei:mahogany_planks',
                C: 'minecraft:andesite'
            },
            id: `${id_prefix}mahogany_woodcutter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
