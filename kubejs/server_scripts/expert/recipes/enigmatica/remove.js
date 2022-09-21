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
        { id: /immersiveengineering:blastfurnace\/fuel_charcoal/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
