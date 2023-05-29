ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/hexerei/drying_rack/';

    const recipes = [
        {
            output: 'hexerei:broom_brush',
            inputs: ['hexerei:wet_broom_brush'],
            dryingTimeInTicks: 1000,
            id: 'hexerei:broom_brush_from_drying_rack'
        },
        {
            output: 'hexerei:herb_enhanced_broom_brush',
            inputs: ['hexerei:wet_herb_enhanced_broom_brush'],
            dryingTimeInTicks: 2400,
            id: 'hexerei:herb_enhanced_broom_brush_from_drying_rack'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:drying_rack';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
