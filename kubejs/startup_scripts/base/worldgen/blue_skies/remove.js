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

    event.removeOres((props) => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [
            'blue_skies:horizonite_ore',
            'blue_skies:ventium_ore',
            'blue_skies:falsite_ore',
            'blue_skies:everdawn_moonstone_ore',
            'blue_skies:everdawn_pyrope_ore',
            'blue_skies:everdawn_aquite_ore',
            'blue_skies:everdawn_emerald_ore',
            'blue_skies:everdawn_diopside_ore',
            'blue_skies:everdawn_charoite_ore',
            'blue_skies:everbright_moonstone_ore',
            'blue_skies:everbright_pyrope_ore',
            'blue_skies:everbright_aquite_ore',
            'blue_skies:everbright_emerald_ore',
            'blue_skies:everbright_diopside_ore',
            'blue_skies:everbright_charoite_ore'
        ];
    });
});
