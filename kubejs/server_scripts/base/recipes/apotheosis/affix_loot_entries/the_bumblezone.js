/// High Priority required or Apotheosis over-writes these.
ServerEvents.highPriorityData((event) => {
    const id_prefix = 'apotheosis:affix_loot_entries/the_bumblezone/';
    const recipes = [
        {
            weight: 50,
            quality: 6,
            stack: { item: 'the_bumblezone:honey_crystal_shield', nbt: default_nbt },
            type: 'SHIELD',
            min_rarity: 'common',
            max_rarity: 'rare',
            dimensions: ['the_bumblezone:the_bumblezone']
        },
        {
            weight: 50,
            quality: 6,
            stack: { item: 'the_bumblezone:stinger_spear', nbt: default_nbt },
            type: 'TRIDENT',
            min_rarity: 'common',
            max_rarity: 'rare',
            dimensions: ['the_bumblezone:the_bumblezone']
        }
    ];
    const equip_sets = [
        {
            stacks: [
                { type: 'ARMOR', item: 'the_bumblezone:carpenter_bee_boots_2', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:carpenter_bee_boots_1', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:stingless_bee_helmet_2', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:stingless_bee_helmet_1', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:bumble_bee_chestplate_trans_2', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:bumble_bee_chestplate_trans_1', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:bumble_bee_chestplate_2', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:bumble_bee_chestplate_1', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:honey_bee_leggings_2', nbt: default_nbt },
                { type: 'ARMOR', item: 'the_bumblezone:honey_bee_leggings_1', nbt: default_nbt }
            ],
            attributes: {
                weight: 100,
                quality: 6,
                min_rarity: 'common',
                max_rarity: 'rare',
                dimensions: ['the_bumblezone:the_bumblezone']
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
