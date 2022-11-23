ServerEvents.tags('item', (event) => {
    const soils = {
        farmland: ['minecraft:farmland', 'farmersdelight:rich_soil_farmland'],
        grass: [
            'minecraft:grass_block',
            // 'botania:enchanted_soil',
            // 'botania:vivid_grass',
            // 'botania:scorched_grass',
            // 'botania:dry_grass',
            // 'botania:golden_grass',
            // 'botania:infused_grass',
            // 'botania:mutated_grass',
            'byg:overgrown_dacite',
            'blue_skies:lunar_cherry_grass_block',
            'blue_skies:turquoise_cherry_grass_block',
            'blue_skies:lunar_grass_block',
            'blue_skies:turquoise_grass_block'
        ],
        dirt: [
            '#enigmatica:soils/grass',
            '#enigmatica:soils/farmland',
            'minecraft:dirt',
            'minecraft:coarse_dirt',
            'minecraft:rooted_dirt',
            'minecraft:mud',
            'byg:peat',
            'blue_skies:coarse_lunar_dirt',
            'blue_skies:lunar_dirt',
            'blue_skies:coarse_turquoise_dirt',
            'blue_skies:turquoise_dirt',
            'farmersdelight:rich_soil'
        ],
        moss: ['minecraft:moss_block'],
        sand: ['#forge:sand'],
        netherrack: ['#forge:netherrack'],
        end_stone: ['#forge:end_stones'],
        soul_sand: ['minecraft:soul_sand', 'minecraft:soul_soil'],
        nether_mushroom: [
            'minecraft:warped_nylium',
            'minecraft:crimson_nylium',
            'byg:sythian_nylium',
            'byg:embur_nylium',
            'byg:mycelium_netherrack'
        ],
        end_mushroom: ['byg:imparius_phylium', 'byg:ivis_phylium', 'byg:bulbis_phycelium', 'byg:shulkren_phylium'],
        mushroom: [
            '#enigmatica:soils/nether_mushroom',
            '#enigmatica:soils/end_mushroom',
            'minecraft:mycelium',
            'minecraft:podzol',
            'byg:podzol_dacite'
        ]
    };

    const soil_types = Object.keys(soils);

    soil_types.forEach((soil_type) => {
        event.get(`enigmatica:soils/${soil_type}`).add(soils[soil_type]);
    });
});
