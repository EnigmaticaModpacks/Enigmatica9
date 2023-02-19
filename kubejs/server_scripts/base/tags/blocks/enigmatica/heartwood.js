ServerEvents.tags('block', (event) => {
    for (let i = 4; i > 0; i--) {
        event
            .get(`enigmatica:heartwoods/stage_${i}`)
            .add([`kubejs:heartwood_stage_${i}`, `kubejs:heartwood_stage_${i}_inactive`]);
        if (i < 4) {
            // Allow higher tier rituals to work for lower tiers
            event.get(`enigmatica:heartwoods/stage_${i}`).add(`#enigmatica:heartwoods/stage_${i + 1}`);
        }
    }
});
