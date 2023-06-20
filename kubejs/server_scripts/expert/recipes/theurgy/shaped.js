ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/theurgy/shaped/';

    const recipes = [
        {
            output: Item.of('theurgy:divination_rod_t3', {
                'theurgy:divination.setting.tier': 'minecraft:netherite',
                'theurgy:divination.setting.allowed_blocks_tag': 'theurgy:divination_rod_t4_allowed_blocks',
                'theurgy:divination.setting.disallowed_blocks_tag': 'theurgy:divination_rod_t4_disallowed_blocks',
                'theurgy:divination.setting.range': 96,
                'theurgy:divination.setting.duration': 40,
                'theurgy:divination.setting.max_damage': 512
            }),
            pattern: [' AB', ' CA', 'DE '],
            key: {
                A: '#forge:nuggets/electrum',
                B: '#forge:gems/source',
                C: '#forge:rods/aluminum',
                D: '#forge:rods/wooden',
                E: '#forge:leather'
            },
            id: `${id_prefix}divination_rod_t3`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
