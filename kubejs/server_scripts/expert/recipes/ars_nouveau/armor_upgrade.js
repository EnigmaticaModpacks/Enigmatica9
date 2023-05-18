ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/armor_upgrade/';
    const recipes = [
        {
            pedestalItems: [
                { item: { tag: 'forge:gems/infused_diamond' } },
                { item: { tag: 'forge:gems/infused_diamond' } },
                { item: { tag: 'forge:gems/infused_diamond' } }
            ],
            sourceCost: 2500,
            tier: 1,
            id: `ars_nouveau:upgrade_1`
        },
        {
            pedestalItems: [
                { item: { tag: 'forge:gems/niotic' } },
                { item: { tag: 'forge:gems/niotic' } },
                { item: { tag: 'forge:gems/niotic' } }
            ],
            sourceCost: 5000,
            tier: 2,
            id: `ars_nouveau:upgrade_2`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:armor_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
