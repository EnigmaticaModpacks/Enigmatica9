ServerEvents.tags('item', (event) => {
    const items = [/_hoe/, /_aiot/, 'immersiveengineering:hoe_steel'];
    const exceptions = [];

    // const tagGroups = ['forge:tools', 'forge:hoes', 'forge:tools/hoes'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/hoes').add(items).remove(exceptions);
    event.get('forge:hoes').add(items).remove(exceptions);
});
