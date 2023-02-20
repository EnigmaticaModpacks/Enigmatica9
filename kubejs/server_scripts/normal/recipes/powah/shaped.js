ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'powah:normal/shaped/';
    const recipes = [
        {
            output: 'powah:furnator_basic',
            pattern: ['AAA', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/invar',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: 'minecraft:blast_furnace'
            },
            id: `powah:crafting/furnator_basic`
        },
        {
            output: 'powah:magmator_basic',
            pattern: ['AAA', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/invar',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: 'thermal:fluid_cell_frame'
            },
            id: `powah:crafting/magmator_basic`
        },
        {
            output: 'powah:thermo_generator_basic',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:plates/invar',
                C: 'powah:capacitor_basic_large',
                D: 'powah:dielectric_casing',
                E: 'powah:thermoelectric_plate'
            },
            id: `powah:crafting/thermo_generator_basic`
        },
        {
            output: 'powah:solar_panel_basic',
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: 'powah:photoelectric_pane',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: '#forge:plates/invar'
            },
            id: `powah:crafting/solar_panel_basic`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
