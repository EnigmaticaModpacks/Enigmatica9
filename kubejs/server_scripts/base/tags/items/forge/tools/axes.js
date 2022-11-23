ServerEvents.tags('item', (event) => {
    const items = [/_axe$/, /_paxel/, /_aiot/, 'immersiveengineering:axe_steel'];
    const exceptions = [];

    const tagGroups = ['forge:tools', 'forge:axes', 'forge:tools/axes'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
