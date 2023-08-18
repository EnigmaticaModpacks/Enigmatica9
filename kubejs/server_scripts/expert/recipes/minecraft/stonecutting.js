ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/stonecutting/';

    const recipes = [
        {
            output: '2x create:brass_ladder',
            input: '#forge:plates/bronze',
            id: `${id_prefix}brass_ladder`
        },
        {
            output: '2x create:brass_scaffolding',
            input: '#forge:plates/bronze',
            id: `${id_prefix}brass_scaffolding`
        },
        {
            output: '4x create:brass_bars',
            input: '#forge:plates/bronze',
            id: `${id_prefix}brass_bars`
        },
        {
            output: '4x create:andesite_bars',
            input: 'pneumaticcraft:compressed_stone',
            id: `${id_prefix}andesite_bars`
        },
        {
            output: '2x create:andesite_scaffolding',
            input: 'pneumaticcraft:compressed_stone',
            id: `${id_prefix}andesite_scaffolding`
        },
        {
            output: '2x create:andesite_ladder',
            input: 'pneumaticcraft:compressed_stone',
            id: `${id_prefix}andesite_ladder`
        },
        {
            output: '4x create:copycat_panel',
            input: '#forge:ingots/ironwood',
            id: `${id_prefix}copycat_panel`
        },
        {
            output: '4x create:copycat_step',
            input: '#forge:ingots/ironwood',
            id: `${id_prefix}copycat_step`
        }
    ];

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
