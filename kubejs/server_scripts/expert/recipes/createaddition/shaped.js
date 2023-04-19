ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/createaddition/shaped/';

    const recipes = [
        {
            output: 'createaddition:rolling_mill',
            pattern: ['ABA', 'CBC', 'CDC'],
            key: {
                A: '#forge:essences/earth',
                B: 'create:shaft',
                C: 'pneumaticcraft:compressed_stone',
                D: 'create:andesite_casing'
            },
            id: `createaddition:crafting/rolling_mill`
        },
        {
            output: 'createaddition:tesla_coil',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'powah:capacitor_basic_large',
                C: 'immersiveengineering:coil_mv',
                D: 'powah:capacitor_basic_large',
                E: 'create:brass_casing'
            },
            id: `${id_prefix}tesla_coil`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
