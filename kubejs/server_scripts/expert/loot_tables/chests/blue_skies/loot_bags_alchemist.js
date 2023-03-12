ServerEvents.chestLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    let rarities = ['common', 'uncommon', 'rare'];

    rarities.forEach((rarity) => {
        event.modify(`blue_skies:loot_bags/alchemist/${rarity}`, (table) => {
            table.addPool((pool) => {
                pool.rolls = 1.0;
                pool.addItem('kubejs:umbral_pearl', 1, 1);
            });
        });
    });
});
