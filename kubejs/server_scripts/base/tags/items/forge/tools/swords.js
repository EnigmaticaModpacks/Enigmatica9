ServerEvents.tags('item', (event) => {
    var items = [/_sword$/, 'immersiveengineering:sword_steel'];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:swords', 'forge:tools/swords'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
