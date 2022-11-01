ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/twilight/';
    const recipes = [
        {
            name: 'arctic',
            weight: 40,
            mainhands: [
                { weight: 3, stack: { item: 'twilightforest:knightmetal_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'twilightforest:knightmetal_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:knightmetal_pickaxe', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'twilightforest:arctic_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:arctic_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:arctic_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 9, stack: { item: 'twilightforest:arctic_helmet', nbt: default_nbt } }],
            tags: ['twilight']
        },
        {
            name: 'arctic_bow',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'twilightforest:arctic_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:arctic_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:arctic_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 9, stack: { item: 'twilightforest:arctic_helmet', nbt: default_nbt } }],
            tags: ['twilight_bow']
        },
        {
            name: 'fiery',
            weight: 60,
            mainhands: [
                { weight: 3, stack: { item: 'twilightforest:fiery_sword', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:fiery_pickaxe', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'twilightforest:fiery_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:fiery_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:fiery_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'twilightforest:fiery_helmet', nbt: default_nbt } }],
            tags: ['twilight']
        },
        {
            name: 'fiery_bow',
            weight: 60,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'twilightforest:fiery_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:fiery_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:fiery_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'twilightforest:fiery_helmet', nbt: default_nbt } }],
            tags: ['twilight_bow']
        },
        {
            name: 'ironwood',
            weight: 100,
            mainhands: [
                { weight: 3, stack: { item: 'twilightforest:ironwood_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'twilightforest:ironwood_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:ironwood_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:ironwood_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'twilightforest:ironwood_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:ironwood_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:ironwood_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'twilightforest:ironwood_helmet', nbt: default_nbt } }],
            tags: ['twilight']
        },
        {
            name: 'ironwood_bow',
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
            boots: [{ weight: 1, stack: { item: 'twilightforest:ironwood_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:ironwood_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:ironwood_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'twilightforest:ironwood_helmet', nbt: default_nbt } }],
            tags: ['twilight_bow']
        },
        {
            name: 'knightmetal',
            weight: 60,
            mainhands: [
                { weight: 3, stack: { item: 'twilightforest:knightmetal_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'twilightforest:knightmetal_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:knightmetal_pickaxe', nbt: default_nbt } }
            ],
            offhands: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_shield', nbt: default_nbt } }],
            boots: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 9, stack: { item: 'twilightforest:knightmetal_helmet', nbt: default_nbt } }],
            tags: ['twilight']
        },
        {
            name: 'knightmetal_bow',
            weight: 60,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 9, stack: { item: 'twilightforest:knightmetal_helmet' } }],
            tags: ['twilight_bow']
        },
        {
            name: 'steeleaf',
            weight: 80,
            mainhands: [
                { weight: 3, stack: { item: 'twilightforest:steeleaf_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'twilightforest:steeleaf_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:steeleaf_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:steeleaf_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_helmet', nbt: default_nbt } }],
            tags: ['twilight']
        },
        {
            name: 'steeleaf_bow',
            weight: 80,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'twilightforest:steeleaf_helmet', nbt: default_nbt } }],
            tags: ['twilight_bow']
        },
        {
            name: 'yeti',
            weight: 10,
            mainhands: [
                { weight: 3, stack: { item: 'twilightforest:knightmetal_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'twilightforest:knightmetal_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'twilightforest:knightmetal_pickaxe', nbt: default_nbt } }
            ],
            offhands: [{ weight: 1, stack: { item: 'twilightforest:knightmetal_shield', nbt: default_nbt } }],
            boots: [{ weight: 1, stack: { item: 'twilightforest:yeti_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:yeti_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:yeti_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 6, stack: { item: 'twilightforest:yeti_helmet', nbt: default_nbt } }],
            tags: ['twilight']
        },
        {
            name: 'yeti_bow',
            weight: 10,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'twilightforest:yeti_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'twilightforest:yeti_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'twilightforest:yeti_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 6, stack: { item: 'twilightforest:yeti_helmet', nbt: default_nbt } }],
            tags: ['twilight_bow']
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
            tags: ['twilight', 'twilight_mage']
        },
        {
            name: 'earth_bow',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'ars_elemental:earth_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'ars_elemental:earth_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'ars_elemental:earth_robes', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'ars_elemental:earth_hat', nbt: default_nbt } }],
            tags: ['twilight_bow']
        }
    ];

    const disabled_recipes = [];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ name: recipe.name, conditions: [{ type: 'forge:false' }] });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
