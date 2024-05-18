ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/manyideas/shaped/';

    const recipes = [
        {
            output: 'manyideas_core:saw_iron',
            pattern: [' A ', 'AAA', ' A '],
            key: {
                A: '#forge:ingots/knightmetal'
            },
            id: `${id_prefix}saw_iron`
        },
        {
            output: '4x manyideas_core:end_block',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:dusts/obsidian',
                B: '#forge:dusts/end_stone',
                C: 'ae2:fluix_pearl'
            },
            id: `manyideas_core:block/end_block___crafting`
        },
        {
            output: 'manyideas_core:dye_crafting_table',
            pattern: [' A ', 'BBB', 'C C'],
            key: {
                A: 'hexerei:pestle_and_mortar',
                B: '#minecraft:wooden_slabs',
                C: '#forge:rods/wooden'
            },
            id: `manyideas_core:block/dye_crafting_table___crafting`
        },
        {
            output: 'manyideas_doors:big_door_factory',
            pattern: ['AA', 'BB', 'BB'],
            key: {
                A: 'engineersdecor:iron_hatch',
                B: 'manyideas_core:plate_iron'
            },
            id: `manyideas_doors:big_doors/metal/big_door_factory___crafting`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
