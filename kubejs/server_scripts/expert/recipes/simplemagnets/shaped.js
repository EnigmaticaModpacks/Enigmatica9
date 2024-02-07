ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/simplemagnets/shaped/';
    const recipes = [
        {
            output: 'simplemagnets:basic_demagnetization_coil',
            pattern: [' A ', ' B ', 'ACA'],
            key: {
                A: 'occultism:otherstone',
                B: 'immersiveengineering:coil_lv',
                C: 'minecraft:observer'
            },
            id: 'simplemagnets:basic_demagnetization_coil'
        },
        {
            output: 'simplemagnets:advanced_demagnetization_coil',
            pattern: [' A ', ' B ', 'ACA'],
            key: {
                A: 'occultism:otherstone',
                B: 'immersiveengineering:coil_mv',
                C: 'create:content_observer'
            },
            id: 'simplemagnets:advanced_demagnetization_coil'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
