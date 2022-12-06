ServerEvents.tags('entity_type', (event) => {
    event.get('industrialforegoing:mob_imprisonment_tool_blacklist').add(['#enigmatica:mob_spawner_blacklist']);
});
