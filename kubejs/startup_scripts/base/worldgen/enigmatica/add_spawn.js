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

    const spawns = [
        {
            category: 'creature',
            entity: 'ars_nouveau:drygmy',
            biomes: ['#twilightforest:in_twilight_forest', '#blue_skies:everbright', '#blue_skies:everdawn'],
            minCount: 1,
            maxCount: 2,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'ars_nouveau:starbuncle',
            biomes: ['#twilightforest:in_twilight_forest', '#blue_skies:everbright', '#blue_skies:everdawn'],
            minCount: 1,
            maxCount: 2,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'ars_nouveau:whirlisprig',
            biomes: ['#twilightforest:in_twilight_forest', '#blue_skies:everbright', '#blue_skies:everdawn'],
            minCount: 1,
            maxCount: 2,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'bookwyrms:book_wyrm',
            biomes: ['#twilightforest:in_twilight_forest', '#blue_skies:everbright', '#blue_skies:everdawn'],
            minCount: 1,
            maxCount: 2,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'cnb:sporeling',
            biomes: [
                'twilightforest:spooky_forest',
                'twilightforest:swamp',
                'twilightforest:mushroom_forest',
                'twilightforest:dense_mushroom_forest',
                'twilightforest:enchanted_forest'
            ],
            minCount: 2,
            maxCount: 4,
            weight: 5
        },
        {
            category: 'creature',
            entity: 'minecraft:turtle',
            biomes: ['#minecraft:is_beach', '#minecraft:is_ocean'],
            minCount: 1,
            maxCount: 3,
            weight: 80
        }
    ];

    spawns.forEach((spawn) => {
        event.addSpawn((properties) => {
            properties.category = spawn.category;
            properties.entity = spawn.entity;
            properties.biomes = spawn.biomes;
            properties.minCount = spawn.minCount;
            properties.maxCount = spawn.maxCount;
            properties.weight = spawn.weight;
        });
    });
});
