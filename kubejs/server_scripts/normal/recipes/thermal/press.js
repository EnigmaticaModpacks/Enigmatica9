ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/press/';

    const recipes = [
        {
            inputs: ['powah:photoelectric_pane', 'powah:ender_core'],
            outputs: [{ item: 'powah:lens_of_ender' }],
            energy: 50000,
            id: `${id_prefix}lens_of_ender`
        },
        {
            inputs: ['powah:aerial_pearl', 'powah:ender_core'],
            outputs: [{ item: 'powah:player_aerial_pearl' }],
            energy: 100000,
            id: `${id_prefix}player_aerial_pearl`
        },
        {
            inputs: ['powah:binding_card', 'powah:ender_core'],
            outputs: [{ item: 'powah:binding_card_dim' }],
            energy: 150000,
            id: `${id_prefix}binding_card_dim`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
