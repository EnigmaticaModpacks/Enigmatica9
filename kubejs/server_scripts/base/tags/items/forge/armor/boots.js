ServerEvents.tags('item', (event) => {
    const items = [
        /_boots/,
        'immersiveengineering:armor_faraday_feet',
        'immersiveengineering:armor_steel_feet',
        'mekanism:free_runners',
        'naturesaura:infused_iron_shoes',
        'naturesaura:sky_shoes'
    ];
    const exceptions = [
        'pneumaticcraft:jet_boots_upgrade_1',
        'pneumaticcraft:jet_boots_upgrade_2',
        'pneumaticcraft:jet_boots_upgrade_3',
        'pneumaticcraft:jet_boots_upgrade_4',
        'pneumaticcraft:jet_boots_upgrade_5'
    ];

    // const tagGroups = ['forge:armors', 'forge:armors/boots'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:armors').add(items).remove(exceptions);
    event.get('forge:armors/boots').add(items).remove(exceptions);
});
