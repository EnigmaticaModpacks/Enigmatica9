ServerEvents.lowPriorityData((event) => {
    let recipes = [
        {
            name: 'treecapitator',
            input_1: { item: 'minecraft:diamond_axe', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_axe',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 7, id: 'minecraft:efficiency' },
                        { lvl: 1, id: 'apotheosis:chainsaw' },
                        { lvl: 7, id: 'minecraft:unbreaking' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_axe"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'timeworn_visage',
            input_1: { item: 'minecraft:diamond_helmet', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_helmet',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 5, id: 'minecraft:projectile_protection' },
                        { lvl: 3, id: 'apotheosis:life_mending' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 3, id: 'minecraft:aqua_affinity' },
                        { lvl: 3, id: 'twilightforest:chill_aura' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_helm"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'thunder_forged_legguards',
            input_1: { item: 'minecraft:diamond_leggings', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_leggings',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 5, id: 'minecraft:blast_protection' },
                        { lvl: 3, id: 'apotheosis:life_mending' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 2, id: 'apotheosis:berserk' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_legs"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'stonebreaker',
            input_1: { item: 'minecraft:diamond_pickaxe', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_pickaxe',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 4, id: 'minecraft:fortune' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 5, id: 'apotheosis:miners_fervor' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_pick"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'rune_forged_greaves',
            input_1: { item: 'minecraft:diamond_boots', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_boots',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 5, id: 'minecraft:fire_protection' },
                        { lvl: 1, id: 'naturesaura:aura_mending' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 1, id: 'apotheosis:stable_footing' },
                        { lvl: 5, id: 'minecraft:feather_falling' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_boots"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'greatplate_of_eternity',
            input_1: { item: 'minecraft:diamond_chestplate', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_chestplate',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 5, id: 'minecraft:protection' },
                        { lvl: 1, id: 'naturesaura:aura_mending' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 2, id: 'apotheosis:berserk' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_chest"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'eternal_vigilance',
            input_1: { item: 'minecraft:diamond_sword', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_sword',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 7, id: 'apotheosis:bane_of_illagers' },
                        { lvl: 1, id: 'naturesaura:aura_mending' },
                        { lvl: 3, id: 'minecraft:looting' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 3, id: 'apotheosis:scavenger' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.vigilance"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'captive_dreams',
            input_1: { item: 'minecraft:diamond_sword', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_sword',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 7, id: 'minecraft:smite' },
                        { lvl: 3, id: 'minecraft:looting' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 3, id: 'apotheosis:knowledge' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_sword"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'bonesplitter',
            input_1: { item: 'minecraft:diamond_axe', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_axe',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 7, id: 'minecraft:smite' },
                        { lvl: 3, id: 'apotheosis:knowledge' },
                        { lvl: 3, id: 'minecraft:looting' },
                        { lvl: 5, id: 'minecraft:unbreaking' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_axe2"}' },
                    Damage: 0
                }
            }
        },
        {
            name: 'arachnids_fear',
            input_1: { item: 'minecraft:diamond_sword', count: 1, nbt: '{Damage:0}' },
            input_2: { item: 'minecraft:emerald', count: 45 },
            output: {
                item: 'minecraft:diamond_sword',
                count: 1,
                nbt: {
                    Enchantments: [
                        { lvl: 7, id: 'minecraft:bane_of_arthropods' },
                        { lvl: 3, id: 'minecraft:looting' },
                        { lvl: 5, id: 'minecraft:unbreaking' },
                        { lvl: 3, id: 'minecraft:fire_aspect' }
                    ],
                    display: { Name: '{"translate":"name.apotheosis.merch_spider_sword"}' },
                    Damage: 0
                }
            }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.conditions = [{ type: 'apotheosis:module', module: 'village' }];
        recipe.type = 'apotheosis:basic_trade';
        recipe.price_mult = 1.0;
        recipe.max_trades = 1;
        recipe.rare = 'true';
        recipe.xp = 20;
        event.addJson(`apotheosis:wanderer_trades/${recipe.name}.json`, recipe);
    });
});
