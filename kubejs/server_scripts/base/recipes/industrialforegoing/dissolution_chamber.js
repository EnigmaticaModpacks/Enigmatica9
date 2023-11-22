ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/industrialforegoing/dissolution_chamber/';
    const recipes = [
        {
            output: 'minecraft:experience_bottle',
            inputFluid: '{Amount:250,FluidName:"sophisticatedcore:xp_still"}',
            processingTime: 5,
            id: `${id_prefix}experience_bottle_from_xp_still`
        },
        {
            output: 'minecraft:experience_bottle',
            inputFluid: '{Amount:250,FluidName:"pneumaticcraft:memory_essence"}',
            processingTime: 5,
            id: `${id_prefix}experience_bottle_from_memory_essence`
        },
        {
            output: 'minecraft:experience_bottle',
            inputFluid: '{Amount:250,FluidName:"cofh_core:experience"}',
            processingTime: 5,
            id: `${id_prefix}experience_bottle_from_experience`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        if (recipe.inputs) {
            recipe.input = recipe.inputs.map((input) =>
                input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
            );
        } else {
            recipe.input = [];
        }

        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
