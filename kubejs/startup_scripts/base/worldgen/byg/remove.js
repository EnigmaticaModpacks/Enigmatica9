WorldgenEvents.remove((event) => {
    // https://mods.latvian.dev/books/kubejs/page/worldgen-events
    /*
    Valid WorldgenLayer values: 
    'strongholds'
    'underground_ores'
    'underground_structures'
    'top_layer_modification'
    'fluid_springs'
    'underground_decoration'
    'raw_generation'
    'lakes'
    'vegetal_decoration'
    'local_modifications'
    'surface_structures'
    */

    const features = [
        'byg:ore_gold_brimstone',
        'byg:ore_gold_blue_netherrack',
        'byg:ore_quartz_brimstone',
        'byg:ore_quartz_blue_netherrack',
        'byg:ore_anthracite',
        'byg:ore_pendorite',
        'byg:cryptic_redstone',
        'byg:quartz_spike'
    ];

    event.removeFeatureById('underground_ores', features);
    event.removeFeatureById('underground_decoration', features);
});
