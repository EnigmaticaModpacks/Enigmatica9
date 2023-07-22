/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'apotheosis:bosses/overworld/';
    const recipes = [
        {
            entity: 'ars_nouveau:wilden_hunter',
            weight: 33,
            quality: 2,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#overworld'],
            dimensions: ['minecraft:overworld'],
            min_rarity: 'rare',
            max_rarity: 'epic',
            stats: {
                rare: {
                    enchant_chance: 0.5,
                    enchantment_levels: [19, 12, 27, 22],
                    effects: [
                        {
                            effect: 'minecraft:fire_resistance',
                            chance: 1.0
                        }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: {
                                min: 40,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.1,
                                steps: 12,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 0.4
                        }
                    ]
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
                    effects: [
                        {
                            effect: 'minecraft:fire_resistance',
                            chance: 1.0
                        }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: {
                                min: 60,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.15,
                                steps: 15,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 0.45
                        },
                        {
                            attribute: 'minecraft:generic.armor',
                            operation: 'ADDITION',
                            value: 5
                        },
                        {
                            attribute: 'minecraft:generic.armor_toughness',
                            operation: 'ADDITION',
                            value: 3
                        }
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
            max_rarity: 'epic',
            stats: {
                rare: {
                    enchant_chance: 0.5,
                    enchantment_levels: [19, 12, 27, 22],
                    effects: [
                        {
                            effect: 'minecraft:fire_resistance',
                            chance: 1.0
                        }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: {
                                min: 40,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.1,
                                steps: 12,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 0.4
                        }
                    ]
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
                    effects: [
                        {
                            effect: 'minecraft:fire_resistance',
                            chance: 1.0
                        }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: {
                                min: 60,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.15,
                                steps: 15,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 0.45
                        },
                        {
                            attribute: 'minecraft:generic.armor',
                            operation: 'ADDITION',
                            value: 5
                        },
                        {
                            attribute: 'minecraft:generic.armor_toughness',
                            operation: 'ADDITION',
                            value: 3
                        }
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
            max_rarity: 'epic',
            stats: {
                rare: {
                    enchant_chance: 0.5,
                    enchantment_levels: [19, 12, 27, 22],
                    effects: [
                        {
                            effect: 'minecraft:fire_resistance',
                            chance: 1.0
                        }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: {
                                min: 40,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.1,
                                steps: 12,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 0.4
                        }
                    ]
                },
                epic: {
                    enchant_chance: 0.65,
                    enchantment_levels: [21, 16, 30, 25],
                    effects: [
                        {
                            effect: 'minecraft:fire_resistance',
                            chance: 1.0
                        }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: {
                                min: 60,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.15,
                                steps: 15,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.25,
                                steps: 30,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 0.45
                        },
                        {
                            attribute: 'minecraft:generic.armor',
                            operation: 'ADDITION',
                            value: 5
                        },
                        {
                            attribute: 'minecraft:generic.armor_toughness',
                            operation: 'ADDITION',
                            value: 3
                        }
                    ]
                }
            }
        },
        {
            entity: 'ars_elemental:water_mage',
            weight: 20,
            quality: 6,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#overworld_mage'],
            dimensions: ['minecraft:overworld'],
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
                            value: {
                                min: 60,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.2,
                                steps: 20,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.35,
                                steps: 35,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 0.5
                        },
                        {
                            attribute: 'minecraft:generic.armor',
                            operation: 'ADDITION',
                            value: 4
                        },
                        {
                            attribute: 'minecraft:generic.armor_toughness',
                            operation: 'ADDITION',
                            value: 2
                        }
                    ]
                }
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
