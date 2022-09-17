//priority: 1000

const entity_blacklist = ['minecraft:item', 'minecraft:experience_orb'];

const armored_mobs = {
    minecraft_witch: {
        equipment: [
            {
                weight: 50,
                set: {
                    default: true
                }
            },
            {
                weight: 25,
                set: {
                    enchant: {
                        chance: 0.5,
                        level: { min: 10, max: 20 },
                        treasure: false
                    },
                    head: 'hexerei:witch_helmet',
                    chest: 'hexerei:witch_chestplate',
                    legs: 'minecraft:leather_leggings',
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
                    enchant: {
                        chance: 0.5,
                        level: { min: 10, max: 20 },
                        treasure: false
                    },
                    head: 'twilightforest:arctic_helmet',
                    chest: 'twilightforest:arctic_chestplate',
                    legs: 'twilightforest:arctic_leggings',
                    feet: 'twilightforest:arctic_boots',
                    mainhand: 'minecraft:netherite_sword'
                }
            }
        ]
    }
};
