ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            filter: { output: 'minecraft:hopper' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/tin'
        },
        {
            filter: { output: 'minecraft:bucket' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/tin'
        },
        {
            filter: { mod: 'create' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'createaddition' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'littlecontraptions' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'create' },
            to_replace: 'minecraft:dried_kelp',
            replace_with: '#forge:leather'
        },
        {
            filter: { mod: 'pneumaticcraft' },
            to_replace: '#c:glass_blocks',
            replace_with: 'ae2:quartz_glass'
        },
        {
            filter: { mod: 'pneumaticcraft', id: /wall_lamp/ },
            to_replace: '#forge:ingots/compressed_iron',
            replace_with: 'pneumaticcraft:compressed_brick_tile'
        },
        {
            filter: { mod: 'powah' },
            to_replace: 'powah:energy_cable_blazing',
            replace_with: 'powah:capacitor_basic_large'
        },
        {
            filter: { mod: 'powah' },
            to_replace: 'powah:energy_cell_blazing',
            replace_with: 'powah:energy_cell_basic'
        },
        {
            filter: { mod: 'powah' },
            to_replace: 'powah:battery_blazing',
            replace_with: 'powah:battery_basic'
        },
        {
            filter: { mod: 'powah' },
            to_replace: 'powah:dielectric_casing',
            replace_with: 'thermal:energy_cell_frame'
        },
        {
            filter: { mod: 'powah' },
            to_replace: 'powah:capacitor_basic',
            replace_with: 'powah:capacitor_basic_large'
        },
        {
            filter: { mod: 'powah' },
            to_replace: 'powah:player_transmitter_starter',
            replace_with: 'powah:aerial_pearl'
        },
        {
            filter: { mod: 'powah' },
            to_replace: 'powah:ender_core',
            replace_with: 'occultism:stable_wormhole'
        },
        {
            filter: {},
            to_replace: '#forge:plates/brass',
            replace_with: '#forge:plates/gold'
        },
        {
            filter: {},
            to_replace: '#forge:ingots/brass',
            replace_with: '#forge:ingots/energized_steel'
        },
        {
            filter: {},
            to_replace: '#forge:storage_blocks/brass',
            replace_with: '#forge:storage_blocks/energized_steel'
        },
        {
            filter: {},
            to_replace: 'create:electron_tube',
            replace_with: 'pneumaticcraft:logistics_core'
        },
        {
            filter: { mod: 'spirit' },
            to_replace: 'minecraft:netherrack',
            replace_with: 'naturesaura:ancient_stick'
        },
        {
            filter: {},
            to_replace: 'mekanism:energy_tablet',
            replace_with: 'powah:capacitor_basic_large'
        },
        {
            filter: {},
            to_replace: 'mekanism:jetpack',
            replace_with: 'pneumaticcraft:jet_boots_upgrade_5'
        },
        {
            filter: {},
            to_replace: 'mekanism:free_runners',
            replace_with: 'pneumaticcraft:speed_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
