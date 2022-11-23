ServerEvents.tags('item', (event) => {
    for (let metal in metal_properties) {
        if (metal_properties[metal].special.create.hasCrushedOre) {
            event.add(`create:crushed_ores/${metal}`, `create:crushed_${metal}_ore`)
        }
    }
});
