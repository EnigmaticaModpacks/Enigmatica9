ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/enchantment/';
    const recipes = [
        {
            enchantment: 'ars_nouveau:reactive',
            level: 4,
            pedestalItems: [
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:ender_pearls' } },
                { item: { item: 'ars_elemental:mark_of_mastery' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:reactive_4'
        },
        {
            enchantment: 'ars_nouveau:mana_regen',
            level: 4,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_regen_4'
        },
        {
            enchantment: 'ars_nouveau:mana_regen',
            level: 5,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_regen_5'
        },
        {
            enchantment: 'ars_nouveau:mana_regen',
            level: 6,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_regen_6'
        },
        {
            enchantment: 'ars_nouveau:mana_regen',
            level: 7,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:essences/abjuration' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_regen_7'
        },
        {
            enchantment: 'ars_nouveau:mana_boost',
            level: 4,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_boost_4'
        },
        {
            enchantment: 'ars_nouveau:mana_boost',
            level: 5,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_boost_5'
        },
        {
            enchantment: 'ars_nouveau:mana_boost',
            level: 6,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_boost_6'
        },
        {
            enchantment: 'ars_nouveau:mana_boost',
            level: 7,
            pedestalItems: [
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { item: 'kubejs:spirit_of_devotion' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ],
            sourceCost: 9000,
            id: 'ars_nouveau:mana_boost_7'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchantment';
        event.custom(recipe).id(recipe.id);
    });
});
