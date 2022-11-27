ServerEvents.tags('item', (event) => {
    const items = [
        /_shield$/,
        // 'mekanismtools:steel_shield',
        // 'mekanismtools:refined_obsidian_shield',
        // 'mekanismtools:refined_glowstone_shield',
        // 'mekanismtools:osmium_shield',
        // 'mekanismtools:lapis_lazuli_shield',
        // 'mekanismtools:bronze_shield',
        'immersiveengineering:shield'
    ];

    const exceptions = ['twilightforest:stronghold_shield'];

    // const tagGroups = ['forge:tools', 'forge:shields', 'forge:tools/shields'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/shields').add(items).remove(exceptions);
    event.get('forge:shields').add(items).remove(exceptions);
});
