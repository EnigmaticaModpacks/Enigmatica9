ServerEvents.tags('item', (event) => {
    var items = [/_axe$/, /_paxel/, /_aiot/, 'immersiveengineering:axe_steel'];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:axes', 'forge:tools/axes'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
