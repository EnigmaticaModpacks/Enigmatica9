ServerEvents.tags('item', (event) => {
    var items = [/_bow$/];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:bows', 'forge:tools/bows'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
