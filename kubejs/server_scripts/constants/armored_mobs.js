//priority: 1000

const entity_blacklist = ['minecraft:item', 'minecraft:experience_orb'];

const armored_mobs = {
    minecraft_witch: {
        equipment: [
            {
                weight: 100,
                set: {
                    max_health: 30,
                    enchant: {
                        chance: 0.5,
                        level: { min: 10, max: 20 },
                        treasure: false
                    },
                    head: 'hexerei:witch_helmet',
                    chest: 'hexerei:witch_chestplate',
                    feet: 'hexerei:witch_boots'
                }
            }
        ]
    },
    minecraft_skeleton: {
        equipment: [
            {
                weight: 50,
                set: { default: true }
            },
            {
                weight: 25,
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
                    head: 'twilightforest:knightmetal_helmet',
                    chest: 'twilightforest:knightmetal_chestplate',
                    legs: 'twilightforest:knightmetal_leggings',
                    feet: 'twilightforest:knightmetal_boots',
                    mainhand: 'twilightforest:knightmetal_sword',
                    offhand: 'twilightforest:knightmetal_shield'
                }
            }
        ]
    },
    twilightforest_skeleton_druid: {
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
                    head: 'twilightforest:ironwood_helmet',
                    chest: 'twilightforest:ironwood_chestplate',
                    legs: 'twilightforest:ironwood_leggings',
                    feet: 'twilightforest:ironwood_boots',
                    mainhand: 'twilightforest:ironwood_hoe'
                }
            },
            {
                weight: 25,
                set: {
                    effects: [
                        { type: 'minecraft:strength', amplifier: 2 },
                        { type: 'minecraft:resistance', amplifier: 1 }
                    ],
                    enchant: {
                        chance: 0.75,
                        level: { min: 15, max: 25 },
                        treasure: false
                    },
                    head: 'twilightforest:steeleaf_helmet',
                    chest: 'twilightforest:steeleaf_chestplate',
                    legs: 'twilightforest:steeleaf_leggings',
                    feet: 'twilightforest:steeleaf_boots',
                    mainhand: 'twilightforest:steeleaf_hoe'
                }
            },
            {
                weight: 10,
                set: {
                    effects: [
                        { type: 'minecraft:strength', amplifier: 3 },
                        { type: 'minecraft:resistance', amplifier: 2 },
                        { type: 'minecraft:regeneration', amplifier: 2 }
                    ],
                    custom_name: 'Archdruid',
                    enchant: {
                        chance: 1.0,
                        level: { min: 20, max: 25 },
                        treasure: false
                    },
                    head: 'twilightforest:steeleaf_helmet',
                    chest: 'twilightforest:steeleaf_chestplate',
                    legs: 'twilightforest:steeleaf_leggings',
                    feet: 'twilightforest:steeleaf_boots',
                    mainhand: 'twilightforest:steeleaf_axe'
                }
            }
        ]
    }
};
