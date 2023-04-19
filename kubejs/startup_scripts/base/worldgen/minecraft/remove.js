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
            'minecraft:diamond_ore',
            'minecraft:redstone_ore',
            'minecraft:gold_ore',
            'minecraft:iron_ore',
            'minecraft:coal_ore'
        ];
    });
});
