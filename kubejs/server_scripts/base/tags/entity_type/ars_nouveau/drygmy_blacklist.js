ServerEvents.tags('entity_type', (event) => {
    let entities = ['#enigmatica:mob_spawner_blacklist'];
    event.get('ars_nouveau:drygmy_blacklist').add(entities);
});
