ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/armor_upgrade/';
    const recipes = [
        {
            pedestalItems: [
                { item: { tag: 'forge:gems/moonstone' } },
                { item: { tag: 'forge:gems/moonstone' } },
                { item: { tag: 'forge:gems/moonstone' } }
            ],
            sourceCost: 2500,
            tier: 1,
            id: `ars_nouveau:upgrade_1`
        },
        {
            pedestalItems: [
                { item: { tag: 'forge:gems/charoite' } },
                { item: { tag: 'forge:gems/diopside' } },
                { item: { tag: 'forge:gems/pyrope' } },
                { item: { tag: 'forge:gems/aquite' } }
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
