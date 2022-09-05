ServerEvents.tags('item', (event) => {
    var items = [
        /_paxel/,
        /_aiot/,
        'immersiveengineering:buzzsaw',
        'immersiveengineering:drill',
        // 'industrialforegoing:infinity_drill',
        // 'industrialforegoing:infinity_saw',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'mininggadgets:mininggadget',
        'pneumaticcraft:jackhammer'
        // 'thermal:flux_drill',
        // 'thermal:flux_saw'
    ];

    var exceptions = [];

    var tags = ['forge:tools', 'forge:multi_tools', 'forge:tools/multi_tools'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
