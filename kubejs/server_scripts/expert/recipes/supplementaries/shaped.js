ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/supplementaries/shaped/';

    const recipes = [
        {
            output: 'supplementaries:faucet',
            pattern: [' B', 'AA', ' A'],
            key: {
                A: '#forge:ingots/bronze',
                B: 'create:copper_valve_handle'
            },
            id: 'supplementaries:faucet'
        },
        {
            output: '2x supplementaries:brass_lantern',
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:dusts/glowstone'
            },
            id: 'supplementaries:brass_lantern'
        },
        {
            output: '2x supplementaries:crystal_display',
            pattern: ['AB', 'AB', 'AB'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: 'create:polished_rose_quartz'
            },
            id: 'supplementaries:crystal_display'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
