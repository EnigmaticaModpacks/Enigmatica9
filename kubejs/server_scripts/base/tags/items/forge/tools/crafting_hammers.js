ServerEvents.tags('item', (event) => {
    var items = ['immersiveengineering:hammer'];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/crafting_hammers'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
