/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/overworld/';
    const recipes = [
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:bow', nbt: default_nbt },
            type: 'BOW',
            min_rarity: 'common',
            max_rarity: 'rare',
            dimensions: ['minecraft:overworld']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:crossbow', nbt: default_nbt },
            type: 'CROSSBOW',
            min_rarity: 'common',
            max_rarity: 'rare',
            dimensions: ['minecraft:overworld']
        },

        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:shield', nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'common',
            max_rarity: 'rare',
            dimensions: ['minecraft:overworld']
        },
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'minecraft:trident', nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'common',
            max_rarity: 'rare',
            dimensions: ['minecraft:overworld']
        },
        {
            weight: 50,
            quality: 3.5,
            stack: { item: 'minecraft:turtle_helmet', nbt: default_nbt },
            type: 'ARMOR',
            dimensions: ['minecraft:overworld'],
            max_rarity: 'mythic'
        },
        {
            weight: 50,
            quality: 3.5,
            stack: { item: 'create:diving_helmet', nbt: default_nbt },
            type: 'ARMOR',
            dimensions: ['minecraft:overworld'],
            max_rarity: 'mythic'
        }
    ];

    const equip_sets = [
        {
            stacks: [
                { type: 'ARMOR', item: 'minecraft:chainmail_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:chainmail_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:chainmail_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:chainmail_boots', nbt: default_nbt }
            ],
            attributes: {
                weight: 85,
                quality: 3.0,
                dimensions: ['minecraft:overworld'],
                max_rarity: 'uncommon'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'minecraft:iron_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:iron_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:iron_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'minecraft:iron_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'minecraft:iron_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'minecraft:iron_pickaxe', nbt: default_nbt },
                { type: 'BREAKER', item: 'minecraft:iron_shovel', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'minecraft:iron_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 70,
                quality: 4.0,
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'pneumaticcraft:compressed_iron_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'pneumaticcraft:compressed_iron_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'pneumaticcraft:compressed_iron_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'pneumaticcraft:compressed_iron_boots', nbt: default_nbt }
            ],
            attributes: {
                weight: 50,
                quality: 10.0,
                dimensions: ['minecraft:overworld'],
                min_rarity: 'rare',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'immersiveengineering:armor_steel_head', nbt: default_nbt },
                { type: 'ARMOR', item: 'immersiveengineering:armor_steel_chest', nbt: default_nbt },
                { type: 'ARMOR', item: 'immersiveengineering:armor_steel_legs', nbt: default_nbt },
                { type: 'ARMOR', item: 'immersiveengineering:armor_steel_feet', nbt: default_nbt }
            ],
            attributes: {
                weight: 30,
                quality: 10.0,
                dimensions: ['minecraft:overworld'],
                min_rarity: 'rare',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'naturesaura:infused_iron_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'naturesaura:infused_iron_chest', nbt: default_nbt },
                { type: 'ARMOR', item: 'naturesaura:infused_iron_pants', nbt: default_nbt },
                { type: 'ARMOR', item: 'naturesaura:infused_iron_shoes', nbt: default_nbt },
                { type: 'SWORD', item: 'naturesaura:infused_iron_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'naturesaura:infused_iron_pickaxe', nbt: default_nbt },
                { type: 'BREAKER', item: 'naturesaura:infused_iron_shovel', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'naturesaura:infused_iron_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 70,
                quality: 6.0,
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            }
        },
        // Disabled Default Sets
        {
            stacks: [
                { item: 'minecraft:leather_helmet' },
                { item: 'minecraft:leather_chestplate' },
                { item: 'minecraft:leather_leggings' },
                { item: 'minecraft:leather_boots' },
                { item: 'minecraft:stone_axe' },
                { item: 'minecraft:stone_pickaxe' },
                { item: 'minecraft:stone_shovel' },
                { item: 'minecraft:stone_sword' }
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
        console.log(recipe);
        event.addJson(`${id_prefix}${recipe.stack.item.split(':')[1]}.json`, recipe);
    });
});
