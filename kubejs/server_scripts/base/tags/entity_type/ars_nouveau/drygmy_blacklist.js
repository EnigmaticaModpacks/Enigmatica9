ServerEvents.tags('entity_type', (event) => {
    event.get('ars_nouveau:drygmy_blacklist').removeAll().add(['#enigmatica:mob_spawner_blacklist']);
});
