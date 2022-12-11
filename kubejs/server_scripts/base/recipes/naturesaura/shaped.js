ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/naturesaura/shaped/';

    const recipes = [
        {
            output: '6x naturesaura:ancient_slab',
            pattern: ['AAA'],
            key: { A: 'naturesaura:ancient_planks' },
            id: `${id_prefix}ancient_slab`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
