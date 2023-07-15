ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/mekanism/painting/';

    const recipes = [];

    colors.forEach((color) => {
        recipes.push({
            output: { item: `minecraft:black_wool` },
            chemicalInput: { amount: 256, pigment: `mekanism:${color}` },
            itemInput: {
                ingredient: {
                    type: 'forge:difference',
                    base: { tag: 'mekanism:colorable/rockwool' },
                    subtracted: { item: `minecraft:black_wool` }
                }
            },
            id: `${id_prefix}${color}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:painting';
        event.custom(recipe).id(recipe.id);
    });
});
