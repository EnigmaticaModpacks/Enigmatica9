/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/twilight_forest/';
    const recipes = [
        {
            name: 'twilight_guardian',
            weight: 30,
            quality: 0,
            min_rarity: 'rare',
            dimensions: ['twilightforest:twilight_forest'],
            bonuses: [
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'light_weapon', types: ['sword', 'trident'] },
                    attribute: 'apotheosis:life_steal',
                    operation: 'MULTIPLY_BASE',
                    values: {
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
                        rare: { min: 0.14, steps: 5, step: 0.01 },
                        epic: { min: 0.2, steps: 6, step: 0.02 },
                        mythic: { min: 0.32, steps: 7, step: 0.02 },
                        ancient: { min: 0.75, steps: 10, step: 0.02 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: {
                        key: 'core_armor',
                        types: ['chestplate', 'leggings']
                    },
                    attribute: 'minecraft:generic.armor_toughness',
                    operation: 'ADDITION',
                    values: {
                        rare: { min: 2.5, steps: 5, step: 0.25 },
                        epic: { min: 3.9, steps: 6, step: 0.1 },
                        mythic: { min: 4.5, steps: 7, step: 0.1 },
                        ancient: { min: 6, steps: 10, step: 0.1 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: {
                        key: 'shield',
                        types: ['shield']
                    },
                    attribute: 'minecraft:generic.armor_toughness',
                    operation: 'MULTIPLY_TOTAL',
                    values: {
                        rare: { min: 0.2, steps: 5, step: 0.02 },
                        epic: { min: 0.3, steps: 6, step: 0.01 },
                        mythic: { min: 0.36, steps: 7, step: 0.01 },
                        ancient: { min: 0.45, steps: 10, step: 0.01 }
                    }
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
