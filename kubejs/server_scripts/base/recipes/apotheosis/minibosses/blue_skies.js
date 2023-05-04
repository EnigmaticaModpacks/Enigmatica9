/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/blue_skies/';
    const recipes = [
        {
            id: 'armored_frost_spirit',
            name: null,
            chance: 0.5,
            weight: 100,
            quality: 0,
            entities: ['blue_skies:armored_frost_spirit'],
            valid_gear_sets: ['#miniboss/armored_frost_spirit'],
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
                        value: { min: 30, steps: 1, step: 0 }
                    }
                ]
            }
        },
        {
            id: 'whistleshell_crab',
            name: null,
            chance: 0.5,
            weight: 100,
            quality: 0,
            entities: ['blue_skies:whistleshell_crab'],
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [
                    { effect: 'minecraft:strength', amplifier: 1, chance: 1.0 },
                    { effect: 'minecraft:resistance', amplifier: 1, chance: 1.0 }
                ],
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
        recipe.exclusions = [{ type: 'apotheosis:nbt', nbt: { Corrupted: true } }];
        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
