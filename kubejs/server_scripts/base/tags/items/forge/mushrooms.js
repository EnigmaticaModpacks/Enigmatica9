ServerEvents.tags('item', (event) => {
    tree_properties.shrooms.forEach((shroom) => {
        event.add('forge:mushrooms', shroom.sapling);
    });
});
