ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_nouveau/shaped/';

    const recipes = [
        {
            output: 'ars_nouveau:alchemical_sourcelink',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:nuggets/bronze',
                B: '#forge:gems/source',
                C: '#forge:ingots/electrum',
                D: 'ars_nouveau:potion_jar'
            },
            id: `ars_nouveau:alchemical_sourcelink`
        },
        {
            output: '3x ars_nouveau:mob_jar',
            pattern: [' A ', 'BBB', 'CCC'],
            key: {
                A: '#forge:nuggets/bronze',
                B: 'ars_nouveau:archwood_slab',
                C: 'thermal:jar'
            },
            id: `ars_nouveau:mob_jar`
        },
        {
            output: '3x ars_nouveau:source_jar',
            pattern: [' A ', 'BBB', 'CCC'],
            key: {
                A: '#forge:ingots/bronze',
                B: 'ars_nouveau:archwood_slab',
                C: 'thermal:jar'
            },
            id: `ars_nouveau:source_jar`
        },
        {
            output: 'ars_nouveau:jar_of_light',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:storage_blocks/glowstone',
                B: 'thermal:jar',
                C: 'ars_nouveau:air_essence'
            },
            id: `ars_nouveau:jar_of_light`
        },
        {
            output: 'ars_nouveau:void_jar',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'ars_nouveau:fire_essence',
                B: 'thermal:jar',
                C: 'ars_nouveau:manipulation_essence'
            },
            id: `ars_nouveau:void_jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
