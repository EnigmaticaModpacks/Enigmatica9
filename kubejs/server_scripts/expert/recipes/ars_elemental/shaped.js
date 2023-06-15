ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_elemental/shaped/';

    const recipes = [
        {
            output: 'ars_elemental:everfull_urn',
            pattern: [' B ', 'BAB', 'CBC'],
            key: {
                A: '#forge:essences/water',
                B: 'minecraft:terracotta',
                C: '#forge:gems/source'
            },
            id: `${id_prefix}everfull_urn`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
