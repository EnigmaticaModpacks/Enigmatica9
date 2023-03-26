/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:gems/overworld/';
    const recipes = [
        {
            name: 'earth',
            weight: 4,
            quality: 0.5,
            dimensions: ['minecraft:overworld'],
            unique: true,
            min_rarity: 'epic',
            bonuses: [
                {
                    type: 'apotheosis:enchantment',
                    gem_class: { key: 'melee_weapon', types: ['sword', 'trident', 'heavy_weapon'] },
                    enchantment: 'minecraft:sharpness',
                    must_exist: true,
                    values: { epic: 1, mythic: 1, ancient: 2 }
                },
                {
                    type: 'apotheosis:enchantment',
                    gem_class: { key: 'core_armor', types: ['chestplate', 'leggings'] },
                    enchantment: 'minecraft:protection',
                    must_exist: true,
                    values: { epic: 1, mythic: 2, ancient: 3 }
                },
                {
                    type: 'apotheosis:enchantment',
                    gem_class: { key: 'breaker', types: ['shovel', 'pickaxe'] },
                    enchantment: 'minecraft:fortune',
                    must_exist: true,
                    values: { epic: 1, mythic: 1, ancient: 1 }
                }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
