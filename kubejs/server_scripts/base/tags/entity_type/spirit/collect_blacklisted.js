ServerEvents.tags('entity_type', (event) => {
    event.get('spirit:collect_blacklisted').add(['#enigmatica:mob_spawner_blacklist']);
});
