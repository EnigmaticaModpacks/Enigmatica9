ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/press/';

    const recipes = [
        {
            outputs: [{ fluid: 'industrialforegoing:latex', amount: 50 }],
            inputs: ['minecraft:dandelion'],
            energy: 400,
            id: 'thermal:machines/press/press_dandelion_to_latex'
        },
        {
            outputs: [{ fluid: 'industrialforegoing:latex', amount: 50 }],
            inputs: ['minecraft:vine'],
            energy: 400,
            id: 'thermal:machines/press/press_vine_to_latex'
        },
        {
            outputs: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 180 }],
            inputs: [Ingredient.of(['thermal:peanut', 'blue_skies:solnut'])],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_high_yield`
        },
        {
            outputs: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 120 }],
            inputs: [Ingredient.of(['thermal:corn', 'blue_skies:fiery_beans'])],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_medium_yield`
        },
        {
            outputs: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 60 }],
            inputs: [Ingredient.of(['thermal:sadiroot', 'supplementaries:flax_seeds', 'immersiveengineering:seed'])],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_low_yield`
        },
        {
            outputs: [{ item: 'sushigocrafting:nori_sheets', count: 6 }],
            inputs: ['sushigocrafting:dried_seaweed_block'],
            energy: 2000,
            id: `${id_prefix}nori_sheets`
        }
    ];

    const rod_materials = [
        'iron',
        'lead',
        'constantan',
        'osmium',
        'electrum',
        'nickel',
        'copper',
        'enderium',
        'signalum',
        'lumium',
        'gold',
        'aluminum',
        'steel',
        'uranium',
        'silver',
        'bronze',
        'brass',
        'rose_gold',
        'zinc',
        'invar',
        'tin'
    ];

    rod_materials.forEach((material) => {
        recipes.push({
            outputs: [{ item: `emendatusenigmatica:${material}_rod`, count: 2 }],
            inputs: ['immersiveengineering:mold_rod', `#forge:plates/${material}`],
            energy: 2400,
            id: `${id_prefix}${material}_rod`
        });
    });

    const plate_materials = ['osmium', 'brass', 'zinc'];

    plate_materials.forEach((material) => {
        recipes.push({
            outputs: [{ item: `emendatusenigmatica:${material}_plate`, count: 1 }],
            inputs: [`#forge:ingots/${material}`],
            energy: 2400,
            id: `${id_prefix}${material}_plate`
        });
    });

    const gear_materials = ['osmium', 'aluminum', 'uranium', 'brass', 'zinc'];

    gear_materials.forEach((material) => {
        recipes.push({
            outputs: [{ item: `emendatusenigmatica:${material}_gear`, count: 1 }],
            inputs: ['thermal:press_gear_die', `#forge:ingots/${material}`],
            energy: 2400,
            id: `${id_prefix}${material}_gear`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
