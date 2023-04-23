ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blastfurnace/';
    const recipes = [
        {
            input: '#mekanism:dirty_dusts/iron',
            output: 'kubejs:crude_iron_ingot',
            slag: 'thermal:rich_slag',
            time: 30,
            id: `${id_prefix}crude_iron_from_dirty_dust`
        },
        {
            input: '#mekanism:crystals/iron',
            output: 'kubejs:crude_iron_ingot',
            slag: 'thermal:rich_slag',
            time: 5,
            id: `${id_prefix}crude_iron_from_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        recipe.slag = Item.of(recipe.slag).toJson();
        // Specify time in seconds in the recipes.
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
