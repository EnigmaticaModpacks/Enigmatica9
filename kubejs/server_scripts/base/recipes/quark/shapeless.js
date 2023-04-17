ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/quark/shapeless/';

    const recipes = [
        {
            output: 'quark:permafrost',
            inputs: ['minecraft:dirt', 'thermal:ice_charge'],
            id: `${id_prefix}permafrost`
        },
        {
            output: 'quark:rainbow_rune',
            inputs: ['quark:blank_rune', '#forge:dyes/rainbow'],
            id: `${id_prefix}rainbow_rune`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
