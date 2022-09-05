ServerEvents.tags('item', (event) => {
    var items = [/_hoe/, /_aiot/, 'immersiveengineering:hoe_steel'];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:hoes', 'forge:tools/hoes'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
