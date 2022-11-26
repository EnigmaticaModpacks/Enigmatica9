ServerEvents.tags('entity_type', (event) => {
    const entities = ['#enigmatica:mob_spawner_blacklist'];
    event.get('industrialforegoing:mob_imprisonment_tool_blacklist').add(entities);
});
