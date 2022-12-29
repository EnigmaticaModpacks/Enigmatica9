ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/lychee/block_interacting/';
    const recipes = [
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:farmland',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'farmersdelight:rich_soil_farmland' },
                { type: 'damage_item', damage: 25 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/rich_soil_farmland`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:moss_block' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/moss_block`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'twilightforest:root',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'twilightforest:liveroot_block' },
                { type: 'damage_item', damage: 125 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/liveroot_block`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_bricks',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_bricks' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_bricks`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_brick_wall',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_brick_wall' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_brick_wall`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:stone_brick_stairs',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_stone_brick_stairs' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_stone_brick_stairs`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_stairs',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_stairs' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_stairs`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_slab',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_slab' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_slab`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'minecraft:cobblestone_wall',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'minecraft:mossy_cobblestone_wall' },
                { type: 'damage_item', damage: 50 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/mossy_cobblestone_wall`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:quartz_block',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:damaged_budding_quartz' },
                { type: 'damage_item', damage: 200 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/damaged_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:damaged_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:chipped_budding_quartz' },
                { type: 'damage_item', damage: 200 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/chipped_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:chipped_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawed_budding_quartz' },
                { type: 'damage_item', damage: 200 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawed_budding_quartz`
        },
        {
            item_in: { item: 'naturesaura:infused_iron_pickaxe' },
            block_in: 'ae2:flawed_budding_quartz',
            post: [
                { type: 'prevent_default' },
                { type: 'place', block: 'ae2:flawless_budding_quartz' },
                { type: 'damage_item', damage: 200 }
            ],
            id: `${id_prefix}infused_iron_pickaxe_conversions/flawless_budding_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});
