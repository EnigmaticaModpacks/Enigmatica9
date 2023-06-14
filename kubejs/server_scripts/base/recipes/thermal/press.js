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
            inputs: [Ingredient.of(['thermal:peanut'])],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_high_yield`
        },
        {
            outputs: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 120 }],
            inputs: [Ingredient.of(['thermal:corn'])],
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

    Object.keys(metal_properties).forEach((metal) => {
        if (metal_properties[metal].gear) {
            recipes.push({
                outputs: [{ item: `emendatusenigmatica:${metal}_gear`, count: 1 }],
                inputs: [`4x #forge:ingots/${metal}`, 'immersiveengineering:mold_gear'],
                energy: 2400,
                id: `${id_prefix}${metal}_gear`
            });
        }

        if (metal_properties[metal].plate) {
            recipes.push({
                outputs: [{ item: `emendatusenigmatica:${metal}_plate`, count: 1 }],
                inputs: [`#forge:ingots/${metal}`],
                energy: 2400,
                id: `${id_prefix}${metal}_plate`
            });
        }

        if (metal_properties[metal].rod) {
            recipes.push({
                outputs: [{ item: `emendatusenigmatica:${metal}_rod`, count: 2 }],
                inputs: [`#forge:ingots/${metal}`, 'immersiveengineering:mold_rod'],
                energy: 2400,
                id: `${id_prefix}${metal}_rod`
            });
        }

        if (metal_properties[metal].wire) {
            recipes.push({
                outputs: [{ item: `immersiveengineering:wire_${metal}`, count: 2 }],
                inputs: [`#forge:ingots/${metal}`, 'immersiveengineering:mold_wire'],
                energy: 2400,
                id: `${id_prefix}wire_${metal}`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
