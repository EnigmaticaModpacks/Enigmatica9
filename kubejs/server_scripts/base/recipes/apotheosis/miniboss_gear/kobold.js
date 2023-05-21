ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'kobold',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'farmersdelight:flint_knife', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [],
            chestplates: [],
            leggings: [],
            boots: [],
            tags: ['miniboss/kobold']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
