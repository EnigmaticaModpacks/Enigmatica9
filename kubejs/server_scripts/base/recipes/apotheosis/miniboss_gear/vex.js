ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'vex',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'twilightforest:glass_sword', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            offhands: [],
            helmets: [],
            chestplates: [],
            leggings: [],
            boots: [],
            tags: ['miniboss/vex']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
