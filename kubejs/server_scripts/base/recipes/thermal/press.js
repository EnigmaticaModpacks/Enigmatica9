ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/press/';

    const recipes = [
        {
            result: [{ fluid: 'industrialforegoing:latex', amount: 50 }],
            ingredient: [{ item: 'minecraft:dandelion' }],
            energy: 400,
            id: 'thermal:machines/press/press_dandelion_to_latex'
        },
        {
            result: [{ fluid: 'industrialforegoing:latex', amount: 50 }],
            ingredient: [{ item: 'minecraft:vine' }],
            energy: 400,
            id: 'thermal:machines/press/press_vine_to_latex'
        },
        {
            result: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 180 }],
            ingredient: [{ item: 'thermal:peanut' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_from_peanut`
        },
        {
            result: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 120 }],
            ingredient: [{ item: 'thermal:corn' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_from_corn`
        },
        {
            result: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 60 }],
            ingredient: [{ item: 'thermal:sadiroot' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_from_sadiroot`
        },
        {
            result: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 60 }],
            ingredient: [{ item: 'supplementaries:flax_seeds' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_from_flax`
        },
        {
            result: [{ fluid: 'pneumaticcraft:vegetable_oil', amount: 60 }],
            ingredient: [{ item: 'immersiveengineering:seed' }],
            energy: 6400,
            id: `${id_prefix}vegetable_oil_from_hemp`
        },
        {
            result: [{ item: 'sushigocrafting:nori_sheets', count: 6 }],
            ingredient: [{ item: 'sushigocrafting:dried_seaweed_block' }],
            energy: 2000,
            id: `${id_prefix}nori_sheets`
        }
    ];

    Object.keys(metal_properties).forEach((metal) => {
        if (metal_properties[metal].gear) {
            recipes.push({
                result: [{ item: `emendatusenigmatica:${metal}_gear`, count: 1 }],
                ingredient: [{ tag: `forge:ingots/${metal}`, count: 4 }, { item: 'immersiveengineering:mold_gear' }],
                energy: 2400,
                id: `${id_prefix}${metal}_gear`
            });
        }

        if (metal_properties[metal].plate) {
            recipes.push({
                result: [{ item: `emendatusenigmatica:${metal}_plate`, count: 1 }],
                ingredient: [{ tag: `forge:ingots/${metal}` }],
                energy: 2400,
                id: `${id_prefix}${metal}_plate`
            });
        }

        if (metal_properties[metal].rod) {
            recipes.push({
                result: [{ item: `emendatusenigmatica:${metal}_rod`, count: 2 }],
                ingredient: [{ tag: `forge:ingots/${metal}` }, { item: 'immersiveengineering:mold_rod' }],
                energy: 2400,
                id: `${id_prefix}${metal}_rod`
            });
        }

        if (metal_properties[metal].wire) {
            recipes.push({
                result: [{ item: `immersiveengineering:wire_${metal}`, count: 4 }],
                ingredient: [{ tag: `forge:ingots/${metal}` }, { item: 'immersiveengineering:mold_wire' }],
                energy: 2400,
                id: `${id_prefix}wire_${metal}`
            });
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:press';
        event.custom(recipe).id(recipe.id);
    });
});
