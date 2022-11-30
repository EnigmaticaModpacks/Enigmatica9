WorldgenEvents.remove((event) => {
    // https://mods.latvian.dev/books/kubejs/page/worldgen-events
    // console.debugEnabled = true;
    event.removeOres((props) => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [
            'blue_skies:horizonite_ore',
            'blue_skies:ventium_ore',
            'blue_skies:falsite_ore',
            'byg:pendorite_ore',
            'byg:ametrine_ore',
            'byg:budding_ametrine_ore',
            'occultism:silver_ore',
            'occultism:silver_ore_deepslate'
        ];
    });
});
