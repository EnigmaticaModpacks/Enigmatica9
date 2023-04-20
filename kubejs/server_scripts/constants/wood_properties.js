//priority: 1000

const sawdust = 'emendatusenigmatica:wood_dust';
const bark = 'farmersdelight:tree_bark';

// Used to populate the wood_variants_constructor constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var wood_variants_constructor = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',
    'minecraft:mangrove',
    'byg:aspen',
    'byg:baobab',
    'byg:blue_enchanted',
    'byg:cherry',
    'byg:cika',
    'byg:cypress',
    'byg:ebony',
    'byg:ether',
    'byg:fir',
    'byg:green_enchanted',
    'byg:holly',
    'byg:jacaranda',
    'byg:lament',
    'byg:mahogany',
    'byg:white_mangrove',
    'byg:maple',
    'byg:nightshade',
    'byg:palm',
    'byg:palo_verde',
    'byg:pine',
    'byg:rainbow_eucalyptus',
    'byg:redwood',
    'byg:skyris',
    'byg:willow',
    'byg:witch_hazel',
    'byg:zelkova',
    'byg:sythian',
    'byg:bulbis',
    'byg:embur',
    'byg:withering_oak',
    'byg:fungal_imparius',
    'ars_nouveau:red_archwood',
    'ars_nouveau:green_archwood',
    'ars_nouveau:purple_archwood',
    'ars_nouveau:blue_archwood',
    'ars_elemental:yellow_archwood',
    'blue_skies:bluebright',
    'blue_skies:starlit',
    'blue_skies:frostbright',
    'blue_skies:lunar',
    'blue_skies:dusk',
    'blue_skies:maple',
    'blue_skies:cherry',
    'quark:azalea',
    'quark:blossom',
    'twilightforest:twilight_oak',
    'twilightforest:canopy',
    'twilightforest:mangrove',
    'twilightforest:dark',
    'twilightforest:time',
    'twilightforest:transformation',
    'twilightforest:mining',
    'twilightforest:sorting',
    'hexerei:mahogany',
    'hexerei:willow',
    'hexerei:witch_hazel'
];

const wood_properties = [];

wood_variants_constructor.forEach((variant) => {
    var mod_id = variant.split(':')[0],
        log_type = variant.split(':')[1],
        log_suffix,
        wood_suffix,
        log_block_stripped,
        wood_block_stripped,
        log_block,
        wood_block,
        plank_block,
        slab_block;

    //suffix exceptions
    switch (log_type) {
        case 'bulbis':
            log_suffix = '_stem';
            wood_suffix = '_wood';
            break;
        case 'sythian':
            log_suffix = '_stem';
            wood_suffix = '_hyphae';
            break;
        case 'warped':
            log_suffix = '_stem';
            wood_suffix = '_hyphae';
            break;
        case 'crimson':
            log_suffix = '_stem';
            wood_suffix = '_hyphae';
            break;
        case 'embur':
            log_suffix = '_pedu';
            wood_suffix = '_hyphae';
            break;
        case 'fungal_imparius':
            log_suffix = '_stem';
            wood_suffix = '_hyphae';
            break;

        default:
            log_suffix = '_log';
            wood_suffix = '_wood';
    }

    log_block = `${mod_id}:${log_type}${log_suffix}`;
    wood_block = `${mod_id}:${log_type}${wood_suffix}`;
    log_block_stripped = `${mod_id}:stripped_${log_type}${log_suffix}`;
    wood_block_stripped = `${mod_id}:stripped_${log_type}${wood_suffix}`;
    plank_block = `${mod_id}:${log_type}_planks`;
    slab_block = `${mod_id}:${log_type}_slab`;

    // Exceptions
    if (mod_id == 'ars_nouveau' || mod_id == 'ars_elemental') {
        plank_block = 'ars_nouveau:archwood_planks';
        slab_block = 'ars_nouveau:archwood_slab';
    }

    switch (log_type) {
        case 'palo_verde':
            plank_block = 'minecraft:birch_planks';
            break;
        case 'withering_oak':
            log_block_stripped = 'minecraft:stripped_oak_log';
            wood_block_stripped = 'minecraft:stripped_oak_wood';
            plank_block = 'minecraft:oak_planks';
            break;
        case 'fungal_imparius':
            log_block_stripped = 'byg:imparius_stem';
            wood_block_stripped = 'byg:imparius_hyphae';
            plank_block = 'byg:imparius_planks';
            slab_block = 'byg:imparius_slab';
            break;
        case 'yellow_archwood':
            wood_block = 'ars_elemental:yellow_archwood';
            wood_block_stripped = 'ars_elemental:stripped_yellow_archwood';
            break;
        default:
    }

    wood_properties.push({
        log: {
            block: log_block,
            stripped: log_block_stripped
        },
        wood: {
            block: wood_block,
            stripped: wood_block_stripped
        },
        plank: {
            block: plank_block,
            slab: slab_block
        }
    });
});
