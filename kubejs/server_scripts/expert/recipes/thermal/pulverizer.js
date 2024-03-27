ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/pulverizer/';

    const recipes = [
        {
            ingredient: Item.of('minecraft:potion', { Potion: 'minecraft:strong_regeneration' }).weakNBT().toJson(),
            result: [{ item: 'kubejs:mote_of_rebirth', count: 3 }],
            energy: 51200,
            id: `${id_prefix}mote_of_rebirth`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:pulverizer';
        event.custom(recipe).id(recipe.id);
    });
});
