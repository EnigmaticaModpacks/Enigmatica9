ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:normal/create/pressing/';
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: ['sushigocrafting:dried_seaweed_block'],
            outputs: ['6x sushigocrafting:nori_sheets'],
            id: `${id_prefix}nori_sheets`
        }
    ];

    const plate_materials = [
        'netherite',
        'osmium',
        'lumium',
        'signalum',
        'enderium',
        'bronze',
        'rose_gold',
        'invar',
        'tin'
    ];

    plate_materials.forEach((material) => {
        recipes.push({
            outputs: [`emendatusenigmatica:${material}_plate`],
            inputs: [`#forge:ingots/${material}`],
            id: `${id_prefix}${material}_plate`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:pressing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.results = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
