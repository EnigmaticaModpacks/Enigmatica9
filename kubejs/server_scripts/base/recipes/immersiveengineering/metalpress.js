ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/metal_press/';

    const recipes = [
        {
            output: `pneumaticcraft:compressed_iron_gear`,
            mold: 'immersiveengineering:mold_gear',
            input: `#forge:ingots/compressed_iron`,
            count: 4,
            energy: 2400,
            id: `${id_prefix}compressed_iron_gear`
        }
    ];

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

        if (metal_properties[metal].wire) {
            recipes.push({
                output: `4x immersiveengineering:wire_${metal}`,
                mold: 'immersiveengineering:mold_wire',
                input: `#forge:ingots/${metal}`,
                energy: 2400,
                id: `${id_prefix}${metal}_wire`
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
