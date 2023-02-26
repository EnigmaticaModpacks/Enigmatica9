ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            results: [{ item: 'ae2:quartz_fiber', count: 16 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:glass', count: 32 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:dusts/certus_quartz', count: 16 },
                { item: 'ars_nouveau:fire_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}quartz_fiber`
        },
        {
            results: [{ item: 'kubejs:kaolin_powder', count: 2 }],
            inputs: [{ item: 'kubejs:calcined_kaolin_pearls' }],
            pressure: 4.0,
            id: `${id_prefix}kaolin_powder`
        },
        {
            results: [{ item: 'thermal:beekeeper_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:white_wool', count: 8 },
                { item: 'ars_nouveau:air_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}beekeeper_fabric`
        },
        {
            results: [{ item: 'thermal:diving_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:lime_wool', count: 8 },
                { item: 'ars_nouveau:water_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}diving_fabric`
        },
        {
            results: [{ item: 'thermal:hazmat_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:red_wool', count: 8 },
                { item: 'ars_nouveau:earth_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}hazmat_fabric`
        },
        {
            results: [{ item: 'immersiveengineering:blastbrick', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:compressed_bricks', count: 8 },
                { tag: 'forge:gems/blazing' }
            ],
            pressure: 4.0,
            id: `${id_prefix}blastbrick`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:pressure_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
