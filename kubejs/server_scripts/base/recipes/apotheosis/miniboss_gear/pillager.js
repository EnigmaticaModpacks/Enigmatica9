ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'pillager',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'minecraft:crossbow',
                        nbt: Object.assign(enchantments.multishot, enchant_glint.blank)
                    },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            offhands: [
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering, count: 5 },
                    weight: 50,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting, count: 5 },
                    weight: 5,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.harming, count: 5 },
                    weight: 20,
                    drop_chance: 1.0
                },
                {
                    stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison, count: 5 },
                    weight: 25,
                    drop_chance: 1.0
                }
            ],
            helmets: [
                {
                    stack: { item: 'minecraft:leather_helmet', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            chestplates: [
                {
                    stack: { item: 'minecraft:leather_chestplate', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            leggings: [
                {
                    stack: { item: 'minecraft:leather_leggings', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            boots: [
                {
                    stack: { item: 'minecraft:leather_boots', nbt: leather_colors.black },
                    weight: 100,
                    drop_chance: 0.085
                }
            ],
            tags: ['miniboss/pillager']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
