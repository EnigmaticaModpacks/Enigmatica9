ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/sawmill/';

    const recipes = [
        {
            energy: 5000,
            input: ['occultism:dimensional_matrix'],
            output: '21x kubejs:dimensional_storage_crystal',
            secondaries: [{ output: 'ae2:certus_quartz_dust', stripping: false }],
            id: `${id_prefix}oak_planks_from_oak_log`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:sawmill';
        recipe.input = recipe.input.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        recipe.secondaries = recipe.secondaries.map((secondary) => ({
            output: { item: secondary.output },
            stripping: secondary.stripping
        }));

        if (recipe.stripped) {
            recipe.stripped = recipe.stripped.toJson();
        }
        event.custom(recipe).id(recipe.id);
    });
});
