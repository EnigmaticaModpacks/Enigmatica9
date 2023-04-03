ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/enchantment/';
    const recipes = [
        {
            enchantment: 'ars_nouveau:reactive',
            level: 4,
            pedestalItems: [
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:ender_pearls' } },
                { item: { item: 'ars_elemental:mark_of_mastery' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:reactive_4'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchantment';
        event.custom(recipe).id(recipe.id);
    });
});
