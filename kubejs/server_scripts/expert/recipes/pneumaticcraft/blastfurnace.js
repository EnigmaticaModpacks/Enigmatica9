ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blasfurnace/';
    const recipes = [
        {
            input: { tag: 'mekanism:dirty_dusts/iron' },
            result: { item: 'kubejs:pig_iron_ingot' },
            slag: Item.of(AlmostUnified.getPreferredItemForTag('forge:slag')).toJson(),
            time: 30 * 20,
            id: `${id_prefix}pig_iron_from_iron_dirty_dust`
        },
        {
            input: { tag: 'mekanism:crystals/iron' },
            result: { item: 'kubejs:pig_iron_ingot' },
            slag: Item.of(AlmostUnified.getPreferredItemForTag('forge:slag')).toJson(),
            time: 5 * 20,
            id: `${id_prefix}pig_iron_from_iron_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace';

        event.custom(recipe).id(recipe.id);
    });
});
