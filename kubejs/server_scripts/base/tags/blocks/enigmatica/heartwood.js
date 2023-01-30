ServerEvents.tags('block', (event) => {
    for (let i = 1; i <= 4; i++) {
        event
            .get(`enigmatica:heartwoods/stage_${i}`)
            .add([`kubejs:heartwood_stage_${i}`, `kubejs:heartwood_stage_${i}_inactive`]);
    }
});
