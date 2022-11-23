ServerEvents.tags('item', (event) => {
    const items = [
        /_chestplate/,
        'ars_nouveau:apprentice_robes',
        'ars_nouveau:archmage_robes',
        'ars_nouveau:novice_robes',
        'immersiveengineering:armor_faraday_chest',
        'immersiveengineering:armor_steel_chest',
        'mekanism:hazmat_gown',
        'mekanism:jetpack',
        'mekanism:jetpack_armored',
        'mekanism:mekasuit_bodyarmor',
        'naturesaura:infused_iron_chest',
        'naturesaura:sky_chest'
    ];

    const exceptions = ['pneumaticcraft:jet_boots_upgrade_1'];

    const tagGroups = ['forge:armors', 'forge:armors/chestplates'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
