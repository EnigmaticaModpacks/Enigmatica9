ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/shapeless/';

    const recipes = [
        {
            output: 'thermal:jar',
            inputs: ['supplementaries:jar'],
            id: `${id_prefix}jar`
        },
        {
            output: '8x thermal:aquachow',
            inputs: ['minecraft:honeycomb', 'twilightforest:torchberries', 'twilightforest:torchberries'],
            id: `${id_prefix}aquachow`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
