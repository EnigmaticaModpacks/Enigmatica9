ServerEvents.tags('item', (event) => {
    const items = [
        /_leggings/,
        'immersiveengineering:armor_faraday_legs',
        'immersiveengineering:armor_steel_legs',
        'mekanism:hazmat_pants',
        'mekanism:mekasuit_pants',
        'naturesaura:infused_iron_pants',
        'naturesaura:sky_pants'
    ];

    const exceptions = [];

    // const tagGroups = ['forge:armors', 'forge:armors/leggings'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:armors').add(items).remove(exceptions);
    event.get('forge:armors/leggings').add(items).remove(exceptions);
});
