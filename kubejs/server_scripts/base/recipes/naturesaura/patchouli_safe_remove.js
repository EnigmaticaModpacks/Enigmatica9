ServerEvents.recipes((event) => {
    const patchouli_safe_removals = {
        shaped: [],
        altar: [],
        tree_ritual: [],
        offering: [],
        animal_spawner: []
    };

    colors.forEach((color) => {
        if (color != 'white') {
            patchouli_safe_removals.animal_spawner.push({
                id: `naturesaura:animal_spawner/sheep_${color}`,
                output: 'minecraft:sheep'
            });
        }
    });

    patchouli_safe_removals.shaped.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });

    patchouli_safe_removals.altar.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:altar',
                input: { item: 'kubejs:altered_recipe_indicator' },
                output: Item.of(recipe.output).toJson(),
                aura_type: 'naturesaura:overworld',
                aura: 1,
                time: 1
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.tree_ritual.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:tree_ritual',
                ingredients: [{ item: 'kubejs:altered_recipe_indicator' }],
                sapling: { item: 'minecraft:oak_sapling' },
                output: Item.of(recipe.output).toJson(),
                time: 1
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.offering.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:offering',
                input: { item: 'kubejs:altered_recipe_indicator' },
                start_item: { item: 'kubejs:altered_recipe_indicator' },
                output: Item.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.animal_spawner.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:animal_spawner',
                ingredients: [{ item: 'kubejs:altered_recipe_indicator' }],
                entity: recipe.output,
                aura: 1,
                time: 1
            })
            .id(recipe.id);
    });
});
