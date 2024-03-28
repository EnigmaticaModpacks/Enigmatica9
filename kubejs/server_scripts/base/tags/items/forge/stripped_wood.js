ServerEvents.tags('item', (event) => {
    event.add('forge:stripped_wood', [
        /wood_stripped/,
        /stripped_.*_(wood|hyphae)/,
        'ars_elemental:stripped_yellow_archwood'
    ]);
});
