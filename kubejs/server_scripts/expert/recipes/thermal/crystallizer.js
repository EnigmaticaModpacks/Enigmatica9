ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/crystallizer/';

    const recipes = [];

    const metal_shards = ['iron', 'aluminum', 'tin', 'iesnium', 'silver', 'gold', 'copper', 'nickel', 'osmium', 'lead'];

    metal_shards.forEach((metal) => {
        recipes.push({
            ingredients: [
                { fluid: 'hexerei:quicksilver_fluid', amount: 100 },
                { tag: `mekanism:shards/${metal}`, count: 3 },
                { tag: `forge:dusts/dimensional` }
            ],
            result: [{ item: `emendatusenigmatica:${metal}_crystal`, count: 1 }],
            energy: 10000,
            id: `${id_prefix}${metal}_crystal`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crystallizer';
        event.custom(recipe).id(recipe.id);
    });
});
