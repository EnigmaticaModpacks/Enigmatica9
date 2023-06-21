/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/ars_nouveau/';
    const recipes = [
        {
            id: 'ally_vex',
            name: null,
            chance: 0.5,
            weight: 100,
            quality: 0,
            entities: ['ars_nouveau:ally_vex'],
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
            id: 'weald_walker',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: [
                'ars_nouveau:vexing_weald_walker',
                'ars_nouveau:flourishing_weald_walker',
                'ars_nouveau:blazing_weald_walker',
                'ars_nouveau:cascading_weald_walker',
                'ars_elemental:flashing_weald_walker'
            ],
            valid_gear_sets: ['#miniboss/weald_walker'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: { min: 140, steps: 1, step: 0 }
                    },
                    {
                        attribute: 'minecraft:generic.knockback_resistance',
                        operation: 'ADDITION',
                        value: 0.4
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
