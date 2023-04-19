ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/occultism/shaped/';

    const recipes = [
        {
            output: '4x occultism:sacrificial_bowl',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:storage_blocks/source'
            },
            id: `occultism:crafting/sacrificial_bowl`
        },
        {
            output: 'occultism:golden_sacrificial_bowl',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:nuggets/gold',
                B: 'occultism:sacrificial_bowl'
            },
            id: `occultism:crafting/golden_sacrificial_bowl`
        },
        {
            output: '5x occultism:wormhole_frame',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: 'occultism:otherstone_frame',
                B: '#forge:ingots/energized_steel'
            },
            id: `occultism:crafting/wormhole_frame`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
