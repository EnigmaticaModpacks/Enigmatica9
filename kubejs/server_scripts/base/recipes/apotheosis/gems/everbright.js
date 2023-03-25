/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/everbright/';
    const recipes = [
        {
            name: 'moon_touched',
            weight: 30,
            quality: 0,
            dimensions: ['blue_skies:everbright'],
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
