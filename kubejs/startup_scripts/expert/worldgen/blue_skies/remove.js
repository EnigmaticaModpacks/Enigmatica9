WorldgenEvents.remove((event) => {
    if (global.isExpertMode == false) {
        return;
    }
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

    // console.debugEnabled = true;
    event.removeOres((props) => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = ['blue_skies:horizonite_ore', 'blue_skies:ventium_ore', 'blue_skies:falsite_ore'];
    });
});
