ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_nouveau/shapeless/';

    const recipes = [
        {
            output: 'ars_nouveau:ritual_brazier',
            inputs: [
                'ars_nouveau:arcane_pedestal',
                '#forge:storage_blocks/source',
                '#forge:ingots/energized_steel',
                '#forge:ingots/energized_steel',
                '#forge:ingots/energized_steel'
            ],
            id: 'ars_nouveau:ritual_brazier'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
