ServerEvents.lowPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            id: 'royal_jelly_bottle_trades',
            wants: [{ id: 'the_bumblezone:royal_jelly_bottle', required: true }],
            possible_rewards: [
                {
                    id: 'minecraft:golden_apple',
                    count: 2,
                    xp_reward: 10,
                    weight: 10,
                    required: true
                },
                {
                    id: 'minecraft:experience_bottle',
                    count: 6,
                    xp_reward: 10,
                    weight: 10,
                    required: true
                },
                {
                    id: 'minecraft:glow_ink_sac',
                    count: 10,
                    xp_reward: 10,
                    weight: 10,
                    required: true
                },
                {
                    id: 'minecraft:turtle_egg',
                    count: 4,
                    xp_reward: 10,
                    weight: 10,
                    required: true
                },
                {
                    id: 'minecraft:name_tag',
                    count: 8,
                    xp_reward: 10,
                    weight: 10,
                    required: true
                },
                {
                    id: 'minecraft:ender_chest',
                    count: 1,
                    xp_reward: 10,
                    weight: 7,
                    required: true
                },
                {
                    id: 'minecraft:totem_of_undying',
                    count: 1,
                    xp_reward: 10,
                    weight: 5,
                    required: true
                },
                {
                    id: 'minecraft:end_crystal',
                    count: 1,
                    xp_reward: 10,
                    weight: 5,
                    required: true
                },
                {
                    id: 'minecraft:wither_rose',
                    count: 2,
                    xp_reward: 10,
                    weight: 5,
                    required: true
                },
                {
                    id: 'minecraft:dragon_breath',
                    count: 2,
                    xp_reward: 10,
                    weight: 5,
                    required: true
                },
                {
                    id: 'minecraft:enchanted_golden_apple',
                    count: 1,
                    xp_reward: 10,
                    weight: 5,
                    required: true
                },
                {
                    id: 'minecraft:beacon',
                    count: 1,
                    xp_reward: 10,
                    weight: 3,
                    required: true
                }
            ]
        },
        {
            id: 'royal_jelly_bucket_block_trades',
            wants: [
                { id: 'the_bumblezone:royal_jelly_bucket', required: true },
                { id: 'the_bumblezone:royal_jelly_block', required: true }
            ],
            possible_rewards: [
                {
                    id: 'minecraft:enchanted_golden_apple',
                    count: 1,
                    xp_reward: 50,
                    weight: 140,
                    required: true
                },
                {
                    id: 'minecraft:totem_of_undying',
                    count: 2,
                    xp_reward: 50,
                    weight: 120,
                    required: true
                },
                {
                    id: 'minecraft:end_crystal',
                    count: 24,
                    xp_reward: 50,
                    weight: 100,
                    required: true
                },
                {
                    id: 'minecraft:golden_apple',
                    count: 9,
                    xp_reward: 50,
                    weight: 80,
                    required: true
                },
                {
                    id: 'minecraft:dragon_breath',
                    count: 10,
                    xp_reward: 50,
                    weight: 80,
                    required: true
                },
                {
                    id: 'minecraft:beacon',
                    count: 2,
                    xp_reward: 50,
                    weight: 60,
                    required: true
                },
                {
                    id: 'minecraft:experience_bottle',
                    count: 32,
                    xp_reward: 50,
                    weight: 60,
                    required: true
                }
            ]
        },
        {
            id: 'dream_stone_trades',
            wants: [{ id: 'kubejs:dream_stone', required: true }],
            possible_rewards: [
                {
                    id: 'the_bumblezone:essence_of_the_bees',
                    count: 1,
                    xp_reward: 500,
                    weight: 100,
                    required: true
                }
            ]
        },
        {
            id: 'calling_spirit_trades',
            wants: [{ id: 'kubejs:spirit_of_devotion', required: true }],
            possible_rewards: [
                {
                    id: 'ars_nouveau:water_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                },
                {
                    id: 'ars_nouveau:manipulation_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                },
                {
                    id: 'ars_nouveau:fire_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                },
                {
                    id: 'ars_nouveau:earth_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                },
                {
                    id: 'ars_nouveau:air_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                },
                {
                    id: 'ars_nouveau:conjuration_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                },
                {
                    id: 'ars_nouveau:abjuration_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                },
                {
                    id: 'ars_elemental:anima_essence',
                    count: 10,
                    xp_reward: 10,
                    weight: 100,
                    required: true
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`the_bumblezone:bz_bee_queen_trades/${recipe.id}.json`, recipe);
    });
});
