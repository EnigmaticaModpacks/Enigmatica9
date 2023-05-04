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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.exclusions = [{ type: 'apotheosis:nbt', nbt: { Corrupted: true } }];
        event.addJson(`${id_prefix}${recipe.id}.json`, recipe);
    });
});
