ServerEvents.tags('item', (event) => {
    var items = [
        /_shield$/,
        // 'mekanismtools:steel_shield',
        // 'mekanismtools:refined_obsidian_shield',
        // 'mekanismtools:refined_glowstone_shield',
        // 'mekanismtools:osmium_shield',
        // 'mekanismtools:lapis_lazuli_shield',
        // 'mekanismtools:bronze_shield',
        'immersiveengineering:shield'
    ];

    var exceptions = ['twilightforest:stronghold_shield'];

    var tags = ['forge:tools', 'forge:shields', 'forge:tools/shields'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
