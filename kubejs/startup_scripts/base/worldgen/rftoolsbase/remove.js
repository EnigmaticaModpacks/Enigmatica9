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
        'rftoolsbase:dimshard_dimensions',
        'rftoolsbase:dimshard_end',
        'rftoolsbase:dimshard_nether',
        'rftoolsbase:dimshard_overworld'
    ]);
});
