ServerEvents.tags('item', (event) => {
    var items = [
        'immersiveengineering:armor_faraday_legs',
        'immersiveengineering:armor_steel_legs',
        'mekanism:hazmat_pants',
        'mekanism:mekasuit_pants',
        'naturesaura:infused_iron_pants',
        'naturesaura:sky_pants'
    ];

    var exceptions = [];

    var tags = ['forge:armors', 'forge:armors/leggings'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_leggings/)
            .remove(exceptions);
    });
});
