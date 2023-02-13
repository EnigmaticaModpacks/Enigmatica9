ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/shaped/';

    const recipes = [
        {
            output: 'create:wand_of_symmetry',
            pattern: [' BA', ' CD', 'C  '],
            key: {
                A: 'ars_nouveau:spell_prism',
                B: '#forge:plates/bronze',
                C: 'naturesaura:ancient_stick',
                D: '#forge:wires/electrum'
            },
            id: `${id_prefix}wand_of_symmetry`
        },
        {
            output: 'create:water_wheel',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'immersiveengineering:waterwheel_segment',
                B: 'create:large_cogwheel'
            },
            id: `create:crafting/kinetics/water_wheel`
        },
        {
            output: 'create:windmill_bearing',
            pattern: ['A', 'B'],
            key: {
                A: 'create:turntable',
                B: 'create:andesite_casing'
            },
            id: `create:crafting/kinetics/windmill_bearing`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
