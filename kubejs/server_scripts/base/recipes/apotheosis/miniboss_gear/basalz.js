ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'blizz',
            weight: 100,
            quality: 2.5,
            mainhands: [],
            offhands: [],
            helmets: [],
            chestplates: [
                {
                    stack: {
                        item: 'pneumaticcraft:compressed_iron_chestplate',
                        nbt: Object.assign(reactive.earth_snare, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [],
            boots: [],
            tags: ['miniboss/blizz']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
