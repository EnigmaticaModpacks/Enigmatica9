ServerEvents.tags('item', (event) => {
    var items = [/_hammer$/, /jackhammer/, /warhammer/];

    var exceptions = ['immersiveengineering:gunpart_hammer', 'immersiveengineering:bannerpattern_hammer'];

    var tags = ['forge:tools', 'forge:hammers', 'forge:tools/hammers'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
