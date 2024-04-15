ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/engineersdecor/shaped/';

    const recipes = [
        {
            output: '12x engineersdecor:metal_bar',
            pattern: ['  A', ' A ', 'A  '],
            key: {
                A: '#forge:ingots/knightmetal'
            },
            id: 'engineersdecor:dependent/metal_bar_recipe'
        },
        {
            output: '2x engineersdecor:metal_sliding_door',
            pattern: ['AA', 'BB', 'AA'],
            key: {
                A: 'engineersdecor:metal_bar',
                B: '#forge:plates/aluminum'
            },
            id: 'engineersdecor:independent/metal_sliding_door_recipe'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
