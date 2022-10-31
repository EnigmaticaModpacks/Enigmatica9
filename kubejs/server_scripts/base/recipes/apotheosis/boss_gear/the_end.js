ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/the_end/';
    const recipes = [
        {
            name: 'sky',
            weight: 70,
            mainhands: [
                { weight: 3, stack: { item: 'naturesaura:sky_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'naturesaura:sky_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'naturesaura:sky_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'naturesaura:sky_shovel', nbt: default_nbt } }
            ],
            offhands: [{ weight: 1, stack: { item: 'minecraft:totem_of_undying' } }],
            boots: [{ weight: 1, stack: { item: 'naturesaura:sky_shoes', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'naturesaura:sky_pants', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'naturesaura:sky_chest', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'naturesaura:sky_helmet', nbt: default_nbt } }],
            tags: ['the_end']
        },
        {
            name: 'sky_bow',
            weight: 70,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                {
                    weight: 25,
                    stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"ars_nouveau:blasting_potion_strong"}' }
                },
                {
                    weight: 25,
                    stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"ars_nouveau:freezing_potion_strong"}' }
                },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"minecraft:long_weakness"}' } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"minecraft:strong_sundering"}' } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"minecraft:strong_poison"}' } }
            ],
            boots: [{ weight: 1, stack: { item: 'naturesaura:sky_shoes', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'naturesaura:sky_pants', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'naturesaura:sky_chest', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'naturesaura:sky_helmet', nbt: default_nbt } }],
            tags: ['the_end_bow']
        },
        {
            name: 'air',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'ars_nouveau:enchanters_sword', nbt: default_nbt } }],
            offhands: [{ weight: 1, stack: { item: 'minecraft:totem_of_undying' } }],
            boots: [{ weight: 1, stack: { item: 'ars_elemental:air_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'ars_elemental:air_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'ars_elemental:air_robes', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'ars_elemental:air_hat', nbt: default_nbt } }],
            tags: ['the_end']
        },
        {
            name: 'air_bow',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                {
                    weight: 25,
                    stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"ars_nouveau:blasting_potion_strong"}' }
                },
                {
                    weight: 25,
                    stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"ars_nouveau:freezing_potion_strong"}' }
                },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"minecraft:long_weakness"}' } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"minecraft:strong_sundering"}' } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: '{Potion:"minecraft:strong_poison"}' } }
            ],
            boots: [{ weight: 1, stack: { item: 'ars_elemental:air_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'ars_elemental:air_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'ars_elemental:air_robes', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'ars_elemental:air_hat', nbt: default_nbt } }],
            tags: ['the_end_bow']
        }
    ];

    const disabled_recipes = [
        { name: 'diamond' },
        { name: 'diamond_bow' },
        { name: 'netherite' },
        { name: 'netherite_bow' }
    ];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ name: recipe.name, conditions: [{ type: 'forge:false' }] });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
