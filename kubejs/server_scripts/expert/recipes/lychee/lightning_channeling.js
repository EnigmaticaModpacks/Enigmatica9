ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/lightning_channeling/';
    const recipes = [
        {
            inputs: ['#forge:ingots/ironwood', 'ars_nouveau:earth_essence'],
            post: [
                { type: 'drop_item', item: 'naturesaura:infused_iron', count: 4 },
                { type: 'drop_xp', xp: 100 }
            ],
            id: `${id_prefix}ironwood_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:lightning_channeling';

        recipe.item_in = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
