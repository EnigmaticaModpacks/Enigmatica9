ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/farmersdelight/shaped/';

    const recipes = [
        {
            output: 'farmersdelight:cooking_pot',
            pattern: ['ABA', 'CEC', 'CDC'],
            key: {
                A: 'naturesaura:ancient_stick',
                B: 'minecraft:wooden_shovel',
                C: '#forge:ingots/copper',
                D: 'minecraft:conduit',
                E: '#forge:essences/water'
            },
            id: 'farmersdelight:cooking_pot'
        },
        {
            output: 'farmersdelight:stove',
            pattern: ['AAA', 'BCB', 'BBB'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: 'minecraft:bricks',
                C: '#forge:essences/fire'
            },
            id: 'farmersdelight:stove'
        },
        {
            output: 'farmersdelight:skillet',
            pattern: [' AA', ' AA', 'B  '],
            key: {
                A: '#forge:ingots/copper',
                B: 'minecraft:brick'
            },
            id: 'farmersdelight:skillet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
