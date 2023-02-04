WorldgenEvents.add((event) => {
    // Categories:
    // 'ambient'
    // 'axolotls'
    // 'creature'
    // 'misc'
    // 'monster'
    // 'underground_water_creature'
    // 'water_ambient'
    // 'water_creature'

    event.addSpawn((properties) => {
        properties.category = 'creature';
        properties.entity = 'ars_nouveau:drygmy';
        properties.biomes = ['#twilightforest:in_twilight_forest', '#blue_skies:everbright', '#blue_skies:everdawn'];
        properties.minCount = 1;
        properties.maxCount = 2;
        properties.weight = 20;
    });

    event.addSpawn((properties) => {
        properties.category = 'creature';
        properties.entity = 'ars_nouveau:starbuncle';
        properties.biomes = ['#twilightforest:in_twilight_forest', '#blue_skies:everbright', '#blue_skies:everdawn'];
        properties.minCount = 1;
        properties.maxCount = 2;
        properties.weight = 20;
    });

    event.addSpawn((properties) => {
        properties.category = 'creature';
        properties.entity = 'ars_nouveau:whirlisprig';
        properties.biomes = ['#twilightforest:in_twilight_forest', '#blue_skies:everbright', '#blue_skies:everdawn'];
        properties.minCount = 1;
        properties.maxCount = 2;
        properties.weight = 20;
    });

    event.addSpawn((properties) => {
        properties.category = 'creature';
        properties.entity = 'minecraft:turtle';
        properties.weight = 80;
        properties.minCount = 1;
        properties.maxCount = 3;
        properties.biomes = ['#minecraft:is_beach', '#minecraft:is_ocean'];
    });
});
