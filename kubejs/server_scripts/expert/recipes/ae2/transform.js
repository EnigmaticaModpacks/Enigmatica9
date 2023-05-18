ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ae2/transform/';
    const recipes = [
        {
            type: 'ae2:transform',
            circumstance: { type: 'explosion' },
            inputs: ['ae2:singularity', '#forge:gems/spirit_attuned'],
            output: '2x ae2:quantum_entangled_singularity',
            id: `${id_prefix}quantum_entangled_singularity`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ae2:transform';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
