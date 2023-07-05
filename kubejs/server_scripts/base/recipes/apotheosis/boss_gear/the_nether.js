ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/the_nether/';
    const recipes = [
        {
            name: 'gold',
            weight: 120,
            mainhands: [
                { weight: 3, stack: { item: 'minecraft:golden_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'minecraft:golden_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:golden_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:golden_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'minecraft:golden_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'minecraft:golden_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'minecraft:golden_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'minecraft:golden_helmet', nbt: default_nbt } }],
            tags: ['the_nether']
        },
        {
            name: 'gold_bow',
            weight: 120,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow' } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'minecraft:golden_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'minecraft:golden_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'minecraft:golden_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'minecraft:golden_helmet', nbt: default_nbt } }],
            tags: ['the_nether_bow']
        },
        {
            name: 'fire',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'ars_nouveau:enchanters_sword', nbt: default_nbt } }],
            offhands: [{ weight: 1, stack: { item: 'minecraft:totem_of_undying' } }],
            boots: [
                {
                    weight: 1,
                    stack: {
                        item: 'ars_nouveau:apprentice_boots',
                        nbt: Object.assign(default_nbt, { an_stack_perks: { color: 'orange' } })
                    }
                }
            ],
            leggings: [
                {
                    weight: 1,
                    stack: {
                        item: 'ars_nouveau:apprentice_leggings',
                        nbt: Object.assign(default_nbt, { an_stack_perks: { color: 'orange' } })
                    }
                }
            ],
            chestplates: [
                {
                    weight: 1,
                    stack: {
                        item: 'ars_nouveau:apprentice_robes',
                        nbt: Object.assign(default_nbt, { an_stack_perks: { color: 'orange' } })
                    }
                }
            ],
            helmets: [
                {
                    weight: 1,
                    stack: {
                        item: 'ars_nouveau:apprentice_hood',
                        nbt: Object.assign(default_nbt, { an_stack_perks: { color: 'orange' } })
                    }
                }
            ],
            tags: ['the_nether', 'the_nether_mage']
        },
        {
            name: 'netherite',
            weight: 20,
            mainhands: [
                { weight: 3, stack: { item: 'minecraft:netherite_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'minecraft:netherite_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:netherite_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:netherite_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'minecraft:netherite_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'minecraft:netherite_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'minecraft:netherite_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'minecraft:netherite_helmet', nbt: default_nbt } }],
            tags: ['the_nether']
        },
        {
            name: 'netherite_bow',
            weight: 20,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'minecraft:netherite_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'minecraft:netherite_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'minecraft:netherite_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'minecraft:netherite_helmet', nbt: default_nbt } }],
            tags: ['the_nether_bow']
        }
    ];

    const disabled_recipes = [{ name: 'diamond' }, { name: 'diamond_bow' }];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ name: recipe.name, conditions: [{ type: 'forge:false' }] });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
