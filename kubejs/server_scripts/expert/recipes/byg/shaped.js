ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/byg/shaped/';

    const recipes = [
        {
            output: '5x byg:therium_lamp',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: 'byg:therium_crystal_block',
                B: '#forge:wires/lead'
            },
            id: 'byg:therium_lamp'
        },
        {
            output: '5x byg:glowstone_lamp',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: 'minecraft:glowstone',
                B: '#forge:wires/lead'
            },
            id: 'byg:glowstone_lamp'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
