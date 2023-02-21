ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/smelting/';
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
