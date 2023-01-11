ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/shapeless/';

    const recipes = [
        // {
        //     output: 'minecraft:crafting_table',
        //     inputs: ['#forge:workbench'],
        //     id: `${id_prefix}crafting_table`
        // }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
