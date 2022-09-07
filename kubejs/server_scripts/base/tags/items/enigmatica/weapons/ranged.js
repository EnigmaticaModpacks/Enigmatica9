ServerEvents.tags('item', (event) => {
    var items = [
        '#forge:tools/bows',
        '#forge:tools/tridents',
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
        'pneumaticcraft:micromissiles',
        'pneumaticcraft:minigun'
    ];
    var exceptions = [];

    var tags = ['enigmatica:weapons', 'enigmatica:weapons/ranged'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
