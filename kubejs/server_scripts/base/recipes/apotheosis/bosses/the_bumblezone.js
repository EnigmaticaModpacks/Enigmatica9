/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:bosses/the_bumblezone/';
    const recipes = [
        {
            entity: 'minecraft:bee',
            weight: 500,
            quality: 6,
            size: { width: 1, height: 1 },
            valid_gear_sets: ['#the_bumblezone'],
            dimensions: ['the_bumblezone:the_bumblezone'],
            min_rarity: 'mythic',
            max_rarity: 'mythic',
            stats: {
                mythic: {
                    enchant_chance: 1.0,
                    enchantment_levels: [36, 30, 100, 85],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 600, steps: 1.0, step: 5 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 10, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.flying_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.45, steps: 10, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_knockback',
                            operation: 'ADDITION',
                            value: { min: 2, steps: 6, step: 0.5 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 1
                        }
                    ]
                }
            }
        },
        {
            entity: 'the_bumblezone:honey_slime',
            weight: 500,
            quality: 6,
            size: { width: 1, height: 1 },
            valid_gear_sets: ['#the_bumblezone'],
            dimensions: ['the_bumblezone:the_bumblezone'],
            min_rarity: 'mythic',
            max_rarity: 'mythic',
            stats: {
                mythic: {
                    enchant_chance: 1.0,
                    enchantment_levels: [36, 30, 100, 85],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 600, steps: 1.0, step: 5 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 10, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.flying_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.45, steps: 10, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_knockback',
                            operation: 'ADDITION',
                            value: { min: 2, steps: 6, step: 0.5 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 1
                        }
                    ]
                }
            }
        },
        {
            entity: 'the_bumblezone:beehemoth',
            weight: 250,
            quality: 6,
            size: { width: 1, height: 1 },
            valid_gear_sets: ['#the_bumblezone'],
            dimensions: ['the_bumblezone:the_bumblezone'],
            min_rarity: 'mythic',
            max_rarity: 'mythic',
            stats: {
                mythic: {
                    enchant_chance: 1.0,
                    enchantment_levels: [36, 30, 100, 85],
                    effects: [{ effect: 'minecraft:fire_resistance', chance: 1.0 }],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: { min: 600, steps: 1.0, step: 5 }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.25, steps: 10, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.flying_speed',
                            operation: 'MULTIPLY_BASE',
                            value: { min: 0.45, steps: 10, step: 0.01 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_knockback',
                            operation: 'ADDITION',
                            value: { min: 2, steps: 6, step: 0.5 }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'ADDITION',
                            value: { min: 40, steps: 20, step: 2 }
                        },
                        {
                            attribute: 'minecraft:generic.knockback_resistance',
                            operation: 'ADDITION',
                            value: 1
                        }
                    ]
                }
            }
        }
    ];

    printSpawnChances(recipes, 'the_bumblezone');

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
