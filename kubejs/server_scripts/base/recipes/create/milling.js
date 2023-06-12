ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/milling/';

    let recipes = [];

    sandstone_colors.forEach((color) => {
        let output = '';

        if (color == 'colorless') {
            output = 'minecraft:sand';
        } else if (color == 'red') {
            output = 'minecraft:red_sand';
        } else {
            output = `byg:${color}_sand`;
        }

        recipes.push({
            outputs: [
                { item: output, count: 2 },
                { item: 'emendatusenigmatica:niter_gem', count: 1, chance: 0.35 }
            ],
            inputs: [`#forge:sandstone/${color}`],
            processingTime: 60,
            id: `${id_prefix}niter_gem_from_${color}_sandstone`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:milling';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
