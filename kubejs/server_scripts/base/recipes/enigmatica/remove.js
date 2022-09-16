ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }
        { id: /mekanism:enriching\/dye/ },
        { id: /mekanism:compat\/byg\/dye/ },
        { id: /ars_nouveau:.*_dye_/ },
        { id: /mekanism:compat\/byg\/sawing\/log/ },
        { id: /mekanism:sawing\/log/ },
        { id: /almostunified:u\/immersiveengineering\/sawmill\/.*_log/ },
        { id: /immersiveengineering:cloche/ },
        { id: /farmersdelight:integration\/immersiveengineering\/cloche/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
