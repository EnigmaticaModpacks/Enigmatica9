ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/crusher/';

    const recipes = [
        {
            input: '#forge:gems/coal_coke',
            output: AlmostUnified.getPreferredItemForTag('forge:dusts/coal_coke'),
            secondaries: [],
            energy: 3000,
            id: `immersiveengineering:crusher/coke`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:crusher';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        recipe.secondaries = recipe.secondaries.map((secondary) => Item.of(secondary).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
