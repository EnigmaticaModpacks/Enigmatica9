ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/framedblocks/shaped/';

    const recipes = [
        {
            output: 'framedblocks:framing_saw',
            pattern: [' A ', 'BBB'],
            key: {
                A: '#forge:ingots/knightmetal',
                B: 'framedblocks:framed_cube'
            },
            id: `${id_prefix}framing_saw`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
