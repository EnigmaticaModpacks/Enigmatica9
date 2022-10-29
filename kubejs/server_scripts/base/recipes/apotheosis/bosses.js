/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const recipes = {
        overworld: [
            {
                entity: 'minecraft:bee'
                // Disable Default Entry
            },
            {
                entity: 'minecraft:goat',
                weight: 1,
                quality: 5,
                size: { width: 1.4, height: 1.4 },
                valid_gear_sets: ['#overworld'],
                dimensions: ['minecraft:overworld'],
                min_rarity: 'mythic',
                max_rarity: 'mythic',
                stats: {
                    mythic: {
                        enchant_chance: 0.75,
                        enchantment_levels: [25, 20, 50, 40],
                        effects: [
                            { effect: 'minecraft:fire_resistance', chance: 1 },
                            { effect: 'minecraft:jump_boost', amplifier: { min: 3, max: 3 }, chance: 1 }
                        ],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 600, steps: 100, step: 5 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.25, steps: 10, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.attack_knockback', operation: 'ADDITION', value: 5 },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'ADDITION',
                                value: { min: 40, steps: 20, step: 2 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 1 }
                        ]
                    }
                }
            },
            {
                entity: 'minecraft:husk',
                weight: 75,
                quality: 2,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#overworld'],
                dimensions: ['minecraft:overworld'],
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
                        enchant_chance: 0.35,
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
                entity: 'minecraft:skeleton',
                weight: 100,
                quality: 0,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#overworld_bow'],
                dimensions: ['minecraft:overworld'],
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
                entity: 'minecraft:stray',
                weight: 75,
                quality: 2,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#overworld_bow'],
                dimensions: ['minecraft:overworld'],
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
                        enchant_chance: 0.35,
                        enchantment_levels: [17, 12, 25, 18],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 45, steps: 30, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.1, steps: 10, step: 0.01 }
                            },
                            {
                                attribute: 'apotheosis:arrow_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.3, steps: 25, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.35 }
                        ]
                    }
                }
            },
            {
                entity: 'minecraft:vindicator',
                weight: 45,
                quality: 4,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#overworld'],
                dimensions: ['minecraft:overworld'],
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
                weight: 45,
                quality: 4,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#overworld'],
                dimensions: ['minecraft:overworld'],
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
                entity: 'minecraft:zombie',
                weight: 100,
                quality: 0,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#overworld'],
                dimensions: ['minecraft:overworld'],
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
                entity: 'ars_nouveau:wilden_hunter',
                weight: 75,
                quality: 2,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#overworld'],
                dimensions: ['minecraft:overworld'],
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
                                attribute: 'minecraft:generic.flying_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.45, steps: 10, step: 0.01 }
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
                        enchant_chance: 0.35,
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
                                attribute: 'minecraft:generic.flying_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.45, steps: 10, step: 0.01 }
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
            }
        ],
        the_end: [
            {
                entity: 'minecraft:evoker',
                weight: 20,
                quality: 6,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#the_end'],
                dimensions: ['minecraft:the_end'],
                min_rarity: 'mythic',
                max_rarity: 'mythic',
                stats: {
                    mythic: {
                        enchant_chance: 1,
                        enchantment_levels: [36, 30, 100, 85],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 300, steps: 75, step: 2 }
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
            },
            {
                entity: 'minecraft:phantom',
                weight: 50,
                quality: 3,
                size: { width: 2.5, height: 1 },
                valid_gear_sets: ['#the_end'],
                dimensions: ['minecraft:the_end'],
                min_rarity: 'epic',
                max_rarity: 'mythic',
                stats: {
                    epic: {
                        enchant_chance: 0.8,
                        enchantment_levels: [30, 24, 50, 40],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 160, steps: 75, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.16, steps: 25, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.flying_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.35, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.6, steps: 35, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.6 },
                            { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                            { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                        ]
                    },
                    mythic: {
                        enchant_chance: 0.85,
                        enchantment_levels: [32, 25, 60, 50],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 220, steps: 90, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.2, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.flying_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.4, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 1.2, steps: 40, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 1 },
                            { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 14 },
                            { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 10 }
                        ]
                    }
                }
            },
            {
                entity: 'minecraft:shulker',
                weight: 40,
                quality: 3.5,
                size: { width: 1, height: 1 },
                valid_gear_sets: ['#the_end'],
                dimensions: ['minecraft:the_end'],
                min_rarity: 'mythic',
                max_rarity: 'mythic',
                stats: {
                    mythic: {
                        enchant_chance: 0.85,
                        enchantment_levels: [32, 25, 60, 50],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 220, steps: 90, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.2, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.flying_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.4, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 1.2, steps: 40, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 1 },
                            { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 14 },
                            { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 10 }
                        ]
                    }
                }
            },
            {
                entity: 'minecraft:enderman',
                weight: 100,
                size: { width: 1, height: 3 },
                valid_gear_sets: ['#the_end'],
                dimensions: ['minecraft:the_end'],
                min_rarity: 'epic',
                max_rarity: 'mythic',
                stats: {
                    epic: {
                        enchant_chance: 0.8,
                        enchantment_levels: [30, 24, 50, 40],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 160, steps: 75, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.16, steps: 25, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.6, steps: 35, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.6 },
                            { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                            { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                        ]
                    },
                    mythic: {
                        enchant_chance: 0.85,
                        enchantment_levels: [32, 25, 60, 50],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 220, steps: 90, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.2, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.9, steps: 35, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 1 },
                            { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 14 },
                            { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 10 }
                        ]
                    }
                }
            },
            {
                entity: 'minecraft:endermite',
                weight: 10,
                quality: 1,
                size: { width: 1, height: 3 },
                valid_gear_sets: ['#the_end'],
                dimensions: ['minecraft:the_end'],
                min_rarity: 'epic',
                max_rarity: 'mythic',
                stats: {
                    epic: {
                        enchant_chance: 0.8,
                        enchantment_levels: [30, 24, 50, 40],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 160, steps: 75, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.16, steps: 25, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.6, steps: 35, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 0.6 },
                            { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 8 },
                            { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 4.5 }
                        ]
                    },
                    mythic: {
                        enchant_chance: 0.85,
                        enchantment_levels: [32, 25, 60, 50],
                        effects: [{ effect: 'minecraft:fire_resistance', chance: 1 }],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 220, steps: 90, step: 2 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.2, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.flying_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.2, steps: 35, step: 0.01 }
                            },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.9, steps: 35, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 1 },
                            { attribute: 'minecraft:generic.armor', operation: 'ADDITION', value: 14 },
                            { attribute: 'minecraft:generic.armor_toughness', operation: 'ADDITION', value: 10 }
                        ]
                    }
                }
            }
        ],
        the_nether: [
            {
                entity: 'minecraft:blaze',
                weight: 30,
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
                weight: 70,
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
                weight: 50,
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
                weight: 100,
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
                weight: 30,
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
                weight: 100,
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
            }
        ],
        twilight: [
            {
                entity: 'twilightforest:knight_phantom'
                // Disable Default Entry
            },
            {
                entity: 'twilightforest:carminite_golem',
                weight: 30,
                quality: 7.5,
                size: { width: 2, height: 3 },
                valid_gear_sets: ['#twilight'],
                dimensions: ['twilightforest:twilight_forest'],
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
                entity: 'twilightforest:lower_goblin_knight',
                weight: 55,
                quality: 6,
                size: { width: 1.4, height: 2.5 },
                valid_gear_sets: ['#twilight'],
                dimensions: ['twilightforest:twilight_forest'],
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
                entity: 'twilightforest:helmet_crab',
                weight: 5,
                size: { width: 1, height: 1 },
                valid_gear_sets: ['#twilight'],
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'mythic',
                max_rarity: 'mythic',
                stats: {
                    mythic: {
                        enchant_chance: 0.85,
                        enchantment_levels: [30, 25, 60, 35],
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
                entity: 'twilightforest:kobold',
                weight: 100,
                size: { width: 1, height: 1 },
                valid_gear_sets: ['#twilight'],
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'rare',
                max_rarity: 'rare',
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
                    }
                }
            },
            {
                entity: 'twilightforest:redcap_sapper',
                weight: 90,
                quality: 3,
                size: { width: 1, height: 1 },
                valid_gear_sets: ['#twilight'],
                dimensions: ['twilightforest:twilight_forest'],
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
                entity: 'minecraft:skeleton',
                weight: 100,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#twilight_bow'],
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'rare',
                max_rarity: 'rare',
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
                    }
                }
            },
            {
                entity: 'twilightforest:skeleton_druid',
                weight: 100,
                size: { width: 1, height: 2 },
                valid_gear_sets: ['#twilight_bow'],
                dimensions: ['twilightforest:twilight_forest'],
                min_rarity: 'rare',
                max_rarity: 'rare',
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
                    }
                }
            }
        ]
    };
    Object.keys(recipes).forEach((dimension) => {
        recipes[dimension].forEach((recipe) => {
            event.addJson(`apotheosis:bosses/${dimension}/${recipe.entity.split(':')[1]}.json`, recipe);
        });
    });
});
