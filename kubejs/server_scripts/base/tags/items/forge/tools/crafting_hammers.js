ServerEvents.tags('item', (event) => {
    const items = ['immersiveengineering:hammer'];
    const exceptions = [];

    // const tagGroups = ['forge:tools', 'forge:tools/crafting_hammers'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/crafting_hammers').add(items).remove(exceptions);
});
