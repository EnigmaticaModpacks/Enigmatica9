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
        the_end: [
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
        ],
        the_nether: [
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
        ],
        twilight: [
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
        ],
        blueskies: []
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
                    { item: 'minecraft:iron_helmet', count: 1, nbt: default_nbt },
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
                    { item: 'minecraft:stone_sword' }
                ],
                attributes: { conditions: [{ type: 'forge:false' }] }
            }
        ],
        the_end: [
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
        ],
        the_nether: [
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
        ],
        twilight: [
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
        ],
        blueskies: [
            {
                stacks: [
                    { item: 'blue_skies:pyrope_helmet', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:pyrope_chestplate', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:pyrope_leggings', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:pyrope_boots', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 100,
                    quality: 1,
                    type: 'ARMOR',
                    dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                    min_rarity: 'uncommon',
                    max_rarity: 'epic'
                }
            },
            {
                stacks: [
                    { item: 'blue_skies:aquite_helmet', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:aquite_chestplate', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:aquite_leggings', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:aquite_boots', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 85,
                    quality: 3,
                    type: 'ARMOR',
                    dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                    min_rarity: 'uncommon',
                    max_rarity: 'epic'
                }
            },
            {
                stacks: [
                    { item: 'blue_skies:diopside_helmet', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:diopside_chestplate', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:diopside_leggings', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:diopside_boots', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 65,
                    quality: 5,
                    type: 'ARMOR',
                    dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                    min_rarity: 'uncommon',
                    max_rarity: 'epic'
                }
            },
            {
                stacks: [
                    { item: 'blue_skies:charoite_helmet', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:charoite_chestplate', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:charoite_leggings', count: 1, nbt: default_nbt },
                    { item: 'blue_skies:charoite_boots', count: 1, nbt: default_nbt }
                ],
                attributes: {
                    weight: 65,
                    quality: 5,
                    type: 'ARMOR',
                    dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                    min_rarity: 'uncommon',
                    max_rarity: 'epic'
                }
            }
        ]
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
