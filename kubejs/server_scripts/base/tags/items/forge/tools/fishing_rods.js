ServerEvents.tags('item', (event) => {
    const items = [/fishing_rod$/];

    const exceptions = [];

    const tagGroups = ['forge:tools', 'forge:fishing_rods', 'forge:tools/fishing_rods'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
