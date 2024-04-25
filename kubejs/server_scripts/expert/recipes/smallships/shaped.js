ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/smallships/shaped/';
    const recipes = [
        {
            output: 'smallships:cannon',
            pattern: ['  A', 'BBB', ' CC'],
            key: {
                A: '#forge:string',
                B: 'pneumaticcraft:cannon_barrel',
                C: '#minecraft:logs'
            },
            id: 'smallships:cannon'
        },
        {
            output: '4x smallships:cannon_ball',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:nuggets/lead',
                B: '#forge:essences/fire'
            },
            id: 'smallships:cannon_ball'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
