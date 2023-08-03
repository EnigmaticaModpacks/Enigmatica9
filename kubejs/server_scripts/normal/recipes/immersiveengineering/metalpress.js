ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/immersiveengineering/metal_press/';

    const recipes = [];

    Object.keys(gem_properties).forEach((gem) => {
        if (gem_properties[gem].gear) {
            recipes.push({
                output: `emendatusenigmatica:${gem}_gear`,
                mold: 'immersiveengineering:mold_gear',
                input: `#forge:gems/${gem}`,
                count: 4,
                energy: 2400,
                id: `${id_prefix}${gem}_gear`
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
