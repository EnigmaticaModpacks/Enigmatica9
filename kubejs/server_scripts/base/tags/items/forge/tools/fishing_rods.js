ServerEvents.tags('item', (event) => {
    const items = [/fishing_rod$/];

    const exceptions = [];

    // const tagGroups = ['forge:tools', 'forge:fishing_rods', 'forge:tools/fishing_rods'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/fishing_rods').add(items).remove(exceptions);
    event.get('forge:fishing_rods').add(items).remove(exceptions);
});
