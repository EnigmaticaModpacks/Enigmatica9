ServerEvents.tags('fluid', (event) => {
    const fluids = [
        '#forge:diesel',
        '#forge:biodiesel',
        '#forge:biofuel',
        '#forge:bioethanol',
        '#forge:gasoline',
        '#forge:kerosene'
    ];
    event.get('immersiveengineering:drill_fuel').add(fluids);
});
