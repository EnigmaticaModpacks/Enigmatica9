ServerEvents.tags('item', (event) => {
    const items = [/_bow$/];
    const exceptions = [];

    // const tagGroups = ['forge:tools', 'forge:bows', 'forge:tools/bows'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/bows').add(items).remove(exceptions);
    event.get('forge:bows').add(items).remove(exceptions);
});
