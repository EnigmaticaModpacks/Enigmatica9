ServerEvents.tags('item', (event) => {
    // Items golems can pick up
    event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard']);
});
