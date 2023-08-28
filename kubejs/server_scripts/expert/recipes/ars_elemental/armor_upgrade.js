ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_elemental/armor_upgrade/';
    const recipes = [];

    // Replace Netherite with Compressed Iron
    event.forEachRecipe({ type: 'ars_elemental:armor_upgrade' }, (r) => {
        let found = recipes.some((recipe) => recipe.id === r.getId());
        let recipe = JSON.parse(r.json);
        recipe.pedestalItems.push({ item: { tag: 'forge:ingots/compressed_iron' } });
        recipe.pedestalItems.map((pedestalItem) => {
            if (pedestalItem.item.tag == 'forge:ingots/netherite') {
                pedestalItem.item.tag = 'forge:ingots/compressed_iron';
            }
            return pedestalItem;
        });
        if (!found) event.custom(recipe).id(r.getId());
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_elemental:armor_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
