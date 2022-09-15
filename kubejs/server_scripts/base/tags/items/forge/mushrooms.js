ServerEvents.tags('item', (event) => {
    treeProperties.shrooms.forEach((shroom) => {
        event.add('forge:mushrooms', shroom.sapling);
    });
});
