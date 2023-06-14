ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/twilightforest/shapeless/';

    const recipes = [
        {
            output: '32x twilightforest:fluffy_cloud',
            inputs: ['#forge:wool/white', '#forge:essences/air', '#forge:essences/manipulation'],
            id: `${id_prefix}fluffy_cloud`
        },
        {
            output: '32x twilightforest:wispy_cloud',
            inputs: ['twilightforest:fluffy_cloud', '#forge:essences/air'],
            id: `${id_prefix}wispy_cloud`
        },
        {
            output: 'twilightforest:pink_castle_rune_brick',
            inputs: ['twilightforest:castle_brick', 'quark:pink_rune'],
            id: `${id_prefix}pink_castle_rune_brick`
        },
        {
            output: 'twilightforest:yellow_castle_rune_brick',
            inputs: ['twilightforest:castle_brick', 'quark:yellow_rune'],
            id: `${id_prefix}yellow_castle_rune_brick`
        },
        {
            output: 'twilightforest:blue_castle_rune_brick',
            inputs: ['twilightforest:castle_brick', 'quark:cyan_rune'],
            id: `${id_prefix}blue_castle_rune_brick`
        },
        {
            output: 'twilightforest:violet_castle_rune_brick',
            inputs: ['twilightforest:castle_brick', 'quark:purple_rune'],
            id: `${id_prefix}violet_castle_rune_brick`
        },
        {
            output: '2x twilightforest:pink_castle_door',
            inputs: ['twilightforest:pink_castle_rune_brick', 'twilightforest:reappearing_block'],
            id: `${id_prefix}pink_castle_door`
        },
        {
            output: '2x twilightforest:yellow_castle_door',
            inputs: ['twilightforest:yellow_castle_rune_brick', 'twilightforest:reappearing_block'],
            id: `${id_prefix}yellow_castle_door`
        },
        {
            output: '2x twilightforest:blue_castle_door',
            inputs: ['twilightforest:blue_castle_rune_brick', 'twilightforest:reappearing_block'],
            id: `${id_prefix}blue_castle_door`
        },
        {
            output: '2x twilightforest:violet_castle_door',
            inputs: ['twilightforest:violet_castle_rune_brick', 'twilightforest:reappearing_block'],
            id: `${id_prefix}violet_castle_door`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
