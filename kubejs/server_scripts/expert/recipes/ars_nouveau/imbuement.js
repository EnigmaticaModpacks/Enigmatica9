ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/imbuement/';

    const recipes = [
        {
            count: 1,
            input: { tag: 'forge:ingots/pig_iron' },
            output: 'minecraft:iron_ingot',
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } }
            ],
            source: 600,
            id: `${id_prefix}iron_from_pig_iron`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
