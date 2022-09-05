ServerEvents.tags('item', (event) => {
    var items = [
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'ars_nouveau:novice_hood',
        'immersiveengineering:armor_faraday_head',
        'immersiveengineering:armor_steel_head',
        'mekanism:hazmat_mask',
        'mekanism:scuba_mask'
    ];

    var exceptions = [];

    var tags = ['forge:armors', 'forge:armors/helmets'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_helmet/)
            .remove(exceptions);
    });
});
