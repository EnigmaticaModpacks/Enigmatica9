ServerEvents.tags('item', (event) => {
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
        `spirit:soul_steel_block`,

        'thermal:strawberry_block',
        'thermal:green_bean_block',
        'thermal:eggplant_block',
        'thermal:bell_pepper_block',
        'thermal:spinach_block',
        'thermal:sadiroot_block',
        'thermal:radish_block',
        'thermal:corn_block',
        'farmersdelight:cabbage_crate',
        'quark:glowberry_sack',
        'quark:berry_sack',
        'quark:nether_wart_sack',
        'quark:cocoa_beans_sack',
        'quark:golden_carrot_crate',
        'quark:golden_apple_crate',
        'farmersdelight:rice_bag',
        'thermal:rice_block',
        'farmersdelight:onion_crate',
        'thermal:onion_block',
        'farmersdelight:tomato_crate',
        'thermal:tomato_block',
        'farmersdelight:beetroot_crate',
        'thermal:beetroot_block',
        'quark:beetroot_crate',
        'farmersdelight:potato_crate',
        'thermal:potato_block',
        'quark:potato_crate',
        'farmersdelight:carrot_crate',
        'thermal:carrot_block',
        'quark:carrot_crate',
        'quark:apple_crate',
        'thermal:apple_block',
        'quark:gunpowder_sack',
        'thermal:gunpowder_block'
    ]);
    event.add(`forge:storage_blocks/glowstone`, 'minecraft:glowstone');

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

    event.get(`forge:storage_blocks/strawberry`).add(['thermal:strawberry_block']);
    event.get(`forge:storage_blocks/green_bean`).add(['thermal:green_bean_block']);
    event.get(`forge:storage_blocks/eggplant`).add(['thermal:eggplant_block']);
    event.get(`forge:storage_blocks/bell_pepper`).add(['thermal:bell_pepper_block']);
    event.get(`forge:storage_blocks/spinach`).add(['thermal:spinach_block']);
    event.get(`forge:storage_blocks/sadiroot`).add(['thermal:sadiroot_block']);
    event.get(`forge:storage_blocks/radish`).add(['thermal:radish_block']);
    event.get(`forge:storage_blocks/corn`).add(['thermal:corn_block']);
    event.get(`forge:storage_blocks/cabbage`).add(['farmersdelight:cabbage_crate']);

    event.get(`forge:storage_blocks/glowberry`).add(['quark:glowberry_sack']);
    event.get(`forge:storage_blocks/sweet_berry`).add(['quark:berry_sack']);
    event.get(`forge:storage_blocks/netherwart`).add(['quark:nether_wart_sack']);

    event.get(`forge:storage_blocks/cocoa_beans`).add(['quark:cocoa_beans_sack']);
    event.get(`forge:storage_blocks/golden_carrot`).add(['quark:golden_carrot_crate']);
    event.get(`forge:storage_blocks/golden_apple`).add(['quark:golden_apple_crate']);

    event.get(`forge:storage_blocks/gunpowder`).add(['quark:gunpowder_sack', 'thermal:gunpowder_block']);
    event.get(`forge:storage_blocks/rice`).add(['farmersdelight:rice_bag', 'thermal:rice_block']);
    event.get(`forge:storage_blocks/onion`).add(['farmersdelight:onion_crate', 'thermal:onion_block']);
    event.get(`forge:storage_blocks/tomato`).add(['farmersdelight:tomato_crate', 'thermal:tomato_block']);
    event
        .get(`forge:storage_blocks/beetroot`)
        .add(['farmersdelight:beetroot_crate', 'thermal:beetroot_block', 'quark:beetroot_crate']);
    event
        .get(`forge:storage_blocks/potato`)
        .add(['farmersdelight:potato_crate', 'thermal:potato_block', 'quark:potato_crate']);
    event
        .get(`forge:storage_blocks/carrot`)
        .add(['farmersdelight:carrot_crate', 'thermal:carrot_block', 'quark:carrot_crate']);
    event.get(`forge:storage_blocks/apple`).add(['quark:apple_crate', 'thermal:apple_block']);
});
