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
    const id_prefix = 'apotheosis:bosses/the_bumblezone/';
    const recipes = [
        {
            entity: 'minecraft:bee',
            weight: 480,
            quality: 6,
            size: { width: 1, height: 1 },
            valid_gear_sets: ['#the_bumblezone'],
            dimensions: ['the_bumblezone:the_bumblezone'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
                rare: {
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
            weight: 250,
            quality: 6,
            size: { width: 1, height: 1 },
            valid_gear_sets: ['#the_bumblezone'],
            dimensions: ['the_bumblezone:the_bumblezone'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
                rare: {
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
            entity: 'minecraft:cave_spider',
            weight: 250,
            quality: 6,
            size: { width: 1, height: 1 },
            valid_gear_sets: ['#the_bumblezone'],
            dimensions: ['the_bumblezone:the_bumblezone'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
                rare: {
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
            entity: 'ars_elemental:earth_mage',
            weight: 20,
            quality: 6,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_bumblezone_mage'],
            dimensions: ['the_bumblezone:the_bumblezone'],
            min_rarity: 'rare',
            max_rarity: 'rare',
            stats: {
                rare: {
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

    printSpawnChances(recipes, 'the_bumblezone');

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
