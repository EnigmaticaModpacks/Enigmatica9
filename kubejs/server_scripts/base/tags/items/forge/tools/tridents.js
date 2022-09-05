ServerEvents.tags('item', (event) => {
    var items = [/_spear$/];

    var exceptions = ['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer'];

    var tags = ['forge:tools', 'forge:tridents', 'forge:tools/tridents'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
