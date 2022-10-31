ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/the_bumblezone/';
    const recipes = [
        {
            name: 'pyrope',
            weight: 100,
            mainhands: [
                { weight: 3, stack: { item: 'minecraft:gold_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'minecraft:gold_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:gold_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:gold_shovel', nbt: default_nbt } }
            ],
            offhands: [{ weight: 1, stack: { item: 'the_bumblezone:honey_crystal_shield' } }],
            boots: [
                { weight: 1, stack: { item: 'the_bumblezone:carpenter_bee_boots_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:carpenter_bee_boots_2', nbt: default_nbt } }
            ],
            leggings: [
                { weight: 1, stack: { item: 'the_bumblezone:honey_bee_leggings_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:honey_bee_leggings_2', nbt: default_nbt } }
            ],
            chestplates: [
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_2', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_trans_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_trans_2', nbt: default_nbt } }
            ],
            helmets: [
                { weight: 1, stack: { item: 'the_bumblezone:stingless_bee_helmet_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:stingless_bee_helmet_2', nbt: default_nbt } }
            ],
            tags: ['the_bumblezone']
        },
        {
            name: 'pyrope_bow',
            weight: 100,
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
            boots: [
                { weight: 1, stack: { item: 'the_bumblezone:carpenter_bee_boots_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:carpenter_bee_boots_2', nbt: default_nbt } }
            ],
            leggings: [
                { weight: 1, stack: { item: 'the_bumblezone:honey_bee_leggings_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:honey_bee_leggings_2', nbt: default_nbt } }
            ],
            chestplates: [
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_2', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_trans_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:bumble_bee_chestplate_trans_2', nbt: default_nbt } }
            ],
            helmets: [
                { weight: 1, stack: { item: 'the_bumblezone:stingless_bee_helmet_1', nbt: default_nbt } },
                { weight: 1, stack: { item: 'the_bumblezone:stingless_bee_helmet_2', nbt: default_nbt } }
            ],
            tags: ['the_bumblezone_bow']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
