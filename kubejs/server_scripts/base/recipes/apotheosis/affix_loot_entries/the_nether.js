/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/the_nether/';
    const recipes = [
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:bow', nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['minecraft:the_nether']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:crossbow', nbt: default_nbt },
            type: 'CROSSBOW',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['minecraft:the_nether']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:shield', nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['minecraft:the_nether']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:trident', nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['minecraft:the_nether']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { type: 'ARMOR', item: 'minecraft:golden_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:golden_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:golden_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:golden_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'minecraft:golden_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'minecraft:golden_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'minecraft:golden_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'minecraft:golden_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 3.0,
                dimensions: ['minecraft:the_nether'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'ars_elemental:fire_hat', nbt: default_nbt },
                { type: 'ARMOR', item: 'ars_elemental:fire_robes', nbt: default_nbt },
                { type: 'ARMOR', item: 'ars_elemental:fire_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'ars_elemental:fire_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'ars_nouveau:enchanters_sword', nbt: default_nbt }
            ],
            attributes: {
                weight: 40,
                quality: 5.0,
                dimensions: ['minecraft:the_nether'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'minecraft:netherite_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:netherite_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:netherite_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:netherite_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'minecraft:netherite_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'minecraft:netherite_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'minecraft:netherite_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'minecraft:netherite_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 25,
                quality: 7.0,
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
            if (recipe.stack.type) {
                recipe.type = recipe.stack.type;
            }
            recipes.push(recipe);
        });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.stack.item.split(':')[1]}.json`, recipe);
    });
});
