ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'blitz',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [],
            chestplates: [
                {
                    stack: {
                        item: 'minecraft:chainmail_chestplate',
                        nbt: Object.assign(reactive.orbit_lightning, enchant_glint.blank, enchantments.reactive_3)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/blitz']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
