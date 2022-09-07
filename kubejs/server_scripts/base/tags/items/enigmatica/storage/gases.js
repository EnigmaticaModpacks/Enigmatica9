ServerEvents.tags('item', (event) => {
    var items = ['mekanism:dynamic_tank', 'mekanism:dynamic_valve'];

    var tags = ['enigmatica:containers', 'enigmatica:containers/gas'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/chemical_tank/);
    });
});
