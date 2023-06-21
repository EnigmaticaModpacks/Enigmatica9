ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/metal_press/';

    const recipes = [];

    Object.keys(metal_properties).forEach((metal) => {
        if (metal_properties[metal].gear) {
            recipes.push({
                output: `emendatusenigmatica:${metal}_gear`,
                mold: 'immersiveengineering:mold_gear',
                input: `#forge:ingots/${metal}`,
                count: 4,
                energy: 2400,
                id: `${id_prefix}${metal}_gear`
            });
        }

        if (metal_properties[metal].plate) {
            recipes.push({
                output: `emendatusenigmatica:${metal}_plate`,
                mold: 'immersiveengineering:mold_plate',
                input: `#forge:ingots/${metal}`,
                energy: 2400,
                id: `${id_prefix}${metal}_plate`
            });
        }

        if (metal_properties[metal].rod) {
            recipes.push({
                output: `2x emendatusenigmatica:${metal}_rod`,
                mold: 'immersiveengineering:mold_rod',
                input: `#forge:ingots/${metal}`,
                energy: 2400,
                id: `${id_prefix}${metal}_rod`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:metal_press';
        let input = { base_ingredient: {}, count: recipe.count ? recipe.count : 1 };
        input.base_ingredient = recipe.input.startsWith('#')
            ? { tag: recipe.input.substring(1) }
            : { item: recipe.input };

        recipe.input = input;
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
