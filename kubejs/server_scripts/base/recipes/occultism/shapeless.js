ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/shapeless/';

    const recipes = [
        {
            output: 'occultism:stable_wormhole',
            inputs: [Item.of('occultism:stable_wormhole', {}).weakNBT()],
            id: `${id_prefix}stable_wormhole_reset`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
