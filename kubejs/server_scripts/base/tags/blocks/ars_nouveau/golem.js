ServerEvents.tags('block', (event) => {
    // Blocks to be accelerated by golems
    event.add('ars_nouveau:golem/budding', [
        'minecraft:budding_amethyst',
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz'
    ]);
    // Blocks to be broken by golems
    event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster']);
});
