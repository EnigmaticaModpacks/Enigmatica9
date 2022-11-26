ServerEvents.tags("item", (event) => {
    let props = Object.keys(metal_properties);

    props.forEach((metal) => {
        if(metal_properties[metal].create) {
            if (metal_properties[metal].create.crushedOre) {
                event.get(`create:crushed_ores/${metal}`).add(`create:crushed_${metal}_ore`)
            }
        }
    });
});