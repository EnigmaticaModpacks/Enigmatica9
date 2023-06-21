ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/rolling/';
    const recipes = [
        {
            output: '2x immersiveengineering:wire_copper',
            input: '#forge:plates/copper',
            id: `${id_prefix}copper_wire`
        }
    ];

    Object.keys(metal_properties).forEach((metal) => {
        if (metal_properties[metal].rod) {
            recipes.push({
                output: `2x emendatusenigmatica:${metal}_rod`,
                input: `#forge:ingots/${metal}`,
                id: `${id_prefix}${metal}_rod`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:rolling';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
