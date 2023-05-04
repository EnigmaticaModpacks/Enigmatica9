ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'armored_frost_spirit',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: { item: 'blue_skies:aquite_axe', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [],
            helmets: [
                {
                    stack: { item: 'blue_skies:aquite_helmet', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'blue_skies:aquite_chestplate', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'blue_skies:aquite_leggings', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'blue_skies:aquite_boots', nbt: default_nbt },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/armored_frost_spirit']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
