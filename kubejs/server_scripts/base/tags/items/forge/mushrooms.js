ServerEvents.tags('item', (event) => {
    let items = [
        'byg:soul_shroom',
        'quark:glow_shroom',
        'byg:death_cap',
        'blue_skies:snowcap_pinhead',
        'blue_skies:snowcap_mushroom'
    ];

    event.add('forge:mushrooms', items);
});
