/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/the_nether/';
    const recipes = [
        {
            name: 'inferno',
            conditions: [{ type: 'apotheosis:module', module: 'enchantment' }],
            weight: 4,
            quality: 0.75,
            dimensions: ['minecraft:the_nether'],
            unique: true,
            min_rarity: 'rare',
            bonuses: [
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'heavy_weapon', types: ['heavy_weapon'] },
                    attribute: 'apotheosis:fire_damage',
                    operation: 'ADDITION',
                    values: {
                        rare: { min: 6.0, steps: 3, step: 0.5 },
                        epic: { min: 8.0, steps: 3, step: 0.5 },
                        mythic: { min: 10.0, steps: 4, step: 0.5 },
                        ancient: { min: 13.5, steps: 6, step: 0.5 }
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: { key: 'helmet', types: ['helmet'] },
                    attribute: 'apotheosis:fire_damage',
                    operation: 'MULTIPLY_TOTAL',
                    values: {
                        rare: { min: 0.5, steps: 3, step: 0.025 },
                        epic: { min: 0.6, steps: 3, step: 0.025 },
                        mythic: { min: 0.75, steps: 4, step: 0.025 },
                        ancient: { min: 0.9, steps: 5, step: 0.02 }
                    }
                },
                {
                    type: 'apotheosis:enchantment',
                    gem_class: { key: 'light_weapon', types: ['sword', 'trident'] },
                    enchantment: 'minecraft:fire_aspect',
                    values: { rare: 1, epic: 2, mythic: 3, ancient: 4 }
                },
                {
                    type: 'apotheosis:enchantment',
                    gem_class: { key: 'chestplate', types: ['chestplate'] },
                    enchantment: 'minecraft:fire_protection',
                    values: { rare: 1, epic: 1, mythic: 2, ancient: 2 }
                },
                {
                    type: 'apotheosis:enchantment',
                    gem_class: { key: 'breaker', types: ['shovel', 'pickaxe'] },
                    enchantment: 'minecraft:efficiency',
                    values: { rare: 1, epic: 1, mythic: 2, ancient: 2 }
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
