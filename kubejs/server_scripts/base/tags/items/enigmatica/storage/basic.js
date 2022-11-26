ServerEvents.tags('item', (event) => {
    const items = [
        /chest$/,
        /sophisticatedstorage:.*barrel/,
        /cabinet/,
        /shulker_box/,
        /rftoolsstorage:storage_module/,
        /cfm:.*_cabinet/,
        /cfm:.*_drawer/,
        /cfm:.*_cooler/,
        /cfm:.*_crate/,
        '#forge:chests',
        'farmersdelight:basket',
        'immersiveengineering:crate',
        'immersiveengineering:reinforced_crate',
        'minecraft:barrel',
        'minecraft:dispenser',
        'minecraft:dropper'
        // 'rftoolsstorage:modular_storage'
    ];
    const exceptions = [
        'naturesaura:sky_chest',
        'naturesaura:infused_iron_chest',
        'immersiveengineering:armor_steel_chest',
        'immersiveengineering:armor_faraday_chest'
    ];

    const tagGroups = ['enigmatica:containers', 'enigmatica:containers/basic'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
