ServerEvents.tags('item', (event) => {
    Object.keys(metal_properties).forEach((metal) => {
        if (Item.exists(`create:crushed_${metal}_ore`)) {
            event.get(`create:crushed_ores/${metal}`).add(`create:crushed_${metal}_ore`);
        }
    });
});
