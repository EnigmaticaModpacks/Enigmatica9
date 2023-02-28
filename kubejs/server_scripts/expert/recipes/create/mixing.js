ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/mixing/';

    const recipes = [
        {
            ingredients: [{ item: 'create:crushed_iron_ore' }, { amount: 100, fluidTag: 'forge:redstone_acid' }],
            results: [
                { item: 'mekanism:dirty_dust_iron', count: 2 },
                { item: 'mekanism:dirty_dust_tin', count: 1, chance: 0.3 },
                { item: 'mekanism:dirty_dust_tin', count: 1, chance: 0.1 }
            ],
            heatRequirement: 'heated',
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
                { item: 'ars_nouveau:fire_essence' },
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
