ServerEvents.tags('item', (event) => {
    var items = [/_shovel$/, /_aiot/, /_paxel/, /_excavator/, 'immersiveengineering:shovel_steel'];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:shovels', 'forge:tools/shovels'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
