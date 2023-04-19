ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/crushing/';

    const recipes = [
        {
            outputs: [AlmostUnified.getPreferredItemForTag('forge:dusts/coal_coke')],
            input: '#forge:gems/coal_coke',
            duration: 50,
            id: `${id_prefix}coke_dust`
        },
        {
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:dusts/coal_coke'), 9)],
            input: '#forge:storage_blocks/coal_coke',
            duration: 50,
            id: `${id_prefix}coke_dust_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'create:milling',
                ingredients: [Ingredient.of(recipe.input).toJson()],
                results: recipe.outputs.map((output) => Ingredient.of(output).toJson()),
                processingTime: recipe.duration
            })
            .id(recipe.id);
    });
});
