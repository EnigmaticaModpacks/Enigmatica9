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
                A: 'ars_nouveau:earth_essence',
                B: 'create:shaft',
                C: 'pneumaticcraft:compressed_stone',
                D: 'create:andesite_casing'
            },
            id: `createaddition:crafting/rolling_mill`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
