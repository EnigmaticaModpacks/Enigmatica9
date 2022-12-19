ServerEvents.recipes((event) => {
    const id_prefix = 'powah:base/shaped/';
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
            output: 'powah:reactor_basic',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'twilightforest:carminite',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_casing'
            },
            id: `powah:crafting/reactor_basic`
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
        }
    ];

    // powahTiers.forEach(function (tier) {
    //     let capacitor = 'powah:capacitor_' + tier,
    //         crystal = 'powah:crystal_' + tier,
    //         cable = 'powah:energy_cable_' + tier;

    //     if (tier == 'basic' || tier == 'starter') {
    //         return;
    //     } else if (tier == 'hardened') {
    //         crystal = 'powah:steel_energized';
    //     }

    //     let lower_tiers = lowerTiers(powahTiers, tier);

    //     recipes.push(
    //         {
    //             output: Item.of(`powah:energy_cell_${tier}`),
    //             pattern: ['ABA', 'BCB', 'ABA'],
    //             key: {
    //                 A: crystal,
    //                 B: capacitor,
    //                 C: Ingredient.of(lower_tiers.map((item) => `powah:energy_cell_${item}`))
    //             },
    //             id: `${id_prefix}energy_cell_${tier}`
    //         },
    //         {
    //             output: Item.of(`powah:battery_${tier}`),
    //             pattern: [' A ', 'BCB', ' B '],
    //             key: {
    //                 A: crystal,
    //                 B: capacitor,
    //                 C: Ingredient.of(lower_tiers.map((item) => `powah:battery_${item}`))
    //             },
    //             id: `${id_prefix}battery_${tier}`
    //         },

    //         {
    //             output: Item.of(`powah:solar_panel_${tier}`),
    //             pattern: ['BCB', 'AAA'],
    //             key: {
    //                 A: crystal,
    //                 B: capacitor,
    //                 C: Ingredient.of(lower_tiers.map((item) => `powah:solar_panel_${item}`))
    //             },
    //             id: `${id_prefix}solar_panel_${tier}`
    //         }
    //     );
    // });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
