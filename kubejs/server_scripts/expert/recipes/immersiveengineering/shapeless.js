ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/shapeless/';

    const recipes = [
        {
            output: 'immersiveengineering:blastbrick_reinforced',
            inputs: ['immersiveengineering:blastbrick', '#forge:ingots/energized_steel'],
            id: 'immersiveengineering:crafting/blastbrick_reinforced'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
