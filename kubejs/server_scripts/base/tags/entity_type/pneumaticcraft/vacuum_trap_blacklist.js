ServerEvents.tags('entity_type', (event) => {
    event.get('pneumaticcraft:vacuum_trap_blacklisted').add(['#enigmatica:mob_spawner_blacklist']);
});
