ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/hive_extractor/';

    const recipes = [];

    const hives = ['minecraft:beehive', 'minecraft:bee_nest'];

    hives.forEach((hive) => {
        recipes.push({
            hive: hive,
            fluid: 'the_bumblezone:honey_fluid_still',
            item: 'minecraft:honeycomb',
            id: `${id_prefix}honey_from_${hive.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:hive_extractor';
        event.custom(recipe).id(recipe.id);
    });
});
