ServerEvents.tags('entity_type', (event) => {
    event.get('spirit:soul_cage_blacklisted').add(['#enigmatica:mob_spawner_blacklist']);
});
