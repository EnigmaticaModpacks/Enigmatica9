ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blasfurnace/';
    const recipes = [
        {
            input: { tag: 'mekanism:clumps/iron' },
            result: { item: 'kubejs:pig_iron_ingot' },
            slag: Item.of(AlmostUnified.getPreferredItemForTag('forge:slag')).toJson(),
            time: 60 * 20,
            id: `${id_prefix}pig_iron`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace';

        event.custom(recipe).id(recipe.id);
    });
});
