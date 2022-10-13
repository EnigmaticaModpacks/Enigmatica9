ServerEvents.tags('item', (event) => {
    var items = ['immersiveengineering:powerpack', 'mekanism:energy_tablet'];

    var tags = ['enigmatica:containers', 'enigmatica:containers/energy'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/energy_cell/)
            .add(/energy_cube/)
            .add(/immersiveengineering:capacitor/)
            .add(/induction/)
            .add(/battery/);
    });
});
