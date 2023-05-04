ServerEvents.tags('block', (event) => {
    event.add('forge:storage_blocks', [
        'minecraft:glowstone',
        'naturesaura:tainted_gold_block',
        'naturesaura:infused_iron_block',
        'naturesaura:sky_ingot_block',
        'naturesaura:depth_ingot_block',
        `occultism:iesnium_block`,
        `powah:energized_steel_block`,
        `powah:blazing_crystal_block`,
        `powah:niotic_crystal_block`,
        `powah:spirited_crystal_block`,
        `powah:nitro_crystal_block`,
        `spirit:soul_steel_block`
    ]);
    event.add(`forge:storage_blocks/glowstone`, 'minecraft:glowstone');

    event.add(`forge:storage_blocks/tainted_gold`, 'naturesaura:tainted_gold_block');
    event.add(`forge:storage_blocks/infused_iron`, 'naturesaura:infused_iron_block');
    event.add(`forge:storage_blocks/sky`, 'naturesaura:sky_ingot_block');
    event.add(`forge:storage_blocks/depths`, 'naturesaura:depth_ingot_block');

    event.add(`forge:storage_blocks/energized_steel`, `powah:energized_steel_block`);
    event.add(`forge:storage_blocks/blazing_crystal`, `powah:blazing_crystal_block`);
    event.add(`forge:storage_blocks/niotic_crystal`, `powah:niotic_crystal_block`);
    event.add(`forge:storage_blocks/spirited_crystal`, `powah:spirited_crystal_block`);
    event.add(`forge:storage_blocks/nitro_crystal`, `powah:nitro_crystal_block`);

    event.add(`forge:storage_blocks/soul_steel`, `spirit:soul_steel_block`);

    event.add(`forge:storage_blocks/therium`, `byg:therium_crystal_block`);
    event.add(`forge:storage_blocks/subzero`, `byg:subzero_crystal_block`);
});
