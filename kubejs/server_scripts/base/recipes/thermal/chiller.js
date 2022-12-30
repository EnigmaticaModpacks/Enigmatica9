ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/chiller/';

    const recipes = [
        {
            fluid: Fluid.of('hexerei:tallow_fluid', 250),
            cast: Item.of('thermal:chiller_ingot_cast'),
            outputs: [Item.of('occultism:tallow', 1)],
            energy: 500,
            id: `${id_prefix}tallow`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:chiller';
        recipe.ingredients = [recipe.fluid.toJson(), recipe.cast.toJson()];
        recipe.result = recipe.outputs.map((output) => output.toJson());
        event.custom(recipe).id(recipe.id);
    });
});
