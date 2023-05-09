ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/lychee/jei_dummy_recipe/';
    const recipes = [
        // Dummy recipe for block_interacting/mixing_cauldron
        {
            type: 'lychee:block_interacting',
            item_in: { item: 'twilightforest:naga_scale' },
            block_in: 'minecraft:cauldron',
            ghost: true,
            post: [{ type: 'place', block: { blocks: ['hexerei:mixing_cauldron'], state: { gui_render: 'true' } } }],
            id: `${id_prefix}mixing_cauldron`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
