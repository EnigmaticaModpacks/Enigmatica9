ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/naturesaura/offering/';
    const recipes = [
        {
            output: { item: 'twilightforest:ironwood_ingot', count: 2 },
            input: { item: 'twilightforest:raw_ironwood' },
            start_item: { tag: 'forge:gems/source' },
            id: `${id_prefix}ironwood_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);
    });
});
