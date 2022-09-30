ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blastfurnace_fuel/';
    const recipes = [
        {
            input: Ingredient.of('#forge:nuggets/horizonite'),
            time: 64 * 20,
            id: `${id_prefix}horizonite_nugget`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace_fuel';

        // input: { tag: 'forge:coal_coke' }
        recipe.input = recipe.input.toJson();

        event.custom(recipe).id(recipe.id);
    });
});
