/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:bosses/blue_skies/';
    const recipes = [
        {
            entity: 'blue_skies:shrumpty',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:diophyde_prowler',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:armored_frost_spirit',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:polargeist',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:crynocerous',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:whistleshell_crab',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:stonelet',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:stray',
            weight: 110,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies_bow'],
            dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'apotheosis:arrow_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.25 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'apotheosis:arrow_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.33 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:evoker',
            weight: 50,
            quality: 4,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
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
                            value: { min: 40, steps: 40, step: 2 }
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
                            value: { min: 70, steps: 60, step: 2 }
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
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.45 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 7 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 3.5 }
                    ]
                }
            }
        },
        {
            entity: 'minecraft:witch',
            weight: 50,
            quality: 4,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
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
                            value: { min: 40, steps: 40, step: 2 }
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
                            value: { min: 70, steps: 60, step: 2 }
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
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.45 },
                        { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 7 },
                        { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 3.5 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:emberback',
            weight: 192,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everdawn'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:nyctofly',
            weight: 192,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everdawn'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:infested_swarmer',
            weight: 193,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everdawn'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'blue_skies:venom_spider',
            weight: 193,
            quality: 0,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies'],
            dimensions: ['blue_skies:everdawn'],
            min_rarity: 'uncommon',
            max_rarity: 'rare',
            stats: {
                uncommon: {
                    enchant_chance: 0.25,
                    enchantment_levels: [12, 8, 20, 14],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 20, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.05, steps: 5, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.2, steps: 20, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.3 }
                    ]
                },
                rare: {
                    enchant_chance: 0.3,
                    enchantment_levels: [15, 10, 23, 17],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 30, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.1, steps: 8, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 25, step: 0.01 }
                        },
                        { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.4 }
                    ]
                }
            }
        },
        {
            entity: 'ars_elemental:water_mage',
            weight: 20,
            quality: 6,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#blue_skies_mage'],
            dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
            min_rarity: 'mythic',
            max_rarity: 'mythic',
            stats: {
                mythic: {
                    enchant_chance: 1,
                    enchantment_levels: [36, 30, 100, 85],
                    effects: [
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

    printSpawnChances(recipes, 'blue_skies');

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
