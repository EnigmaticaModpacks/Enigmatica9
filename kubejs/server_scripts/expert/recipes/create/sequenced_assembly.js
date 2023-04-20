ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/sequenced_assembly/';
    const recipes = [
        /*{
            input: 'input_item_here',
            outputs: [
                Item.of('6x create:large_cogwheel').withChance(32.0), //withChance sets a weight for the output, default is 1 without it
                Item.of('secondary_outputs').withChance(2.0),
               'more_secondaries_with_weight_1'
            ],
            transitionalItem: 'transitional_item_here', //required, but can be same as input item apparently
            loops: 1, //required
            sequence: [
                {
                    type: 'sequence_type_here',  //options are deploying, cutting, filling, pressing
                    input: 'input_items_fluids_or_array_here',
                    output: 'output_item_here',
                    processingTime: 50 // for cutting recipes
                }
            ],
            id: 'recipe_id_here'
        }*/
    ];

    const plate_materials = [
        'netherite',
        'iron',
        'lead',
        'constantan',
        'osmium',
        'electrum',
        'nickel',
        'copper',
        'enderium',
        'signalum',
        'lumium',
        'gold',
        'aluminum',
        'steel',
        'uranium',
        'silver',
        'bronze',
        'brass',
        'rose_gold',
        'zinc',
        'invar',
        'tin'
    ];

    plate_materials.forEach((material) => {
        recipes.push({
            outputs: [`emendatusenigmatica:${material}_plate`],
            input: `#forge:ingots/${material}`,
            transitionalItem: `emendatusenigmatica:${material}_ingot`,
            loops: 3,
            sequence: [
                {
                    type: 'create:pressing',
                    ingredients: [{ item: `emendatusenigmatica:${material}_ingot` }],
                    results: [{ item: `emendatusenigmatica:${material}_ingot` }]
                }
            ],
            id: `${id_prefix}${material}_plate`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        recipe.results = recipe.outputs.map((output) => Item.of(output).toJson());
        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.transitionalItem = Item.of(recipe.transitionalItem).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
