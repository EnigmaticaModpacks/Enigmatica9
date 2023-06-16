/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/hexerei/';
    const recipes = [
        {
            id: 'crow',
            name: null,
            chance: 1.0,
            weight: 85,
            quality: 0,
            entities: ['hexerei:crow'],
            valid_gear_sets: ['#miniboss/empty'],
            dimensions: [],
            affixed: false,
            nbt: {},
            stats: {
                enchant_chance: 0.0,
                enchantment_levels: [12, 8, 20, 14],
                effects: [],
                attribute_modifiers: [
                    {
                        attribute: 'minecraft:generic.max_health',
                        operation: 'ADDITION',
                        value: 18
                    },
                    {
                        attribute: 'minecraft:generic.armor',
                        operation: 'ADDITION',
                        value: 20
                    },
                    {
                        attribute: 'minecraft:generic.armor_toughness',
                        operation: 'ADDITION',
                        value: 12
                    },
                    {
                        attribute: 'minecraft:generic.attack_damage',
                        operation: 'ADDITION',
                        value: 9.5
                    },
                    {
                        attribute: 'minecraft:generic.attack_knockback',
                        operation: 'ADDITION',
                        value: 1.5
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
