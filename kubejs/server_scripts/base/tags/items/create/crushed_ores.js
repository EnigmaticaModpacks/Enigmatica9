ServerEvents.tags('item', (event) => {
    let props = Object.keys(metal_properties);

    props.forEach((metal) => {
        if (Item.exists(`create:crushed_${metal}_ore`)) {
            event.get(`create:crushed_ores/${metal}`).add(`create:crushed_${metal}_ore`);
        }
    });
});
