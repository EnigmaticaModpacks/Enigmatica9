ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/smelting/';
    const recipes = [
        {
            input: '#minecraft:planks',
            output: 'supplementaries:ash',
            xp: 0.5,
            id: `${id_prefix}ash`
        },
        {
            input: '#forge:sand/colorless',
            output: 'minecraft:glass',
            xp: 0.5,
            id: 'minecraft:glass'
        },
        {
            input: '#forge:sand/red',
            output: 'minecraft:red_stained_glass',
            xp: 0.5,
            id: `${id_prefix}red_stained_glass`
        },
        {
            input: '#forge:sand/black',
            output: 'minecraft:black_stained_glass',
            xp: 0.5,
            id: `byg:black_glass_from_sand`
        },
        {
            input: '#forge:sand/white',
            output: 'minecraft:white_stained_glass',
            xp: 0.5,
            id: `byg:white_glass_from_sand`
        },
        {
            input: '#forge:sand/blue',
            output: 'minecraft:blue_stained_glass',
            xp: 0.5,
            id: `byg:blue_glass_from_sand`
        },
        {
            input: '#forge:sand/pink',
            output: 'minecraft:pink_stained_glass',
            xp: 0.5,
            id: `byg:pink_glass_from_sand`
        },
        {
            input: '#forge:sand/purple',
            output: 'minecraft:purple_stained_glass',
            xp: 0.5,
            id: `byg:purple_glass_from_sand`
        },
        {
            input: 'immersiveengineering:slag_gravel',
            output: 'immersiveengineering:slag_glass',
            xp: 0.5,
            id: `${id_prefix}slag_glass`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
