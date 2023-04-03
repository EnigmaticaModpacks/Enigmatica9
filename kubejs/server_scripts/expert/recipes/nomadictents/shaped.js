ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/nomadictents/shaped/';

    const recipes = [
        {
            output: 'nomadictents:tent_canvas',
            pattern: ['AAA', 'AAA'],
            key: {
                A: '#forge:fabric_hemp'
            },
            id: 'nomadictents:tent_canvas'
        },
        {
            output: 'nomadictents:mallet',
            pattern: [' AB', ' CA', 'B  '],
            key: {
                A: '#forge:ingots/lead',
                B: '#forge:rods/wooden',
                C: 'nomadictents:tent_canvas'
            },
            id: 'nomadictents:mallet'
        },
        {
            output: 'nomadictents:golden_crossbeams',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/wooden',
                B: '#forge:ingots/bronze',
                C: '#forge:storage_blocks/bronze'
            },
            id: 'nomadictents:golden_crossbeams'
        },
        {
            output: 'nomadictents:obsidian_crossbeams',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/treated_wood',
                B: '#forge:ingots/ironwood',
                C: '#forge:storage_blocks/ironwood'
            },
            id: 'nomadictents:obsidian_crossbeams'
        },
        {
            output: 'nomadictents:diamond_crossbeams',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/aluminum',
                B: '#forge:ingots/steeleaf',
                C: '#forge:storage_blocks/steeleaf'
            },
            id: 'nomadictents:diamond_crossbeams'
        },
        {
            output: 'nomadictents:indlu_section',
            pattern: ['ABA', 'ABA'],
            key: {
                A: 'farmersdelight:straw_bale',
                B: '#forge:rods/wooden'
            },
            id: 'nomadictents:indlu_section'
        },
        {
            output: 'nomadictents:stone_tent_shovel',
            pattern: [' AB', ' CA', 'D  '],
            key: {
                A: 'nomadictents:tent_canvas',
                B: 'naturesaura:infused_stone',
                C: '#forge:rods/wooden',
                D: '#forge:gems/emerald'
            },
            id: 'nomadictents:stone_tent_shovel'
        },
        {
            output: 'nomadictents:iron_tent_shovel',
            pattern: [' AB', ' CA', 'D  '],
            key: {
                A: 'nomadictents:tent_canvas',
                B: '#forge:ingots/tin',
                C: '#forge:rods/wooden',
                D: '#forge:gems/emerald'
            },
            id: 'nomadictents:iron_tent_shovel'
        },
        {
            output: 'nomadictents:golden_tent_shovel',
            pattern: [' AB', ' CA', 'D  '],
            key: {
                A: 'nomadictents:tent_canvas',
                B: '#forge:ingots/bronze',
                C: '#forge:rods/wooden',
                D: '#forge:gems/emerald'
            },
            id: 'nomadictents:golden_tent_shovel'
        },
        {
            output: 'nomadictents:obsidian_tent_shovel',
            pattern: [' AB', ' CA', 'D  '],
            key: {
                A: 'nomadictents:tent_canvas',
                B: '#forge:ingots/ironwood',
                C: '#forge:rods/treated_wood',
                D: '#forge:essences/earth'
            },
            id: 'nomadictents:obsidian_tent_shovel'
        },
        {
            output: 'nomadictents:diamond_tent_shovel',
            pattern: [' AB', ' CA', 'D  '],
            key: {
                A: 'nomadictents:tent_canvas',
                B: '#forge:ingots/steeleaf',
                C: '#forge:rods/aluminum',
                D: '#forge:essences/earth'
            },
            id: 'nomadictents:diamond_tent_shovel'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
