/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const recipes = {
        overworld: [],
        the_end: [],
        the_nether: [],
        twilight: [],
        blueskies: [
            {
                entity: 'minecraft:goat',
                weight: 1,
                quality: 5,
                size: { width: 1.4, height: 1.4 },
                valid_gear_sets: ['#overworld'],
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                min_rarity: 'mythic',
                max_rarity: 'mythic',
                stats: {
                    mythic: {
                        enchant_chance: 0.75,
                        enchantment_levels: [25, 20, 50, 40],
                        effects: [
                            { effect: 'minecraft:fire_resistance', chance: 1 },
                            { effect: 'minecraft:jump_boost', amplifier: { min: 3, max: 3 }, chance: 1 }
                        ],
                        attribute_modifiers: [
                            {
                                attribute: 'minecraft:generic.max_health',
                                operation: 'ADDITION',
                                value: { min: 600, steps: 100, step: 5 }
                            },
                            {
                                attribute: 'minecraft:generic.movement_speed',
                                operation: 'MULTIPLY_BASE',
                                value: { min: 0.25, steps: 10, step: 0.01 }
                            },
                            { attribute: 'minecraft:generic.attack_knockback', operation: 'ADDITION', value: 5 },
                            {
                                attribute: 'minecraft:generic.attack_damage',
                                operation: 'ADDITION',
                                value: { min: 40, steps: 20, step: 2 }
                            },
                            { attribute: 'minecraft:generic.knockback_resistance', operation: 'ADDITION', value: 1 }
                        ]
                    }
                }
            }
        ]
    };
    Object.keys(recipes).forEach((dimension) => {
        recipes[dimension].forEach((recipe) => {
            event.addJson(`apotheosis:bosses/${dimension}/${recipe.entity.split(':')[1]}.json`, recipe);
        });
    });
});
