ServerEvents.tags('item', (event) => {
    event.get(`enigmatica:soils/farmland`).add(['minecraft:farmland', 'farmersdelight:rich_soil_farmland']);
    event.get(`enigmatica:soils/grass`).add([
        'minecraft:grass_block',
        'byg:overgrown_dacite'
    ]);
    event
        .get(`enigmatica:soils/dirt`)
        .add([
            '#enigmatica:soils/grass',
            '#enigmatica:soils/farmland',
            'minecraft:dirt',
            'minecraft:coarse_dirt',
            'minecraft:rooted_dirt',
            'minecraft:mud',
            'byg:peat',
            'farmersdelight:rich_soil'
        ]);
    event.get(`enigmatica:soils/moss`).add(['minecraft:moss_block']);
    event.get(`enigmatica:soils/sand`).add(['#forge:sand']);
    event.get(`enigmatica:soils/netherrack`).add(['#forge:netherrack']);
    event.get(`enigmatica:soils/end_stone`).add(['#forge:end_stones']);
    event.get(`enigmatica:soils/soul_sand`).add(['minecraft:soul_sand', 'minecraft:soul_soil']);
    event
        .get(`enigmatica:soils/nether_mushroom`)
        .add([
            'minecraft:warped_nylium',
            'minecraft:crimson_nylium',
            'byg:sythian_nylium',
            'byg:embur_nylium',
            'byg:mycelium_netherrack'
        ]);
    event
        .get(`enigmatica:soils/end_mushroom`)
        .add(['byg:imparius_phylium', 'byg:ivis_phylium', 'byg:bulbis_phycelium', 'byg:shulkren_phylium']);
    event
        .get(`enigmatica:soils/mushroom`)
        .add([
            '#enigmatica:soils/nether_mushroom',
            '#enigmatica:soils/end_mushroom',
            'minecraft:mycelium',
            'minecraft:podzol',
            'byg:podzol_dacite'
        ]);
});
