ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/apotheosis/shaped/';

    const recipes = [
        {
            output: 'apotheosis:inert_trident',
            pattern: [' AA', 'CBA', 'B  '],
            key: {
                A: '#forge:rods/osmium',
                B: '#forge:rods/bronze',
                C: 'minecraft:conduit'
            },
            id: `apotheosis:inert_trident`
        },
        {
            output: 'apotheosis:heart_seashelf',
            pattern: [' C ', 'ABA', 'AAA'],
            key: {
                A: '#forge:dusts/prismarine',
                B: 'apotheosis:infused_seashelf',
                C: 'minecraft:conduit'
            },
            id: `apotheosis:heart_seashelf`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
