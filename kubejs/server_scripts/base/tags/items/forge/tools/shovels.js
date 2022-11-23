ServerEvents.tags('item', (event) => {
    const items = [/_shovel$/, /_aiot/, /_paxel/, /_excavator/, 'immersiveengineering:shovel_steel'];
    const exceptions = [];

    // const tagGroups = ['forge:tools', 'forge:shovels', 'forge:tools/shovels'];

    // tagGroups.forEach((tagGroup) => {
    //     event.get(tagGroup).add(items).remove(exceptions);
    // });

    event.get('forge:tools').add(items).remove(exceptions);
    event.get('forge:tools/shovels').add(items).remove(exceptions);
    event.get('forge:shovels').add(items).remove(exceptions);
});
