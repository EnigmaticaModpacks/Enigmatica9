ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blastfurnace_fuel/';
    const recipes = [
        {
            input: '#forge:gems/blazing',
            time: 1200,
            id: `${id_prefix}blazing`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace_fuel';
        recipe.input = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        // Specify time in seconds in the recipes.
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
