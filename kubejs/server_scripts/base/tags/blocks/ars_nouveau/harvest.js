ServerEvents.tags('block', (event) => {
    tree_properties.trees.forEach((tree) => {
        event.add('ars_nouveau:harvest/foliage', tree.foliage);
        event.add('ars_nouveau:harvest/stems', tree.stems);
    });

    tree_properties.shrooms.forEach((shroom) => {
        event.add('ars_nouveau:harvest/foliage', shroom.foliage);
        event.add('ars_nouveau:harvest/stems', shroom.stems);
    });
});
