ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/shaped/';

    const recipes = [
        {
            output: 'minecraft:cauldron',
            pattern: ['A A', 'A A', 'AAA'],
            key: {
                A: '#forge:ingots/copper'
            },
            id: `minecraft:cauldron`
        },
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'ABA'],
            key: {
                A: 'minecraft:andesite',
                B: 'minecraft:bricks'
            },
            id: `${id_prefix}furnace`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
