/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/thermal/';
    const recipes = [
        {
            id: 'blizz',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['thermal:blizz'],
            valid_gear_sets: ['#miniboss/blizz'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'cofh_core:panacea', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 40, steps: 1, step: 0 }
                    }
                ]
            }
        },
        {
            id: 'basalz',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['thermal:basalz'],
            valid_gear_sets: ['#miniboss/basalz'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'cofh_core:explosion_resistance', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 40, steps: 1, step: 0 }
                    }
                ]
            }
        },
        {
            id: 'blitz',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['thermal:blitz'],
            valid_gear_sets: ['#miniboss/blitz'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'cofh_core:lightning_resistance', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 40, steps: 1, step: 0 }
                    }
                ]
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
