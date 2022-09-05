ServerEvents.tags('item', (event) => {
    var items = [
        '#forge:tools/swords',
        '#forge:tools/axes',
        '#forge:tools/multi_tools',
        // 'botania:ender_dagger',
        'byg:pendorite_battleaxe'
        // 'industrialforegoing:infinity_hammer'
        // 'undergarden:cloggrum_battleaxe',
        // 'meetyourfight:depth_star'
    ];
    var exceptions = [];

    var tags = ['forge:weapons', 'forge:weapons/melee'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
