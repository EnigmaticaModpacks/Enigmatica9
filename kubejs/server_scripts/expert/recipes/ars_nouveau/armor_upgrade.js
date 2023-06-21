ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/armor_upgrade/';
    const recipes = [
        {
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } }
            ],
            sourceCost: 2500,
            tier: 1,
            id: `ars_nouveau:upgrade_1`
        },
        {
            pedestalItems: [
                { item: { tag: 'forge:gems/spirited' } },
                { item: { tag: 'forge:gems/spirited' } },
                { item: { tag: 'forge:gems/spirited' } }
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
