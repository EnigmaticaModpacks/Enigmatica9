ServerEvents.tags('item', (event) => {
    const items = [
        /_helmet/,
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'ars_nouveau:novice_hood',
        'immersiveengineering:armor_faraday_head',
        'immersiveengineering:armor_steel_head',
        'mekanism:hazmat_mask',
        'mekanism:scuba_mask'
    ];

    const exceptions = [];

    // const tagGroups = ['forge:armors', 'forge:armors/helmets'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:armors').add(items).remove(exceptions);
    event.get('forge:armors/helmets').add(items).remove(exceptions);
});
