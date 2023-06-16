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
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            exclusions: [{ type: 'apotheosis:spawn_type', spawn_types: ['MOB_SUMMONED'] }],
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'cofh_core:panacea', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: []
            }
        },
        {
            id: 'basalz',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['thermal:basalz'],
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            exclusions: [{ type: 'apotheosis:spawn_type', spawn_types: ['MOB_SUMMONED'] }],
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'cofh_core:explosion_resistance', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: []
            }
        },
        {
            id: 'blitz',
            name: null,
            chance: 1.0,
            weight: 100,
            quality: 0,
            entities: ['thermal:blitz'],
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            exclusions: [{ type: 'apotheosis:spawn_type', spawn_types: ['MOB_SUMMONED'] }],
            nbt: {},
            stats: {
                enchant_chance: 1.0,
                enchantment_levels: [20, 20, 20, 20],
                effects: [{ effect: 'cofh_core:lightning_resistance', amplifier: 0, chance: 1.0 }],
                attribute_modifiers: []
            }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.exclusions ? recipe.exclusions.push(default_exclusions) : (recipe.exclusions = [default_exclusions]);

        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
