ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/smelting/';
    const recipes = [
        {
            input: 'minecraft:clay_ball',
            output: 'minecraft:brick',
            xp: 0.5,
            id: `${id_prefix}brick`
        },
        {
            input: 'minecraft:netherrack',
            output: 'minecraft:nether_brick',
            xp: 0.5,
            id: `${id_prefix}nether_brick`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
