ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // {
    //     input: 'sample',
    //     output: 'sample',
    //     type: 'sample',
    //     mod: 'sample',
    //     id: 'sample'
    // }

    const recipes = [
        {
            filter: { output: 'minecraft:hopper' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:ingots/tin'
        },
        {
            filter: { output: 'minecraft:bucket' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:ingots/tin'
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
        },
        {
            filter: { output: 'littlelogistics:conductors_wrench' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:rods/bronze'
        },
        {
            filter: { mod: 'littlelogistics' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/bronze'
        },
        {
            filter: { mod: 'littlelogistics' },
            to_replace: '#forge:nuggets/iron',
            replace_with: '#forge:nuggets/bronze'
        },
        {
            filter: { mod: 'littlelogistics' },
            to_replace: 'minecraft:ender_eye',
            replace_with: '#forge:nuggets/signalum'
        },
        {
            filter: { mod: 'littlelogistics' },
            to_replace: 'minecraft:ender_pearl',
            replace_with: '#forge:nuggets/signalum'
        },
        {
            filter: { mod: 'littlelogistics' },
            to_replace: 'minecraft:fishing_rod',
            replace_with: 'thermal:junk_net'
        },
        {
            filter: { mod: 'littlelogistics' },
            to_replace: '#balm:stones',
            replace_with: 'pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'littlelogistics' },
            to_replace: 'minecraft:stone_slab',
            replace_with: 'pneumaticcraft:logistics_core'
        },
        {
            filter: { output: /(framedblocks|minecraft|create):.*rail/ },
            to_replace: '#forge:ingots/gold',
            replace_with: '#forge:rods/electrum'
        },
        {
            filter: { output: /(framedblocks|minecraft):.*rail/ },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:rods/iron'
        },
        {
            filter: { output: /minecraft:.*rail/ },
            to_replace: '#forge:ingots/osmium',
            replace_with: '#forge:rods/osmium'
        },
        {
            to_replace: 'industrialforegoing:plastic',
            replace_with: '#pneumaticcraft:plastic_sheets'
        },
        {
            filter: { output: 'chimes:amethyst_chimes' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:ingots/tin'
        },
        {
            filter: { output: 'apotheosis:simple_reforging_table' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:ingots/brass'
        },
        {
            filter: { mod: 'simplytools' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:ingots/ironwood'
        },
        {
            filter: { output: /minecart/ },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:ingots/tin'
        },
        {
            filter: { output: /thermal:.*_grenade/ },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:nuggets/lead'
        },
        {
            filter: { mod: 'toolbelt' },
            to_replace: 'minecraft:leather',
            replace_with: '#forge:leather'
        },
        {
            filter: { mod: 'supplementaries' },
            to_replace: 'minecraft:leather',
            replace_with: '#forge:leather'
        },
        {
            filter: { mod: 'cnb' },
            to_replace: 'minecraft:leather',
            replace_with: '#forge:leather'
        },
        {
            filter: { mod: 'ars_nouveau' },
            to_replace: 'minecraft:leather',
            replace_with: '#forge:leather'
        },
        {
            filter: { output: /item_frame/ },
            to_replace: 'minecraft:leather',
            replace_with: '#forge:leather'
        },
        {
            filter: { output: 'minecraft:book' },
            to_replace: 'minecraft:leather',
            replace_with: '#forge:leather'
        },
        {
            filter: { output: /lantern/ },
            to_replace: 'minecraft:iron_nugget',
            replace_with: '#forge:nuggets/tin'
        },
        {
            filter: { output: /lantern/ },
            to_replace: 'minecraft:blaze_powder',
            replace_with: '#forge:dusts/glowstone'
        },
        {
            filter: { mod: 'manyideas_doors' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:ingots/bronze'
        },
        {
            filter: { output: /hanging_sign/ },
            to_replace: 'minecraft:iron_nugget',
            replace_with: '#forge:nuggets/copper'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
