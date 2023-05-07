ServerEvents.tags('item', (event) => {
    event.add('forge:gems', [
        'minecraft:ender_pearl',
        'minecraft:coal',
        `powah:crystal_blazing`,
        `powah:crystal_niotic`,
        `powah:crystal_spirited`,
        `powah:crystal_nitro`,
        `byg:therium_crystal_shard`,
        `byg:subzero_crystal_shard`,
        `rftoolsbase:infused_diamond`,
        `rftoolsbase:infused_enderpearl`
    ]);
    event.add('forge:gems/ender', 'minecraft:ender_pearl');
    event.add('forge:gems/ender_pearl', 'minecraft:ender_pearl');
    event.add('forge:gems/coal', 'minecraft:coal');
    event.add('forge:gems/charcoal', 'minecraft:charcoal');

    event.add(`forge:gems/blazing`, `powah:crystal_blazing`);
    event.add(`forge:gems/niotic`, `powah:crystal_niotic`);
    event.add(`forge:gems/spirited`, `powah:crystal_spirited`);
    event.add(`forge:gems/nitro`, `powah:crystal_nitro`);

    event.add(`forge:gems/therium`, `byg:therium_crystal_shard`);
    event.add(`forge:gems/subzero`, `byg:subzero_crystal_shard`);

    event.add(`forge:gems/infused_diamond`, `rftoolsbase:infused_diamond`);
    event.add(`forge:gems/infused_ender`, `rftoolsbase:infused_enderpearl`);

    event.add(`forge:gems/spirit_attuned`, `occultism:spirit_attuned_gem`);
});
