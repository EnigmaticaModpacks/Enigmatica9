/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/overworld/';
    const recipes = [
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:bow', count: 1, nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['minecraft:the_nether']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:crossbow', count: 1, nbt: default_nbt },
            type: 'CROSSBOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['minecraft:the_nether']
        },
        {
            weight: 50,
            quality: 6.0,
            stack: { item: 'minecraft:netherite_axe', count: 1, nbt: default_nbt },
            type: 'HEAVY_WEAPON',
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 50,
            quality: 6.0,
            stack: { item: 'minecraft:netherite_pickaxe', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 50,
            quality: 6.0,
            stack: { item: 'minecraft:netherite_shovel', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 50,
            quality: 6.0,
            stack: { item: 'minecraft:netherite_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'minecraft:golden_axe', count: 1, nbt: default_nbt },
            type: 'HEAVY_WEAPON',
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'minecraft:golden_pickaxe', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'minecraft:golden_shovel', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'uncommon',
            max_rarity: 'epic'
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'minecraft:golden_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['minecraft:the_nether'],
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
            dimensions: ['minecraft:the_nether']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:trident', count: 1, nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['minecraft:the_nether']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { item: 'minecraft:netherite_helmet', count: 1, nbt: default_nbt },
                { item: 'minecraft:netherite_chestplate', count: 1, nbt: default_nbt },
                { item: 'minecraft:netherite_leggings', count: 1, nbt: default_nbt },
                { item: 'minecraft:netherite_boots', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 50,
                quality: 5.0,
                type: 'ARMOR',
                dimensions: ['minecraft:the_nether'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { item: 'minecraft:golden_helmet', count: 1, nbt: default_nbt },
                { item: 'minecraft:golden_chestplate', count: 1, nbt: default_nbt },
                { item: 'minecraft:golden_leggings', count: 1, nbt: default_nbt },
                { item: 'minecraft:golden_boots', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 3.0,
                type: 'ARMOR',
                dimensions: ['minecraft:the_nether'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        // Disabled Default Sets
        {
            stacks: [
                { item: 'minecraft:iron_helmet' },
                { item: 'minecraft:iron_chestplate' },
                { item: 'minecraft:iron_leggings' },
                { item: 'minecraft:iron_boots' },
                { item: 'minecraft:iron_axe' },
                { item: 'minecraft:iron_pickaxe' },
                { item: 'minecraft:iron_shovel' },
                { item: 'minecraft:iron_sword' },
                { item: 'minecraft:diamond_helmet' },
                { item: 'minecraft:diamond_chestplate' },
                { item: 'minecraft:diamond_leggings' },
                { item: 'minecraft:diamond_boots' },
                { item: 'minecraft:diamond_axe' },
                { item: 'minecraft:diamond_pickaxe' },
                { item: 'minecraft:diamond_shovel' },
                { item: 'minecraft:diamond_sword' }
            ],
            attributes: { conditions: [{ type: 'forge:false' }] }
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
