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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
