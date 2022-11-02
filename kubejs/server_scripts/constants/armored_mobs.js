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
                        mainhand: Item.of('twilightforest:glass_sword', default_nbt)
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
                            `{display:{color:1908001},${enchant_glint.blank}}`
                        ),
                        legs: Item.of('minecraft:leather_leggings', `{display:{color:1908001},${enchant_glint.blank}}`),
                        feet: Item.of('minecraft:leather_boots', `{display:{color:1908001},${enchant_glint.blank}}`),
                        mainhand: Item.of('twilightforest:knightmetal_axe', default_nbt)
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
                            `{display:{color:1908001},${enchant_glint.blank}}`
                        ),
                        legs: Item.of('minecraft:leather_leggings', `{display:{color:1908001},${enchant_glint.blank}}`),
                        feet: Item.of('minecraft:leather_boots', `{display:{color:1908001},${enchant_glint.blank}}`),
                        mainhand: Item.of('minecraft:crossbow', default_nbt).enchant('minecraft:multishot', 1)
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
                        chest: Item.of('minecraft:golden_chestplate', default_nbt),
                        mainhand: Item.of('twilightforest:gold_minotaur_axe', default_nbt)
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
                        chest: Item.of('minecraft:golden_chestplate', default_nbt),
                        mainhand: Item.of('minecraft:crossbow', default_nbt).enchant('minecraft:multishot', 1)
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
                        head: Item.of('minecraft:golden_helmet', default_nbt),
                        chest: Item.of('minecraft:golden_chestplate', default_nbt),
                        legs: Item.of('minecraft:golden_leggings', default_nbt),
                        feet: Item.of('minecraft:golden_boots', default_nbt),
                        mainhand: Item.of('twilightforest:gold_minotaur_axe', default_nbt)
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
                        head: Item.of('twilightforest:knightmetal_helmet', default_nbt),
                        chest: Item.of('twilightforest:knightmetal_chestplate', default_nbt),
                        legs: Item.of('twilightforest:knightmetal_leggings', default_nbt),
                        feet: Item.of('twilightforest:knightmetal_boots', default_nbt),
                        mainhand: Item.of('twilightforest:knightmetal_sword', default_nbt),
                        offhand: Item.of('twilightforest:knightmetal_shield', default_nbt)
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
                        mainhand: Item.of('minecraft:bow', default_nbt),
                        offhand: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.harming)
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
                        mainhand: Item.of('minecraft:bow', default_nbt),
                        offhand: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.blasting)
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
                        mainhand: Item.of('minecraft:bow', default_nbt),
                        offhand: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.sundering)
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
                        mainhand: Item.of('immersiveengineering:sword_steel', default_nbt)
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
                        head: Item.of('pneumaticcraft:compressed_iron_helmet', default_nbt),
                        chest: Item.of('pneumaticcraft:compressed_iron_chestplate', default_nbt),
                        legs: Item.of('pneumaticcraft:compressed_iron_leggings', default_nbt),
                        feet: Item.of('pneumaticcraft:compressed_iron_boots', default_nbt),
                        mainhand: Item.of('twilightforest:fiery_sword', default_nbt),
                        offhand: Item.of('blue_skies:spike_shield', default_nbt)
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
                        head: Item.of('minecraft:leather_helmet', `{display:{color:1908001},${enchant_glint.blank}}`),
                        chest: Item.of(
                            'minecraft:leather_chestplate',
                            `{display:{color:1908001},${enchant_glint.blank}}`
                        ),
                        legs: Item.of('minecraft:leather_leggings', `{display:{color:1908001},${enchant_glint.blank}}`),
                        feet: Item.of('minecraft:leather_boots', `{display:{color:1908001},${enchant_glint.blank}}`),
                        mainhand: Item.of('minecraft:bow', default_nbt),
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
                        offhand: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.freezing)
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
                        head: Item.of('twilightforest:yeti_helmet', `{${enchant_glint.blue}}`),
                        chest: Item.of('twilightforest:yeti_chestplate', `{${enchant_glint.blue}}`),
                        legs: Item.of('twilightforest:yeti_leggings', `{${enchant_glint.blue}}`),
                        feet: Item.of('twilightforest:yeti_boots', `{${enchant_glint.blue}}`),
                        mainhand: Item.of('minecraft:bow', `{${enchant_glint.blue}}`).enchant('minecraft:punch', 3),
                        offhand: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.freezing_strong)
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
                        mainhand: Item.of('minecraft:bow', default_nbt),
                        offhand: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.freezing)
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
                        chest: Item.of(
                            'minecraft:leather_chestplate',
                            `{display:{color:4357207},${reactive.drown},${enchant_glint.blank}}`
                        ).enchant('ars_nouveau:reactive', 1),
                        mainhand: Item.of('minecraft:trident', default_nbt)
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
                        head: Item.of('twilightforest:ironwood_helmet', default_nbt),
                        chest: Item.of('twilightforest:ironwood_chestplate', default_nbt),
                        legs: Item.of('twilightforest:ironwood_leggings', default_nbt),
                        feet: Item.of('twilightforest:ironwood_boots', default_nbt),
                        mainhand: Item.of('twilightforest:ironwood_hoe', default_nbt)
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
                        head: Item.of('twilightforest:steeleaf_helmet', default_nbt),
                        chest: Item.of('twilightforest:steeleaf_chestplate', default_nbt),
                        legs: Item.of('twilightforest:steeleaf_leggings', default_nbt),
                        feet: Item.of('twilightforest:steeleaf_boots', default_nbt),
                        mainhand: Item.of('twilightforest:steeleaf_hoe', default_nbt),
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
                        head: Item.of('twilightforest:steeleaf_helmet', `{${enchant_glint.green}}`),
                        chest: Item.of(
                            'twilightforest:steeleaf_chestplate',
                            `{${reactive.poison_bounce},${enchant_glint.green}}`
                        ).enchant('ars_nouveau:reactive', 3),
                        legs: Item.of('twilightforest:steeleaf_leggings', `{${enchant_glint.green}}`),
                        feet: Item.of('twilightforest:steeleaf_boots', `{${enchant_glint.green}}`),
                        mainhand: Item.of('minecraft:bow', default_nbt),
                        offhand: Item.of('minecraft:tipped_arrow', tipped_arrow_nbt.wither_strong),
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
                        head: Item.of('minecraft:leather_helmet', `{display:{color:10826026},${enchant_glint.blank}}`),
                        chest: Item.of(
                            'minecraft:leather_chestplate',
                            `{display:{color:6968645},${enchant_glint.blank}}`
                        ),
                        legs: Item.of('minecraft:leather_leggings', `{display:{color:5465909},${enchant_glint.blank}}`),
                        feet: Item.of('twilightforest:ironwood_boots', default_nbt),
                        mainhand: Item.of('twilightforest:ironwood_pickaxe', default_nbt),
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
                        feet: Item.of('twilightforest:ironwood_boots', default_nbt),
                        mainhand: Item.of('twilightforest:ironwood_pickaxe', default_nbt),
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
                        mainhand: Item.of('farmersdelight:flint_knife', default_nbt)
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
                        head: Item.of('blue_skies:aquite_helmet', default_nbt),
                        chest: Item.of('blue_skies:aquite_chestplate', default_nbt),
                        legs: Item.of('blue_skies:aquite_leggings', default_nbt),
                        feet: Item.of('blue_skies:aquite_boots', default_nbt),
                        mainhand: Item.of('blue_skies:aquite_axe', default_nbt)
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
                        mainhand: Item.of('twilightforest:glass_sword', default_nbt)
                    }
                }
            ]
        }
    }
};
