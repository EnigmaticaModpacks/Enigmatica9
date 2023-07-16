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
                    gem_class: {
                        key: 'heavy_weapon',
                        types: ['heavy_weapon']
                    },
                    attribute: 'apotheosis:fire_damage',
                    operation: 'ADDITION',
                    values: {
                        rare: 6,
                        epic: 8,
                        mythic: 10,
                        ancient: 12.5
                    }
                },
                {
                    type: 'apotheosis:mob_effect',
                    gem_class: {
                        key: 'light_weapon',
                        types: ['sword', 'trident']
                    },
                    mob_effect: 'apotheosis:detonation',
                    target: 'attack_target',
                    values: {
                        mythic: {
                            duration: 100,
                            amplifier: 0,
                            cooldown: 1200
                        },
                        ancient: {
                            duration: 100,
                            amplifier: 1,
                            cooldown: 1200
                        }
                    }
                },
                {
                    type: 'apotheosis:enchantment',
                    gem_class: {
                        key: 'chestplate',
                        types: ['chestplate']
                    },
                    enchantment: 'minecraft:fire_protection',
                    values: {
                        rare: 1,
                        epic: 1,
                        mythic: 2,
                        ancient: 2
                    }
                },
                {
                    type: 'apotheosis:enchantment',
                    gem_class: {
                        key: 'breaker',
                        types: ['shovel', 'pickaxe']
                    },
                    enchantment: 'minecraft:efficiency',
                    values: {
                        rare: 1,
                        epic: 1,
                        mythic: 2,
                        ancient: 2
                    }
                },
                {
                    type: 'apotheosis:attribute',
                    gem_class: {
                        key: 'helmet',
                        types: ['helmet']
                    },
                    attribute: 'apotheosis:fire_damage',
                    operation: 'MULTIPLY_TOTAL',
                    values: {
                        rare: 0.5,
                        epic: 0.625,
                        mythic: 0.75,
                        ancient: 0.9
                    }
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
