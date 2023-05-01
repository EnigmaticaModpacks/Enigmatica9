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
        },
        {
            output: 'kubejs:therium_dust',
            input: '#forge:gems/therium',
            crushing_time: 20,
            ignore_occultism_multiplier: true,
            id: `${id_prefix}therium_dust_from_therium`
        },
        {
            output: 'kubejs:subzero_dust',
            input: '#forge:gems/subzero',
            crushing_time: 20,
            ignore_occultism_multiplier: true,
            id: `${id_prefix}subzero_dust_from_subzero`
        },
        {
            output: 'minecraft:netherite_scrap',
            input: '#forge:ores/netherite',
            crushing_time: 90,
            ignore_occultism_multiplier: false,
            id: `${id_prefix}netherite_crushing`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';

        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
