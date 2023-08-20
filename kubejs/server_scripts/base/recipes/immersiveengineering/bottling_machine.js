ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/bottling_machine/';
    const recipes = [
        {
            results: [{ item: 'minecraft:honey_bottle', count: 1 }],
            inputs: [{ base_ingredient: { item: 'minecraft:glass_bottle' }, count: 1 }],
            fluid: { amount: 250, tag: 'forge:honey' },
            id: `${id_prefix}honey_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:bottling_machine';
        event.custom(recipe).id(recipe.id);
    });
});
