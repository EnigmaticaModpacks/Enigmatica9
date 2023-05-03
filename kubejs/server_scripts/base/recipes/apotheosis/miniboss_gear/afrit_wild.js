ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:boss_gear/miniboss/';
    const recipes = [
        {
            name: 'afrit_wild',
            weight: 100,
            quality: 2.5,
            mainhands: [
                {
                    stack: {
                        item: 'ars_nouveau:enchanters_sword',
                        nbt: Object.assign(enchanters_sword.hex_blade, enchant_glint.blank, enchantments.knockback_2)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            offhands: [],
            helmets: [
                {
                    stack: {
                        item: 'twilightforest:fiery_helmet',
                        nbt: Object.assign(reactive.burning_aura, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            chestplates: [
                {
                    stack: {
                        item: 'twilightforest:fiery_chestplate',
                        nbt: Object.assign(reactive.bounce_lightning, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            leggings: [
                {
                    stack: {
                        item: 'twilightforest:fiery_leggings',
                        nbt: Object.assign(reactive.poison_bounce, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            boots: [
                {
                    stack: {
                        item: 'twilightforest:fiery_boots',
                        nbt: Object.assign(reactive.hex_zone, enchant_glint.blank, enchantments.reactive_1)
                    },
                    weight: 100,
                    drop_chance: 0.0
                }
            ],
            tags: ['miniboss/afrit_wild']
        }
    ];

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.name}.json`, recipe);
    });
});
