/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'apotheosis:bosses/the_nether/';
    const recipes = [
        {
            entity: 'ars_elemental:fire_mage',
            weight: 20,
            quality: 6,
            size: { width: 1, height: 2 },
            valid_gear_sets: ['#the_nether_mage'],
            dimensions: ['minecraft:the_nether'],
            min_rarity: 'mythic',
            max_rarity: 'mythic',
            stats: {
                mythic: {
                    enchant_chance: 1,
                    enchantment_levels: [36, 30, 100, 85],
                    effects: [
                        { effect: 'minecraft:fire_resistance', chance: 1 },
                        { effect: 'ars_nouveau:shielding', amplifier: { min: 2, max: 3 }, chance: 1 },
                        { effect: 'ars_nouveau:spell_damage', amplifier: { min: 2, max: 7 }, chance: 1 },
                        { effect: 'ars_nouveau:mana_regen', amplifier: { min: 2, max: 7 }, chance: 1 }
                    ],
                    attribute_modifiers: [
                        {
                            attribute: 'minecraft:generic.max_health',
                            operation: 'ADDITION',
                            value: {
                                min: 60,
                                steps: 40,
                                step: 2
                            }
                        },
                        {
                            attribute: 'minecraft:generic.movement_speed',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.2,
                                steps: 20,
                                step: 0.01
                            }
                        },
                        {
                            attribute: 'minecraft:generic.attack_damage',
                            operation: 'MULTIPLY_BASE',
                            value: {
                                min: 0.35,
                                steps: 35,
                                step: 0.01
                            }
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
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.entity.split(':')[1]}.json`, recipe);
    });
});
