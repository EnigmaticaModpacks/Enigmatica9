ServerEvents.tags('item', (event) => {
    const items = [
        /energy_cell/,
        /energy_cube/,
        /immersiveengineering:capacitor/,
        /induction/,
        /battery/,
        'immersiveengineering:powerpack',
        'mekanism:energy_tablet'
    ];

    // const tagGroups = ['enigmatica:containers', 'enigmatica:containers/energy'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items);
    // });

    event.get('enigmatica:containers').add(items);
    event.get('enigmatica:containers/energy').add(items);
});
