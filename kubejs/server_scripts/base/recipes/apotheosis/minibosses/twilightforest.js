/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/twilightforest/';
    const recipes = [
        {
            id: 'skeleton_druid_archdruid',
            name: 'Archdruid',
            chance: 1.0,
            weight: 15,
            quality: 0,
            entities: ['twilightforest:skeleton_druid'],
            valid_gear_sets: ['#miniboss/skeleton_druid_archdruid'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [
                    { effect: 'minecraft:resistance', amplifier: 0, chance: 1.0 },
                    { effect: 'minecraft:absorption', amplifier: 0, chance: 1.0 },
                    { effect: 'ars_nouveau:shielding', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 20
                    }
                ]
            },
            supporting_entities: [
                {
                    entity: 'twilightforest:hedge_spider',
                    x: 1,
                    y: 0,
                    z: 1
                },
                {
                    entity: 'twilightforest:hedge_spider',
                    x: -1,
                    y: 0,
                    z: -1
                },
                {
                    entity: 'twilightforest:hedge_spider',
                    x: 1,
                    y: 0,
                    z: -1
                },
                {
                    entity: 'twilightforest:hedge_spider',
                    x: -1,
                    y: 0,
                    z: 1
                }
            ]
        },
        {
            id: 'skeleton_druid',
            name: null,
            chance: 1.0,
            weight: 45,
            quality: 0,
            entities: ['twilightforest:skeleton_druid'],
            valid_gear_sets: ['#miniboss/skeleton_druid'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 15, 15, 15],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 0, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: []
            }
        },
        {
            id: 'skeleton_druid_wolves',
            name: null,
            chance: 1.0,
            weight: 40,
            quality: 0,
            entities: ['twilightforest:skeleton_druid'],
            valid_gear_sets: ['#miniboss/skeleton_druid'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 15, 15, 15],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: []
            },
            supporting_entities: [
                {
                    entity: 'twilightforest:hostile_wolf',
                    x: 1,
                    y: 0,
                    z: 1
                },
                {
                    entity: 'twilightforest:hostile_wolf',
                    x: -1,
                    y: 0,
                    z: -1
                }
            ]
        },
        {
            id: 'redcap_sapper',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:redcap_sapper'],
            valid_gear_sets: ['#miniboss/redcap_sapper'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.75,
                enchantment_levels: [10, 10, 10, 10],
                effects: [],
                attribute_modifiers: []
            }
        },
        {
            id: 'redcap',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:redcap'],
            valid_gear_sets: ['#miniboss/redcap'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.5,
                enchantment_levels: [10, 10, 10, 10],
                effects: [],
                attribute_modifiers: []
            }
        },
        {
            id: 'kobold',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:kobold'],
            valid_gear_sets: ['#miniboss/kobold'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.5,
                enchantment_levels: [10, 10, 10, 10],
                effects: [],
                attribute_modifiers: []
            }
        },
        {
            id: 'lich',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:lich'],
            valid_gear_sets: ['#miniboss/lich'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [10, 10, 10, 10],
                effects: [],
                attribute_modifiers: []
            }
        },
        {
            id: 'mist_wolf',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:mist_wolf'],
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.0,
                enchantment_levels: [10, 10, 10, 10],
                effects: [
                    { effect: 'ars_nouveau:shielding', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:strength', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: []
            }
        },
        {
            id: 'carminite_golem',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:carminite_golem'],
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.0,
                enchantment_levels: [10, 10, 10, 10],
                effects: [
                    { effect: 'ars_nouveau:shielding', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:regeneration', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 90
                    }
                ]
            }
        },
        {
            id: 'snow_queen',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:snow_queen'],
            valid_gear_sets: ['#miniboss/snow_queen'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [30, 30, 30, 30],
                effects: [],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 90
                    }
                ]
            }
        },
        {
            id: 'troll',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:troll'],
            valid_gear_sets: ['#miniboss/troll'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.0,
                enchantment_levels: [10, 10, 10, 10],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:regeneration', amplifier: 2, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 40
                    },
                    {
                        attribute: 'minecraft:generic.attack_knockback',
                        operation: 'ADDITION',
                        value: 1.5
                    },
                    {
                        attribute: 'minecraft:generic.attack_damage',
                        operation: 'MULTIPLY_BASE',
                        value: { min: 0.35, steps: 35, step: 0.02 }
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
        },
        {
            id: 'minotaur',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:minotaur'],
            valid_gear_sets: ['#miniboss/minotaur'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [50, 50, 50, 50],
                effects: [{ effect: 'minecraft:strength', amplifier: 1, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 20
                    },
                    {
                        attribute: 'minecraft:generic.attack_knockback',
                        operation: 'ADDITION',
                        value: 1.5
                    },
                    {
                        attribute: 'minecraft:generic.attack_damage',
                        operation: 'MULTIPLY_BASE',
                        value: { min: 0.35, steps: 35, step: 0.02 }
                    },
                    {
                        attribute: 'minecraft:generic.knockback_resistance',
                        operation: 'ADDITION',
                        value: 0.5
                    },
                    {
                        attribute: 'minecraft:generic.armor',
                        operation: 'ADDITION',
                        value: 6
                    },
                    {
                        attribute: 'minecraft:generic.armor_toughness',
                        operation: 'ADDITION',
                        value: 4
                    }
                ]
            }
        },
        {
            id: 'minoshroom',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['twilightforest:minoshroom'],
            valid_gear_sets: ['#miniboss/minoshroom'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [50, 50, 50, 50],
                effects: [{ effect: 'minecraft:strength', amplifier: 1, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 20
                    },
                    {
                        attribute: 'minecraft:generic.attack_knockback',
                        operation: 'ADDITION',
                        value: 1.5
                    },
                    {
                        attribute: 'minecraft:generic.attack_damage',
                        operation: 'MULTIPLY_BASE',
                        value: { min: 0.35, steps: 35, step: 0.02 }
                    },
                    {
                        attribute: 'minecraft:generic.knockback_resistance',
                        operation: 'ADDITION',
                        value: 0.5
                    },
                    {
                        attribute: 'minecraft:generic.armor',
                        operation: 'ADDITION',
                        value: 6
                    },
                    {
                        attribute: 'minecraft:generic.armor_toughness',
                        operation: 'ADDITION',
                        value: 4
                    }
                ]
            }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.exclusions ? recipe.exclusions.push(default_exclusions) : (recipe.exclusions = [default_exclusions]);

        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
