ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/blue_skies/';
    const recipes = [
        {
            name: 'pyrope',
            weight: 100,
            mainhands: [
                { weight: 3, stack: { item: 'blue_skies:pyrope_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'blue_skies:pyrope_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:pyrope_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:pyrope_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'blue_skies:pyrope_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:pyrope_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:pyrope_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:pyrope_helmet', nbt: default_nbt } }],
            tags: ['blue_skies']
        },
        {
            name: 'pyrope_bow',
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
            boots: [{ weight: 1, stack: { item: 'blue_skies:pyrope_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:pyrope_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:pyrope_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:pyrope_helmet', nbt: default_nbt } }],
            tags: ['blue_skies_bow']
        },
        {
            name: 'aquite',
            weight: 70,
            mainhands: [
                { weight: 3, stack: { item: 'blue_skies:aquite_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'blue_skies:aquite_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:aquite_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:aquite_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'blue_skies:aquite_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:aquite_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:aquite_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:aquite_helmet', nbt: default_nbt } }],
            tags: ['blue_skies']
        },
        {
            name: 'aquite_bow',
            weight: 70,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'blue_skies:aquite_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:aquite_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:aquite_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:aquite_helmet', nbt: default_nbt } }],
            tags: ['blue_skies_bow']
        },
        {
            name: 'diopside',
            weight: 50,
            mainhands: [
                { weight: 3, stack: { item: 'blue_skies:diopside_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'blue_skies:diopside_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:diopside_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:diopside_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'blue_skies:diopside_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:diopside_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:diopside_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:diopside_helmet', nbt: default_nbt } }],
            tags: ['blue_skies']
        },
        {
            name: 'diopside_bow',
            weight: 50,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'blue_skies:diopside_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:diopside_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:diopside_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:diopside_helmet', nbt: default_nbt } }],
            tags: ['blue_skies_bow']
        },
        {
            name: 'charoite',
            weight: 30,
            mainhands: [
                { weight: 3, stack: { item: 'blue_skies:charoite_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'blue_skies:charoite_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:charoite_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'blue_skies:charoite_shovel', nbt: default_nbt } }
            ],
            offhands: all_shield_designs,
            boots: [{ weight: 1, stack: { item: 'blue_skies:charoite_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:charoite_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:charoite_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:charoite_helmet', nbt: default_nbt } }],
            tags: ['blue_skies']
        },
        {
            name: 'charoite_bow',
            weight: 30,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'blue_skies:charoite_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'blue_skies:charoite_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'blue_skies:charoite_chestplate', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'blue_skies:charoite_helmet', nbt: default_nbt } }],
            tags: ['blue_skies_bow']
        },
        {
            name: 'aqua',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'ars_nouveau:enchanters_sword', nbt: default_nbt } }],
            offhands: [{ weight: 1, stack: { item: 'minecraft:totem_of_undying' } }],
            boots: [{ weight: 1, stack: { item: 'ars_elemental:aqua_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'ars_elemental:aqua_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'ars_elemental:aqua_robes', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'ars_elemental:aqua_hat', nbt: default_nbt } }],
            tags: ['blue_skies', 'blue_skies_mage']
        },
        {
            name: 'aqua_bow',
            weight: 40,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'ars_elemental:aqua_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'ars_elemental:aqua_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'ars_elemental:aqua_robes', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'ars_elemental:aqua_hat', nbt: default_nbt } }],
            tags: ['blue_skies_bow']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
