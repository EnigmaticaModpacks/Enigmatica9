ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/crystallizer/';

    const recipes = [
        {
            ingredients: [
                { fluid: 'industrialforegoing:biofuel', amount: 500 },
                { item: 'minecraft:sculk', count: 9 }
            ],
            result: [{ item: 'minecraft:echo_shard' }],
            energy: 12000,
            id: `${id_prefix}echo_shard`
        }
    ];

    const metal_shards = ['iron', 'aluminum', 'tin', 'iesnium', 'silver', 'gold', 'copper', 'nickel', 'osmium', 'lead'];

    metal_shards.forEach((metal) => {
        recipes.push({
            ingredients: [
                { fluid: 'hexerei:quicksilver_fluid', amount: 10 },
                { tag: `mekanism:shards/${metal}` },
                { tag: `forge:dusts/dimensional` }
            ],
            result: [{ item: `emendatusenigmatica:${metal}_crystal`, count: 3 }],
            energy: 4000,
            id: `${id_prefix}${metal}_crystal`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crystallizer';
        event.custom(recipe).id(recipe.id);
    });
});
