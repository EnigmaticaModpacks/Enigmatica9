ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }
        { id: /ars_nouveau:.*_dye/ },
        { id: /mekanism:enriching\/dye/ },
        { id: /mekanism:compat\/byg\/dye/ },
        { id: /mekanism:compat\/byg\/sawing\/log/ },
        { id: /mekanism:sawing\/log/ },
        { id: 'mekanism:processing/netherite/dust_to_ancient_debris' },
        { id: /mekanism:processing\/.*\/ore\/.*from_raw/ },
        { id: /mekanism:processing\/.*\/.*_ore/ },
        { id: /mekanism:compat\/byg\/combining\/.*_ore_/ },
        { id: /mekanism:bin\/.*/ },
        { id: 'quark:tweaks/smelting/bone_meal_utility' },
        { type: 'immersiveengineering:sawmill' },
        { type: 'create:cutting' },
        { type: 'immersiveengineering:cloche' }
    ];

    colors.forEach((color) => {
        recipes.push(
            { type: 'create:milling', output: `minecraft:${color}_dye` },
            { type: 'farmersdelight:cutting', output: `minecraft:${color}_dye` },
            { type: 'minecraft:crafting_shapeless', output: `minecraft:${color}_dye` }
        );
    });

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
