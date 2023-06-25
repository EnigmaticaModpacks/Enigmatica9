ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/twilightforest/shaped/';
    const recipes = [
        {
            output: '4x twilightforest:etched_nagastone',
            pattern: ['AA', 'AA'],
            key: {
                A: 'twilightforest:nagastone'
            },
            id: `${id_prefix}etched_nagastone`
        },
        {
            output: '2x twilightforest:nagastone_pillar',
            pattern: ['A', 'A'],
            key: {
                A: 'twilightforest:nagastone'
            },
            id: `${id_prefix}nagastone_pillar`
        },
        {
            output: '4x twilightforest:nagastone_head',
            pattern: ['AA', 'AA'],
            key: {
                A: 'twilightforest:nagastone_pillar'
            },
            id: `${id_prefix}nagastone_head`
        },
        {
            output: '8x twilightforest:underbrick',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:bricks',
                B: 'twilightforest:liveroot'
            },
            id: `${id_prefix}underbrick`
        },
        {
            output: '4x twilightforest:castle_brick',
            pattern: ['AB', 'BA'],
            key: {
                A: '#forge:storage_blocks/quartz',
                B: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}castle_brick`
        },
        {
            output: '4x twilightforest:castle_roof_tile',
            pattern: ['AB', 'BA'],
            key: {
                A: '#forge:gems/coal',
                B: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}castle_roof_tile`
        },
        {
            output: 'twilightforest:canopy_bookshelf',
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: 'twilightforest:canopy_planks',
                B: 'minecraft:book'
            },
            id: 'twilightforest:canopy_bookshelf'
        }
    ];

    const wood_types = [
        'twilight_oak',
        'canopy',
        'mangrove',
        'darkwood',
        'time',
        'transformation',
        'mining',
        'sorting'
    ];

    wood_types.forEach((wood) => {
        let planks = `twilightforest:${wood}_planks`;
        if (wood == 'darkwood') {
            planks = `twilightforest:dark_planks`;
        }

        recipes.push({
            output: `twilightforest:${wood}_chest`,
            pattern: ['AAA', 'A A', 'AAA'],
            key: { A: planks },
            id: `twilightforest:wood/${wood}_chest`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
