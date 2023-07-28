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
        },
        {
            output: 'powah:energizing_rod_basic',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:gems/certus_quartz',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: 'powah:dielectric_rod'
            },
            id: `powah:crafting/energizing_rod_basic`
        },
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
            output: '2x powah:capacitor_basic_large',
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: '#forge:plates/invar',
                B: 'powah:dielectric_paste',
                C: '#forge:plates/signalum'
            },
            id: `powah:crafting/capacitor_basic_large`
        },
        {
            output: '12x powah:energy_cable_basic',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'powah:dielectric_rod_horizontal',
                B: '#forge:nuggets/signalum',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/cable_basic`
        },
        {
            output: 'powah:thermoelectric_plate',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/constantan',
                B: '#forge:plates/signalum',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/thermoelectric_plate`
        },
        {
            output: 'powah:player_transmitter_basic',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: 'powah:player_aerial_pearl',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: 'powah:dielectric_rod'
            },
            id: `powah:crafting/player_tranmitter_basic`
        },
        {
            output: 'powah:energy_hopper_basic',
            pattern: ['AAA', 'BCB', 'ADA'],
            key: {
                A: 'powah:dielectric_paste',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing',
                D: 'minecraft:hopper'
            },
            id: `powah:crafting/energy_hopper_basic`
        },
        {
            output: 'powah:energy_discharger_basic',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing'
            },
            id: `powah:crafting/energy_discharger_basic`
        },
        {
            output: 'powah:reactor_basic',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gems/carminite',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing'
            },
            id: `powah:crafting/reactor_basic`
        },
        {
            output: '4x powah:capacitor_hardened',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:ingots/energized_steel',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/capacitor_hardened`
        },
        {
            output: '4x powah:capacitor_blazing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:gems/blazing',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/capacitor_blazing`
        },
        {
            output: '4x powah:capacitor_niotic',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:gems/niotic',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/capacitor_niotic`
        },
        {
            output: '4x powah:capacitor_spirited',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:gems/spirited',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/capacitor_spirited`
        },
        {
            output: '4x powah:capacitor_nitro',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:gems/nitro',
                C: 'powah:capacitor_basic_large'
            },
            id: `powah:crafting/capacitor_nitro`
        },
        {
            output: '8x powah:energy_cable_hardened',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'powah:energy_cable_basic',
                B: 'powah:capacitor_hardened'
            },
            id: `${id_prefix}energy_cable_hardened`
        },
        {
            output: '8x powah:energy_cable_blazing',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'powah:energy_cable_basic',
                B: 'powah:capacitor_blazing'
            },
            id: `${id_prefix}energy_cable_blazing`
        },
        {
            output: '8x powah:energy_cable_niotic',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'powah:energy_cable_basic',
                B: 'powah:capacitor_niotic'
            },
            id: `${id_prefix}energy_cable_niotic`
        },
        {
            output: '8x powah:energy_cable_spirited',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'powah:energy_cable_basic',
                B: 'powah:capacitor_spirited'
            },
            id: `${id_prefix}energy_cable_spirited`
        },
        {
            output: '8x powah:energy_cable_nitro',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'powah:energy_cable_basic',
                B: 'powah:capacitor_nitro'
            },
            id: `${id_prefix}energy_cable_nitro`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
