ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/shaped/';

    const recipes = [
        {
            output: 'immersiveengineering:hammer',
            pattern: [' AB', ' CA', 'C  '],
            key: {
                A: '#forge:ingots/lead',
                B: '#forge:string',
                C: '#forge:rods/wooden'
            },
            id: `immersiveengineering:crafting/hammer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
