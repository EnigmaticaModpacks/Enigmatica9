ServerEvents.tags('item', (event) => {
    var soils = {
        farmland: ['minecraft:farmland', 'farmersdelight:rich_soil_farmland'],
        grass: [
            'minecraft:grass_block',
            'minecraft:moss_block',
            // 'botania:enchanted_soil',
            // 'botania:vivid_grass',
            // 'botania:scorched_grass',
            // 'botania:dry_grass',
            // 'botania:golden_grass',
            // 'botania:infused_grass',
            // 'botania:mutated_grass',
            'byg:overgrown_dacite'
        ],
        dirt: [
            '#enigmatica:soils/grass',
            '#enigmatica:soils/farmland',
            'minecraft:dirt',
            'minecraft:coarse_dirt',
            'minecraft:rooted_dirt',
            'minecraft:mud',
            'byg:peat'
        ],
        sand: ['#forge:sand'],
        nether: ['#forge:netherrack'],
        end: ['#forge:end_stones'],
        soul_sand: ['minecraft:soul_sand', 'minecraft:soul_soil'],
        nether_mushroom: [
            'minecraft:warped_nylium',
            'minecraft:crimson_nylium',
            'byg:sythian_nylium',
            'byg:embur_nylium'
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

    let soil_types = Object.keys(soils);

    soil_types.forEach((soil_type) => {
        event.get(`enigmatica:soils/${soil_type}`).add(soils[soil_type]);
    });
});
