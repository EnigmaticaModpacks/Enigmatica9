ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/create/milling/';

    const recipes = [
        {
            outputs: ['emendatusenigmatica:coal_coke_dust'],
            input: '#forge:gems/coal_coke',
            duration: 50,
            id: `${id_prefix}coke_dust`
        },
        {
            outputs: ['9x emendatusenigmatica:coal_coke_dust'],
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
                results: recipe.outputs.map((output) => Item.of(output).toJson()),
                processingTime: recipe.duration
            })
            .id(recipe.id);
    });
});
