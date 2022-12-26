ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/arc_furnace/';

    // Note: Arc Furnace recipe handler is damaged by the time of writing this script (26.12.2022) -> Do not use secondaries field!
    // Note 2: For "Ease of use", use an object {item: "id:here", count: 2} for input and additives, those will be used with Ingredient.of() later on! Tag can also be used in place of "id:here"
    const recipes = [
        {
            input: { item: '#forge:ingots/lead', count: 3 },
            additives: [
                { item: '#forge:ender_pearls', count: 2 },
                { item: '#forge:dusts/diamond', count: 1 }
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/enderium'), 2),
            // secondaries: [],
            // slag: Item.of(AlmostUnified.getPreferredItemForTag('forge:slag')).toJson(),
            energy: 51200,
            time: 120,
            id: `${id_prefix}enderium_ingot`
        },
        {
            input: { item: '#forge:ingots/tin', count: 3 },
            additives: [
                { item: '#forge:dusts/glowstone', count: 2 },
                { item: '#forge:ingots/silver', count: 1 }
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/lumium'), 4),
            energy: 51200,
            time: 120,
            id: `${id_prefix}lumium_ingot`
        },
        {
            input: { item: '#forge:dusts/redstone', count: 4 },
            additives: [
                { item: '#forge:ingots/copper', count: 3 },
                { item: '#forge:ingots/silver', count: 1 }
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/signalum'), 4),
            energy: 51200,
            time: 120,
            id: `${id_prefix}signalum_ingot`
        },
        {
            input: { item: '#forge:stones/andesite', count: 1 },
            additives: [
                { item: '#forge:nuggets/zinc', count: 1 }
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/andesite'), 1),
            energy: 25600,
            time: 60,
            id: `${id_prefix}andesite_alloy_from_zinc`
        },
        {
            input: { item: '#forge:stones/andesite', count: 1 },
            additives: [
                { item: '#forge:nuggets/iron', count: 1 }
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/andesite'), 1),
            energy: 25600,
            time: 60,
            id: `${id_prefix}andesite_alloy_from_iron`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:arc_furnace';
        recipe.input = { base_ingredient: Ingredient.of(recipe.input.item).toJson(), count: recipe.input.count }
        recipe.additives = recipe.additives.map((additive) => ({ base_ingredient: Ingredient.of(additive.item).toJson(), count: additive.count }))
        recipe.results = [{ base_ingredient: { item: recipe.output.getId() }, count: recipe.output.getCount() }]
        event.custom(recipe).id(recipe.id);
    });
});
