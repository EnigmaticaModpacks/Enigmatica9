ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blastfurnace/';
    const recipes = [
        {
            input: { tag: 'mekanism:dirty_dusts/iron' },
            result: { item: 'kubejs:pig_iron_ingot' },
            slag: Item.of('thermal:slag').toJson(),
            time: 30,
            id: `${id_prefix}pig_iron_from_iron_dirty_dust`
        },
        {
            input: { tag: 'mekanism:crystals/iron' },
            result: { item: 'kubejs:pig_iron_ingot' },
            slag: Item.of('thermal:slag').toJson(),
            time: 5,
            id: `${id_prefix}pig_iron_from_iron_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace';
        // Specify time in seconds in the recipes.
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
