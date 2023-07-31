ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/twilightforest/shaped/';

    const recipes = [
        {
            output: '8x twilightforest:fiery_blood',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'hexerei:blood_bottle',
                B: '#forge:essences/fire'
            },
            id: `${id_prefix}fiery_blood`
        },
        {
            output: 'twilightforest:moon_dial',
            pattern: [' A ', 'BCB', 'ADA'],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:nuggets/gold',
                C: '#forge:nuggets/silver',
                D: '#forge:dusts/redstone'
            },
            id: `${id_prefix}moon_dial`
        },
        {
            output: '8x twilightforest:red_thread',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:string',
                B: 'twilightforest:torchberries'
            },
            id: `${id_prefix}red_thread`
        },
        {
            output: 'twilightforest:moonworm_queen',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:dusts/moon_dust',
                B: '#forge:essences/anima',
                C: '#forge:essences/manipulation',
                D: 'twilightforest:torchberries'
            },
            id: `${id_prefix}moonworm_queen`
        },
        {
            output: 'twilightforest:transformation_powder',
            pattern: ['AAA', 'ABA', 'ACA'],
            key: {
                A: '#forge:dusts/moon_dust',
                B: '#forge:essences/manipulation',
                C: 'thermal:satchel'
            },
            id: `${id_prefix}transformation_powder`
        },
        {
            output: Item.of('twilightforest:steeleaf_axe')
                .enchant('minecraft:efficiency', 2)
                .enchant('apotheosis:chainsaw', 1),
            pattern: ['AA', 'AB', ' B'],
            key: {
                A: '#forge:ingots/steeleaf',
                B: '#forge:rods/wooden'
            },
            id: `twilightforest:equipment/steeleaf_axe`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
