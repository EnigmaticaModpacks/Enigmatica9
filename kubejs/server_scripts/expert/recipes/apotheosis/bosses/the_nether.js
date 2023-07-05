/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'apotheosis:bosses/the_nether/';
    const recipes = [
        {
            entity: 'minecraft:blaze',
            weight: 200,
            quality: 7,
            size: { width: 1.6, height: 1.6 },
            valid_gear_sets: ['#the_nether'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'epic',
            max_rarity: 'mythic',
            stats: {
                epic: {
                    enchant_chance: 0.75,
                    enchantment_levels: [26, 22, 40, 30],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 120, steps: 75, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.12, steps: 25, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.flying_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.12, steps: 25, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.32, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.55 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                    ]
                },
                mythic: {
                    enchant_chance: 0.85,
                    enchantment_levels: [30, 25, 48, 35],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 180, steps: 75, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.15, steps: 35, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.flying_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.15, steps: 35, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.32, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.65 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 10 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 6 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:piglin',
            weight: 200,
            quality: 2,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_nether'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'rare',
            max_rarity: 'epic',
            stats: {
                rare: {
                    enchant_chance: 0.55,
                    enchantment_levels: [22, 15, 32, 25],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 60, steps: 40, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 12, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 30, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                },
                epic: {
                    enchant_chance: 0.7,
                    enchantment_levels: [25, 20, 35, 28],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 100, steps: 70, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 22, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.5 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:piglin_brute',
            weight: 80,
            quality: 4,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_nether'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'epic',
            max_rarity: 'epic',
            stats: {
                epic: {
                    enchant_chance: 0.75,
                    enchantment_levels: [26, 22, 40, 30],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 120, steps: 75, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.12, steps: 25, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.32, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.55 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:wither_skeleton',
            weight: 200,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_nether', '#the_nether_bow'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'rare',
            max_rarity: 'epic',
            stats: {
                rare: {
                    enchant_chance: 0.5,
                    enchantment_levels: [19, 12, 27, 22],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 60, steps: 40, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 18, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 30, step: 0.01 }
                        },
                        {
                            attribute: 'apotheosis:arrow_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 30, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 90, steps: 60, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 22, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.35, steps: 35, step: 0.01 }
                        },
                        {
                            attribute: 'apotheosis:arrow_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.35, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.5 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:zoglin',
            weight: 100,
            quality: 7,
            size: { width: 1.6, height: 1.6 },
            valid_gear_sets: ['#the_nether'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'epic',
            max_rarity: 'mythic',
            stats: {
                epic: {
                    enchant_chance: 0.75,
                    enchantment_levels: [26, 22, 40, 30],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 120, steps: 75, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.12, steps: 25, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.32, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.55 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                    ]
                },
                mythic: {
                    enchant_chance: 0.85,
                    enchantment_levels: [30, 25, 48, 35],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 180, steps: 75, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.15, steps: 35, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.flying_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.15, steps: 35, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.32, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.65 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 10 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 6 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:zombified_piglin',
            weight: 200,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_nether'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'rare',
            max_rarity: 'epic',
            stats: {
                rare: {
                    enchant_chance: 0.5,
                    enchantment_levels: [19, 12, 27, 22],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 60, steps: 40, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 12, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 30, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 90, steps: 60, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 22, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 35, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.5 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                    ]
                }
            }
        },
        {
            entity: 'ars_elemental:fire_mage',
            weight: 20,
            quality: 6,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_nether_mage'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'mythic',
            max_rarity: 'mythic',
            stats: {
                mythic: {
                    enchant_chance: 1,
                    enchantment_levels: [36, 30, 100, 85],
                    effects: [
                        { effect: 'minecraft:fire_resistance', chance: 1 },
                        { effect: 'ars_nouveau:shielding', amplifier: { min: 2, max: 3 }, chance: 1 },
                        { effect: 'ars_nouveau:spell_damage', amplifier: { min: 2, max: 7 }, chance: 1 },
                        { effect: 'ars_nouveau:mana_regen', amplifier: { min: 2, max: 7 }, chance: 1 }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 90, steps: 60, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.3, steps: 35, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 1.2, steps: 40, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 1 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 20 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 20 }
                    ]
                }
            }
        }
    ];

    const disabled_recipes = [];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ entity: recipe.entity, conditions: [{ type: 'forge:false' }] });
    });

    printSpawnChances(recipes, 'the_nether');

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
