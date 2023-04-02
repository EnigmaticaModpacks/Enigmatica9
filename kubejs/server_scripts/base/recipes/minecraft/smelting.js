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
            input: ['blue_skies:crystal_sand', 'byg:quartzite_sand'],
            output: 'blue_skies:crystal_glass',
            xp: 0.5,
            id: `blue_skies:crystal_glass_from_smelting_crystal_sand`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
