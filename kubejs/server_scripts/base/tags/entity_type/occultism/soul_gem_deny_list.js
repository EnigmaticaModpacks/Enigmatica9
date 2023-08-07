ServerEvents.tags('entity_type', (event) => {
    event.get('occultism:soul_gem_deny_list').remove('minecraft:wither');
});
