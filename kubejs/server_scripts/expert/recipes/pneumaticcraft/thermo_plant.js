ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/thermo_plant/';

    // Base Air usage is approximately 350 mL per recipe
    // Base speed is approximately 40 ticks

    const recipes = [
        {
            fluid_output: { amount: 250, fluid: 'immersiveengineering:creosote' },
            item_output: { item: 'minecraft:charcoal' },
            item_input: [{ tag: 'minecraft:logs' }],
            exothermic: false,
            temperature: { max_temp: 1073, min_temp: 673 },
            speed: 0.5,
            id: `${id_prefix}charcoal`
        },
        {
            item_output: { item: 'immersiveengineering:treated_wood_horizontal' },
            item_input: [{ tag: 'minecraft:planks' }],
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 125, tag: 'forge:creosote' },
            exothermic: false,
            speed: 4.0,
            id: `${id_prefix}treated_wood_horizontal`
        },
        {
            item_output: { item: 'kubejs:calcined_kaolin_pearl' },
            item_input: [{ item: 'kubejs:kaolin_clay' }],
            exothermic: false,
            temperature: { max_temp: 1123, min_temp: 923 },
            speed: 2.0,
            id: `${id_prefix}calcined_kaolin_pearl`
        },
        {
            item_output: { item: 'emendatusenigmatica:aluminum_dirty_dust' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 10, tag: 'forge:redstone_acid' },
            item_input: [{ item: 'kubejs:kaolin_powder' }],
            exothermic: false,
            temperature: { min_temp: 373 },
            pressure: 4.0,
            air_use_multiplier: 5.0,
            speed: 2.0,
            id: `${id_prefix}aluminum_dirty_dust`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 250, fluid: 'minecraft:water' },
            fluid_output: { amount: 250, fluid: 'immersiveengineering:redstone_acid' },
            item_input: [{ tag: 'forge:dusts/redstone' }],
            exothermic: false,
            temperature: { min_temp: 1273 },
            pressure: 4.0,
            air_use_multiplier: 5.0,
            speed: 1.0,
            id: `${id_prefix}redstone_acid`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 8000, tag: 'forge:abyssal_seawater' },
            fluid_output: { amount: 1000, fluid: 'mekanism:brine' },
            item_input: [{ item: 'kubejs:magebloom_filter' }],
            item_output: { item: 'kubejs:saturated_magebloom_filter' },
            exothermic: true,
            temperature: { max_temp: 273 },
            pressure: 9.5,
            air_use_multiplier: 20.0,
            speed: 0.75,
            id: `${id_prefix}saturated_magebloom_filter`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 4000, tag: 'forge:source' },
            fluid_output: { amount: 4000, fluid: 'industrialforegoing:biofuel' },
            item_input: [{ item: 'kubejs:saturated_magebloom_filter' }],
            item_output: { item: 'immersiveengineering:stick_treated', count: 3 },
            exothermic: false,
            temperature: { min_temp: 1273 },
            pressure: 7.0,
            air_use_multiplier: 1.0,
            speed: 2.0,
            id: `${id_prefix}biofuel`
        },
        {
            item_output: { item: 'pneumaticcraft:upgrade_matrix', count: 4 },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 1000, tag: 'forge:latex' },
            item_input: [{ item: 'quark:blue_rune' }],
            pressure: 2.0,
            air_use_multiplier: 1.0,
            temperature: { min_temp: 813 },
            speed: 2.0,
            id: `pneumaticcraft:thermo_plant/upgrade_matrix`
        },
        {
            item_output: { item: 'kubejs:sylvanite', count: 1 },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'forge:magicite' },
            item_input: [{ tag: 'forge:dusts/lithium' }],
            exothermic: true,
            temperature: { max_temp: 173 },
            pressure: 9.0,
            air_use_multiplier: 20.0,
            speed: 0.5,
            id: `${id_prefix}sylvanite`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 1000, tag: 'forge:ambrosia' },
            fluid_output: { amount: 200, fluid: 'industrialforegoing:ether_gas' },
            exothermic: false,
            temperature: { min_temp: 1273 },
            pressure: 9.0,
            speed: 2.0,
            id: `${id_prefix}ether_gas`
        },
        {
            item_input: { tag: 'forge:essences/manipulation' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'forge:biodiesel' },
            fluid_output: { amount: 1000, fluid: 'pneumaticcraft:plastic' },
            exothermic: false,
            temperature: { min_temp: 373 },
            id: `pneumaticcraft:thermo_plant/plastic_from_biodiesel`
        },
        {
            item_input: { tag: 'forge:essences/manipulation' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'forge:lpg' },
            fluid_output: { amount: 1000, fluid: 'pneumaticcraft:plastic' },
            exothermic: false,
            temperature: { min_temp: 373 },
            id: `pneumaticcraft:thermo_plant/plastic_from_lpg`
        },
        {
            item_output: { item: 'powah:dielectric_paste', count: 8 },
            item_input: { item: 'occultism:burnt_otherstone' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 250, tag: 'forge:latex' },
            exothermic: false,
            pressure: 2.0,
            speed: 4.0,
            temperature: { min_temp: 813 },
            id: `${id_prefix}dielectric_paste`
        },
        {
            fluid_output: { amount: 50, fluid: 'industrialforegoing:latex' },
            item_input: [{ item: 'minecraft:dandelion' }, { item: 'minecraft:vine' }],
            exothermic: false,
            pressure: 2.0,
            speed: 2.0,
            id: `${id_prefix}latex`
        },
        {
            fluid_output: { amount: 50, fluid: 'minecraft:water' },
            item_output: { item: 'thermal:rubber' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 500, tag: 'forge:latex' },
            exothermic: false,
            temperature: { max_temp: 423, min_temp: 373 },
            speed: 2.0,
            id: `${id_prefix}rubber`
        },
        {
            fluid_output: { amount: 1000, fluid: 'mekanism:sulfur_dioxide' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 1000, fluid: 'minecraft:water' },
            item_input: [{ tag: 'forge:essences/fire' }],
            exothermic: false,
            temperature: { max_temp: 423, min_temp: 373 },
            pressure: 2.0,
            speed: 2.0,
            id: `${id_prefix}sulfur_dioxide`
        },
        {
            item_output: { item: 'thermal:cured_rubber' },
            item_input: [{ item: 'thermal:rubber' }],
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 5, fluid: 'mekanism:sulfur_dioxide' },
            exothermic: false,
            temperature: { max_temp: 423, min_temp: 373 },
            speed: 2.0,
            id: `${id_prefix}cured_rubber`
        },
        {
            fluid_output: { amount: 120, fluid: 'pneumaticcraft:ethanol' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 10, tag: 'pneumaticcraft:yeast_culture' },
            item_input: [{ item: 'minecraft:nether_wart' }],
            exothermic: true,
            speed: 0.25,
            temperature: { max_temp: 333, min_temp: 303 },
            id: `${id_prefix}ethanol_from_nether_wart`
        },
        {
            fluid_output: { amount: 300, fluid: 'kubejs:lacunar_acid' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'forge:quicksilver' },
            item_input: [{ tag: 'forge:dusts/dimensional' }],
            exothermic: true,
            temperature: { max_temp: 73 },
            pressure: 9.0,
            speed: 4.0,
            id: `${id_prefix}lacunar_acid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
