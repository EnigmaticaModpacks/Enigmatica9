ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: { item: 'create:mechanical_crafter', count: 8 },
            pedestalItems: [
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } }
            ],
            reagent: [{ item: 'minecraft:crafting_table' }],
            sourceCost: 500,
            id: `${id_prefix}mechanical_crafter`
        },
        {
            output: { item: 'mekanism:teleportation_core', count: 2 },
            pedestalItems: [
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } }
            ],
            reagent: [{ item: 'occultism:spirit_attuned_gem' }],
            sourceCost: 500,
            id: `${id_prefix}teleportation_core`
        },
        {
            output: { item: 'occultism:storage_controller_base' },
            pedestalItems: [
                { item: { tag: 'forge:ingots/energized_steel' } },
                { item: { tag: 'forge:ingots/energized_steel' } },
                { item: { tag: 'forge:ingots/energized_steel' } }
            ],
            reagent: [{ item: 'occultism:otherstone_pedestal' }],
            sourceCost: 2000,
            id: `${id_prefix}storage_controller_base`
        },
        {
            output: {
                item: 'occultism:dimensional_matrix',
                nbt: { spiritName: '' }
            },
            pedestalItems: [
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } }
            ],
            reagent: [{ item: 'mekanism:teleportation_core' }],
            sourceCost: 2000,
            id: `${id_prefix}dimensional_matrix`
        },
        {
            output: { item: 'occultism:stable_wormhole' },
            pedestalItems: [
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } }
            ],
            reagent: [{ item: 'occultism:wormhole_frame' }],
            sourceCost: 2000,
            id: `${id_prefix}stable_wormhole`
        },
        {
            output: { item: 'ae2:crafting_unit', count: 2 },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:logistics_core' } },
                { item: { item: 'naturesaura:infused_stone' } },
                { item: { item: 'powah:energy_cable_niotic' } },
                { item: { item: 'naturesaura:infused_stone' } },
                { item: { item: 'pneumaticcraft:logistics_core' } },
                { item: { item: 'naturesaura:infused_stone' } },
                { item: { item: 'powah:energy_cable_niotic' } },
                { item: { item: 'naturesaura:infused_stone' } }
            ],
            reagent: [{ item: 'ars_nouveau:wixie_charm' }],
            sourceCost: 5000,
            id: `${id_prefix}crafting_unit`
        },
        {
            output: { item: 'naturesaura:animal_spawner' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'minecraft:golden_carrot' } },
                { item: { item: 'minecraft:hay_block' } },
                { item: { item: 'minecraft:golden_apple' } }
            ],
            reagent: [{ item: 'spirit:broken_spawner' }],
            sourceCost: 9000,
            id: `${id_prefix}animal_spawner`
        },
        {
            output: { item: 'pneumaticcraft:drill_bit_diamond' },
            pedestalItems: [{ item: { tag: 'forge:ingots/skies' } }, { item: { item: 'ars_nouveau:glyph_aoe' } }],
            reagent: [{ item: 'pneumaticcraft:drill_bit_compressed_iron' }],
            sourceCost: 3000,
            id: `${id_prefix}drill_bit_diamond`
        },
        {
            output: { item: 'create:brass_hand' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:leather' } },
                { item: { tag: 'forge:leather' } },
                { item: { tag: 'forge:leather' } }
            ],
            reagent: [{ tag: 'forge:ingots/energized_steel' }],
            sourceCost: 1000,
            id: `${id_prefix}brass_hand`
        },
        {
            output: { item: 'minecraft:netherite_ingot', count: 4 },
            pedestalItems: [
                { item: { tag: 'forge:ingots/electrum' } },
                { item: { tag: 'forge:ingots/electrum' } },
                { item: { tag: 'forge:ingots/electrum' } },
                { item: { tag: 'forge:ingots/electrum' } }
            ],
            reagent: [{ item: 'minecraft:netherite_scrap' }],
            sourceCost: 5000,
            id: `${id_prefix}netherite_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});