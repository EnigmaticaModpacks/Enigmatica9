ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/explorerscompass/shaped/';

    const recipes = [
        {
            output: 'explorerscompass:explorerscompass',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#blue_skies:vines',
                B: '#blue_skies:gems/moonstone',
                C: '#forge:compasses'
            },
            id: `explorerscompass:explorers_compass`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
