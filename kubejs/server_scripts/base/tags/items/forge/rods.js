ServerEvents.tags('item', (event) => {
    event.add('forge:rods', ['thermal:blizz_rod', 'thermal:blitz_rod', 'thermal:basalz_rod']);

    event.add(`forge:rods/blizz`, 'thermal:blizz_rod');
    event.add(`forge:rods/blitz`, 'thermal:blitz_rod');
    event.add(`forge:rods/basalz`, 'thermal:basalz_rod');
});
