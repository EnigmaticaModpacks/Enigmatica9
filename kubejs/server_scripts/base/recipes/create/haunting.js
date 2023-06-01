ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/haunting/';
    const recipes = [
        {
            ingredients: ['supplementaries:sconce'],
            results: ['supplementaries:sconce_soul'],
            id: `supplementaries:integration/sconce_haunting`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:haunting';
        recipe.ingredients = recipe.ingredients.map((ingredient) => Ingredient.of(ingredient).toJson());
        recipe.results = recipe.results.map((item) => Item.of(item).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
