ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_elemental/shaped/';

    const recipes = [
        {
            output: 'ars_elemental:everfull_urn',
            pattern: [' B ', 'BAB', 'CBC'],
            key: {
                A: '#forge:essences/water',
                B: 'minecraft:terracotta',
                C: '#forge:gems/source'
            },
            id: `${id_prefix}everfull_urn`
        },
        {
            output: 'ars_elemental:caster_bag',
            pattern: ['BAB', 'ACA', 'AAA'],
            key: {
                A: '#forge:leather',
                B: 'ars_nouveau:magebloom_fiber',
                C: '#forge:gems/source'
            },
            id: 'ars_elemental:caster_bag'
        },
        {
            output: 'ars_elemental:spell_mirror',
            pattern: [' A ', 'BCB', 'DA '],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:wires/electrum',
                C: '#forge:gems/source',
                D: '#forge:essences/air'
            },
            id: `${id_prefix}spell_mirror`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
