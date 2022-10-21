ServerEvents.tags('item', (event) => {
    var items = [
        '#forge:chests',
        // 'aquaculture:neptunes_bounty',
        'farmersdelight:basket',
        'immersiveengineering:crate',
        'immersiveengineering:reinforced_crate',
        'minecraft:barrel',
        'minecraft:dispenser',
        'minecraft:dropper'
        // 'rftoolsstorage:modular_storage'
    ];
    var exceptions = [
        // 'aquaculture:treasure_chest',
        'naturesaura:sky_chest',
        'naturesaura:infused_iron_chest',
        'immersiveengineering:armor_steel_chest',
        'immersiveengineering:armor_faraday_chest'
    ];

    var tags = ['enigmatica:containers', 'enigmatica:containers/basic'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/chest$/)
            .add(/sophisticatedstorage:\w+barrel/)
            .add(/cabinet/)
            .add(/shulker_box/)
            .add(/rftoolsstorage:storage_module/)
            .add(/cfm:\w+_cabinet/)
            .add(/cfm:\w+_drawer/)
            .add(/cfm:\w+_cooler/)
            .add(/cfm:\w+_crate/)
            .remove(exceptions);
    });
});
