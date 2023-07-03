ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/manyideas_core/table_sawing_diamond/';
    const recipes = [
        {
            type: 'manyideas_core:table_sawing_diamond',
            ingredient: { tag: 'forge:storage_blocks/knightmetal' },
            result: 'manyideas_core:plate_iron',
            count: 8,
            id: `${id_prefix}plate_iron`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'manyideas_core:table_sawing_diamond';
        event.custom(recipe).id(recipe.id);
    });
});
