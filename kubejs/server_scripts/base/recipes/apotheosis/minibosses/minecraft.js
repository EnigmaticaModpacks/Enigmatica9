/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/minecraft/';
    const recipes = [
        {
            id: 'skeleton_siege_breaker',
            name: 'Skeletal Siege Breaker',
            chance: 1.0,
            weight: 5,
            quality: 0,
            entities: ['minecraft:skeleton'],
            valid_gear_sets: ['#miniboss/skeleton_siege_breaker'],
            dimensions: [],
            affixed: true,
            nbt: {},
            stats: {
                enchant_chance: 0.5,
                enchantment_levels: [15, 15, 15, 15],
                effects: [{ effect: 'minecraft:speed', amplifier: 1, chance: 1.0 }],
                attribute_modifiers: []
            }
        },
        {
            id: 'skeleton_bow',
            chance: 1.0,
            weight: 40,
            quality: 0,
            entities: ['minecraft:skeleton'],
            valid_gear_sets: ['#miniboss/skeleton_bow'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.5,
                enchantment_levels: [15, 15, 15, 15],
                effects: [{ effect: 'minecraft:speed', amplifier: 1, chance: 1.0 }],
                attribute_modifiers: []
            }
        },
        {
            id: 'skeleton_sword',
            chance: 1.0,
            weight: 40,
            quality: 0,
            entities: ['minecraft:skeleton'],
            valid_gear_sets: ['#miniboss/skeleton_sword'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 15, 15, 15],
                effects: [{ effect: 'minecraft:strength', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 20
                    }
                ]
            }
        },
        {
            id: 'skeleton_forsaken_knight',
            name: 'miniboss.enigmatica.skeleton_forsaken_knight',
            chance: 1.0,
            weight: 15,
            quality: 0,
            entities: ['minecraft:skeleton'],
            valid_gear_sets: ['#miniboss/skeleton_forsaken_knight'],
            dimensions: [],
            affixed: true,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 40
                    }
                ]
            }
        },
        {
            id: 'blaze',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:blaze'],
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            exclusions: [{ type: 'apotheosis:spawn_type', spawn_types: ['MOB_SUMMONED'] }],
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'minecraft:strength', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: []
            }
        },
        {
            id: 'iron_golem',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:iron_golem'],
            valid_gear_sets: ['#miniboss/iron_golem'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.0,
                enchantment_levels: [20, 20, 20, 20],
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
                        value: 200
                    }
                ]
            }
        },
        {
            id: 'witch_solitary_witch',
            name: 'miniboss.enigmatica.solitary_witch',
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:witch'],
            valid_gear_sets: ['#miniboss/witch'],
            dimensions: [],
            affixed: true,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'ars_nouveau:shielding', amplifier: 1, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 24
                    }
                ]
            }
        },
        {
            id: 'evoker',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:evoker'],
            valid_gear_sets: ['#miniboss/witch'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'ars_nouveau:shielding', amplifier: 1, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 30
                    }
                ]
            }
        },
        {
            id: 'vex',
            name: null,
            chance: 0.5,
            weight: 100,
            quality: 0,
            entities: ['minecraft:vex'],
            valid_gear_sets: ['#miniboss/vex'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.5,
                enchantment_levels: [10, 20, 10, 20],
                effects: [],
                attribute_modifiers: []
            }
        },
        {
            id: 'vindicator',
            name: null,
            chance: 0.5,
            weight: 100,
            quality: 0,
            entities: ['minecraft:vindicator'],
            valid_gear_sets: ['#miniboss/vindicator'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 20, 15, 20],
                effects: [],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 26
                    }
                ]
            }
        },
        {
            id: 'pillager',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:pillager'],
            valid_gear_sets: ['#miniboss/pillager'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 20, 15, 20],
                effects: [],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 26
                    }
                ]
            }
        },
        {
            id: 'piglin',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:piglin'],
            valid_gear_sets: ['#miniboss/piglin'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 20, 15, 20],
                effects: [],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 30
                    }
                ]
            }
        },
        {
            id: 'piglin_brute',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:piglin_brute'],
            valid_gear_sets: ['#miniboss/piglin_brute'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [25, 20, 25, 20],
                effects: [{ effect: 'minecraft:strength', amplifier: 3, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 50
                    }
                ]
            }
        },
        {
            id: 'wither_skeleton_withered_knight',
            name: 'miniboss.enigmatica.wither_skeleton_withered_knight',
            chance: 1.0,
            weight: 15,
            quality: 0,
            entities: ['minecraft:wither_skeleton'],
            valid_gear_sets: ['#miniboss/wither_skeleton_withered_knight'],
            dimensions: [],
            affixed: true,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [25, 20, 25, 20],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:speed', amplifier: 1, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 75
                    }
                ]
            }
        },
        {
            id: 'wither_skeleton',
            name: null,
            chance: 1.0,
            weight: 85,
            quality: 0,
            entities: ['minecraft:wither_skeleton'],
            valid_gear_sets: ['#miniboss/wither_skeleton'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [25, 20, 25, 20],
                effects: [{ effect: 'minecraft:speed', amplifier: 1, chance: 0.6 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 75
                    }
                ]
            }
        },
        {
            id: 'stray_hoarfrost_knight',
            name: 'miniboss.enigmatica.stray_hoarfrost_knight',
            chance: 1.0,
            weight: 15,
            quality: 0,
            entities: ['minecraft:stray'],
            valid_gear_sets: ['#miniboss/stray_hoarfrost_knight'],
            dimensions: [],
            affixed: true,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [25, 20, 25, 20],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 1, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 75
                    }
                ]
            }
        },
        {
            id: 'stray',
            name: null,
            chance: 1.0,
            weight: 85,
            quality: 0,
            entities: ['minecraft:stray'],
            valid_gear_sets: ['#miniboss/stray'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [25, 20, 25, 20],
                effects: [{ effect: 'minecraft:speed', amplifier: 1, chance: 0.6 }],
                attribute_modifiers: []
            }
        },
        {
            id: 'drowned',
            name: null,
            chance: 0.05,
            weight: 100,
            quality: 0,
            entities: ['minecraft:drowned'],
            valid_gear_sets: ['#miniboss/drowned'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 15, 15, 15],
                effects: [{ effect: 'minecraft:resistance', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 40
                    }
                ]
            }
        },
        {
            id: 'enderman',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['minecraft:enderman'],
            valid_gear_sets: ['#miniboss/enderman'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [15, 15, 15, 15],
                effects: [{ effect: 'minecraft:resistance', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 60, steps: 1, step: 0 }
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
