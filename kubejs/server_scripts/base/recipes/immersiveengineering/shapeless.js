ServerEvents.recipes((event) => {
    const id_prefix = 'immersiveengineering:base/shapeless/';

    const recipes = [
        {
            output: 'immersiveengineering:blastbrick_reinforced',
            inputs: ['immersiveengineering:blastbrick', '#forge:plates/iron'],
            id: `immersiveengineering:crafting/blastbrick_reinforced`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
