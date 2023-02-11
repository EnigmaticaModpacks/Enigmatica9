ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/shaped/';

    const recipes = [
        {
            output: '10x minecraft:chain',
            pattern: [' S ', ' I ', ' S '],
            key: {
                S: 'minecraft:iron_nugget',
                I: '#forge:ingots/iron'
            },
            id: `minecraft:chain`
        },
        {
            output: 'minecraft:red_nether_bricks',
            pattern: ['AA', 'AA'],
            key: {
                A: 'kubejs:red_nether_brick'
            },
            id: `${id_prefix}red_nether_bricks`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
