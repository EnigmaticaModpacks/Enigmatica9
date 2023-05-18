ServerEvents.tags('item', (event) => {
    const items = [
        'engineersdecor:dense_grit_sand_block',
        'byg:pink_sand',
        'byg:purple_sand',
        'byg:blue_sand',
        'byg:white_sand',
        'byg:black_sand',
        'byg:warped_soul_soil',
        'byg:warped_soul_sand',
        'minecraft:soul_soil',
        'engineersdecor:dense_grit_dirt_block',
        'byg:lush_dirt',
        'minecraft:coarse_dirt'
    ];

    event.get('industrialforegoing:sludge').add(items);
});
