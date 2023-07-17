ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/mekanism/crushing/';

    const recipes = [
        {
            input: '#minecraft:leaves',
            output: { count: 2, item: 'mekanism:bio_fuel' },
            energyRequired: 4000,
            id: `${id_prefix}leaves`
        },
        {
            input: '#forge:seeds',
            output: { count: 1, item: 'mekanism:bio_fuel' },
            energyRequired: 2000,
            id: `${id_prefix}seeds`
        },
        {
            input: '#minecraft:small_flowers',
            output: { count: 1, item: 'mekanism:bio_fuel' },
            energyRequired: 2000,
            id: `${id_prefix}small_flowers`
        },
        {
            input: '#minecraft:tall_flowers',
            output: { count: 2, item: 'mekanism:bio_fuel' },
            energyRequired: 4000,
            id: `${id_prefix}tall_flowers`
        },
        {
            input: '#forge:mushrooms',
            output: { count: 3, item: 'mekanism:bio_fuel' },
            energyRequired: 6000,
            id: `${id_prefix}mushrooms`
        },
        {
            input: '#minecraft:saplings',
            output: { count: 2, item: 'mekanism:bio_fuel' },
            energyRequired: 4000,
            id: `${id_prefix}saplings`
        },
        {
            input: '#forge:crops',
            output: { count: 2, item: 'mekanism:bio_fuel' },
            energyRequired: 4000,
            id: `${id_prefix}crops`
        },
        {
            input: '#forge:slag',
            output: { count: 1, item: 'immersiveengineering:slag_gravel' },
            energyRequired: 4000,
            id: `${id_prefix}slag_gravel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:crushing';
        recipe.input = {
            ingredient: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }
        };

        // Energy in FE above, convert to Joules for Mek
        recipe.energyRequired = recipe.energyRequired * 2.5;
        event.custom(recipe).id(recipe.id);
    });
});
