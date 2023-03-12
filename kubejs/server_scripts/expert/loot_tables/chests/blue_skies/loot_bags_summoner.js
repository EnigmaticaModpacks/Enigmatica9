ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    let rarities = ['common', 'uncommon', 'rare'];

    rarities.forEach((rarity) => {
        event.modify(`blue_skies:loot_bags/summoner/${rarity}`, (table) => {
            table.addPool((pool) => {
                pool.rolls = 1.0;
                pool.addItem('minecraft:netherite_scrap', 1, [5, 10]);
            });
        });
    });
});
