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
            entity: 'ars_nouveau:starbuncle',
            biomes: ['twilightforest:enchanted_forest', 'twilightforest:dense_forest', 'twilightforest:forest'],
            minCount: 1,
            maxCount: 2,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'ars_nouveau:whirlisprig',
            biomes: ['twilightforest:enchanted_forest', 'twilightforest:dense_forest', 'twilightforest:forest'],
            minCount: 1,
            maxCount: 2,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'bookwyrms:book_wyrm',
            biomes: 'twilightforest:enchanted_forest',
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
                'twilightforest:dense_mushroom_forest'
            ],
            minCount: 2,
            maxCount: 4,
            weight: 5
        },
        {
            category: 'creature',
            entity: 'byg:pumpkin_warden',
            biomes: ['twilightforest:spooky_forest', 'twilightforest:dark_forest', 'twilightforest:dark_forest_center'],
            minCount: 1,
            maxCount: 1,
            weight: 5
        },
        {
            category: 'creature',
            entity: 'cnb:lizard',
            biomes: [
                'twilightforest:dense_forest',
                'twilightforest:dense_mushroom_forest',
                'twilightforest:firefly_forest',
                'twilightforest:forest',
                'twilightforest:mushroom_forest',
                'twilightforest:enchanted_forest',
                'twilightforest:dense_mushroom_forest',
                'twilightforest:underground',
                'twilightforest:swamp',
                'twilightforest:fire_swamp',
                'twilightforest:highlands'
            ],
            minCount: 1,
            maxCount: 3,
            weight: 5
        },
        {
            category: 'creature',
            entity: 'cnb:cindershell',
            biomes: ['twilightforest:fire_swamp'],
            minCount: 1,
            maxCount: 1,
            weight: 1
        },
        {
            category: 'creature',
            entity: 'cnb:minipad',
            biomes: ['twilightforest:lake', 'twilightforest:stream', 'twilightforest:swamp'],
            minCount: 1,
            maxCount: 2,
            weight: 20
        },
        {
            category: 'creature',
            entity: 'cnb:lilytad',
            biomes: ['twilightforest:lake', 'twilightforest:stream', 'twilightforest:swamp'],
            minCount: 3,
            maxCount: 5,
            weight: 20
        },
        {
            category: 'creature',
            entity: 'minecraft:frog',
            biomes: ['twilightforest:lake', 'twilightforest:stream', 'twilightforest:swamp'],
            minCount: 3,
            maxCount: 5,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'cnb:little_grebe',
            biomes: ['twilightforest:lake', 'twilightforest:stream', 'twilightforest:swamp'],
            minCount: 1,
            maxCount: 2,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'cnb:yeti',
            biomes: ['twilightforest:snowy_forest', 'twilightforest:glacier'],
            minCount: 2,
            maxCount: 3,
            weight: 10
        },
        {
            category: 'creature',
            entity: 'minecraft:turtle',
            biomes: '#minecraft:is_ocean',
            minCount: 1,
            maxCount: 3,
            weight: 80
        },
        {
            category: 'creature',
            entity: 'minecraft:turtle',
            biomes: '#minecraft:is_beach',
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
