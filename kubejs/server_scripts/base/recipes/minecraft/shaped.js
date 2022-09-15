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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
