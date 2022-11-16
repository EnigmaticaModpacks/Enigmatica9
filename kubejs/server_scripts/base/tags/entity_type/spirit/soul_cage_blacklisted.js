ServerEvents.tags('entity_type', (event) => {
    let entities = ['#enigmatica:mob_spawner_blacklist'];
    event.get('spirit:soul_cage_blacklisted').add(entities);
});
