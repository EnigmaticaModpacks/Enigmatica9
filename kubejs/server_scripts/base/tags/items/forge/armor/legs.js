ServerEvents.tags('item', (event) => {
    event
        .get('forge:armors')
        .add([
            /_leggings/,
            'immersiveengineering:armor_faraday_legs',
            'immersiveengineering:armor_steel_legs',
            'mekanism:hazmat_pants',
            'mekanism:mekasuit_pants',
            'naturesaura:infused_iron_pants',
            'naturesaura:sky_pants',
            'naturesaura:depth_pants'
        ]);
    event
        .get('forge:armors/leggings')
        .add([
            /_leggings/,
            'immersiveengineering:armor_faraday_legs',
            'immersiveengineering:armor_steel_legs',
            'mekanism:hazmat_pants',
            'mekanism:mekasuit_pants',
            'naturesaura:infused_iron_pants',
            'naturesaura:sky_pants',
            'naturesaura:depth_pants'
        ]);
});
