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
        'thermal:lead_ore',
        'thermal:nickel_ore',
        'thermal:niter_ore',
        'thermal:cinnabar_ore',
        'thermal:silver_ore',
        'thermal:tin_ore',
        'thermal:sulfur_ore',
        'thermal:apatite_ore'
    ]);
});
