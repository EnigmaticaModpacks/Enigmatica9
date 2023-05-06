ServerEvents.tags('block', (event) => {
    // Blocks to be accelerated by golems
    event.add('ars_nouveau:golem/budding', [
        'minecraft:budding_amethyst',
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz',
        'byg:budding_therium_crystal',
        'byg:budding_subzero_crystal',
        'emendatusenigmatica:budding_fluorite',
        'emendatusenigmatica:budding_sulfur',
        'emendatusenigmatica:budding_dimensional'
    ]);
    // Blocks to be broken by golems
    event.add('ars_nouveau:golem/cluster', [
        'minecraft:amethyst_cluster',
        'ae2:quartz_cluster',
        'byg:therium_crystal_cluster',
        'byg:subzero_crystal_cluster',
        'emendatusenigmatica:fluorite_cluster',
        'emendatusenigmatica:sulfur_cluster',
        'emendatusenigmatica:dimensional_cluster'
    ]);
});
