ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'powah:expert/shaped/';
    const recipes = [
        {
            output: 'powah:battery_basic',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:plates/invar',
                C: 'powah:capacitor_basic_large',
                D: '#forge:plates/signalum'
            },
            id: `powah:crafting/battery_basic`
        },
        {
            output: 'powah:energy_cell_basic',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/invar',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing'
            },
            id: `powah:crafting/energy_cell_basic`
        },
        {
            output: Item.of('powah:capacitor_basic_large', 2),
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: '#forge:plates/invar',
                B: 'powah:dielectric_paste',
                C: '#forge:plates/signalum'
            },
            id: `powah:crafting/capacitor_basic_large`
        },
        {
            output: Item.of('powah:energy_cable_basic', 12),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'powah:dielectric_rod_horizontal',
                B: '#forge:nuggets/signalum',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/cable_basic`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
