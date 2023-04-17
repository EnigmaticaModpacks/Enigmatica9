ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/mixer/';
    const recipes = [
        {
            result: { amount: 2000, fluid: 'starbunclemania:source_fluid' },
            fluid: { amount: 2000, tag: 'minecraft:water' },
            inputs: [{ tag: 'forge:storage_blocks/amethyst' }],
            energy: 2000,
            id: `${id_prefix}source_fluid_from_block`
        },
        {
            result: { amount: 500, fluid: 'starbunclemania:source_fluid' },
            fluid: { amount: 500, tag: 'minecraft:water' },
            inputs: [{ tag: 'forge:gems/amethyst' }],
            energy: 500,
            id: `${id_prefix}source_fluid_from_gem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:mixer';
        event.custom(recipe).id(recipe.id);
    });
});
