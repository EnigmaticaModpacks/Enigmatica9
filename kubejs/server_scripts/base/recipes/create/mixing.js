ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/mixing/';
    const recipes = [
        {
            inputs: [Ingredient.of('#forge:glass'), Ingredient.of('#forge:glass'), Ingredient.of('#forge:dusts/iron')],
            outputs: [Item.of('immersiveengineering:insulating_glass', 2)],
            heatRequirement: 'heated',
            id: `${id_prefix}insulating_glass`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:ingots/nickel')],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/constantan'), 2)],
            heatRequirement: 'heated',
            id: `${id_prefix}constantan_ingot`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:ingots/silver')],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/electrum'), 2)],
            heatRequirement: 'heated',
            id: `${id_prefix}electrum_ingot`
        },
        {
            inputs: [
                Ingredient.of('#forge:ingots/copper'),
                Ingredient.of('#forge:ingots/copper'),
                Ingredient.of('#forge:ingots/copper'),
                Ingredient.of('#forge:ingots/tin')
            ],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/bronze'), 4)],
            heatRequirement: 'heated',
            id: `${id_prefix}bronze_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';

        // ingredients:  [{ item: 'minecraft:oak_log' }],
        recipe.ingredients = recipe.inputs.map((input) => input.toJson());

        // results: [{ count: 6, item: 'minecraft:oak_planks' }]
        recipe.results = recipe.outputs.map((output) => output.toJson());

        event.custom(recipe).id(recipe.id);
    });
});
