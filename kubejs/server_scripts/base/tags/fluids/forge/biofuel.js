ServerEvents.tags('fluid', (event) => {
    event.get('forge:biofuel').removeAll();
    event.get('forge:biofuel').add(['thermal:refined_fuel', 'industrialforegoing:biofuel']);
});
