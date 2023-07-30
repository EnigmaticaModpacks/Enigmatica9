ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/rolling/';
    const recipes = [];

    Object.keys(metal_properties).forEach((metal) => {
        if (metal_properties[metal].rod) {
            recipes.push({
                output: `2x emendatusenigmatica:${metal}_rod`,
                input: `#forge:ingots/${metal}`,
                id: `${id_prefix}${metal}_rod`
            });
        }

        if (metal_properties[metal].wire) {
            recipes.push({
                output: `2x immersiveengineering:wire_${metal}`,
                input: `#forge:rods/${metal}`,
                id: `${id_prefix}${metal}_wire`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:rolling';
        recipe.input = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
