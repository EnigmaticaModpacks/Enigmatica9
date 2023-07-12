/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:minibosses/cnb/';
    const recipes = [
        {
            id: 'sporeling',
            name: null,
            chance: 1.0,
            weight: 85,
            quality: 0,
            entities: ['cnb:sporeling'],
            valid_gear_sets: ['#miniboss/sporeling'],
            dimensions: [],
            affixed: false,
            stats: {
                enchant_chance: 0.0,
                enchantment_levels: [12, 8, 20, 14],
                effects: [],
                attribute_modifiers: []
            },
            finalize: true
        }
    ];

    recipes.forEach((recipe) => {
        recipe.exclusions ? recipe.exclusions.push(default_exclusions) : (recipe.exclusions = [default_exclusions]);

        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
