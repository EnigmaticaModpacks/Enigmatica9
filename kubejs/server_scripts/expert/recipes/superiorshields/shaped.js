ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/superiorshields/shaped/';

    const recipes = [
        {
            output: 'superiorshields:bronze_shield',
            pattern: ['ABA', 'CAC', 'CCC'],
            key: {
                A: '#forge:ingots/bronze',
                B: '#forge:gems/diamond',
                C: '#forge:nuggets/bronze'
            },
            id: `${id_prefix}bronze_shield`
        },
        {
            output: 'superiorshields:constantan_shield',
            pattern: ['ABA', 'CAC', 'CCC'],
            key: {
                A: '#forge:ingots/constantan',
                B: '#forge:gems/diamond',
                C: '#forge:nuggets/constantan'
            },
            id: `${id_prefix}constantan_shield`
        },
        {
            output: 'superiorshields:electrum_shield',
            pattern: ['ABA', 'CAC', 'CCC'],
            key: {
                A: '#forge:ingots/electrum',
                B: '#forge:gems/diamond',
                C: '#forge:nuggets/electrum'
            },
            id: `${id_prefix}electrum_shield`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
