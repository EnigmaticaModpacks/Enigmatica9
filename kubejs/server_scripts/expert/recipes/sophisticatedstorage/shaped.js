ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/sophisticatedstorage/shaped/';

    const recipes = [
        {
            output: '5x sophisticatedstorage:upgrade_base',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: '#forge:treated_woood_slab',
                B: '#forge:nuggets/bronze'
            },
            id: 'sophisticatedstorage:upgrade_base'
        },
        {
            output: 'sophisticatedstorage:controller',
            pattern: ['ABA', 'DCD', 'AEA'],
            key: {
                A: '#forge:plates/tin',
                B: 'pneumaticcraft:logistics_core',
                C: 'create:andesite_casing',
                D: 'sophisticatedstorage:upgrade_base',
                E: 'ars_nouveau:ritual_warping'
            },
            id: 'sophisticatedstorage:controller'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
