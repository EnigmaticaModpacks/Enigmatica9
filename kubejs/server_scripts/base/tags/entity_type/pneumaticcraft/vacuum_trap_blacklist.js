ServerEvents.tags('entity_type', (event) => {
    const entities = ['#enigmatica:mob_spawner_blacklist'];
    event.get('pneumaticcraft:vacuum_trap_blacklisted').add(entities);
});
