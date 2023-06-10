ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/nomadictents/shaped/';

    const recipes = [
        {
            output: '6x nomadictents:tent_canvas',
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
            output: '4x nomadictents:indlu_section',
            pattern: ['ABA', 'ABA'],
            key: {
                A: 'farmersdelight:straw_bale',
                B: '#forge:rods/wooden'
            },
            id: 'nomadictents:indlu_section'
        },
        {
            output: '4x nomadictents:tepee_section',
            pattern: ['ABA', 'ABA'],
            key: {
                A: '#forge:leather',
                B: '#forge:rods/wooden'
            },
            id: 'nomadictents:tepee_section'
        },
        {
            output: '4x nomadictents:tepee_section',
            pattern: ['ABA', 'ABA', 'ABA'],
            key: {
                A: 'minecraft:rabbit_hide',
                B: '#forge:rods/wooden'
            },
            id: 'nomadictents:tepee_section2'
        },
        {
            output: '4x nomadictents:yurt_section',
            pattern: ['ABA', 'ABA'],
            key: {
                A: 'nomadictents:tent_canvas',
                B: '#forge:rods/wooden'
            },
            id: 'nomadictents:yurt_section'
        },
        {
            output: '4x nomadictents:bedouin_section',
            pattern: ['ABA', 'ABA'],
            key: {
                A: '#minecraft:wool',
                B: '#forge:rods/wooden'
            },
            id: 'nomadictents:bedouin_section'
        },
        {
            output: '4x nomadictents:shamiyana_section',
            pattern: ['CBC', 'ABA'],
            key: {
                A: '#minecraft:wool',
                B: '#forge:rods/wooden',
                C: 'nomadictents:tent_canvas'
            },
            id: 'nomadictents:shamiyana_section'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
