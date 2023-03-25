/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/the_end/';
    const recipes = [
        {
            name: 'endersurge',
            weight: 2,
            quality: 0.8,
            min_rarity: 'mythic',
            dimensions: ['minecraft:the_end'],
            unique: true,
            bonuses: [
                {
                    type: 'apotheosis:enchantment',
                    gem_class: { key: 'anything', types: ['helmet'] },
                    enchantment: 'minecraft:sharpness',
                    _comment: 'The enchantment field is unused when global=true, but still must be a valid name',
                    global: true,
                    values: { mythic: 1, ancient: 2 }
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
