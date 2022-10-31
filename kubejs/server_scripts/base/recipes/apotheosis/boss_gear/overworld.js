ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/overworld/';
    const recipes = [
        {
            name: 'chain',
            weight: 90,
            quality: 2.5,
            mainhands: [
                { weight: 3, stack: { item: 'minecraft:iron_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'minecraft:iron_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:iron_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'minecraft:iron_shovel', nbt: default_nbt } }
            ],
            offhands: [{ weight: 1, stack: { item: 'minecraft:shield', nbt: shield_nbt.dark_knight } }],
            boots: [{ weight: 1, stack: { item: 'minecraft:chainmail_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'minecraft:chainmail_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'minecraft:chainmail_chestplate', nbt: default_nbt } }],
            helmets: [
                { weight: 3, stack: { item: 'minecraft:chainmail_helmet', nbt: default_nbt } },
                { weight: 1, stack: { item: 'minecraft:turtle_helmet', nbt: default_nbt } }
            ],
            tags: ['overworld']
        },
        {
            name: 'chain_bow',
            weight: 90,
            quality: 2.5,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.poison_strong } }
            ],
            boots: [{ weight: 1, stack: { item: 'minecraft:chainmail_boots', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'minecraft:chainmail_leggings', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'minecraft:chainmail_chestplate', nbt: default_nbt } }],
            helmets: [
                { weight: 3, stack: { item: 'minecraft:chainmail_helmet', nbt: default_nbt } },
                { weight: 1, stack: { item: 'minecraft:turtle_helmet', nbt: default_nbt } }
            ],
            tags: ['overworld_bow']
        },
        {
            name: 'steel',
            weight: 80,
            quality: 5,
            mainhands: [
                { weight: 3, stack: { item: 'immersiveengineering:sword_steel', nbt: default_nbt } },
                { weight: 3, stack: { item: 'immersiveengineering:axe_steel', nbt: default_nbt } },
                { weight: 2, stack: { item: 'immersiveengineering:pickaxe_steel', nbt: default_nbt } },
                { weight: 2, stack: { item: 'immersiveengineering:shovel_steel', nbt: default_nbt } }
            ],
            offhands: [{ weight: 1, stack: { item: 'immersiveengineering:shield', nbt: default_nbt } }],
            boots: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_feet', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_legs', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_chest', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_head', nbt: default_nbt } }],
            tags: ['overworld']
        },
        {
            name: 'steel_bow',
            weight: 80,
            quality: 5,
            mainhands: [{ weight: 3, stack: { item: 'minecraft:bow', nbt: default_nbt } }],
            offhands: [
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.blasting_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.freezing_strong } },
                { weight: 25, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.weakness_long } },
                { weight: 15, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.sundering_strong } },
                { weight: 10, stack: { item: 'minecraft:tipped_arrow', nbt: tipped_arrow_nbt.shock_long } }
            ],
            boots: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_feet', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_legs', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_chest', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'immersiveengineering:armor_steel_head', nbt: default_nbt } }],
            tags: ['overworld_bow']
        },
        {
            name: 'infused_iron',
            weight: 80,
            quality: 5,
            mainhands: [
                { weight: 3, stack: { item: 'naturesaura:infused_iron_sword', nbt: default_nbt } },
                { weight: 3, stack: { item: 'naturesaura:infused_iron_axe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'naturesaura:infused_iron_pickaxe', nbt: default_nbt } },
                { weight: 2, stack: { item: 'naturesaura:infused_iron_shovel', nbt: default_nbt } }
            ],
            offhands: [{ weight: 1, stack: { item: 'minecraft:shield', nbt: shield_nbt.tree } }],
            boots: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_shoes', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_pants', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_chest', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_helmet', nbt: default_nbt } }],
            tags: ['overworld']
        },
        {
            name: 'infused_iron_bow',
            weight: 80,
            quality: 5,
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
            boots: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_shoes', nbt: default_nbt } }],
            leggings: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_pants', nbt: default_nbt } }],
            chestplates: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_chest', nbt: default_nbt } }],
            helmets: [{ weight: 1, stack: { item: 'naturesaura:infused_iron_helmet', nbt: default_nbt } }],
            tags: ['overworld_bow']
        }
    ];

    const disabled_recipes = [{ name: 'leather' }, { name: 'leather_bow' }, { name: 'iron' }, { name: 'iron_bow' }];

    disabled_recipes.forEach((recipe) => {
        recipes.push({ name: recipe.name, conditions: [{ type: 'forge:false' }] });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
