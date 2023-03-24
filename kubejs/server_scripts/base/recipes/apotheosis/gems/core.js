/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/core/';
    const recipes = [
        {
            name: 'twilight_guardian',
            variant: 'guardian',
            weight: 30,
            quality: 0,
            dimensions: ['twilightforest'],
            bonuses: [
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'core_armor', types: ['chestplate', 'leggings'] },
                    attribute: 'minecraft:generic.armor',
                    operation: 'ADDITION',
                    values: {
                        common: { min: 0.25, steps: 3, step: 0.25 },
                        uncommon: { min: 0.5, steps: 4, step: 0.25 },
                        rare: { min: 0.75, steps: 5, step: 0.25 },
                        epic: { min: 1.5, steps: 6, step: 0.25 },
                        mythic: { min: 2.25, steps: 7, step: 0.25 },
                        ancient: { min: 5, steps: 10, step: 0.25 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'light_weapon', types: ['sword', 'trident'] },
                    attribute: 'apotheosis:life_steal',
                    operation: 'MULTIPLY_BASE',
                    values: {
                        common: { min: 0.05, steps: 3, step: 0.01 },
                        uncommon: { min: 0.08, steps: 4, step: 0.01 },
                        rare: { min: 0.12, steps: 5, step: 0.01 },
                        epic: { min: 0.18, steps: 6, step: 0.02 },
                        mythic: { min: 0.3, steps: 7, step: 0.02 },
                        ancient: { min: 0.8, steps: 10, step: 0.02 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'heavy_weapon', types: ['heavy_weapon'] },
                    attribute: 'apotheosis:overheal',
                    operation: 'MULTIPLY_BASE',
                    values: {
                        common: { min: 0.07, steps: 3, step: 0.01 },
                        uncommon: { min: 0.1, steps: 4, step: 0.01 },
                        rare: { min: 0.14, steps: 5, step: 0.01 },
                        epic: { min: 0.2, steps: 6, step: 0.02 },
                        mythic: { min: 0.32, steps: 7, step: 0.02 },
                        ancient: { min: 0.75, steps: 10, step: 0.02 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'shield', types: ['shield'] },
                    attribute: 'minecraft:generic.armor',
                    operation: 'MULTIPLY_BASE',
                    values: {
                        common: { min: 0.05, steps: 3, step: 0.01 },
                        uncommon: { min: 0.08, steps: 4, step: 0.01 },
                        rare: { min: 0.12, steps: 5, step: 0.01 },
                        epic: { min: 0.18, steps: 6, step: 0.01 },
                        mythic: { min: 0.24, steps: 7, step: 0.01 },
                        ancient: { min: 0.5, steps: 10, step: 0.01 }
                    }
                }
            ]
        },
        {
            name: 'sun_kissed',
            variant: 'solar',
            weight: 30,
            quality: 0,
            dimensions: ['everdawn'],
            bonuses: [
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'light_weapon', types: ['sword', 'trident'] },
                    attribute: 'apotheosis:fire_damage',
                    operation: 'ADDITION',
                    values: {
                        common: { min: 0.25, steps: 2, step: 0.25 },
                        uncommon: { min: 0.75, steps: 2, step: 0.25 },
                        rare: { min: 1.25, steps: 3, step: 0.5 },
                        epic: { min: 2.75, steps: 3, step: 0.5 },
                        mythic: { min: 4.25, steps: 4, step: 0.5 },
                        ancient: { min: 6.25, steps: 6, step: 0.25 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'core_armor', types: ['chestplate', 'leggings'] },
                    attribute: 'forge:entity_gravity',
                    operation: 'MULTIPLY_TOTAL',
                    values: {
                        common: { min: 0.02, steps: 2, step: 0.02 },
                        uncommon: { min: 0.06, steps: 2, step: 0.03 },
                        rare: { min: 0.12, steps: 3, step: 0.04 },
                        epic: { min: 0.24, steps: 3, step: 0.05 },
                        mythic: { min: 0.4, steps: 4, step: 0.05 },
                        ancient: { min: 0.8, steps: 6, step: 0.04 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'boots', types: ['boots'] },
                    attribute: 'forge:step_height_addition',
                    operation: 'ADDITION',
                    values: {
                        common: { min: 0.25, steps: 2, step: 0.125 },
                        uncommon: { min: 0.5, steps: 2, step: 0.125 },
                        rare: { min: 1.0, steps: 3, step: 0.125 },
                        epic: { min: 1.5, steps: 3, step: 0.25 },
                        mythic: { min: 3.0, steps: 4, step: 0.5 },
                        ancient: { min: 5.0, steps: 6, step: 0.5 }
                    }
                }
            ]
        },
        {
            name: 'moon_touched',
            variant: 'lunar',
            weight: 30,
            quality: 0,
            dimensions: ['everbright'],
            bonuses: [
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'light_weapon', types: ['sword', 'trident'] },
                    attribute: 'apotheosis:cold_damage',
                    operation: 'ADDITION',
                    values: {
                        common: { min: 0.25, steps: 2, step: 0.25 },
                        uncommon: { min: 0.75, steps: 2, step: 0.25 },
                        rare: { min: 1.25, steps: 3, step: 0.5 },
                        epic: { min: 2.75, steps: 3, step: 0.5 },
                        mythic: { min: 4.25, steps: 4, step: 0.5 },
                        ancient: { min: 6.25, steps: 6, step: 0.25 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'core_armor', types: ['chestplate', 'leggings'] },
                    attribute: 'forge:entity_gravity',
                    operation: 'MULTIPLY_TOTAL',
                    values: {
                        common: { min: -0.02, steps: 2, step: -0.02 },
                        uncommon: { min: -0.06, steps: 2, step: -0.03 },
                        rare: { min: -0.12, steps: 3, step: -0.04 },
                        epic: { min: -0.24, steps: 3, step: -0.05 },
                        mythic: { min: -0.4, steps: 4, step: -0.05 },
                        ancient: { min: -0.8, steps: 6, step: -0.04 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'boots', types: ['boots'] },
                    attribute: 'forge:swim_speed',
                    operation: 'MULTIPLY_BASE',
                    values: {
                        common: { min: 0.05, steps: 2, step: 0.025 },
                        uncommon: { min: 0.1, steps: 2, step: 0.05 },
                        rare: { min: 0.2, steps: 3, step: 0.05 },
                        epic: { min: 0.35, steps: 3, step: 0.075 },
                        mythic: { min: 0.6, steps: 4, step: 0.05 },
                        ancient: { min: 0.8, steps: 6, step: 0.05 }
                    }
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
