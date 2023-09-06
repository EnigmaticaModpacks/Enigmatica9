/// High Priority required or Apotheosis over-writes these.
/*
enchantment_levels: [50, 30, 120, 40],
    level at which normal items are enchanted
    (same when ench module is disabled)
    level at which the affix item is enchanted
    (same when ench module is disable)

*/
ServerEvents.highPriorityData((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'the_bumblezone:advancements/the_bumblezone/';

    const advancements = [
        {
            id: 'the_queens_desire/journeys_end',
            parent: 'the_bumblezone:the_bumblezone/the_queens_desire/vip_trader',
            display: {
                icon: { item: 'the_bumblezone:essence_of_the_bees' },
                title: { translate: 'advancements.the_bumblezone.the_queens_desire.journeys_end.title' },
                description: { translate: 'advancements.the_bumblezone.the_queens_desire.journeys_end.description' },
                frame: 'challenge',
                show_toast: true,
                announce_to_chat: true,
                hidden: false
            },
            rewards: {
                experience: 1500,
                loot: ['the_bumblezone:advancements/queens_desire_end']
            },
            criteria: {
                target_advancement_done_1: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: { target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/back_in_action' }
                },
                target_advancement_done_2: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/fighting_the_swarm'
                    }
                },
                target_advancement_done_3: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement:
                            'the_bumblezone:the_bumblezone/the_queens_desire/flooding_the_housing_market'
                    }
                },
                target_advancement_done_4: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: { target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/honey_drunk' }
                },
                target_advancement_done_5: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/hungry_hungry_bees'
                    }
                },
                target_advancement_done_7: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/love_bees'
                    }
                },
                target_advancement_done_8: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/otherworldly_mites'
                    }
                },
                target_advancement_done_10: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/poison_warfare'
                    }
                },
                target_advancement_done_11: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/pollen_fight'
                    }
                },
                target_advancement_done_12: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/slimy_mitosis'
                    }
                },
                target_advancement_done_13: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/terror_fangs'
                    }
                },
                target_advancement_done_14: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/the_crazy_florist'
                    }
                },
                target_advancement_done_16: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/too_many_legs'
                    }
                },
                target_advancement_done_17: {
                    trigger: 'the_bumblezone:target_advancement_done',
                    conditions: {
                        target_advancement: 'the_bumblezone:the_bumblezone/the_queens_desire/vip_trader'
                    }
                }
            },
            requirements: [
                ['target_advancement_done_1'],
                ['target_advancement_done_2'],
                ['target_advancement_done_3'],
                ['target_advancement_done_4'],
                ['target_advancement_done_5'],
                ['target_advancement_done_7'],
                ['target_advancement_done_8'],
                ['target_advancement_done_10'],
                ['target_advancement_done_11'],
                ['target_advancement_done_12'],
                ['target_advancement_done_13'],
                ['target_advancement_done_14'],
                ['target_advancement_done_16'],
                ['target_advancement_done_17']
            ]
        },
        {
            id: 'the_queens_desire/vip_trader',
            parent: 'the_bumblezone:the_bumblezone/the_queens_desire/otherworldly_mites',
            display: {
                icon: {
                    item: 'the_bumblezone:bee_queen_spawn_egg'
                },
                title: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.vip_trader.title'
                },
                description: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.vip_trader.description'
                },
                frame: 'challenge',
                show_toast: true,
                announce_to_chat: false,
                hidden: false
            },
            rewards: {
                experience: 300,
                loot: ['the_bumblezone:advancements/queens_desire']
            },
            criteria: {
                bee_queen_trading: {
                    trigger: 'the_bumblezone:bee_queen_trading',
                    conditions: {
                        target_count: 256
                    }
                }
            },
            requirements: [['bee_queen_trading']]
        },
        {
            id: 'the_queens_desire/hungry_hungry_bees',
            parent: 'the_bumblezone:the_bumblezone/the_queens_desire/the_crazy_florist',
            display: {
                icon: {
                    item: 'the_bumblezone:bee_queen_spawn_egg'
                },
                title: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.hungry_hungry_bees.title'
                },
                description: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.hungry_hungry_bees.description'
                },
                frame: 'challenge',
                show_toast: true,
                announce_to_chat: false,
                hidden: false
            },
            rewards: {
                experience: 100,
                loot: ['the_bumblezone:advancements/queens_desire']
            },
            criteria: {
                bee_fed: {
                    trigger: 'the_bumblezone:bee_fed',
                    conditions: {
                        target_count: 64
                    }
                }
            },
            requirements: [['bee_fed']]
        },

        // Disabled Advancements due to placement
        {
            id: 'the_queens_desire/intimidation',
            parent: 'the_bumblezone:the_bumblezone/the_queens_desire/essence_infusion',
            display: {
                icon: {
                    item: 'the_bumblezone:bee_queen_spawn_egg'
                },
                title: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.intimidation.title'
                },
                description: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.intimidation.description'
                },
                frame: 'challenge',
                show_toast: true,
                announce_to_chat: false,
                hidden: true
            },
            rewards: {
                experience: 200,
                loot: ['the_bumblezone:advancements/queens_desire']
            },
            criteria: { impossible: { trigger: 'minecraft:impossible' } },
            requirements: [['impossible']]
        },
        {
            id: 'the_queens_desire/the_great_dragon_slayer',
            parent: 'the_bumblezone:the_bumblezone/the_queens_desire/intimidation',
            display: {
                icon: {
                    item: 'the_bumblezone:bee_queen_spawn_egg'
                },
                title: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.the_great_dragon_slayer.title'
                },
                description: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.the_great_dragon_slayer.description'
                },
                frame: 'challenge',
                show_toast: true,
                announce_to_chat: false,
                hidden: true
            },
            rewards: {
                experience: 150,
                loot: ['the_bumblezone:advancements/queens_desire']
            },
            criteria: { impossible: { trigger: 'minecraft:impossible' } },
            requirements: [['impossible']]
        },
        {
            id: 'the_queens_desire/peak_inefficiency',
            parent: 'the_bumblezone:the_bumblezone/the_queens_desire/the_great_dragon_slayer',
            display: {
                icon: {
                    item: 'the_bumblezone:bee_queen_spawn_egg'
                },
                title: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.peak_inefficiency.title'
                },
                description: {
                    translate: 'advancements.the_bumblezone.the_queens_desire.peak_inefficiency.description'
                },
                frame: 'challenge',
                show_toast: true,
                announce_to_chat: false,
                hidden: true
            },
            rewards: {
                experience: 500,
                loot: ['the_bumblezone:advancements/queens_desire']
            },
            criteria: { impossible: { trigger: 'minecraft:impossible' } },
            requirements: [['impossible']]
        },
        {
            id: 'tools/honey_compass_recipe',
            parent: 'the_bumblezone:the_bumblezone/combs_and_beeswax/honey_cocoon_silk_touch',
            display: {
                icon: { item: 'the_bumblezone:honey_compass' },
                title: { translate: 'advancements.the_bumblezone.honey_compass_recipe.title' },
                description: { translate: 'advancements.the_bumblezone.honey_compass_recipe.description' },
                frame: 'task',
                show_toast: true,
                announce_to_chat: false,
                hidden: false
            },
            rewards: { experience: 5 },
            criteria: {
                honey_compass: {
                    trigger: 'minecraft:inventory_changed',
                    conditions: {
                        items: [{ items: ['the_bumblezone:honey_compass'] }]
                    }
                }
            },
            requirements: [['honey_compass']]
        }
    ];

    advancements.forEach((advancement) => {
        event.addJson(`${id_prefix}${advancement.id}.json`, advancement);
    });
});
