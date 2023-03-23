ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/modularrouters/shaped/';
    const recipes = [
        {
            output: 'modularrouters:player_module',
            pattern: ['ABC'],
            key: {
                A: 'modularrouters:puller_module_2',
                B: 'occultism:stable_wormhole',
                C: 'modularrouters:sender_module_2'
            },
            id: 'modularrouters:player_module'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
