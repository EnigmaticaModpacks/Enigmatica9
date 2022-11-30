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
        { id: /mekanism:compat\/byg\/combining\/.*_ore_/ },
        { id: /mekanism:bin\/.*/ },
        { id: /mekanism:processing\/.*\/to.*_ore/ },
        { id: /mekanism:processing\/.*\/ore\/.*from_raw/ },
        { id: /mekanism:processing\/.*\/crystal\/from_slurry/ },
        { id: /mekanism:processing\/.*\/slurry\/clean/ },
        { id: /mekanism:processing\/.*\/slurry\/dirty/ },
        { id: 'mekanism:processing/netherite/dust_to_ancient_debris' },
        { id: 'quark:tweaks/smelting/bone_meal_utility' },
        { type: 'immersiveengineering:sawmill' },
        { type: 'create:cutting' },
        { type: 'immersiveengineering:cloche' },
        { type: 'immersiveengineering:generated_list' },
        { type: 'immersiveengineering:alloy' },
        { mod: 'gateways' },
        // Emendatus Enigmatica Related stuff
        { id: /immersiveengineering:crafting\/raw_hammercrushing_/}, // Dusts.js related
        { id: /immersiveengineering:crafting\/hammercrushing_/},
        { id: /industrialforegoing:.*_gear/ }, // Gears
        { id: /immersiveengineering:crafting\/plate_.*_hammering/ }, // plates.js related
        { id: /immersiveengineering:crafting\/stick_/ } // rods.js related
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
