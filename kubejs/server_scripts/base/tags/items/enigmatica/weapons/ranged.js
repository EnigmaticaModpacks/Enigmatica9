ServerEvents.tags('item', (event) => {
    var items = [
        '#forge:tools/bows',
        // 'botania:flare_chakram',
        // 'botania:thorn_chakram',
        // 'gunswithoutroses:diamond_gatling',
        // 'gunswithoutroses:diamond_shotgun',
        // 'gunswithoutroses:diamond_sniper',
        // 'gunswithoutroses:gold_gun',
        // 'gunswithoutroses:iron_gun',
        'immersiveengineering:chemthrower',
        'immersiveengineering:railgun',
        'immersiveengineering:revolver',
        // 'industrialforegoing:infinity_trident',
        // 'meetyourfight:phantasmal_rifle',
        // 'meetyourfight:cocktail_shotgun',
        'mekanism:flamethrower',
        'minecraft:trident',
        'pneumaticcraft:micromissiles',
        'pneumaticcraft:minigun'
    ];
    var exceptions = [];

    var tags = ['forge:weapons', 'forge:weapons/ranged'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
