ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/smelter/';

    const recipes = [
        {
            ingredients: [{ tag: 'forge:glass', count: 2 }, { tag: 'forge:dusts/iron' }],
            result: [{ item: 'immersiveengineering:insulating_glass', count: 2 }],
            energy: 3200,
            id: `${id_prefix}insulating_glass`
        },
        {
            ingredients: [
                { tag: 'forge:gems/coal_coke', count: 1 },
                { value: [{ tag: 'forge:ingots/iron' }, { tag: 'forge:dusts/iron' }], count: 1 }
            ],
            result: [{ item: 'emendatusenigmatica:steel_ingot', count: 2 }],
            energy: 3200,
            id: `thermal:machines/smelter/smelter_alloy_steel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        event.custom(recipe).id(recipe.id);
    });
});
