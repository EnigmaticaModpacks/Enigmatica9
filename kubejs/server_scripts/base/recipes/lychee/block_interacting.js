ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/lychee/block_interacting/';

    const recipes = [
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:farmland',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'farmersdelight:rich_soil_farmland' },
                { type: 'damage_item', damage: 25 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/rich_soil_farmland`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:moss_block' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/moss_block`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'twilightforest:root',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'twilightforest:liveroot_block' },
                { type: 'damage_item', damage: 125 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.grass.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/liveroot_block`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_bricks',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_bricks' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_bricks`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_brick_wall',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_brick_wall' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_brick_wall`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_brick_stairs',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_brick_stairs' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_brick_stairs`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_stairs',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_stairs' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_stairs`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_slab',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_slab' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_slab`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_wall',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_wall' },
                { type: 'damage_item', damage: 50 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.stone.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_wall`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:quartz_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawless_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawless_budding_quartz_from_quartz_block`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:damaged_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawless_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawless_budding_quartz_from_damaged_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:chipped_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawless_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawless_budding_quartz_from_chipped_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:flawed_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawless_budding_quartz' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawless_budding_quartz_from_flawed_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'byg:therium_crystal_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'byg:budding_therium_crystal' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_therium_crystal`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'byg:subzero_crystal_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'byg:budding_subzero_crystal' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_subzero_crystal`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:amethyst_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:budding_amethyst' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_amethyst`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'emendatusenigmatica:sulfur_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'emendatusenigmatica:budding_sulfur' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_sulfur`
        },
        ,
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'emendatusenigmatica:sulfur_cluster_shard_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'emendatusenigmatica:budding_sulfur' },
                { type: 'damage_item', damage: 100 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_sulfur_from_cluster`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'emendatusenigmatica:dimensional_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'emendatusenigmatica:budding_dimensional' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_dimensional`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'emendatusenigmatica:dimensional_cluster_shard_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'emendatusenigmatica:budding_dimensional' },
                { type: 'damage_item', damage: 100 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_dimensional_from_cluster`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'emendatusenigmatica:fluorite_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'emendatusenigmatica:budding_fluorite' },
                { type: 'damage_item', damage: 200 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_fluorite`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'emendatusenigmatica:fluorite_cluster_shard_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'emendatusenigmatica:budding_fluorite' },
                { type: 'damage_item', damage: 100 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.large_amethyst_bud.place block @p ~ ~ ~',
                    hide: true
                }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/budding_fluorite_from_cluster`
        },
        {
            hide_in_viewer: true,
            item_in: { tag: 'forge:tools/knives' },
            block_in: 'minecraft:pumpkin',
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'north' } },
                    contextual: { type: 'direction', direction: 'north' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'south' } },
                    contextual: { type: 'direction', direction: 'south' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'east' } },
                    contextual: { type: 'direction', direction: 'east' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'west' } },
                    contextual: { type: 'direction', direction: 'west' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'north' } },
                    contextual: { type: 'direction', direction: 'up' }
                },
                {
                    type: 'place',
                    block: { blocks: ['minecraft:carved_pumpkin'], state: { facing: 'south' } },
                    contextual: { type: 'direction', direction: 'down' }
                },
                { type: 'damage_item', damage: 1 },
                { type: 'add_item_cooldown', s: 0.5 },
                {
                    type: 'execute',
                    command: 'playsound minecraft:block.pumpkin.carve block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'drop_item',
                    item: 'minecraft:pumpkin_seeds',
                    count: 4
                }
            ],
            id: `${id_prefix}carved_pumpkin`
        },
        {
            hide_in_viewer: true,
            item_in: { item: 'occultism:soul_gem' },
            block_in: 'ars_nouveau:mob_jar',
            post: [{ type: 'prevent_default' }],
            id: `${id_prefix}prevent_mob_jar_soul_gem`
        },
        {
            hide_in_viewer: true,
            item_in: { item: 'industrialforegoing:mob_imprisonment_tool' },
            block_in: 'ars_nouveau:mob_jar',
            post: [{ type: 'prevent_default' }],
            id: `${id_prefix}prevent_mob_jar_mob_imprisonment_tool`
        },
        {
            hide_in_viewer: true,
            item_in: { item: 'twilightforest:torchberries' },
            block_in: { tag: 'minecraft:dirt' },
            contextual: [
                { type: 'direction', direction: 'down' },
                {
                    type: 'location',
                    offsetY: -1,
                    predicate: { block: { blocks: ['minecraft:air', 'minecraft:cave_air'] } }
                }
            ],
            post: [{ type: 'place', block: 'twilightforest:torchberry_plant', offsetY: -1 }],
            id: `${id_prefix}plant_torchberries`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});
