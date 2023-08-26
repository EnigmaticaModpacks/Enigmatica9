ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/sushigocrafting/shaped/';

    const recipes = [
        {
            output: 'sushigocrafting:rice_cooker',
            pattern: ['ABA', 'CDC', 'CEC'],
            key: {
                A: '#forge:rods/ancient',
                B: 'quark:bamboo_trapdoor',
                C: '#forge:ingots/copper',
                D: '#forge:essences/water',
                E: 'minecraft:conduit'
            },
            id: 'sushigocrafting:rice_cooker'
        },
        {
            output: 'sushigocrafting:cooler_box',
            pattern: ['DAD', 'EBE', 'DCD'],
            key: {
                A: 'quark:bamboo_trapdoor',
                B: '#forge:essences/water',
                C: '#forge:chests',
                D: '#forge:ices/packed',
                E: '#forge:ingots/tin'
            },
            id: 'sushigocrafting:cooler_box'
        },
        {
            output: 'sushigocrafting:cleaver_knife',
            pattern: [' AA', 'AA ', 'B  '],
            key: {
                A: '#forge:ingots/ironwood',
                B: '#forge:rods/ancient'
            },
            id: 'sushigocrafting:cleaver_knife'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
