ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            fluid_output: { amount: 180, fluid: 'pneumaticcraft:vegetable_oil' },
            item_input: [{ item: 'thermal:peanut' }, { item: 'blue_skies:solnut' }],
            exothermic: false,
            pressure: 2.0,
            speed: 0.5,
            id: `${id_prefix}vegetable_oil_high_yield`
        },
        {
            fluid_output: { amount: 120, fluid: 'pneumaticcraft:vegetable_oil' },
            item_input: [{ item: 'thermal:corn' }, { item: 'blue_skies:fiery_beans' }],
            exothermic: false,
            pressure: 2.0,
            speed: 0.5,
            id: `${id_prefix}vegetable_oil_medium_yield`
        },
        {
            fluid_output: { amount: 60, fluid: 'pneumaticcraft:vegetable_oil' },
            item_input: [
                { item: 'thermal:sadiroot' },
                { item: 'supplementaries:flax_seeds' },
                { item: 'immersiveengineering:seed' }
            ],
            exothermic: false,
            pressure: 2.0,
            speed: 0.5,
            id: `${id_prefix}vegetable_oil_low_yield`
        },
        {
            fluid_output: { amount: 250, fluid: 'pneumaticcraft:ethanol' },
            item_output: { item: 'minecraft:glass_bottle' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture' },
            item_input: { item: 'minecraft:honey_bottle' },
            exothermic: true,
            speed: 0.25,
            temperature: { max_temp: 333, min_temp: 303 },
            id: `${id_prefix}ethanol_from_honey`
        },
        {
            fluid_output: { amount: 120, fluid: 'pneumaticcraft:ethanol' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture' },
            item_input: [{ item: 'minecraft:glow_berries' }, { item: 'minecraft:melon' }],
            exothermic: true,
            speed: 0.25,
            temperature: { max_temp: 333, min_temp: 303 },
            id: `${id_prefix}ethanol_high_yield`
        },
        {
            fluid_output: { amount: 60, fluid: 'pneumaticcraft:ethanol' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture' },
            item_input: [
                { item: 'minecraft:apple' },
                { item: 'minecraft:sugar_cane' },
                { item: 'minecraft:sweet_berries' },
                { item: 'blue_skies:brewberry' },
                { item: 'blue_skies:pink_brewberry' },
                { item: 'blue_skies:black_brewberry' }
            ],
            exothermic: true,
            speed: 0.25,
            temperature: { max_temp: 333, min_temp: 303 },
            id: `${id_prefix}ethanol_medium_yield`
        },
        {
            fluid_output: { amount: 40, fluid: 'pneumaticcraft:ethanol' },
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture' },
            item_input: [
                { item: 'minecraft:beetroot' },
                { item: 'minecraft:potato' },
                { item: 'thermal:strawberry' },
                { item: 'byg:blueberries' },
                { item: 'byg:nightshade_berries' },
                { item: 'byg:crimson_berries' }
            ],
            exothermic: true,
            speed: 0.25,
            temperature: { max_temp: 333, min_temp: 303 },
            id: `${id_prefix}ethanol_low_yield`
        },
        {
            fluid_output: { amount: 60, fluid: 'sophisticatedcore:xp_still' },
            item_input: [{ item: 'create:experience_nugget' }],
            exothermic: true,
            speed: 0.75,
            temperature: { min_temp: 473 },
            id: `${id_prefix}experience_nugget_to_liquid`
        },
        {
            fluid_output: { amount: 60, fluid: 'sophisticatedcore:xp_still' },
            item_input: [{ item: 'ars_nouveau:experience_gem' }],
            exothermic: true,
            speed: 0.75,
            temperature: { min_temp: 473 },
            id: `${id_prefix}experience_gem_to_liquid`
        },
        {
            fluid_output: { amount: 240, fluid: 'sophisticatedcore:xp_still' },
            item_input: [{ item: 'ars_nouveau:greater_experience_gem' }],
            exothermic: true,
            speed: 0.75,
            temperature: { min_temp: 473 },
            id: `${id_prefix}greater_experience_gem_to_liquid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
