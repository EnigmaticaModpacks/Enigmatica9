ServerEvents.tags('block', (event) => {
    treeProperties.trees.forEach((tree) => {
        console.log(tree);
        event.add('ars_nouveau:harvest/foliage', tree.foliage);
        event.add('ars_nouveau:harvest/stems', tree.stems);
    });

    treeProperties.shrooms.forEach((shroom) => {
        console.log(shroom);
        event.add('ars_nouveau:harvest/foliage', shroom.foliage);
        event.add('ars_nouveau:harvest/stems', shroom.stems);
    });
});
