ServerEvents.tags('item', (event) => {
    const items = [/_spear$/];

    const exceptions = ['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer'];

    // const tagGroups = ['forge:tools', 'forge:tridents', 'forge:tools/tridents'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/tridents').add(items).remove(exceptions);
    event.get('forge:tridents').add(items).remove(exceptions);
});
