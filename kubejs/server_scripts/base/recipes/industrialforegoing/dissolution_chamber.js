ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/industrialforegoing/dissolution_chamber/';
    const recipes = [];

    let xp_fluids = ['cofh_core:experience', 'pneumaticcraft:memory_essence', 'sophisticatedcore:xp_still'];
    xp_fluids.forEach((xp_fluid) => {
        recipes.push({
            output: 'minecraft:experience_bottle',
            inputFluid: `{Amount:250,FluidName:"${xp_fluid}"}`,
            processingTime: 5,
            id: `${id_prefix}experience_bottle_from_${xp_fluid.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = [];
        if (recipe.inputs) {
            recipe.input = recipe.inputs.map((input) =>
                input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
            );
        }

        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
