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
            id: 'skeleton_bow',
            chance: 1.0,
            weight: 85,
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
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 40, steps: 10, step: 2 }
                    }
                ]
            }
        },
        {
            id: 'skeleton_forsaken_knight',
            namme: 'Forsaken Knight',
            chance: 1.0,
            weight: 15,
            quality: 0,
            entities: ['minecraft:skeleton'],
            valid_gear_sets: ['#miniboss/skeleton_forsaken_knight'],
            dimensions: [],
            affixed: false,
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
                        value: { min: 40, steps: 10, step: 2 }
                    }
                ]
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
