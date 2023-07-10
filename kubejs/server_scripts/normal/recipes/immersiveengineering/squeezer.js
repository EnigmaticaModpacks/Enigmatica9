ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/immersiveengineering/squeezer/';

    const recipes = [
        {
            result: Item.of('emendatusenigmatica:hop_graphite_dust').toJson(),
            input: { base_ingredient: { tag: 'forge:dusts/coal_coke' }, count: 8 },
            energy: 19200,
            id: `${id_prefix}hop_graphite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:squeezer';

        event.custom(recipe).id(recipe.id);
    });
});
