/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/the_end/';
    const recipes = [
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:bow', nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:crossbow', nbt: default_nbt },
            type: 'CROSSBOW',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:shield', nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:trident', nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'rare',
            max_rarity: 'mythic',
            dimensions: ['minecraft:the_end']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { type: 'ARMOR', item: 'naturesaura:sky_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'naturesaura:sky_chest', nbt: default_nbt },
                { type: 'ARMOR', item: 'naturesaura:sky_pants', nbt: default_nbt },
                { type: 'ARMOR', item: 'naturesaura:sky_shoes', nbt: default_nbt },
                { type: 'SWORD', item: 'naturesaura:sky_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'naturesaura:sky_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'naturesaura:sky_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'naturesaura:sky_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 5.0,
                dimensions: ['minecraft:the_end'],
                min_rarity: 'rare',
                max_rarity: 'mythic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'ars_elemental:air_hat', nbt: default_nbt },
                { type: 'ARMOR', item: 'ars_elemental:air_robes', nbt: default_nbt },
                { type: 'ARMOR', item: 'ars_elemental:air_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'ars_elemental:air_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'ars_nouveau:enchanters_sword', nbt: default_nbt }
            ],
            attributes: {
                weight: 70,
                quality: 10.0,
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
