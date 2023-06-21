//priority: 1000
const ritual_effects = {
    summon_death_tome: {
        summon: {
            // Random spread of entities as they're summoned
            spread: 2,
            // Entities to summon. May mix types. One entry per mob to appear.
            entities: [
                'twilightforest:death_tome',
                'twilightforest:death_tome',
                'twilightforest:death_tome',
                'twilightforest:death_tome',
                'twilightforest:death_tome'
            ]
        }
    },
    ritual_of_enduring_flight: {
        potion: {
            // Spell effects to be applied.
            spells: [
                {
                    // Maximum number of entities to affect
                    limit: 5,
                    // Diameter of selection area, centered on ritual
                    range: 10,
                    // Effect to apply
                    effect: 'ars_nouveau:flight',
                    // Effect Duration in seconds
                    duration: 3600,
                    // Effect level. 1 means 1
                    level: 1
                }
            ]
        }
    },
    teleport_overworld: {
        teleport: {
            // Where are we going?
            arrival: 'minecraft:overworld',
            // Only allow departure from these dimensions
            departure: ['twilightforest:twilight_forest'],
            // How random the teleport destination is
            uncertainty: 5000,
            // Maximum number of entities to affect
            limit: 3,
            // Diameter of selection area, centered on ritual
            range: 10
        },
        potion: {
            spells: [
                {
                    // Maximum number of entities to affect
                    limit: 3,
                    // Diameter of selection area, centered on ritual
                    range: 10,
                    // Effect to apply
                    effect: 'minecraft:slow_falling',
                    // Effect Duration in seconds
                    duration: 20,
                    // Effect level. 1 means 1
                    level: 1
                }
            ]
        }
    },
    teleport_nether: {
        teleport: {
            // Where are we going?
            arrival: 'minecraft:the_nether',
            // Only allow departure from these dimensions
            departure: ['twilightforest:twilight_forest'],
            // How random the teleport destination is
            uncertainty: 5000,
            // Maximum number of entities to affect
            limit: 3,
            // Diameter of selection area, centered on ritual
            range: 10
        },
        potion: {
            spells: [
                {
                    // Maximum number of entities to affect
                    limit: 3,
                    // Diameter of selection area, centered on ritual
                    range: 10,
                    // Effect to apply
                    effect: 'minecraft:fire_resistance',
                    // Effect Duration in seconds
                    duration: 20,
                    // Effect level. 1 means 1
                    level: 1
                }
            ]
        }
    },
    teleport_end: {
        teleport: {
            // Where are we going?
            arrival: 'minecraft:the_end',
            // Only allow departure from these dimensions
            departure: ['twilightforest:twilight_forest'],
            // How random the teleport destination is
            uncertainty: 10000,
            // Maximum number of entities to affect
            limit: 3,
            // Diameter of selection area, centered on ritual
            range: 10
        },
        potion: {
            spells: [
                {
                    // Maximum number of entities to affect
                    limit: 3,
                    // Diameter of selection area, centered on ritual
                    range: 10,
                    // Effect to apply
                    effect: 'minecraft:slow_falling',
                    // Effect Duration in seconds
                    duration: 20,
                    // Effect level. 1 means 1
                    level: 1
                }
            ]
        }
    },
    gate_pearl: {
        gateway: true
    },
    aura_leaf: {
        aura: { y_offset: 1 }
    },
    tree_of_life_1: {
        aura: { y_offset: 4 },
        structure: {
            add: `kubejs/data/kubejs/structures/tree_of_life_1.nbt`,
            title: `title {"text":"The tree takes root...","color":"dark_green"}`,
            start_delay: 160
        },
        offset: { x: 0, y: -4, z: 0 }
    },
    tree_of_life_2: {
        aura: { y_offset: 5 },
        structure: {
            add: `kubejs/data/kubejs/structures/tree_of_life_2.nbt`,
            remove: `kubejs/data/kubejs/structures/tree_of_life_1.nbt`,
            title: `title {"text":"The tree grows stronger...","color":"dark_green"}`,
            start_delay: 160,
            soft_blocks: [
                'occultism:candle_white',
                'occultism:spirit_attuned_crystal',
                'quark:yellow_blossom_leaf_carpet',
                'twilightforest:mushgloom'
            ]
        },
        offset: { x: 0, y: -3, z: 0 }
    },
    tree_of_life_3: {
        aura: { y_offset: 5 },
        structure: {
            add: `kubejs/data/kubejs/structures/tree_of_life_3.nbt`,
            remove: `kubejs/data/kubejs/structures/tree_of_life_2.nbt`,
            title: `title {"text":"The tree grows stronger...","color":"dark_green"}`,
            start_delay: 160,
            soft_blocks: [
                'occultism:candle_white',
                'occultism:spirit_attuned_crystal',
                'quark:yellow_blossom_leaf_carpet',
                'twilightforest:mushgloom'
            ]
        },
        offset: { x: 0, y: -3, z: 0 }
    },
    tree_of_life_4: {
        aura: { y_offset: 5 },
        structure: {
            add: `kubejs/data/kubejs/structures/tree_of_life_4.nbt`,
            remove: `kubejs/data/kubejs/structures/tree_of_life_3.nbt`,
            title: `title {"text":"The tree grows stronger...","color":"dark_green"}`,
            start_delay: 160,
            soft_blocks: [
                'occultism:candle_white',
                'occultism:spirit_attuned_crystal',
                'quark:yellow_blossom_leaf_carpet',
                'twilightforest:mushgloom'
            ]
        },
        offset: { x: 0, y: -3, z: 0 }
    }
};
