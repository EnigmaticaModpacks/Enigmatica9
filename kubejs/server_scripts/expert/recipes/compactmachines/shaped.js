ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/compactmachines/shaped/';

    const recipes = [
        {
            output: 'compactmachines:machine_tiny',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'compactmachines:wall',
                B: 'quark:orange_rune',
                C: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}machine_tiny`
        },
        {
            output: 'compactmachines:machine_small',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'compactmachines:wall',
                B: 'quark:white_rune',
                C: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}machine_small`
        },
        {
            output: 'compactmachines:machine_normal',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'compactmachines:wall',
                B: 'quark:yellow_rune',
                C: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}machine_normal`
        },
        {
            output: 'compactmachines:machine_large',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'compactmachines:wall',
                B: 'quark:black_rune',
                C: 'ae2:spatial_cell_component_2'
            },
            id: `${id_prefix}machine_large`
        },
        {
            output: 'compactmachines:machine_giant',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'compactmachines:wall',
                B: 'quark:cyan_rune',
                C: 'ae2:spatial_cell_component_16'
            },
            id: `${id_prefix}machine_giant`
        },
        {
            output: 'compactmachines:machine_maximum',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'compactmachines:wall',
                B: 'quark:rainbow_rune',
                C: 'ae2:spatial_cell_component_128'
            },
            id: `${id_prefix}machine_maximum`
        },
        {
            output: 'compactmachines:personal_shrinking_device',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'compactmachines:wall',
                B: 'supplementaries:crystal_display',
                C: '#forge:plastic',
                D: 'ae2:fluix_pearl'
            },
            id: `${id_prefix}personal_shrinking_device`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
