ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/occultism/crushing/';
    const recipes = [
        {
            output: 'kubejs:amethyst_dust',
            input: '#forge:gems/amethyst',
            crushing_time: 20,
            ignore_occultism_multiplier: true,
            id: `${id_prefix}amethyst_dust_from_amethyst`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';

        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
