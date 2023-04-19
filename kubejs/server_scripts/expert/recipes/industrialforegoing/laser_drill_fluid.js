ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
            output: '{Amount:500,FluidName:"kubejs:abyssal_seawater"}',
            catalyst: { tag: 'industrialforegoing:laser_lens/blue' },
            entity: 'minecraft:empty',
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
            output: '{Amount:500,FluidName:"kubejs:magicite"}',
            catalyst: { tag: 'industrialforegoing:laser_lens/lime' },
            entity: 'ars_nouveau:wilden_boss',
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
        },
        {
            output: '{Amount:500,FluidName:"industrialforegoing:ether_gas"}',
            catalyst: { tag: 'industrialforegoing:laser_lens/purple' },
            entity: 'minecraft:wither',
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
            id: `industrialforegoing:laser_drill_fluid/ether_gas`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
