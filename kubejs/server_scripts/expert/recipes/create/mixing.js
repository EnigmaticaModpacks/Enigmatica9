ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/mixing/';

    const recipes = [
        {
            results: [{ item: 'emendatusenigmatica:iron_dirty_dust', count: 1 }],
            ingredients: [{ tag: 'create:crushed_ores/iron' }, { fluidTag: 'forge:redstone_acid', amount: 50 }],
            heatRequirement: 'superheated',
            id: `${id_prefix}iron_dust_from_redstone_acid`
        },
        {
            results: [
                { item: 'emendatusenigmatica:iron_dirty_dust', count: 6 },
                {
                    item: AlmostUnified.getPreferredItemForTag(
                        `mekanism:dirty_dusts/${metal_properties.iron.oreProcessing.expert_output.secondary}`
                    ).getId(),
                    count: 1
                }
            ],
            ingredients: [{ tag: 'create:crushed_ores/iron' }, { fluidTag: 'forge:sulfuric_acid', amount: 30 }],
            heatRequirement: 'superheated',

            id: `${id_prefix}iron_dust_from_sulfuric_acid`
        },
        {
            results: [{ amount: 100, fluid: 'minecraft:water' }, { item: 'thermal:rubber' }],
            ingredients: [{ amount: 900, fluidTag: 'forge:latex' }],
            heatRequirement: 'heated',
            id: `${id_prefix}rubber`
        },
        {
            results: [{ item: 'thermal:cured_rubber', count: 4 }],
            ingredients: [
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { tag: 'forge:essences/fire' },
                { amount: 1000, fluid: 'minecraft:water' }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}cured_rubber`
        },
        {
            results: [
                { item: 'powah:dielectric_paste', count: 32 },
                { item: 'powah:dielectric_paste', count: 8, chance: 0.15 }
            ],
            ingredients: [
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { item: 'occultism:burnt_otherstone' },
                { amount: 1000, fluidTag: 'forge:latex' }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}dielectric_paste`
        },
        {
            results: [{ item: 'supplementaries:soap', count: 6 }],
            ingredients: [
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:dusts/ash' },
                { tag: 'forge:tallow' },
                { amount: 1000, fluidTag: 'forge:water' }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}soap`
        },
        {
            results: [{ item: 'powah:crystal_blazing', count: 4 }],
            ingredients: [
                { item: 'minecraft:blaze_powder' },
                { item: 'minecraft:blaze_powder' },
                { item: 'minecraft:blaze_powder' },
                { item: 'minecraft:blaze_powder' },
                { tag: 'forge:gems/prismarine' },
                { amount: 1000, fluidTag: 'forge:blood' }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}crystal_blazing`
        },
        {
            results: [{ item: 'emendatusenigmatica:bronze_dust', count: 4 }],
            ingredients: [
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/tin' },
                { tag: 'forge:dusts/redstone' }
            ],
            id: `${id_prefix}bronze_dust`
        },
        {
            results: [{ item: 'emendatusenigmatica:electrum_dust', count: 4 }],
            ingredients: [
                { tag: 'forge:dusts/silver' },
                { tag: 'forge:dusts/silver' },
                { tag: 'forge:dusts/gold' },
                { tag: 'forge:dusts/gold' },
                { tag: 'forge:dusts/redstone' }
            ],
            id: `${id_prefix}electrum_dust`
        },
        {
            results: [{ item: 'emendatusenigmatica:invar_dust', count: 3 }],
            ingredients: [
                { tag: 'forge:dusts/iron' },
                { tag: 'forge:dusts/iron' },
                { tag: 'forge:dusts/nickel' },
                { tag: 'forge:dusts/redstone' },
                { tag: 'forge:dusts/redstone' }
            ],
            id: `${id_prefix}invar_dust`
        },
        {
            results: [{ item: 'emendatusenigmatica:constantan_dust', count: 4 }],
            ingredients: [
                { tag: 'forge:dusts/nickel' },
                { tag: 'forge:dusts/nickel' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/copper' },
                { tag: 'forge:dusts/redstone' }
            ],
            id: `${id_prefix}constantan_dust`
        },
        {
            results: [{ item: 'emendatusenigmatica:lumium_dust', count: 4 }],
            ingredients: [
                { tag: 'forge:dusts/constantan' },
                { tag: 'forge:dusts/constantan' },
                { tag: 'forge:dusts/constantan' },
                { tag: 'forge:dusts/constantan' },
                [{ item: 'minecraft:glow_berries' }, { item: 'twilightforest:torchberries' }]
            ],
            id: `${id_prefix}lumium_dust`
        },
        {
            results: [{ item: 'emendatusenigmatica:signalum_dust', count: 4 }],
            ingredients: [
                { tag: 'forge:dusts/aluminum' },
                { tag: 'forge:dusts/aluminum' },
                { tag: 'forge:dusts/aluminum' },
                { tag: 'forge:dusts/aluminum' },
                { tag: 'forge:esseneces/manipulation' }
            ],
            id: `${id_prefix}signalum_dust`
        },
        {
            results: [
                { item: 'mekanism:dust_lithium', count: 4 },
                { item: 'emendatusenigmatica:iesnium_dirty_dust', count: 1 }
            ],
            ingredients: [{ tag: 'forge:essences/manipulation' }, { amount: 1000, fluidTag: 'forge:brine' }],
            heatRequirement: 'superheated',
            id: `${id_prefix}lithium_iesnium`
        },
        {
            results: [{ item: 'kubejs:mote_of_rebirth', count: 3 }],
            ingredients: [
                Item.of('minecraft:lingering_potion', { Potion: 'minecraft:strong_regeneration' }).weakNBT().toJson()
            ],
            heatRequirement: 'superheated',
            id: `${id_prefix}mote_of_rebirth`
        }
    ];

    simple_metals.forEach((metal) => {
        let secondary_amount = 1;
        let secondary = metal_properties[metal].oreProcessing.expert_output.secondary;

        if (secondary == 'quartz') {
            secondary = AlmostUnified.getPreferredItemForTag(`forge:gems/${secondary}`).getId();
            secondary_amount = 2;
        } else {
            secondary = AlmostUnified.getPreferredItemForTag(`mekanism:dirty_dusts/${secondary}`).getId();
        }

        recipes.push({
            results: [
                { item: `emendatusenigmatica:${metal}_dirty_dust`, count: 6 },
                {
                    item: secondary,
                    count: secondary_amount
                }
            ],
            ingredients: [
                { tag: `create:crushed_ores/${metal}` },
                { tag: `create:crushed_ores/${metal}` },
                { tag: `create:crushed_ores/${metal}` },
                { fluidTag: 'forge:sulfuric_acid', amount: 30 }
            ],
            heatRequirement: 'superheated',
            id: `${id_prefix}${metal}_dirty_dust_from_acid`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
