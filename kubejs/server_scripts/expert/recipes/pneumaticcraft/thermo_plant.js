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
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 125, fluid: 'immersiveengineering:creosote' },
            exothermic: false,
            speed: 4.0,
            id: `${id_prefix}treated_wood_horizontal`
        },
        {
            item_output: { item: 'kubejs:calcined_kaolin_pearls' },
            item_input: [{ item: 'kubejs:kaolin_clay' }],
            exothermic: false,
            temperature: { max_temp: 1123, min_temp: 923 },
            speed: 2.0,
            id: `${id_prefix}calcined_kaolin_pearls`
        },
        {
            item_output: { item: 'emendatusenigmatica:aluminum_dust' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 10, fluid: 'immersiveengineering:redstone_acid' },
            item_input: [{ item: 'kubejs:kaolin_powder' }],
            exothermic: false,
            temperature: { min_temp: 373 },
            pressure: 4.0,
            air_use_multiplier: 5.0,
            speed: 2.0,
            id: `${id_prefix}aluminum_dust`
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
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 8000, fluid: 'kubejs:abyssal_seawater' },
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
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 4000, fluid: 'starbunclemania:source_fluid' },
            fluid_output: { amount: 4000, fluid: 'industrialforegoing:biofuel' },
            item_input: [{ item: 'kubejs:saturated_magebloom_filter' }],
            exothermic: false,
            temperature: { min_temp: 1273 },
            pressure: 7.0,
            air_use_multiplier: 1.0,
            speed: 2.0,
            id: `${id_prefix}biofuel`
        },
        {
            item_output: { item: 'pneumaticcraft:upgrade_matrix', count: 4 },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 1000, fluid: 'industrialforegoing:latex' },
            item_input: [{ item: 'quark:blue_rune' }],
            pressure: 2.0,
            air_use_multiplier: 1.0,
            speed: 2.0,
            id: `pneumaticcraft:thermo_plant/upgrade_matrix`
        },
        {
            item_output: { item: 'kubejs:sylvanite', count: 1 },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, fluid: 'kubejs:magicite' },
            item_input: [{ tag: 'forge:dusts/silver' }],
            exothermic: true,
            temperature: { max_temp: 173 },
            pressure: 9.0,
            air_use_multiplier: 20.0,
            speed: 0.5,
            id: `${id_prefix}sylvanite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
