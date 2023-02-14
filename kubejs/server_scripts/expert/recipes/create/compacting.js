ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:expert/create/compacting/';
    const recipes = [
        {
            ingredients: [
                { item: 'minecraft:dandelion' },
                { item: 'minecraft:dandelion' },
                { item: 'minecraft:dandelion' },
                { item: 'minecraft:dandelion' }
            ],
            results: [{ fluid: 'industrialforegoing:latex', amount: 200 }],
            id: `${id_prefix}latex_from_dandelion`
        },
        {
            ingredients: [
                { item: 'minecraft:vine' },
                { item: 'minecraft:vine' },
                { item: 'minecraft:vine' },
                { item: 'minecraft:vine' }
            ],
            results: [{ fluid: 'industrialforegoing:latex', amount: 200 }],
            id: `${id_prefix}latex_from_vine`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:compacting';
        event.custom(recipe).id(recipe.id);
    });
});
