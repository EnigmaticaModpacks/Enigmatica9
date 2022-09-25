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
        { id: 'naturesaura:tree_ritual/ore_spawn_powder' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
