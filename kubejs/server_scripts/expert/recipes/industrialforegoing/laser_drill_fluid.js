ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
            type: 'industrialforegoing:laser_drill_fluid',
            catalyst: { tag: 'industrialforegoing:laser_lens/blue' },
            entity: 'minecraft:empty',
            output: '{Amount:100,FluidName:"kubejs:abyssal_seawater"}',
            pointer: 0,
            rarity: [
                {
                    depth_max: 5,
                    depth_min: 0,
                    weight: 8,
                    blacklist: {},
                    whitelist: { type: 'minecraft:worldgen/biome', values: biomes.in_deep_ocean }
                }
            ],
            id: `${id_prefix}abyssal_seawater`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';

        event.custom(recipe).id(recipe.id);
    });
});
