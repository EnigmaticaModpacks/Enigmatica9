ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/quark/shapeless/';

    const recipes = [
        {
            output: 'quark:permafrost',
            inputs: ['minecraft:dirt', 'thermal:ice_charge'],
            id: `${id_prefix}permafrost`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
