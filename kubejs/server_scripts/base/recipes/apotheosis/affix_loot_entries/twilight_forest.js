/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/twilight_forest/';
    const recipes = [
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:ender_bow', nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:ice_bow', nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:seeker_bow', nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:triple_bow', nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:shield', nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:trident', nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { type: 'ARMOR', item: 'twilightforest:ironwood_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:ironwood_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:ironwood_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:ironwood_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'twilightforest:ironwood_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'twilightforest:ironwood_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'twilightforest:ironwood_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'twilightforest:ironwood_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 1,
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'twilightforest:steeleaf_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:steeleaf_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:steeleaf_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:steeleaf_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'twilightforest:steeleaf_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'twilightforest:steeleaf_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'twilightforest:steeleaf_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'twilightforest:steeleaf_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 85,
                quality: 3,
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'twilightforest:knightmetal_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:knightmetal_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:knightmetal_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:knightmetal_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'twilightforest:knightmetal_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'twilightforest:knightmetal_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'twilightforest:knightmetal_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 65,
                quality: 5,
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'twilightforest:fiery_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:fiery_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:fiery_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'twilightforest:fiery_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'twilightforest:fiery_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'twilightforest:fiery_pickaxe', nbt: default_nbt }
            ],
            attributes: {
                weight: 65,
                quality: 5,
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        }
    ];

    equip_sets.forEach((equip_set) => {
        equip_set.stacks.forEach((stack) => {
            let recipe = Object.assign({}, { stack: stack }, equip_set.attributes);
            if (recipe.stack.type) {
                recipe.type = recipe.stack.type;
            }
            recipes.push(recipe);
        });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.stack.item.split(':')[1]}.json`, recipe);
    });

    // Disable 'twilight' versions. Everything moved to 'twilight_forest' namespace above.
    const disabled_recipes = [
        'ender_bow',
        'fiery_boots',
        'fiery_chestplate',
        'fiery_helmet',
        'fiery_leggings',
        'fiery_pickaxe',
        'fiery_sword',
        'ice_bow',
        'ironwood_axe',
        'ironwood_boots',
        'ironwood_chestplate',
        'ironwood_helmet',
        'ironwood_leggings',
        'ironwood_pickaxe',
        'ironwood_shovel',
        'ironwood_sword',
        'knightmetal_axe',
        'knightmetal_boots',
        'knightmetal_chestplate',
        'knightmetal_helmet',
        'knightmetal_leggings',
        'knightmetal_pickaxe',
        'knightmetal_sword',
        'seeker_bow',
        'shield',
        'steeleaf_axe',
        'steeleaf_boots',
        'steeleaf_chestplate',
        'steeleaf_helmet',
        'steeleaf_leggings',
        'steeleaf_pickaxe',
        'steeleaf_shovel',
        'steeleaf_sword',
        'trident',
        'triple_bow'
    ];

    disabled_recipes.forEach((recipe) => {
        event.addJson(`apotheosis:affix_loot_entries/twilight/${recipe}.json`, {
            conditions: [{ type: 'forge:false' }]
        });
    });
});
