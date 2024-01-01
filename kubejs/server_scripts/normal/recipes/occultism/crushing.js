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
            crushing_time: 200,
            ignore_occultism_multiplier: false,
            id: `${id_prefix}netherite_crushing`
        },
        {
            output: '2x emendatusenigmatica:iron_dust',
            input: '#forge:raw_materials/iron',
            crushing_time: 200,
            ignore_occultism_multiplier: false,
            id: `${id_prefix}iron_dust`
        },
        {
            output: '2x emendatusenigmatica:gold_dust',
            input: '#forge:raw_materials/gold',
            crushing_time: 200,
            ignore_occultism_multiplier: false,
            id: `${id_prefix}gold_dust`
        },
        {
            output: '2x emendatusenigmatica:copper_dust',
            input: '#forge:raw_materials/copper',
            crushing_time: 200,
            ignore_occultism_multiplier: false,
            id: `${id_prefix}copper_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';

        recipe.ingredient = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
