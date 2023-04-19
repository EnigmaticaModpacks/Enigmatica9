ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/enriching/';
    const recipes = [
        {
            output: { item: 'minecraft:echo_shard' },
            input: { ingredient: { item: 'minecraft:sculk' }, amount: 4 },
            id: `${id_prefix}echo_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        event.custom(recipe).id(recipe.id);
    });
});
