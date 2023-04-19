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
                C: '#forge:essences/air'
            },
            id: `${id_prefix}jar_of_light`
        },
        {
            output: 'ars_nouveau:void_jar',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:essences/fire',
                B: 'thermal:jar',
                C: '#forge:essences/manipulation'
            },
            id: `${id_prefix}void_jar`
        },
        {
            output: 'ars_nouveau:arcane_core',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/energized_steel',
                C: '#forge:gems/source'
            },
            id: `ars_nouveau:arcane_core`
        },
        {
            output: 'ars_nouveau:enchanting_apparatus',
            pattern: ['BAB', ' C ', 'BAB'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/energized_steel',
                C: '#forge:gems/fluix'
            },
            id: `ars_nouveau:enchanting_apparatus`
        },
        {
            output: 'ars_nouveau:ring_of_potential',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:nuggets/silver',
                B: '#forge:gems/source'
            },
            id: `ars_nouveau:ring_of_potential`
        },
        {
            output: 'ars_nouveau:alchemists_crown',
            pattern: ['ABA', 'BCB', '  D'],
            key: {
                A: 'thermal:jar',
                B: '#forge:wires/electrum',
                C: 'ars_nouveau:mundane_belt',
                D: 'createaddition:straw'
            },
            id: `${id_prefix}alchemists_crown`
        },
        {
            output: '2x ars_nouveau:repository',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'ars_nouveau:archwood_chest',
                C: '#forge:gems/source'
            },
            id: `ars_nouveau:repository`
        },
        {
            output: 'ars_nouveau:dominion_wand',
            pattern: [' AB', ' CA', 'CD '],
            key: {
                A: '#forge:nuggets/electrum',
                B: '#forge:gems/source',
                C: '#forge:rods/wooden',
                D: '#forge:fabrics/infused'
            },
            id: `${id_prefix}dominion_wand`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
