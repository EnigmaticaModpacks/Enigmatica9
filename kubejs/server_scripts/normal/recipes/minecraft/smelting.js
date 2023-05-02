ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/minecraft/smelting/';
    const recipes = [
        {
            input: '#minecraft:planks',
            output: 'supplementaries:ash',
            xp: 0.5,
            id: `${id_prefix}ash`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
