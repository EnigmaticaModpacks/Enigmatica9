ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/spirit/shapeless/';

    const recipes = [
        {
            output: '9x spirit:soul_steel_ingot',
            inputs: ['#forge:storage_blocks/soul_steel'],
            id: `${id_prefix}soul_steel_ingots`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
