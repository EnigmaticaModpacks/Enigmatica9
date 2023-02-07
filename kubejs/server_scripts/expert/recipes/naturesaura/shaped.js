ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/naturesaura/shaped/';

    const recipes = [
        {
            output: Item.of('naturesaura:rf_converter'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gems/carminite',
                B: 'naturesaura:infused_iron',
                C: 'twilightforest:carminite_reactor'
            },
            id: `naturesaura:rf_converter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
