ServerEvents.tags('entity_type', (event) => {
    let entities = ['#enigmatica:mob_spawner_blacklist'];
    event.get('industrialforegoing:mob_imprisonment_tool_blacklist').add(entities);
});
