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
            results: [{ item: 'ars_nouveau:source_gem' }, { item: 'thermal:chiller_ball_cast' }],
            inputs: [{ item: 'thermal:chiller_ball_cast' }],
            fluid: { amount: 250, tag: 'forge:source' },
            id: `${id_prefix}source_gem`
        },
        {
            results: [{ item: 'ars_nouveau:source_gem_block' }, { item: 'thermal:machine_frame' }],
            inputs: [{ item: 'thermal:machine_frame' }],
            fluid: { amount: 1000, tag: 'forge:source' },
            id: `${id_prefix}source_gem_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:bottling_machine';
        event.custom(recipe).id(recipe.id);
    });
});
