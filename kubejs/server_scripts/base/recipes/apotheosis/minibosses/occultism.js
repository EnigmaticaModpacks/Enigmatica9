/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/occultism/';
    const recipes = [
        {
            id: 'afrit_wild',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['occultism:afrit_wild'],
            valid_gear_sets: ['#miniboss/afrit_wild'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [40, 20, 40, 20],
                effects: [
                    { effect: 'minecraft:speed', amplifier: 1, chance: 1.0 },
                    { effect: 'cofh_core:explosion_resistance', amplifier: 0, chance: 1.0 },
                    { effect: 'minecraft:fire_resistance', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 190, steps: 10, step: 2 }
                    }
                ]
            }
        },
        {
            id: 'wild_hunt_wither_skeleton',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['occultism:wild_hunt_wither_skeleton'],
            valid_gear_sets: ['#miniboss/wild_hunt_wither_skeleton'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [30, 20, 30, 20],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:speed', amplifier: 1, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 100, steps: 10, step: 2 }
                    }
                ]
            }
        },
        {
            id: 'wild_hunt_skeleton',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['occultism:wild_hunt_skeleton'],
            valid_gear_sets: ['#miniboss/wild_hunt_skeleton'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [
                    { effect: 'minecraft:speed', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:fire_resistance', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 75, steps: 10, step: 2 }
                    }
                ]
            },
            supporting_entities: [
                {
                    entity: 'twilightforest:mist_wolf',
                    nbt: {},
                    x: -1,
                    y: 0,
                    z: -1
                },
                {
                    entity: 'twilightforest:mist_wolf',
                    nbt: {},
                    x: 1,
                    y: 0,
                    z: 1
                }
            ]
        },
        {
            id: 'possessed_enderman',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['occultism:possessed_enderman'],
            valid_gear_sets: ['#miniboss/possessed_enderman'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 80, steps: 10, step: 2 }
                    }
                ]
            },
            supporting_entities: [
                {
                    entity: 'minecraft:enderman',
                    nbt: {},
                    x: -1,
                    y: 0,
                    z: -1
                },
                {
                    entity: 'minecraft:enderman',
                    nbt: {},
                    x: 1,
                    y: 0,
                    z: 1
                },
                {
                    entity: 'minecraft:enderman',
                    nbt: {},
                    x: -1,
                    y: 0,
                    z: 1
                },
                {
                    entity: 'minecraft:enderman',
                    nbt: {},
                    x: 1,
                    y: 0,
                    z: -1
                }
            ]
        },
        {
            id: 'possessed_skeleton',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['occultism:possessed_skeleton'],
            valid_gear_sets: ['#miniboss/skeleton_bow'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [
                    { effect: 'minecraft:speed', amplifier: 1, chance: 1.0 },
                    { effect: 'cofh_core:explosion_resistance', amplifier: 0, chance: 1.0 }
                ],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 75, steps: 10, step: 2 }
                    }
                ]
            },
            supporting_entities: []
        }
    ];

    recipes.forEach((recipe) => {
        recipe.exclusions = [{ type: 'apotheosis:nbt', nbt: { Corrupted: true } }];
        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
