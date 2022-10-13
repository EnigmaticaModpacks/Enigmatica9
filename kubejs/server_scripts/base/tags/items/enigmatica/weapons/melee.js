ServerEvents.tags('item', (event) => {
    var items = [
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
    var exceptions = [];

    var tags = ['enigmatica:weapons', 'enigmatica:weapons/melee'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
