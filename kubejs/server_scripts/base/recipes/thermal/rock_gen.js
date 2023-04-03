ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/rock_gen/';

    const recipes = [];

    let types = Object.keys(cobbleworks);

    types.forEach((type) => {
        cobbleworks[type].forEach((material) => {
            let block_adjacent = 'minecraft:water';
            let block_below = material;

            if (type == 'basalts') {
                block_adjacent = 'minecraft:blue_ice';
            }

            recipes.push({
                adjacent: block_adjacent,
                below: block_below,
                result: { item: material },
                id: `${id_prefix}${material.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:rock_gen';
        event.custom(recipe).id(recipe.id);
    });
});
