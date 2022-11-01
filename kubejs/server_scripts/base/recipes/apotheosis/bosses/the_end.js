/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:bosses/the_end/';
    const recipes = [
        {
            entity: 'minecraft:evoker',
            weight: 200,
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
            weight: 140,
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
            weight: 200,
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
            weight: 400,
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
            weight: 40,
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
        },
        {
            entity: 'ars_elemental:air_mage',
            weight: 20,
            quality: 6,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_end_mage'],
            dimensions: ['minecraft:the_end'],
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

    const disabled_recipes = [];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ entity: recipe.entity, conditions: [{ type: 'forge:false' }] });
    });

    printSpawnChances(recipes, 'the_end');

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
