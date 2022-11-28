ServerEvents.tags('item', (event) => {
    const items = [/chemical_tank/, /chemical_storage_cell/, 'mekanism:dynamic_tank', 'mekanism:dynamic_valve'];

    // const tagGroups = ['enigmatica:containers', 'enigmatica:containers/gas'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items);
    // });

    event.get('enigmatica:containers').add(items);
    event.get('enigmatica:containers/gas').add(items);
});
