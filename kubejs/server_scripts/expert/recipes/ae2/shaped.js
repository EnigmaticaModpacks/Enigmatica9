ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2/shaped/';

    const recipes = [
        {
            output: Item.of('ae2:energy_acceptor'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'ae2:quartz_glass',
                C: '#forge:storage_blocks/source'
            },
            id: `ae2:network/blocks/energy_energy_acceptor`
        },
        {
            output: Item.of('ae2:quartz_growth_accelerator'),
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: 'ae2:quartz_glass',
                C: 'ae2:fluix_block',
                D: 'ae2:fluix_glass_cable'
            },
            id: `ae2:network/blocks/crystal_processing_quartz_growth_accelerator`
        },
        {
            output: Item.of('3x ae2:semi_dark_monitor'),
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: 'ae2:quartz_glass',
                B: '#forge:dusts/glowstone',
                C: '#forge:dusts/redstone',
                D: 'naturesaura:infused_stone'
            },
            id: `ae2:network/parts/panels_semi_dark_monitor`
        },
        {
            output: Item.of('ae2:interface'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:quartz_glass',
                B: 'naturesaura:infused_stone',
                C: 'pneumaticcraft:logistics_core'
            },
            id: `ae2:network/blocks/interfaces_interface`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
