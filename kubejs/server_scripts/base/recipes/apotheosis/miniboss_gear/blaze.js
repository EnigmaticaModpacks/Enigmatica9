ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'blaze',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [],
            chestplates: [
                {
                    stack: {
                        item: 'twilightforest:fiery_chestplate',
                        nbt: Object.assign(reactive.burning_aura, enchant_glint.blank, enchantments.reactive_3)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/blaze']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
