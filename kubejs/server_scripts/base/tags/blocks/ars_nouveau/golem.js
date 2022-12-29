ServerEvents.tags('block', (event) => {
    // Blocks to be accelerated by golems
    event.add('ars_nouveau:golem/budding', ['minecraft:budding_amethyst']);
    // Blocks to be broken by golems
    event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster']);
});
