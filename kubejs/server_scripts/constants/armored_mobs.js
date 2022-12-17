//priority: 1000

const armored_mobs = {
    minecraft: {
        blaze: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [{ type: 'minecraft:strength', amplifier: 1 }],
                        max_health: 40,
                        chest: {
                            item: Item.of(
                                'twilightforest:fiery_chestplate',
                                `{${reactive.burning_aura},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        },
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
                        },
                        head: { item: 'hexerei:witch_helmet', drop_rate: 0.085 },
                        chest: {
                            item: Item.of(
                                'hexerei:witch_chestplate',
                                `{display:{color:2624321},${reactive.life_link},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 3),
                            drop_rate: 0.085
                        },
                        feet: { item: 'hexerei:witch_boots', drop_rate: 0.085 }
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
                        },
                        chest: {
                            item: Item.of(
                                'hexerei:witch_chestplate',
                                `{display:{color:2624321},${reactive.life_link},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 3),
                            drop_rate: 0.085
                        },
                        feet: { item: 'hexerei:witch_boots', drop_rate: 0.085 }
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
                        mainhand: {
                            item: Item.of('twilightforest:glass_sword', default_nbt),
                            drop_rate: 0.0
                        }
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
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of(
                                'minecraft:leather_leggings',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of(
                                'minecraft:leather_boots',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:knightmetal_axe', default_nbt),
                            drop_rate: 0.085
                        }
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
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of(
                                'minecraft:leather_leggings',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of(
                                'minecraft:leather_boots',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('minecraft:crossbow', default_nbt).enchant('minecraft:multishot', 1),
                            drop_rate: 0.085
                        }
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
                        chest: {
                            item: Item.of('minecraft:golden_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:gold_minotaur_axe', default_nbt),
                            drop_rate: 0.085
                        }
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
                        chest: {
                            item: Item.of('minecraft:golden_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('minecraft:crossbow', default_nbt).enchant('minecraft:multishot', 1),
                            drop_rate: 0.085
                        }
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
                        head: {
                            item: Item.of('minecraft:golden_helmet', default_nbt),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('minecraft:golden_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('minecraft:golden_leggings', default_nbt),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('minecraft:golden_boots', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:gold_minotaur_axe', default_nbt),
                            drop_rate: 0.085
                        }
                    }
                }
            ]
        },
        skeleton: {
            equipment: [
                {
                    weight: 10,
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
                        head: {
                            item: Item.of('twilightforest:knightmetal_helmet', default_nbt),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('twilightforest:knightmetal_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('twilightforest:knightmetal_leggings', default_nbt),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('twilightforest:knightmetal_boots', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:knightmetal_sword', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('twilightforest:knightmetal_shield', default_nbt),
                            drop_rate: 0.085
                        }
                    }
                },
                {
                    weight: 25,
                    set: {
                        max_health: 50,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.harming),
                            drop_rate: 0.085
                        }
                    }
                },
                {
                    weight: 25,
                    set: {
                        max_health: 50,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.blasting),
                            drop_rate: 0.085
                        }
                    }
                },
                {
                    weight: 25,
                    set: {
                        max_health: 50,
                        effects: [{ type: 'minecraft:speed', amplifier: 2 }],
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.sundering),
                            drop_rate: 0.085
                        }
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
                        mainhand: {
                            item: Item.of('immersiveengineering:sword_steel', default_nbt),
                            drop_rate: 0.085
                        }
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
                        head: {
                            item: Item.of('pneumaticcraft:compressed_iron_helmet', default_nbt),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('pneumaticcraft:compressed_iron_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('pneumaticcraft:compressed_iron_leggings', default_nbt),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('pneumaticcraft:compressed_iron_boots', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:fiery_sword', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('blue_skies:spike_shield', default_nbt),
                            drop_rate: 0.085
                        }
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
                        head: {
                            item: Item.of(
                                'minecraft:leather_helmet',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of(
                                'minecraft:leather_leggings',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of(
                                'minecraft:leather_boots',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.wither_long),
                            drop_rate: 0.085
                        }
                    }
                }
            ]
        },
        stray: {
            equipment: [
                {
                    weight: 40,
                    set: {
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.freezing),
                            drop_rate: 0.085
                        }
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
                        head: {
                            item: Item.of('twilightforest:yeti_helmet', `{${enchant_glint.blue}}`),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('twilightforest:yeti_chestplate', `{${enchant_glint.blue}}`),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('twilightforest:yeti_leggings', `{${enchant_glint.blue}}`),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('twilightforest:yeti_boots', `{${enchant_glint.blue}}`),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', `{${enchant_glint.blue}}`).enchant('minecraft:punch', 3),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.freezing_strong),
                            drop_rate: 0.085
                        }
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
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.freezing),
                            drop_rate: 0.085
                        }
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
                            chance: 1.0,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:4357207},${reactive.drown},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('minecraft:trident', default_nbt),
                            drop_rate: 0.085
                        }
                    }
                }
            ]
        },
        enderman: {
            equipment: [
                {
                    weight: 50,
                    set: {
                        max_health: 60,
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:2624321},${reactive.come_here},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 3),
                            drop_rate: 0.0
                        }
                    }
                },
                {
                    weight: 50,
                    set: {
                        max_health: 60,
                        enchant: {
                            chance: 0.5,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:2624321},${reactive.vanish},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 3),
                            drop_rate: 0.0
                        }
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
                        head: {
                            item: Item.of('twilightforest:ironwood_helmet', default_nbt),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('twilightforest:ironwood_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('twilightforest:ironwood_leggings', default_nbt),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('twilightforest:ironwood_boots', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:ironwood_hoe', default_nbt),
                            drop_rate: 0.085
                        }
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
                        head: {
                            item: Item.of('twilightforest:steeleaf_helmet', default_nbt),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('twilightforest:steeleaf_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('twilightforest:steeleaf_leggings', default_nbt),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('twilightforest:steeleaf_boots', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:steeleaf_hoe', default_nbt),
                            drop_rate: 0.085
                        },
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
                        head: {
                            item: Item.of('twilightforest:steeleaf_helmet', `{${enchant_glint.green}}`),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of(
                                'twilightforest:steeleaf_chestplate',
                                `{${reactive.poison_bounce},${enchant_glint.green}}`
                            ).enchant('ars_nouveau:reactive', 3),
                            drop_rate: 0.0
                        },
                        legs: {
                            item: Item.of('twilightforest:steeleaf_leggings', `{${enchant_glint.green}}`),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('twilightforest:steeleaf_boots', `{${enchant_glint.green}}`),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.wither_strong),
                            drop_rate: 0.085
                        },
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
                        head: {
                            item: Item.of(
                                'minecraft:leather_helmet',
                                `{display:{color:10826026},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:6968645},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of(
                                'minecraft:leather_leggings',
                                `{display:{color:5465909},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.085
                        },
                        feet: { item: Item.of('twilightforest:ironwood_boots', default_nbt), drop_rate: 0.085 },
                        mainhand: { item: Item.of('twilightforest:ironwood_pickaxe', default_nbt), drop_rate: 0.085 },
                        offhand: { item: 'supplementaries:bomb', drop_rate: 0.05 }
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
                        feet: {
                            item: Item.of('twilightforest:ironwood_boots', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('twilightforest:ironwood_pickaxe', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: 'supplementaries:bomb',
                            drop_rate: 0.05
                        }
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
                        mainhand: {
                            item: Item.of('farmersdelight:flint_knife', default_nbt),
                            drop_rate: 0.085
                        }
                    }
                }
            ]
        },
        mist_wolf: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [
                            { type: 'ars_nouveau:shielding', amplifier: 2 },
                            { type: 'minecraft:strength', amplifier: 1 }
                        ]
                    }
                }
            ]
        },
        lich: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        chest: {
                            item: Item.of(
                                'minecraft:golden_chestplate',
                                `{${reactive.life_link},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 4),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        },
        snow_queen: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 300,
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        head: {
                            item: Item.of('blue_skies:aquite_helmet', default_nbt),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('blue_skies:aquite_chestplate', default_nbt).enchant(
                                'twilightforest:chill_aura',
                                5
                            ),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('blue_skies:aquite_leggings', default_nbt),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('blue_skies:aquite_boots', default_nbt),
                            drop_rate: 0.085
                        }
                    }
                }
            ]
        },
        carminite_golem: {
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
                        head: {
                            item: Item.of('blue_skies:aquite_helmet', default_nbt),
                            drop_rate: 0.085
                        },
                        chest: {
                            item: Item.of('blue_skies:aquite_chestplate', default_nbt),
                            drop_rate: 0.085
                        },
                        legs: {
                            item: Item.of('blue_skies:aquite_leggings', default_nbt),
                            drop_rate: 0.085
                        },
                        feet: {
                            item: Item.of('blue_skies:aquite_boots', default_nbt),
                            drop_rate: 0.085
                        },
                        mainhand: {
                            item: Item.of('blue_skies:aquite_axe', default_nbt),
                            drop_rate: 0.085
                        }
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
                        mainhand: {
                            item: Item.of('twilightforest:glass_sword', default_nbt),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        }
    },
    cnb: {
        sporeling: {
            equipment: [
                {
                    weight: 75,
                    set: {
                        head: {
                            item: Item.of(
                                'minecraft:glow_lichen',
                                `{${reactive.restoration},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 2),
                            drop_rate: 0.0
                        }
                    }
                },
                {
                    weight: 25,
                    set: {
                        head: {
                            item: Item.of(
                                'minecraft:glow_lichen',
                                `{${reactive.hex_zone},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 2),
                            drop_rate: 0.0
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:glow_lichen',
                                `{${reactive.poison_touch},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 4)
                        },
                        drop_rate: 0.0
                    }
                }
            ]
        }
    },
    thermal: {
        blizz: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [{ type: 'cofh_core:panacea', amplifier: 1 }],
                        max_health: 40,
                        chest: {
                            item: Item.of(
                                'twilightforest:yeti_chesplate',
                                `{${reactive.bounce_freeze},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        },
        basalz: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [{ type: 'cofh_core:explosion_resistance', amplifier: 1 }],
                        max_health: 40,
                        chest: {
                            item: Item.of(
                                'pneumaticcraft:compressed_iron_chestplate',
                                `{${reactive.earth_snare},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        },
        blitz: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        effects: [
                            { type: 'minecraft:speed', amplifier: 1 },
                            { type: 'cofh_core:lightning_resistance', amplifier: 1 }
                        ],
                        max_health: 40,
                        chest: {
                            item: Item.of(
                                'minecraft:chainmail_chestplate',
                                `{${reactive.orbit_lightning},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 3),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        }
    },
    hexerei: {
        crow: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 20
                    }
                }
            ]
        }
    },
    occultism: {
        wild_hunt_wither_skeleton: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 100,
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
                        head: {
                            item: Item.of('pneumaticcraft:compressed_iron_helmet', default_nbt),
                            drop_rate: 0.05
                        },
                        chest: {
                            item: Item.of('pneumaticcraft:compressed_iron_chestplate', default_nbt),
                            drop_rate: 0.05
                        },
                        legs: {
                            item: Item.of('pneumaticcraft:compressed_iron_leggings', default_nbt),
                            drop_rate: 0.05
                        },
                        feet: {
                            item: Item.of('pneumaticcraft:compressed_iron_boots', default_nbt),
                            drop_rate: 0.05
                        },
                        mainhand: {
                            item: Item.of(
                                'ars_nouveau:enchanters_sword',
                                `{${enchanters_sword.hex_blade},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.0
                        },
                        offhand: {
                            item: Item.of('minecraft:shield', shield_nbt.dragon_eye),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        },
        wild_hunt_skeleton: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 75,
                        effects: [
                            { type: 'minecraft:speed', amplifier: 2 },
                            { type: 'minecraft:fire_resistance', amplifier: 1 }
                        ],
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 30 },
                            treasure: false
                        },
                        head: {
                            item: Item.of(
                                'minecraft:leather_helmet',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.005
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.005
                        },
                        legs: {
                            item: Item.of(
                                'minecraft:leather_leggings',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.005
                        },
                        feet: {
                            item: Item.of(
                                'minecraft:leather_boots',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.005
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.wither_long),
                            drop_rate: 0.085
                        },
                        summons: [{ mob: 'twilightforest:mist_wolf', count: { min: 1, max: 2 }, spread: 5 }]
                    }
                }
            ]
        },
        possessed_enderman: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 80,
                        enchant: {
                            chance: 1.0,
                            level: { min: 20, max: 30 },
                            treasure: false
                        },
                        head: {
                            item: Item.of('blue_skies:charoite_helmet', `{${enchant_glint.blank}}`),
                            drop_rate: 0.0
                        },
                        chest: {
                            item: Item.of(
                                'blue_skies:charoite_chestplate',
                                `{${reactive.vanish},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 3),
                            drop_rate: 0.0
                        },
                        legs: {
                            item: Item.of('blue_skies:charoite_leggings', `{${enchant_glint.blank}}`),
                            drop_rate: 0.0
                        },
                        feet: {
                            item: Item.of('blue_skies:charoite_boots', `{${enchant_glint.blank}}`),
                            drop_rate: 0.0
                        },
                        mainhand: {
                            item: Item.of(
                                'ars_nouveau:enchanters_sword',
                                `{${enchanters_sword.dispel},${enchant_glint.blank}}`
                            ).enchant('minecraft:knockback', 2),
                            drop_rate: 0.0
                        },
                        summons: [{ mob: 'minecraft:enderman', count: { min: 5, max: 10 }, spread: 5 }]
                    }
                }
            ]
        },
        possessed_skeleton: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 75,
                        effects: [
                            { type: 'minecraft:speed', amplifier: 2 },
                            { type: 'cofh_core:explosion_resistance', amplifier: 1 }
                        ],
                        enchant: {
                            chance: 1.0,
                            level: { min: 10, max: 20 },
                            treasure: false
                        },
                        chest: {
                            item: Item.of(
                                'minecraft:leather_chestplate',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.005
                        },
                        legs: {
                            item: Item.of(
                                'minecraft:leather_leggings',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.005
                        },
                        feet: {
                            item: Item.of(
                                'minecraft:leather_boots',
                                `{display:{color:1908001},${enchant_glint.blank}}`
                            ),
                            drop_rate: 0.005
                        },
                        mainhand: {
                            item: Item.of('minecraft:bow', default_nbt),
                            drop_rate: 0.085
                        },
                        offhand: {
                            item: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.blasting),
                            drop_rate: 0.085
                        }
                    }
                }
            ]
        },
        afrit_wild: {
            equipment: [
                {
                    weight: 100,
                    set: {
                        max_health: 200,
                        effects: [
                            { type: 'minecraft:speed', amplifier: 2 },
                            { type: 'cofh_core:explosion_resistance', amplifier: 1 },
                            { type: 'minecraft:fire_resistance', amplifier: 1 }
                        ],
                        enchant: {
                            chance: 1.0,
                            level: { min: 40, max: 50 },
                            treasure: false
                        },
                        head: {
                            item: Item.of(
                                'twilightforest:fiery_helmet',
                                `{${reactive.burning_aura},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.0
                        },
                        chest: {
                            item: Item.of(
                                'twilightforest:fiery_chestplate',
                                `{${reactive.bounce_lightning},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.0
                        },
                        legs: {
                            item: Item.of(
                                'twilightforest:fiery_leggings',
                                `{${reactive.poison_bounce},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.0
                        },
                        feet: {
                            item: Item.of(
                                'twilightforest:fiery_boots',
                                `{${reactive.hex_zone},${enchant_glint.blank}}`
                            ).enchant('ars_nouveau:reactive', 1),
                            drop_rate: 0.0
                        },
                        mainhand: {
                            item: Item.of(
                                'ars_nouveau:enchanters_sword',
                                `{${enchanters_sword.hex_blade},${enchant_glint.blank}}`
                            ).enchant('minecraft:knockback', 2),
                            drop_rate: 0.0
                        }
                    }
                }
            ]
        }
    }
};
