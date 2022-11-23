ServerEvents.tags('item', (event) => {
    const items = [/_sword$/, 'immersiveengineering:sword_steel'];
    const exceptions = [];

    const tagGroups = ['forge:tools', 'forge:swords', 'forge:tools/swords'];

    tagGroups.forEach((tagGroup) => {
        event.get(tagGroup).add(items).remove(exceptions);
    });
});
