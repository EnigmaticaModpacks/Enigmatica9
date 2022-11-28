ServerEvents.tags('item', (event) => {
    const items = [/_hammer$/, /jackhammer/, /warhammer/];

    const exceptions = ['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer'];

    // const tagGroups = ['forge:tools', 'forge:hammers', 'forge:tools/hammers'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/hammers').add(items).remove(exceptions);
    event.get('forge:hammers').add(items).remove(exceptions);
});
