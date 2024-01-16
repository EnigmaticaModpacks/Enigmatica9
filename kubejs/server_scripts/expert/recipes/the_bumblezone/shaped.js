ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/the_bumblezone/shaped/';

    const recipes = [
        {
            output: Item.of('the_bumblezone:honey_compass', {
                CustomDescription: 'tooltip.the_bumblezone.honey_compass_ancient_city.description',
                CustomName: 'tooltip.the_bumblezone.honey_compass_ancient_city',
                Locked: 1,
                TargetStructureTag: 'minecraft:ancient_city'
            }),
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'minecraft:reinforced_deepslate',
                B: 'the_bumblezone:honey_compass'
            },
            id: `${id_prefix}honey_compass_ancient_city`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
