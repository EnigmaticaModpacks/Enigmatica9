ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/metal_press/';

    const recipes = [];

    const rod_materials = ['enderium', 'signalum', 'lumium'];

    rod_materials.forEach((material) => {
        recipes.push({
            output: `2x emendatusenigmatica:${material}_rod`,
            mold: 'immersiveengineering:mold_rod',
            input: `#forge:plates/${material}`,
            energy: 2400,
            id: `${id_prefix}${material}_rod`
        });
    });

    const plate_materials = ['netherite', 'enderium', 'signalum', 'lumium'];

    plate_materials.forEach((material) => {
        recipes.push({
            output: `emendatusenigmatica:${material}_plate`,
            mold: 'immersiveengineering:mold_plate',
            input: `#forge:ingots/${material}`,
            energy: 2400,
            id: `${id_prefix}${material}_plate`
        });
    });

    const gear_materials = ['netherite', 'enderium', 'signalum', 'lumium'];

    gear_materials.forEach((material) => {
        recipes.push({
            output: `emendatusenigmatica:${material}_gear`,
            mold: 'immersiveengineering:mold_gear',
            input: `#forge:ingots/${material}`,
            count: 4,
            energy: 2400,
            id: `${id_prefix}${material}_gear`
        });
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
