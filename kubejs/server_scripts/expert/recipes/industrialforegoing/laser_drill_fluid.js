ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
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
        },
        {
            catalyst: { tag: 'industrialforegoing:laser_lens/lime' },
            entity: 'ars_nouveau:wilden_boss',
            output: '{Amount:500,FluidName:"kubejs:magicite"}',
            pointer: 0,
            rarity: [
                {
                    depth_max: 256,
                    depth_min: -64,
                    weight: 8,
                    blacklist: {},
                    whitelist: {}
                }
            ],
            id: `${id_prefix}magicite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';

        event.custom(recipe).id(recipe.id);
    });
});
