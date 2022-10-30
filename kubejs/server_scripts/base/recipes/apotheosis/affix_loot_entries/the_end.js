/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/overworld/';
    const recipes = [
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:bow', count: 1, nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:crossbow', count: 1, nbt: default_nbt },
            type: 'CROSSBOW',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'naturesaura:sky_axe', count: 1, nbt: default_nbt },
            type: 'HEAVY_WEAPON',
            dimensions: ['minecraft:the_end'],
            min_rarity: 'rare',
            max_rarity: 'mythic'
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'naturesaura:sky_pickaxe', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['minecraft:the_end'],
            min_rarity: 'rare',
            max_rarity: 'mythic'
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'naturesaura:sky_shovel', count: 1, nbt: default_nbt },
            type: 'BREAKER',
            dimensions: ['minecraft:the_end'],
            min_rarity: 'rare',
            max_rarity: 'mythic'
        },
        {
            weight: 100,
            quality: 5.0,
            stack: { item: 'naturesaura:sky_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['minecraft:the_end'],
            min_rarity: 'rare',
            max_rarity: 'mythic'
        },
        {
            weight: 70,
            quality: 10.0,
            stack: { item: 'ars_nouveau:enchanters_sword', count: 1, nbt: default_nbt },
            type: 'SWORD',
            dimensions: ['minecraft:the_end'],
            min_rarity: 'rare',
            max_rarity: 'mythic'
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:shield', count: 1, nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:trident', count: 1, nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { item: 'naturesaura:sky_helmet', count: 1, nbt: default_nbt },
                { item: 'naturesaura:sky_chest', count: 1, nbt: default_nbt },
                { item: 'naturesaura:sky_pants', count: 1, nbt: default_nbt },
                { item: 'naturesaura:sky_shoes', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 5.0,
                type: 'ARMOR',
                dimensions: ['minecraft:the_end'],
                min_rarity: 'rare',
                max_rarity: 'mythic'
            }
        },
        {
            stacks: [
                { item: 'ars_elemental:air_hat', count: 1, nbt: default_nbt },
                { item: 'ars_elemental:air_robes', count: 1, nbt: default_nbt },
                { item: 'ars_elemental:air_leggings', count: 1, nbt: default_nbt },
                { item: 'ars_elemental:air_boots', count: 1, nbt: default_nbt }
            ],
            attributes: {
                weight: 70,
                quality: 10.0,
                type: 'ARMOR',
                dimensions: ['minecraft:the_end'],
                min_rarity: 'rare',
                max_rarity: 'mythic'
            }
        },
        // Disabled Default Sets
        {
            stacks: [
                { item: 'minecraft:diamond_helmet' },
                { item: 'minecraft:diamond_chestplate' },
                { item: 'minecraft:diamond_leggings' },
                { item: 'minecraft:diamond_boots' },
                { item: 'minecraft:diamond_axe' },
                { item: 'minecraft:diamond_pickaxe' },
                { item: 'minecraft:diamond_shovel' },
                { item: 'minecraft:diamond_sword' },
                { item: 'minecraft:netherite_helmet' },
                { item: 'minecraft:netherite_chestplate' },
                { item: 'minecraft:netherite_leggings' },
                { item: 'minecraft:netherite_boots' },
                { item: 'minecraft:netherite_axe' },
                { item: 'minecraft:netherite_pickaxe' },
                { item: 'minecraft:netherite_shovel' },
                { item: 'minecraft:netherite_sword' }
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
