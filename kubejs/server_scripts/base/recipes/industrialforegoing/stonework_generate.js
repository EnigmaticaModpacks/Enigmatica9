ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/industrialforegoing/stonework_generate/';
    const recipes = [
        {
            output: { item: 'minecraft:cobblestone', count: 1 },
            lavaNeed: 1000,
            waterNeed: 1000,
            lavaConsume: 0,
            waterConsume: 0,
            id: `industrialforegoing:stonework_generate/cobblestone`
        },
        {
            output: { item: 'ae2:sky_stone_block', count: 1 },
            lavaNeed: 1000,
            waterNeed: 1000,
            lavaConsume: 0,
            waterConsume: 0,
            id: `${id_prefix}sky_stone_block`
        }
    ];

    let types = Object.keys(cobbleworks);

    types.forEach((type) => {
        cobbleworks[type]
            .filter((material) => material.split(':')[0] == 'minecraft')
            .forEach((material) => {
                recipes.push({
                    output: { item: material, count: 1 },
                    lavaNeed: 1000,
                    waterNeed: 1000,
                    lavaConsume: 0,
                    waterConsume: 0,
                    id: `${id_prefix}${material.replace(':', '_')}`
                });
            });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:stonework_generate';

        event.custom(recipe).id(recipe.id);
    });
});
