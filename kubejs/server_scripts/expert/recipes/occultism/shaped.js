ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/occultism/shaped/';

    const recipes = [
        {
            output: 'occultism:sacrificial_bowl',
            pattern: ['A A', 'AAA'],
            key: {
                A: 'pneumaticcraft:compressed_stone'
            },
            id: `occultism:crafting/sacrificial_bowl`
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
