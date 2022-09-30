ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }
        { id: /ars_nouveau:.*_dye_/ },
        { id: /mekanism:enriching\/dye/ },
        { id: /mekanism:compat\/byg\/dye/ },
        { id: /mekanism:compat\/byg\/sawing\/log/ },
        { id: /mekanism:sawing\/log/ },
        { type: 'immersiveengineering:sawmill' },
        { type: 'create:cutting' },
        { type: 'immersiveengineering:cloche' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
