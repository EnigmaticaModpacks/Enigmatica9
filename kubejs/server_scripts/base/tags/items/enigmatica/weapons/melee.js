ServerEvents.tags('item', (event) => {
    const items = [
        '#forge:tools/swords',
        '#forge:tools/axes',
        '#forge:tools/multi_tools',
        // 'botania:ender_dagger',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'byg:pendorite_battleaxe'
        // 'industrialforegoing:infinity_hammer'
        // 'undergarden:cloggrum_battleaxe',
        // 'meetyourfight:depth_star',
        // 'bloodmagic:soulsword',
        // 'bloodmagic:soulscythe'
    ];
    const exceptions = [];

    // const tagGroups = ['enigmatica:weapons', 'enigmatica:weapons/melee'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('enigmatica:weapons').add(items).remove(exceptions);
    event.get('enigmatica:weapons/melee').add(items).remove(exceptions);
});
