ServerEvents.tags('item', (event) => {
    const items = [/_knife$/];

    const exceptions = [];

    // const tagGroups = ['forge:tools', 'forge:knives', 'farmersdelight:tools/knives', 'farmersdelight:straw_harvesters'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:knives').add(items).remove(exceptions);
    event.get('farmersdelight:tools/knives').add(items).remove(exceptions);
    event.get('farmersdelight:straw_harvesters').add(items).remove(exceptions);
});
