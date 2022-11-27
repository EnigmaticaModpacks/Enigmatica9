ServerEvents.tags('item', (event) => {
    const items = [
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

    const exceptions = [];

    // const tagGroups = ['forge:tools', 'forge:multi_tools', 'forge:tools/multi_tools'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/multi_tools').add(items).remove(exceptions);
    event.get('forge:multi_tools').add(items).remove(exceptions);
});
