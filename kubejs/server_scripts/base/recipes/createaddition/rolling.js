ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/rolling/';
    const recipes = [
        {
            input: { tag: 'forge:plates/copper' },
            result: { item: 'immersiveengineering:wire_copper', count: 2 },
            id: `${id_prefix}copper_wire`
        },
        {
            input: { item: 'industrialforegoing:plastic' },
            result: { item: 'createaddition:straw' },
            id: `${id_prefix}straw_from_plastic_1`
        },
        {
            input: { item: 'pneumaticcraft:plastic' },
            result: { item: 'createaddition:straw' },
            id: `${id_prefix}straw_from_plastic_2`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:rolling';
        event.custom(recipe).id(recipe.id);
    });
});
