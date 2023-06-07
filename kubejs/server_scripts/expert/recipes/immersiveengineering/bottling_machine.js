ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/bottling_machine/';
    const recipes = [
        {
            results: [{ item: 'immersiveengineering:duroplast', count: 4 }, { item: 'thermal:machine_frame' }],
            inputs: [{ base_ingredient: { item: 'thermal:machine_frame' }, count: 1 }],
            fluid: { amount: 4000, tag: 'forge:phenolic_resin' },
            id: `immersiveengineering:bottling/duroplast_block`
        },
        {
            results: [
                { item: 'immersiveengineering:grindingdisk', nbt: '{Damage:0,Unbreakable:1.0d}' },
                { item: 'immersiveengineering:mold_gear' }
            ],
            inputs: [
                { item: 'immersiveengineering:mold_gear' },
                { base_ingredient: { tag: 'forge:dusts/aluminum' }, count: 6 },
                { base_ingredient: { tag: 'forge:fiber_hemp' }, count: 8 }
            ],
            fluid: { amount: 500, tag: 'forge:phenolic_resin' },
            id: `immersiveengineering:bottling/grindingdisk`
        },
        {
            results: [{ item: 'create:brass_casing', count: 4 }],
            inputs: [
                { base_ingredient: { item: 'thermal:sawdust_block' }, count: 4 },
                { base_ingredient: { tag: 'forge:ingots/energized_steel' }, count: 1 }
            ],
            fluid: { amount: 100, tag: 'forge:phenolic_resin' },
            id: `${id_prefix}brass_casing`
        },
        {
            results: [{ item: 'create:andesite_casing', count: 4 }],
            inputs: [
                { base_ingredient: { item: 'thermal:sawdust_block' }, count: 4 },
                { base_ingredient: { item: 'pneumaticcraft:compressed_stone', count: 1 } }
            ],
            fluid: { amount: 100, tag: 'forge:phenolic_resin' },
            id: `${id_prefix}andesite_casing`
        },
        {
            results: [{ item: 'minecraft:elytra' }],
            inputs: [
                { base_ingredient: { tag: 'forge:plates/aluminum' }, count: 2 },
                { base_ingredient: { item: 'hexerei:infused_fabric' }, count: 4 },
                { base_ingredient: { item: 'ars_nouveau:magebloom_fiber' }, count: 8 }
            ],
            fluid: { amount: 2000, tag: 'forge:phenolic_resin' },
            id: `${id_prefix}elytra`
        },
        {
            results: [{ item: 'ae2:printed_silicon', count: 4 }],
            inputs: [
                { base_ingredient: { item: 'quark:rainbow_rune' }, count: 4 },
                { base_ingredient: { item: 'kubejs:dimensional_storage_crystal' }, count: 2 }
            ],
            fluid: { amount: 400, tag: 'forge:source' },
            id: `${id_prefix}printed_silicon`
        },
        {
            results: [
                { item: 'ae2:sky_dust', count: 4 },
                { item: 'emendatusenigmatica:silver_clump' },
                { item: 'emendatusenigmatica:osmium_clump' }
            ],
            inputs: [{ base_ingredient: { item: 'thermal:rich_slag' }, count: 9 }],
            fluid: { amount: 100, tag: 'forge:redstone_acid' },
            id: `${id_prefix}sky_dust_silver_osmium_clump`
        },
        {
            results: [{ item: 'hexerei:quicksilver_bottle' }],
            inputs: [{ base_ingredient: { item: 'minecraft:glass_bottle' } }],
            fluid: { amount: 250, tag: 'forge:quicksilver' },
            id: `${id_prefix}quicksilver_bottle`
        },
        {
            results: [{ item: 'hexerei:blood_bottle' }],
            inputs: [{ base_ingredient: { item: 'minecraft:glass_bottle' } }],
            fluid: { amount: 250, tag: 'forge:blood' },
            id: `${id_prefix}blood_bottle`
        },
        {
            results: [{ item: 'the_bumblezone:honey_compass' }],
            inputs: [{ base_ingredient: { item: 'naturescompass:naturescompass' } }],
            fluid: { amount: 250, tag: 'forge:honey' },
            id: `${id_prefix}honey_compass`
        },
        {
            results: [{ item: 'ae2:fluix_crystal' }],
            inputs: [{ base_ingredient: { item: 'ae2:charged_certus_quartz_crystal' } }],
            fluid: { amount: 100, tag: 'forge:source' },
            id: `${id_prefix}fluix_crystal`
        }
    ];

    simple_metals.forEach((metal) => {
        let rate = 3;
        recipes.push({
            results: [{ item: `emendatusenigmatica:${metal}_dirty_dust`, count: 2 * rate }],
            inputs: [{ base_ingredient: { tag: `create:crushed_ores/${metal}` }, count: 1 * rate }],
            fluid: { amount: 10 * rate, tag: 'forge:sulfuric_acid' },
            id: `${id_prefix}${metal}_dirty_dust_from_acid`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:bottling_machine';
        event.custom(recipe).id(recipe.id);
    });
});
