ServerEvents.tags('item', (event) => {
    var items = [/fishing_rod$/];

    var exceptions = [];

    var tags = ['forge:tools', 'forge:fishing_rods', 'forge:tools/fishing_rods'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
