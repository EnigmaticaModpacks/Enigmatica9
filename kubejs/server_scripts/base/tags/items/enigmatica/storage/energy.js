ServerEvents.tags('item', (event) => {
    event
        .get('enigmatica:containers/energy')
        .add([
            /energy_cell/,
            /energy_cube/,
            /immersiveengineering:capacitor/,
            /induction/,
            /battery/,
            'immersiveengineering:powerpack',
            'mekanism:energy_tablet'
        ]);
});
