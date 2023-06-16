ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/crystallizer/';

    const recipes = [
        {
            ingredients: [{ fluid: 'minecraft:water', amount: 1000 }, { tag: 'forge:dusts/dimensional' }],
            result: [{ item: 'rftoolsbase:dimensionalshard' }],
            energy: 2500,
            id: `${id_prefix}dimensional_shard_from_dust`
        },
        {
            ingredients: [{ fluid: 'minecraft:water', amount: 1000 }, { tag: 'forge:dusts/fluorite' }],
            result: [{ item: 'emendatusenigmatica:fluorite_gem' }],
            energy: 2500,
            id: `${id_prefix}fluorite_shard_from_dust`
        },
        {
            ingredients: [{ fluid: 'minecraft:water', amount: 1000 }, { tag: 'forge:dusts/therium' }],
            result: [{ item: 'byg:therium_crystal_shard' }],
            energy: 2500,
            id: `${id_prefix}therium_shard_from_dust`
        },
        {
            ingredients: [{ fluid: 'minecraft:water', amount: 1000 }, { tag: 'forge:dusts/subzero' }],
            result: [{ item: 'byg:subzero_crystal_shard' }],
            energy: 2500,
            id: `${id_prefix}subzero_shard_from_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crystallizer';
        event.custom(recipe).id(recipe.id);
    });
});
