ServerEvents.tags('item', (event) => {
    event
        .get('enigmatica:containers/gas')
        .add([/chemical_tank/, /chemical_storage_cell/, 'mekanism:dynamic_tank', 'mekanism:dynamic_valve']);
});
