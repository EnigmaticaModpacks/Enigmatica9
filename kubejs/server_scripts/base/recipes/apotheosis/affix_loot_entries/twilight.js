/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/overworld/';
    const recipes = [
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:ender_bow', count: 1, nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:ice_bow', count: 1, nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:seeker_bow', count: 1, nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 3,
            stack: { item: 'twilightforest:triple_bow', count: 1, nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 65,
            quality: 5,
            stack: { item: 'twilightforest:fiery_pickaxe', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 65,
            quality: 5,
            stack: { item: 'twilightforest:fiery_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 1,
            stack: { item: 'twilightforest:ironwood_axe', count: 1, nbt: default_nbt },
            type: 'HEAVY_WEAPON',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 1,
            stack: { item: 'twilightforest:ironwood_pickaxe', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 1,
            stack: { item: 'twilightforest:ironwood_shovel', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 1,
            stack: { item: 'twilightforest:ironwood_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 50,
            quality: 8,
            stack: { item: 'twilightforest:knightmetal_axe', count: 1, nbt: default_nbt },
            type: 'HEAVY_WEAPON',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 65,
            quality: 5,
            stack: { item: 'twilightforest:knightmetal_pickaxe', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 65,
            quality: 5,
            stack: { item: 'twilightforest:knightmetal_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 85,
            quality: 3,
            stack: { item: 'twilightforest:steeleaf_axe', count: 1, nbt: default_nbt },
            type: 'HEAVY_WEAPON',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 85,
            quality: 3,
            stack: { item: 'twilightforest:steeleaf_pickaxe', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 85,
            quality: 3,
            stack: { item: 'twilightforest:steeleaf_shovel', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 85,
            quality: 3,
            stack: { item: 'twilightforest:steeleaf_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['twilightforest:twilight_forest'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:shield', count: 1, nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:trident', count: 1, nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['twilightforest:twilight_forest']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { item: 'twilightforest:ironwood_helmet', count: 1, nbt: default_nbt },
                { item: 'twilightforest:ironwood_chestplate', count: 1, nbt: default_nbt },
                { item: 'twilightforest:ironwood_leggings', count: 1, nbt: default_nbt },
                { item: 'twilightforest:ironwood_boots', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 1,
                type: 'ARMOR',
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { item: 'twilightforest:steeleaf_helmet', count: 1, nbt: default_nbt },
                { item: 'twilightforest:steeleaf_chestplate', count: 1, nbt: default_nbt },
                { item: 'twilightforest:steeleaf_leggings', count: 1, nbt: default_nbt },
                { item: 'twilightforest:steeleaf_boots', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 85,
                quality: 3,
                type: 'ARMOR',
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { item: 'twilightforest:knightmetal_helmet', count: 1, nbt: default_nbt },
                { item: 'twilightforest:knightmetal_chestplate', count: 1, nbt: default_nbt },
                { item: 'twilightforest:knightmetal_leggings', count: 1, nbt: default_nbt },
                { item: 'twilightforest:knightmetal_boots', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 65,
                quality: 5,
                type: 'ARMOR',
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { item: 'twilightforest:fiery_helmet', count: 1, nbt: default_nbt },
                { item: 'twilightforest:fiery_chestplate', count: 1, nbt: default_nbt },
                { item: 'twilightforest:fiery_leggings', count: 1, nbt: default_nbt },
                { item: 'twilightforest:fiery_boots', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 65,
                quality: 5,
                type: 'ARMOR',
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        }
    ];

    equip_sets.forEach((equip_set) => {
        equip_set.stacks.forEach((stack) => {
            let recipe = Object.assign({}, { stack: stack }, equip_set.attributes);
            recipes.push(recipe);
        });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.stack.item.split(':')[1]}.json`, recipe);
    });
});
