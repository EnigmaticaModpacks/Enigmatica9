ServerEvents.tags('fluid', (event) => {
    event
        .get('immersiveengineering:drill_fuel')
        .add([
            '#forge:diesel',
            '#forge:biodiesel',
            '#forge:biofuel',
            '#forge:bioethanol',
            '#forge:gasoline',
            '#forge:kerosene'
        ]);
});
