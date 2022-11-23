ServerEvents.tags('item', (event) => {
    const items = [/_bow$/];
    const exceptions = [];

    const tagGroups = ['forge:tools', 'forge:bows', 'forge:tools/bows'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
