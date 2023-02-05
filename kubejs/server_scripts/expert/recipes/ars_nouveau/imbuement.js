ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/imbuement/';

    const recipes = [
        {
            input: { tag: 'forge:ingots/pig_iron' },
            output: 'minecraft:iron_ingot',
            count: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } }
            ],
            source: 600,
            id: `${id_prefix}iron_from_pig_iron`
        },
        {
            input: { tag: 'forge:gems/source' },
            output: 'ars_nouveau:fire_essence',
            count: 1,
            pedestalItems: [
                { item: { item: 'twilightforest:fiery_blood' } },
                { item: { item: 'hexerei:dried_yellow_dock_flowers' } },
                { item: { item: 'minecraft:blaze_rod' } }
            ],
            source: 2000,
            id: 'ars_nouveau:imbuement_fire_essence'
        },
        {
            input: { tag: 'forge:gems/source' },
            output: 'ars_nouveau:air_essence',
            count: 1,
            pedestalItems: [
                { item: { item: 'twilightforest:raven_feather' } },
                { item: { item: 'hexerei:dried_sage' } },
                { item: { item: 'thermal:blitz_rod' } }
            ],
            source: 2000,
            id: 'ars_nouveau:imbuement_air_essence'
        },
        {
            input: { tag: 'forge:gems/source' },
            output: 'ars_nouveau:water_essence',
            count: 1,
            pedestalItems: [
                { item: { item: 'twilightforest:alpha_yeti_fur' } },
                { item: { item: 'hexerei:dried_belladonna_flowers' } },
                { item: { item: 'thermal:blizz_rod' } }
            ],
            source: 2000,
            id: 'ars_nouveau:imbuement_water_essence'
        },
        {
            input: { tag: 'forge:gems/source' },
            output: 'ars_nouveau:earth_essence',
            count: 1,
            pedestalItems: [
                { item: { item: 'twilightforest:magic_beans' } },
                { item: { item: 'hexerei:mandrake_root' } },
                { item: { item: 'thermal:basalz_rod' } }
            ],
            source: 2000,
            id: 'ars_nouveau:imbuement_earth_essence'
        },
        {
            input: { tag: 'forge:gems/source' },
            output: 'ars_nouveau:abjuration_essence',
            count: 1,
            pedestalItems: [
                { item: { tag: 'forge:ingots/ironwood' } },
                { item: { item: 'twilightforest:cicada' } },
                { item: { item: 'twilightforest:naga_scale' } }
            ],
            source: 2000,
            id: 'ars_nouveau:imbuement_abjuration_essence'
        },
        {
            input: { item: 'minecraft:calcite' },
            output: 'naturesaura:infused_stone',
            count: 1,
            pedestalItems: [],
            source: 500,
            id: `${id_prefix}infused_stone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
