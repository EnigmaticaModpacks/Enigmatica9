ServerEvents.tags('block', (event) => {
    // Blocks to be accelerated by golems
    event.add('ars_nouveau:golem/budding', [
        'minecraft:budding_amethyst',
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz',
        'blue_skies:moonstone_block',
        'blue_skies:sunstone_block',
        'byg:budding_therium_crystal',
        'byg:budding_subzero_crystal'
    ]);
    // Blocks to be broken by golems
    event.add('ars_nouveau:golem/cluster', [
        'minecraft:amethyst_cluster',
        'ae2:quartz_cluster',
        'blue_skies:moonstone_crystal',
        'blue_skies:sunstone_crystal',
        'byg:therium_crystal_cluster',
        'byg:subzero_crystal_cluster'
    ]);
});
