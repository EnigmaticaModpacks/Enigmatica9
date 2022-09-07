ServerEvents.tags('item', (event) => {
    var items = [/_knife$/];

    var exceptions = [];

    var tags = ['forge:tools', 'forge:knives', 'farmersdelight:tools/knives', 'farmersdelight:straw_harvesters'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
