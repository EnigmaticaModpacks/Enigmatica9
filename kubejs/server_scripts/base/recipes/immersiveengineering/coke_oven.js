ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/coke_oven/';

    const recipes = [
        {
            input: '#forge:gems/coal',
            output: AlmostUnified.getPreferredItemForTag('forge:gems/coal_coke'),
            creosote: 500,
            time: 1800,
            id: `immersiveengineering:cokeoven/coke`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:coke_oven';
        recipe.input = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
