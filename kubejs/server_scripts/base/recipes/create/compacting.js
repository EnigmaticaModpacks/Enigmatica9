ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/compacting/';
    const recipes = [
        {
            ingredients: [{ tag: 'forge:fuels/bio' }],
            results: [
                { fluid: 'minecraft:water', amount: 50 },
                { item: 'createaddition:biomass_pellet', count: 1 }
            ],
            id: `createaddition:compacting/biomass_pellet`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:compacting';
        event.custom(recipe).id(recipe.id);
    });
});
