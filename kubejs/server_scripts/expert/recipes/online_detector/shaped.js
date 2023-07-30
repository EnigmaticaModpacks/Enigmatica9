ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/online_detector/shaped/';

    const recipes = [
        {
            output: 'online_detector:advanced_online_detector',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:rods/lead',
                B: 'quark:ender_watcher',
                C: '#forge:plates/lumium',
                D: 'online_detector:online_detector',
                E: 'immersiveengineering:coil_mv'
            },
            id: 'online_detector:advanced_online_detector'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
