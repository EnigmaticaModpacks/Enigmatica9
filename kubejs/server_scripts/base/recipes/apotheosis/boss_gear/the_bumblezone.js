ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/the_bumblezone/';
    const recipes = [
        {
            name: 'bee',
            weight: 100,
            mainhands: [
                { weight: 3, stack: { item: 'minecraft:golden_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'minecraft:golden_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:golden_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:golden_shovel', nbt: default_nbt } }
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
            name: 'bee_bow',
            weight: 100,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
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
        },
        {
            name: 'earth',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'ars_nouveau:enchanters_sword', nbt: default_nbt } }],
            offhands: [{ weight: 1, stack: { item: 'minecraft:totem_of_undying' } }],
            boots: [{ weight: 1, stack: { item: 'ars_elemental:earth_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'ars_elemental:earth_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'ars_elemental:earth_robes', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'ars_elemental:earth_hat', nbt: default_nbt } }],
            tags: ['the_bumblezone', 'the_bumblezone_mage']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
