ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/supplementaries/shapeless/';

    const recipes = [
        {
            output: 'hexerei:herb_jar',
            inputs: ['thermal:jar', 'minecraft:paper'],
            id: `${id_prefix}herb_jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
