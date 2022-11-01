/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:bosses/overworld/';
    const recipes = [
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
            weight: 150,
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
            weight: 200,
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
            weight: 150,
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
            weight: 100,
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
            weight: 100,
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
            weight: 200,
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
            weight: 33,
            quality: 2,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#overworld'],
            dimensions: ['minecraft:overworld'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
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
        },
        {
            entity: 'ars_nouveau:wilden_guardian',
            weight: 33,
            quality: 2,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#overworld'],
            dimensions: ['minecraft:overworld'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
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
        },
        {
            entity: 'ars_nouveau:wilden_stalker',
            weight: 33,
            quality: 2,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#overworld'],
            dimensions: ['minecraft:overworld'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
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
    ];

    const disabled_recipes = [{ entity: 'minecraft:bee' }];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ entity: recipe.entity, conditions: [{ type: 'forge:false' }] });
    });

    printSpawnChances(recipes, 'overworld');

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
