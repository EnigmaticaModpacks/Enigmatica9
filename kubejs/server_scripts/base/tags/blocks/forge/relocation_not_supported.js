ServerEvents.tags('block', (event) => {
    event.add('forge:relocation_not_supported', [/heartwood_stage/]);
});
