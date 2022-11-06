ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }
        { id: /immersiveengineering:blastfurnace\/fuel_charcoal/ },
        { id: 'naturesaura:tree_ritual/ore_spawn_powder' },
        { output: 'twilightforest:ironwood_ingot' },
        { id: 'mekanism:processing/netherite/dust_to_ancient_debris' },
        { id: /mekanism:processing\/.*\/ore\/.*from_raw/ },
        { id: /mekanism:processing\/.*\/.*_ore/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
