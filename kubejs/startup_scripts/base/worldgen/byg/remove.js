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

    event.removeFeatureById('underground_ores', [
        'byg:ore_gold_brimstone',
        'byg:ore_gold_blue_netherrack',
        'byg:ore_quartz_brimstone',
        'byg:ore_quartz_blue_netherrack',
        'byg:ore_anthracite',
        'byg:ore_pendorite',
        'byg:ore_emeraldite',
        'byg:cryptic_redstone',
        'byg:island_ametrine_clusters'
    ]);
});
