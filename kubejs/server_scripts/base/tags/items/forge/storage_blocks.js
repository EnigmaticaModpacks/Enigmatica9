ServerEvents.tags('item', (event) => {
    event.add('forge:storage_blocks', [
        'minecraft:glowstone',
        `blue_skies:falsite_block`,
        `blue_skies:ventium_block`,
        `blue_skies:horizonite_block`,
        `blue_skies:pyrope_block`,
        `blue_skies:aquite_block`,
        `blue_skies:diopside_block`,
        `blue_skies:charoite_block`,
        `blue_skies:moonstone_block`,
        `blue_skies:sunstone_block`,
        `blue_skies:raw_falsite_block`,
        `blue_skies:raw_ventium_block`,
        `blue_skies:raw_horizonite_block`,
        `blue_skies:raw_aquite_block`,
        `blue_skies:raw_charoite_block`,
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

    event.add(`forge:storage_blocks/falsite`, `blue_skies:falsite_block`);
    event.add(`forge:storage_blocks/ventium`, `blue_skies:ventium_block`);
    event.add(`forge:storage_blocks/horizonite`, `blue_skies:horizonite_block`);
    event.add(`forge:storage_blocks/pyrope`, `blue_skies:pyrope_block`);
    event.add(`forge:storage_blocks/aquite`, `blue_skies:aquite_block`);
    event.add(`forge:storage_blocks/diopside`, `blue_skies:diopside_block`);
    event.add(`forge:storage_blocks/charoite`, `blue_skies:charoite_block`);
    event.add(`forge:storage_blocks/moonstone`, `blue_skies:moonstone_block`);
    event.add(`forge:storage_blocks/sunstone`, `blue_skies:sunstone_block`);
    event.add(`forge:storage_blocks/raw_falsite`, `blue_skies:raw_falsite_block`);
    event.add(`forge:storage_blocks/raw_ventium`, `blue_skies:raw_ventium_block`);
    event.add(`forge:storage_blocks/raw_horizonite`, `blue_skies:raw_horizonite_block`);
    event.add(`forge:storage_blocks/raw_aquite`, `blue_skies:raw_aquite_block`);
    event.add(`forge:storage_blocks/raw_charoite`, `blue_skies:raw_charoite_block`);

    event.add(`forge:storage_blocks/tainted_gold`, 'naturesaura:tainted_gold_block');
    event.add(`forge:storage_blocks/infused_iron`, 'naturesaura:infused_iron_block');
    event.add(`forge:storage_blocks/skies`, 'naturesaura:sky_ingot_block');
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
