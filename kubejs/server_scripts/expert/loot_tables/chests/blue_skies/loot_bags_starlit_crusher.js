ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    let rarities = ['common', 'uncommon', 'rare'];

    rarities.forEach((rarity) => {
        event.modify(`blue_skies:loot_bags/starlit_crusher/${rarity}`, (table) => {
            table.addPool((pool) => {
                pool.rolls = 1.0;
                pool.addItem('ars_nouveau:whirlisprig_charm', 1, [1, 2]);
            });
        });
    });
});
