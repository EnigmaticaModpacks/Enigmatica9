ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/redstonepen/shaped/';

    const recipes = [
        {
            output: 'redstonepen:control_box',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: 'quark:red_rune',
                C: 'quark:green_rune',
                D: 'pneumaticcraft:logistics_core',
                E: 'quark:blue_rune',
                F: 'quark:yellow_rune'
            },
            id: 'redstonepen:control_box_recipe'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
