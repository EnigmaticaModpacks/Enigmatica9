/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/everdawn/';
    const recipes = [
        {
            name: 'sun_kissed',
            weight: 30,
            quality: 0,
            dimensions: ['blue_skies:everdawn'],
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
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
