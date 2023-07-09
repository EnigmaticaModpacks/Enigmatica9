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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
