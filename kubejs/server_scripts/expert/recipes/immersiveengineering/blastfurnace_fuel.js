ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blastfurnace_fuel/';
    const recipes = [
        {
            input: '#forge:nuggets/horizonite',
            time: 120,
            id: `${id_prefix}horizonite_nugget`
        },
        {
            input: '#forge:dusts/horizonite',
            time: 1200,
            id: `${id_prefix}horizonite_dusts`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace_fuel';
        recipe.input = Ingredient.of(recipe.input).toJson();
        // Specify time in seconds in the recipes.
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
