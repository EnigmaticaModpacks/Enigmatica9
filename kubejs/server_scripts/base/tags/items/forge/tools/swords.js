onEvent('item.tags', (event) => {
    var items = [
        /_sword/,
        'immersiveengineering:sword_steel'
        // 'wstweaks:blaze_blade',
        // 'wstweaks:lava_blade',
    ];
    var exceptions = [];

    var tags = ['forge:tools', 'forge:swords', 'forge:tools/swords'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
