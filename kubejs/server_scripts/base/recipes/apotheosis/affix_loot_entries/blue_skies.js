/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/blue_skies/';
    const recipes = [
        {
            weight: 50,
            quality: 2.5,
            stack: { item: 'blue_skies:moonstone_shield', nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['blue_skies:everbright', 'blue_skies:everdawn']
        },
        {
            weight: 25,
            quality: 5,
            stack: { item: 'blue_skies:spike_shield', nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'uncommon',
            max_rarity: 'epic',
            dimensions: ['blue_skies:everbright', 'blue_skies:everdawn']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { type: 'TRIDENT', item: 'blue_skies:cherry_spear', nbt: default_nbt },
                { type: 'TRIDENT', item: 'blue_skies:maple_spear', nbt: default_nbt },
                { type: 'TRIDENT', item: 'blue_skies:dusk_spear', nbt: default_nbt },
                { type: 'TRIDENT', item: 'blue_skies:lunar_spear', nbt: default_nbt },
                { type: 'TRIDENT', item: 'blue_skies:frostbright_spear', nbt: default_nbt },
                { type: 'TRIDENT', item: 'blue_skies:starlit_spear', nbt: default_nbt },
                { type: 'TRIDENT', item: 'blue_skies:bluebright_spear', nbt: default_nbt }
            ],
            attributes: {
                weight: 50,
                quality: 2.5,
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'blue_skies:pyrope_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:pyrope_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:pyrope_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:pyrope_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'blue_skies:pyrope_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:pyrope_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:pyrope_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'blue_skies:pyrope_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 1,
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'blue_skies:aquite_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:aquite_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:aquite_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:aquite_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'blue_skies:aquite_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:aquite_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:aquite_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'blue_skies:aquite_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 70,
                quality: 3,
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'blue_skies:diopside_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:diopside_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:diopside_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:diopside_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'blue_skies:diopside_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:diopside_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:diopside_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'blue_skies:diopside_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 50,
                quality: 5,
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        },
        {
            stacks: [
                { type: 'ARMOR', item: 'blue_skies:charoite_helmet', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:charoite_chestplate', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:charoite_leggings', nbt: default_nbt },
                { type: 'ARMOR', item: 'blue_skies:charoite_boots', nbt: default_nbt },
                { type: 'SWORD', item: 'blue_skies:charoite_sword', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:charoite_shovel', nbt: default_nbt },
                { type: 'BREAKER', item: 'blue_skies:charoite_pickaxe', nbt: default_nbt },
                { type: 'HEAVY_WEAPON', item: 'blue_skies:charoite_axe', nbt: default_nbt }
            ],
            attributes: {
                weight: 30,
                quality: 5,
                dimensions: ['blue_skies:everbright', 'blue_skies:everdawn'],
                min_rarity: 'uncommon',
                max_rarity: 'epic'
            }
        }
    ];

    equip_sets.forEach((equip_set) => {
        equip_set.stacks.forEach((stack) => {
            let recipe = Object.assign({}, { stack: stack }, equip_set.attributes);
            if (recipe.stack.type) {
                recipe.type = recipe.stack.type;
            }
            recipes.push(recipe);
        });
    });

    recipes.forEach((recipe) => {
        event.addJson(`${id_prefix}${recipe.stack.item.split(':')[1]}.json`, recipe);
    });
});
