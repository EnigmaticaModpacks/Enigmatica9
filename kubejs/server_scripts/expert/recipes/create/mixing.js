ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/mixing/';

    const recipes = [
        {
            ingredients: [{ tag: 'create:crushed_ores/iron' }, { amount: 100, fluidTag: 'forge:redstone_acid' }],
            results: [
                { item: 'emendatusenigmatica:iron_dirty_dust', count: 2 },
                {
                    item: `emendatusenigmatica:${metal_properties['iron'].oreProcessing.expert_output.secondary}_dirty_dust`,
                    count: 1,
                    chance: 0.3
                },
                {
                    item: `emendatusenigmatica:${metal_properties['iron'].oreProcessing.expert_output.secondary}_dirty_dust`,
                    count: 1,
                    chance: 0.1
                }
            ],
            heatRequirement: 'superheated',
            id: `${id_prefix}iron_dust_from_redstone_acid`
        },
        {
            ingredients: [{ amount: 900, fluidTag: 'forge:latex' }],
            results: [{ amount: 100, fluid: 'minecraft:water' }, { item: 'thermal:rubber' }],
            heatRequirement: 'heated',
            id: `${id_prefix}rubber`
        },
        {
            ingredients: [
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { tag: 'forge:essences/fire' },
                { amount: 1000, fluid: 'minecraft:water' }
            ],
            results: [{ item: 'thermal:cured_rubber', count: 4 }],
            heatRequirement: 'heated',
            id: `${id_prefix}cured_rubber`
        },
        {
            ingredients: [
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { amount: 1000, fluidTag: 'forge:latex' }
            ],
            results: [
                { item: 'powah:dielectric_paste', count: 32 },
                { item: 'powah:dielectric_paste', count: 8, chance: 0.15 }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}dielectric_paste`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:tallow' },
                { amount: 1000, fluidTag: 'forge:water' }
            ],
            results: [{ item: 'supplementaries:soap', count: 6 }],
            heatRequirement: 'heated',
            id: `${id_prefix}soap`
        },
        {
            ingredients: [
                { item: 'minecraft:blaze_powder' },
                { item: 'minecraft:blaze_powder' },
                { item: 'minecraft:blaze_powder' },
                { item: 'minecraft:blaze_powder' },
                { tag: 'forge:gems/sunstone_crystal' },
                { amount: 1000, fluidTag: 'forge:blood' }
            ],
            results: [{ item: 'powah:crystal_blazing', count: 4 }],
            heatRequirement: 'heated',
            id: `${id_prefix}crystal_blazing`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/tin' },
                { tag: 'forge:dusts/redstone' }
            ],
            results: [{ item: 'emendatusenigmatica:bronze_dust', count: 4 }],
            id: `${id_prefix}bronze_dust`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/silver' },
                { tag: 'forge:dusts/silver' },
                { tag: 'forge:dusts/gold' },
                { tag: 'forge:dusts/gold' },
                { tag: 'forge:dusts/redstone' }
            ],
            results: [{ item: 'emendatusenigmatica:electrum_dust', count: 4 }],
            id: `${id_prefix}electrum_dust`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/iron' },
                { tag: 'forge:dusts/iron' },
                { tag: 'forge:dusts/nickel' },
                { tag: 'forge:dusts/redstone' },
                { tag: 'forge:dusts/redstone' }
            ],
            results: [{ item: 'emendatusenigmatica:invar_dust', count: 3 }],
            id: `${id_prefix}invar_dust`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/nickel' },
                { tag: 'forge:dusts/nickel' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/redstone' }
            ],
            results: [{ item: 'emendatusenigmatica:constantan_dust', count: 4 }],
            id: `${id_prefix}constantan_dust`
        },
        {
            ingredients: [{ tag: 'forge:essences/manipulation' }, { amount: 1000, fluidTag: 'forge:brine' }],
            results: [
                { item: 'mekanism:dust_lithium', count: 4 },
                { item: 'emendatusenigmatica:iesnium_dust', count: 3 }
            ],
            heatRequirement: 'superheated',
            id: `${id_prefix}iesnium_lithium_salt`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
