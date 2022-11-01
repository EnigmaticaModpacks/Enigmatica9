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
    spell_night_vision: {
        potion: {
            // Spell effects to be applied.
            spells: [
                {
                    // Maximum number of entities to affect
                    limit: 3,
                    // Diameter of selection area, centered on ritual
                    range: 10,
                    // Effect to apply
                    effect: 'minecraft:night_vision',
                    // Effect Duration in seconds
                    duration: 1800,
                    // Effect level. 1 means 1
                    level: 1
                }
            ]
        }
    },
    teleport_everdawn: {
        teleport: {
            // Where are we going?
            arrival: 'blue_skies:everdawn',
            // Only allow departure from these dimensions
            departure: ['blue_skies:everbright', 'twilightforest:twilight_forest'],
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
                    duration: 60,
                    // Effect level. 1 means 1
                    level: 1
                }
            ]
        }
    },
    teleport_everbright: {
        teleport: {
            // Where are we going?
            arrival: 'blue_skies:everbright',
            // Only allow departure from these dimensions
            departure: ['blue_skies:everdawn', 'twilightforest:twilight_forest'],
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
                    duration: 60,
                    // Effect level. 1 means 1
                    level: 1
                }
            ]
        }
    },
    gate_pearl: {
        gateway: true
    }
};
