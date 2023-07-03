ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /* Usage Documentation: https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152 */
    const id_prefix = 'enigmatica:expert/pneumaticcraft/amadron/';

    const recipes = [
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:naga_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:lime_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:entities/naga"},display:{Name:'{"text":"Loot Crate: Naga"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}naga_loot_crate`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:lich_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:light_gray_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:entities/lich"},display:{Name:'{"text":"Loot Crate: Lich"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}lich_loot_crate`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:minoshroom_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:red_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:entities/minoshroom"},display:{Name:'{"text":"Loot Crate: Minoshroom"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}minoshroom_loot_crate`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:snow_queen_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:blue_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:entities/snow_queen"},display:{Name:'{"text":"Loot Crate: Snow Queen"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}snow_queen_loot_crate`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:alpha_yeti_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:light_blue_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:entities/alpha_yeti"},display:{Name:'{"text":"Loot Crate: Alpha Yeti"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}alpha_yeti_loot_crate`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:ur_ghast_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:white_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:entities/ur_ghast"},display:{Name:'{"text":"Loot Crate: Ur-Ghast"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}ur_ghast_loot_crate`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:knight_phantom_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:green_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:structures/stronghold_boss"},display:{Name:'{"text":"Loot Crate: Knight Phantoms"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}knight_phantom_loot_crate`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'twilightforest:hydra_trophy', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'minecraft:cyan_shulker_box',
                amount: 1,
                nbt: `{BlockEntityTag:{LootTable:"twilightforest:entities/hydra"},display:{Name:'{"text":"Loot Crate: Hydra"}'}}`
            },
            level: 0,
            maxStock: 1,
            whitelist: { and: { dimensions: ['twilightforest:twilight_forest'] } },
            id: `${id_prefix}hydra_loot_crate`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});
