ServerEvents.tags('entity_type', (event) => {
    event.get('enigmatica:elementals').add(['minecraft:blaze', 'thermal:blizz', 'thermal:blitz', 'thermal:basalz']);
    event.get('enigmatica:elementals/fire').add('minecraft:blaze');
    event.get('enigmatica:elementals/water').add('thermal:blizz');
    event.get('enigmatica:elementals/air').add('thermal:blitz');
    event.get('enigmatica:elementals/earth').add('thermal:basalz');
});
