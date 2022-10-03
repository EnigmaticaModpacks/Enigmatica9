//priority: 1000
const ritual_effects = {
    summon_death_tome: {
        summon: {
            range: 2,
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
            spells: [
                {
                    limit: 3,
                    range: 10,
                    effect: 'minecraft:night_vision',
                    duration: 1800,
                    level: 1
                }
            ]
        }
    }
};
