ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/rolling/';
    const recipes = [
        {
            output: '2x immersiveengineering:wire_copper',
            input: '#forge:plates/copper',
            id: `${id_prefix}copper_wire`
        }
    ];

    const rod_materials = [
        'lead',
        'constantan',
        'osmium',
        'electrum',
        'nickel',
        'enderium',
        'signalum',
        'lumium',
        'uranium',
        'silver',
        'bronze',
        'rose_gold',
        'zinc',
        'invar',
        'tin'
    ];

    rod_materials.forEach((material) => {
        recipes.push({
            output: `2x emendatusenigmatica:${material}_rod`,
            input: `#forge:ingots/${material}`,
            id: `${id_prefix}${material}_rod`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:rolling';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
