ServerEvents.tags('item', (event) => {
    // Even tho this tag doesn't exists in Create, it is still used by EE and is required for the unification!
    Object.keys(metal_properties).forEach((metal) => {
        if (Item.exists(`create:crushed_raw_${metal}`)) {
            event.get(`create:crushed_ores/${metal}`).add(`create:crushed_raw_${metal}`);
            event.get(`create:crushed_ores`).add(`create:crushed_raw_${metal}`);
        }
    });
});