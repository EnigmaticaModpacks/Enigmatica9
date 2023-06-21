ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/shapeless/';

    const recipes = [
        {
            output: 'minecraft:crafting_table',
            inputs: ['#forge:workbench'],
            id: `${id_prefix}crafting_table`
        },
        {
            output: '4x minecraft:honeycomb',
            inputs: ['minecraft:honeycomb_block'],
            id: `${id_prefix}honeycomb`
        },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
