//priority: 1000

const armored_mobs = {
    minecraft: {
        iron_golem: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [
                            { type: 'ars_nouveau:shielding', amplifier: 2 },
                            { type: 'minecraft:strength', amplifier: 2 },
                            { type: 'minecraft:resistance', amplifier: 2 },
                            { type: 'minecraft:regeneration', amplifier: 1 }
                        ],
                        max_health: 200
                    }
                }
            ]
        },
        witch: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [{ type: 'ars_nouveau:shielding', amplifier: 2 }],
                        max_health: 30,
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        }
                        // head: 'hexerei:witch_helmet',
                        // chest: 'hexerei:witch_chestplate',
                        // feet: 'hexerei:witch_boots'
                    }
                }
            ]
        },
        evoker: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [{ type: 'ars_nouveau:shielding', amplifier: 2 }],
                        max_health: 30,
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        }
                        // chest: 'hexerei:witch_chestplate',
                        // feet: 'hexerei:witch_boots'
                    }
                }
            ]
        },
        vex: {
            equipment: [
                {
                    weight: 50,
                    set: { default: true }
                },
                {
                    weight: 50,
                    set: {
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'twilightforest:glass_sword',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                }
            ]
        },
        vindicator: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 30,
                        enchant: {
                            chance: 1.0,
                            level: { min: 15, max: 20 },
                            treasure: false
                        },
                        chest: Item.of(
                            'minecraft:leather_chestplate',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'minecraft:leather_leggings',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'minecraft:leather_boots',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:knightmetal_axe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                }
            ]
        },
        pillager: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 30,
                        enchant: {
                            chance: 1.0,
                            level: { min: 15, max: 20 },
                            treasure: false
                        },
                        chest: Item.of(
                            'minecraft:leather_chestplate',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'minecraft:leather_leggings',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'minecraft:leather_boots',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'minecraft:crossbow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ).enchant('minecraft:multishot', 1)
                    }
                }
            ]
        },
        piglin: {
            equipment: [
                {
                    weight: 50,
                    set: {
                        max_health: 30,
                        enchant: {
                            chance: 0.5,
                            level: { min: 20, max: 25 },
                            treasure: false
                        },
                        chest: Item.of(
                            'minecraft:golden_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:gold_minotaur_axe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                },
                {
                    weight: 50,
                    set: {
                        max_health: 30,
                        enchant: {
                            chance: 0.5,
                            level: { min: 20, max: 25 },
                            treasure: false
                        },
                        chest: Item.of(
                            'minecraft:golden_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'minecraft:crossbow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ).enchant('minecraft:multishot', 1)
                    }
                }
            ]
        },
        piglin_brute: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [{ type: 'minecraft:strength', amplifier: 3 }],
                        max_health: 50,
                        enchant: {
                            chance: 1.0,
                            level: { min: 20, max: 25 },
                            treasure: false
                        },
                        head: Item.of(
                            'minecraft:golden_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'minecraft:golden_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'minecraft:golden_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'minecraft:golden_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:gold_minotaur_axe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                }
            ]
        },
        skeleton: {
            equipment: [
                {
                    weight: 40,
                    set: { default: true }
                },
                {
                    weight: 15,
                    set: {
                        custom_name: 'Forsaken Knight',
                        max_health: 50,
                        effects: [
                            { type: 'minecraft:strength', amplifier: 2 },
                            { type: 'minecraft:resistance', amplifier: 1 }
                        ],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        head: Item.of(
                            'twilightforest:knightmetal_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'twilightforest:knightmetal_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'twilightforest:knightmetal_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'twilightforest:knightmetal_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:knightmetal_sword',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of(
                            'twilightforest:knightmetal_shield',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                },
                {
                    weight: 15,
                    set: {
                        max_health: 50,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'minecraft:bow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:harming"}')
                    }
                },
                {
                    weight: 15,
                    set: {
                        max_health: 50,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'minecraft:bow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"ars_nouveau:blasting_potion"}')
                    }
                },
                {
                    weight: 15,
                    set: {
                        max_health: 50,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'minecraft:bow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:sundering"}')
                    }
                }
            ]
        },
        wither_skeleton: {
            equipment: [
                {
                    weight: 60,
                    set: {
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'immersiveengineering:sword_steel',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                },
                {
                    weight: 15,
                    set: {
                        custom_name: 'Withered Knight',
                        max_health: 75,
                        effects: [
                            { type: 'minecraft:strength', amplifier: 2 },
                            { type: 'minecraft:resistance', amplifier: 2 },
                            { type: 'minecraft:speed', amplifier: 2 }
                        ],
                        enchant: {
                            chance: 1.0,
                            level: { min: 20, max: 30 },
                            treasure: false
                        },
                        head: Item.of(
                            'pneumaticcraft:compressed_iron_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'pneumaticcraft:compressed_iron_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'pneumaticcraft:compressed_iron_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'pneumaticcraft:compressed_iron_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:fiery_sword',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of(
                            'blue_skies:spike_shield',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                },
                {
                    weight: 15,
                    set: {
                        max_health: 75,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        head: Item.of(
                            'minecraft:leather_helmet',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'minecraft:leather_chestplate',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'minecraft:leather_leggings',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'minecraft:leather_boots',
                            '{display:{color:1908001},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'minecraft:bow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:long_wither"}')
                    }
                }
            ]
        },
        stray: {
            equipment: [
                {
                    weight: 40,
                    set: {
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"ars_nouveau:freezing_potion"}')
                    }
                },
                {
                    weight: 15,
                    set: {
                        custom_name: 'Hoarfrost Knight',
                        max_health: 50,
                        effects: [
                            { type: 'minecraft:strength', amplifier: 2 },
                            { type: 'minecraft:resistance', amplifier: 1 }
                        ],
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        head: Item.of(
                            'twilightforest:yeti_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blue_rune"}}'
                        ),
                        chest: Item.of(
                            'twilightforest:yeti_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blue_rune"}}'
                        ),
                        legs: Item.of(
                            'twilightforest:yeti_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blue_rune"}}'
                        ),
                        feet: Item.of(
                            'twilightforest:yeti_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blue_rune"}}'
                        ),
                        mainhand: Item.of(
                            'minecraft:bow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blue_rune"}}'
                        ).enchant('minecraft:punch', 3),
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"ars_nouveau:freezing_potion_strong"}')
                    }
                },
                {
                    weight: 15,
                    set: {
                        max_health: 50,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'minecraft:bow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"ars_nouveau:freezing_potion"}')
                    }
                }
            ]
        },
        drowned: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [{ type: 'minecraft:resistance', amplifier: 1 }],
                        max_health: 40,
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'minecraft:trident',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                }
            ]
        }
    },
    twilightforest: {
        skeleton_druid: {
            equipment: [
                {
                    weight: 30,
                    set: {
                        effects: [
                            { type: 'minecraft:strength', amplifier: 1 },
                            { type: 'minecraft:resistance', amplifier: 1 }
                        ],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        head: Item.of(
                            'twilightforest:ironwood_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'twilightforest:ironwood_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'twilightforest:ironwood_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'twilightforest:ironwood_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:ironwood_hoe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                },
                {
                    weight: 25,
                    set: {
                        max_health: 40,
                        effects: [
                            { type: 'minecraft:strength', amplifier: 2 },
                            { type: 'minecraft:resistance', amplifier: 1 }
                        ],
                        enchant: {
                            chance: 0.75,
                            level: { min: 15, max: 25 },
                            treasure: false
                        },
                        head: Item.of(
                            'twilightforest:steeleaf_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'twilightforest:steeleaf_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'twilightforest:steeleaf_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'twilightforest:steeleaf_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:steeleaf_hoe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        summons: [{ mob: 'twilightforest:hostile_wolf', count: { min: 1, max: 2 }, spread: 5 }]
                    }
                },
                {
                    weight: 10,
                    set: {
                        max_health: 50,
                        effects: [
                            { type: 'minecraft:resistance', amplifier: 2 },
                            { type: 'minecraft:absorption', amplifier: 2 },
                            { type: 'ars_nouveau:shielding', amplifier: 2 }
                        ],
                        custom_name: 'Archdruid',
                        enchant: {
                            chance: 1.0,
                            level: { min: 20, max: 25 },
                            treasure: false
                        },
                        head: Item.of(
                            'twilightforest:steeleaf_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:green_rune"}}'
                        ),
                        chest: Item.of(
                            'twilightforest:steeleaf_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:green_rune"}}'
                        ),
                        legs: Item.of(
                            'twilightforest:steeleaf_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:green_rune"}}'
                        ),
                        feet: Item.of(
                            'twilightforest:steeleaf_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:green_rune"}}'
                        ),
                        mainhand: Item.of(
                            'minecraft:bow',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:strong_wither"}'),
                        summons: [{ mob: 'twilightforest:hedge_spider', count: { min: 5, max: 10 }, spread: 5 }]
                    }
                }
            ]
        },
        redcap_sapper: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        enchant: {
                            chance: 0.75,
                            level: { min: 5, max: 10 },
                            treasure: false
                        },
                        head: Item.of(
                            'minecraft:leather_helmet',
                            '{display:{color:10826026},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'minecraft:leather_chestplate',
                            '{display:{color:6968645},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'minecraft:leather_leggings',
                            '{display:{color:5465909},"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'twilightforest:ironwood_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:ironwood_pickaxe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: 'supplementaries:bomb'
                    }
                }
            ]
        },
        redcap: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        enchant: {
                            chance: 0.5,
                            level: { min: 5, max: 10 },
                            treasure: false
                        },
                        feet: Item.of(
                            'twilightforest:ironwood_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'twilightforest:ironwood_pickaxe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        offhand: 'supplementaries:bomb'
                    }
                }
            ]
        },
        kobold: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        enchant: {
                            chance: 0.5,
                            level: { min: 5, max: 10 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'farmersdelight:flint_knife',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                }
            ]
        }
    },
    blue_skies: {
        armored_frost_spirit: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 30,
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        head: Item.of(
                            'blue_skies:aquite_helmet',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        chest: Item.of(
                            'blue_skies:aquite_chestplate',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        legs: Item.of(
                            'blue_skies:aquite_leggings',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        feet: Item.of(
                            'blue_skies:aquite_boots',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        ),
                        mainhand: Item.of(
                            'blue_skies:aquite_axe',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                }
            ]
        },
        whistleshell_crab: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 40,
                        effects: [
                            { type: 'minecraft:strength', amplifier: 2 },
                            { type: 'minecraft:resistance', amplifier: 2 }
                        ]
                    }
                }
            ]
        }
    },
    ars_nouveau: {
        ally_vex: {
            equipment: [
                {
                    weight: 50,
                    set: { default: true }
                },
                {
                    weight: 50,
                    set: {
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        mainhand: Item.of(
                            'twilightforest:glass_sword',
                            '{"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}}'
                        )
                    }
                }
            ]
        }
    }
};
