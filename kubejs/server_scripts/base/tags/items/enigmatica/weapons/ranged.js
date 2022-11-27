ServerEvents.tags('item', (event) => {
    const items = [
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
    const exceptions = [];

    // const tagGroups = ['enigmatica:weapons', 'enigmatica:weapons/ranged'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('enigmatica:weapons').add(items).remove(exceptions);
    event.get('enigmatica:weapons/ranged').add(items).remove(exceptions);
});
