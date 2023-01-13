ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/rolling/';
    const recipes = [
        {
            input: { tag: 'forge:plates/copper' },
            result: { item: 'immersiveengineering:wire_copper', count: 2 },
            id: `${id_prefix}copper_wire`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:rolling';
        event.custom(recipe).id(recipe.id);
    });
});
