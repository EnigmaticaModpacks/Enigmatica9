ServerEvents.tags('block', (event) => {
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
        `blue_skies:raw_falsite_block`,
        `blue_skies:raw_ventium_block`,
        `blue_skies:raw_horizonite_block`,
        `blue_skies:raw_aquite_block`,
        `blue_skies:raw_charoite_block`
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

    event.add(`forge:storage_blocks/raw_falsite`, `blue_skies:raw_falsite_block`);
    event.add(`forge:storage_blocks/raw_ventium`, `blue_skies:raw_ventium_block`);
    event.add(`forge:storage_blocks/raw_horizonite`, `blue_skies:raw_horizonite_block`);

    event.add(`forge:storage_blocks/raw_aquite`, `blue_skies:raw_aquite_block`);
    event.add(`forge:storage_blocks/raw_charoite`, `blue_skies:raw_charoite_block`);
});
