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
                A: '#forge:dusts/fluix',
                B: 'powah:dielectric_paste',
                C: '#forge:gems/source'
            },
            id: `powah:crafting/capacitor_basic_large`
        },
        {
            output: Item.of('powah:energy_cable_basic', 12),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: 'powah:dielectric_rod_horizontal',
                B: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/cable_basic`
        },
        {
            output: 'powah:energizing_rod_basic',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:gems/moonstone',
                B: 'powah:dielectric_rod',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/energizing_rod_basic`
        },
        {
            output: 'powah:energizing_orb',
            pattern: ['AAA', 'ACA', 'BBB'],
            key: {
                A: 'pneumaticcraft:pressure_chamber_glass',
                B: 'pneumaticcraft:pressure_chamber_wall',
                C: 'ars_nouveau:fire_essence'
            },
            id: `powah:crafting/energizing_orb`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
