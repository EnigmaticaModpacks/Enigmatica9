WorldgenEvents.remove((event) => {
    // https://mods.latvian.dev/books/kubejs/page/worldgen-events
    // console.debugEnabled = true;
    // event.removeOres((props) => {
    //     props.worldgenLayer = 'underground_ores';
    //     props.blocks = ['blue_skies:horizonite_ore', 'blue_skies:ventium_ore', 'blue_skies:falsite_ore'];
    // });
    /*
    Valid values are: 
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

    event.removeFeatureById('local_modifications', 'selenite_geode');
});
