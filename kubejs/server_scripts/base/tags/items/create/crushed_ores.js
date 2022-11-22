ServerEvents.tags('item', (event) => {
    metal_properties.forEach(metal => {
        if (metal.special.create.hasCrushedOre) {
            event.add(`create:crushed_ores/${material}`, `create:crushed_${material}_ore`)
        }
    })
});
