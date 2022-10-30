/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const default_nbt = '{Damage:0,"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}';
    const recipes = {
        overworld: [
            {
                weight: 50,
                quality: 2.5,
                stack: { item: 'minecraft:bow', count: 1, nbt: default_nbt },
                type: 'BOW',
                min_rarity: 'common',
                max_rarity: 'rare',
                dimensions: ['minecraft:overworld']
            },
            {
                weight: 50,
                quality: 2.5,
                stack: { item: 'minecraft:crossbow', count: 1, nbt: default_nbt },
                type: 'CROSSBOW',
                min_rarity: 'common',
                max_rarity: 'rare',
                dimensions: ['minecraft:overworld']
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'minecraft:iron_sword', count: 1, nbt: default_nbt },
                type: 'SWORD',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'minecraft:iron_axe', count: 1, nbt: default_nbt },
                type: 'HEAVY_WEAPON',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'minecraft:iron_pickaxe', count: 1, nbt: default_nbt },
                type: 'BREAKER',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'minecraft:iron_shovel', count: 1, nbt: default_nbt },
                type: 'BREAKER',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            },
            {
                weight: 50,
                quality: 2.5,
                stack: { item: 'minecraft:shield', count: 1, nbt: default_nbt },
                type: 'SHIELD',
                min_rarity: 'common',
                max_rarity: 'rare',
                dimensions: ['minecraft:overworld']
            },
            {
                weight: 50,
                quality: 2.5,
                stack: { item: 'minecraft:trident', count: 1, nbt: default_nbt },
                type: 'TRIDENT',
                min_rarity: 'common',
                max_rarity: 'rare',
                dimensions: ['minecraft:overworld']
            },
            {
                weight: 55,
                quality: 3.5,
                stack: { item: 'minecraft:turtle_helmet', count: 1, nbt: default_nbt },
                type: 'ARMOR',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'mythic'
            },
            {
                weight: 55,
                quality: 3.5,
                stack: { item: 'create:diving_helmet', count: 1, nbt: default_nbt },
                type: 'ARMOR',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'mythic'
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'naturesaura:infused_iron_sword', count: 1, nbt: default_nbt },
                type: 'SWORD',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'naturesaura:infused_iron_axe', count: 1, nbt: default_nbt },
                type: 'HEAVY_WEAPON',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'naturesaura:infused_iron_pickaxe', count: 1, nbt: default_nbt },
                type: 'BREAKER',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            },
            {
                weight: 85,
                quality: 4.0,
                stack: { item: 'naturesaura:infused_iron_shovel', count: 1, nbt: default_nbt },
                type: 'BREAKER',
                dimensions: ['minecraft:overworld'],
                max_rarity: 'rare'
            }
        ],
        the_end: [],
        the_nether: [],
        twilight: []
    };

    const equip_sets = {
        overworld: [
            {
                stacks: [
                    { item: 'minecraft:chainmail_helmet', count: 1, nbt: default_nbt },
                    { item: 'minecraft:chainmail_chestplate', count: 1, nbt: default_nbt },
                    { item: 'minecraft:chainmail_leggings', count: 1, nbt: default_nbt },
                    { item: 'minecraft:chainmail_boots', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 85,
                    quality: 3.0,
                    type: 'ARMOR',
                    dimensions: ['minecraft:overworld'],
                    max_rarity: 'uncommon'
                }
            },
            {
                stacks: [
                    // { item: 'minecraft:iron_helmet', count: 1, nbt: default_nbt },
                    { item: 'minecraft:iron_chestplate', count: 1, nbt: default_nbt },
                    { item: 'minecraft:iron_leggings', count: 1, nbt: default_nbt },
                    { item: 'minecraft:iron_boots', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 70,
                    quality: 5.0,
                    type: 'ARMOR',
                    dimensions: ['minecraft:overworld'],
                    max_rarity: 'rare'
                }
            },
            {
                stacks: [
                    { item: 'pneumaticcraft:compressed_iron_helmet', count: 1, nbt: default_nbt },
                    { item: 'pneumaticcraft:compressed_iron_chestplate', count: 1, nbt: default_nbt },
                    { item: 'pneumaticcraft:compressed_iron_leggings', count: 1, nbt: default_nbt },
                    { item: 'pneumaticcraft:compressed_iron_boots', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 50,
                    quality: 10.0,
                    type: 'ARMOR',
                    dimensions: ['minecraft:overworld'],
                    min_rarity: 'rare',
                    max_rarity: 'epic'
                }
            },
            {
                stacks: [
                    { item: 'immersiveengineering:armor_steel_head', count: 1, nbt: default_nbt },
                    { item: 'immersiveengineering:armor_steel_chest', count: 1, nbt: default_nbt },
                    { item: 'immersiveengineering:armor_steel_legs', count: 1, nbt: default_nbt },
                    { item: 'immersiveengineering:armor_steel_feet', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 30,
                    quality: 10.0,
                    type: 'ARMOR',
                    dimensions: ['minecraft:overworld'],
                    min_rarity: 'rare',
                    max_rarity: 'epic'
                }
            },
            {
                stacks: [
                    { item: 'naturesaura:infused_iron_helmet', count: 1, nbt: default_nbt },
                    { item: 'naturesaura:infused_iron_chest', count: 1, nbt: default_nbt },
                    { item: 'naturesaura:infused_iron_pants', count: 1, nbt: default_nbt },
                    { item: 'naturesaura:infused_iron_shoes', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 70,
                    quality: 5.0,
                    type: 'ARMOR',
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
                    { item: 'minecraft:stone_sword' },
                    { item: 'minecraft:iron_helmet' }
                ],
                attributes: { conditions: [{ type: 'forge:false' }] }
            }
        ],
        the_end: [],
        the_nether: [],
        twilight: []
    };

    Object.keys(equip_sets).forEach((dimension) => {
        equip_sets[dimension].forEach((equip_set) => {
            equip_set.stacks.forEach((stack) => {
                let recipe = Object.assign({}, { stack: stack }, equip_set.attributes);
                recipes[dimension].push(recipe);
            });
        });
    });

    Object.keys(recipes).forEach((dimension) => {
        recipes[dimension].forEach((recipe) => {
            // console.log(`Entry for ${dimension}: ${JSON.stringify(recipe)}`);
            event.addJson(`apotheosis:affix_loot_entries/${dimension}/${recipe.stack.item.split(':')[1]}.json`, recipe);
        });
    });
});
