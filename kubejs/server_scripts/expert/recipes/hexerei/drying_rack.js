ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/hexerei/drying_rack/';

    const recipes = [
        {
            output: Item.of('hexerei:moon_dust_brush', { Damage: 0, Unbreakable: 1 }),
            inputs: ['hexerei:wet_moon_dust_brush'],
            dryingTimeInTicks: 2400,
            id: 'hexerei:moon_brush_from_drying_rack'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:drying_rack';
        recipe.ingredients = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.output = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
