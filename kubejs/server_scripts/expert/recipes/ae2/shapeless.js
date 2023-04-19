ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2/shapeless/';

    const recipes = [
        {
            output: 'ae2:terminal',
            inputs: ['pneumaticcraft:logistics_core', '#ae2:illuminated_panel'],
            id: `ae2:network/parts/terminals`
        },
        {
            output: 'ae2:crafting_terminal',
            inputs: ['#forge:workbenches', 'ae2:terminal'],
            id: `ae2:network/parts/terminals_crafting`
        },
        {
            output: 'ae2:crafting_terminal',
            inputs: ['pneumaticcraft:logistics_core', '#ae2:illuminated_panel', '#forge:workbenches'],
            id: `${id_prefix}crafting_terminal`
        },
        {
            output: 'ae2:storage_bus',
            inputs: ['naturesaura:item_distributor', '#ae2:interface'],
            id: `ae2:network/parts/storage_bus`
        },
        {
            output: '12x ae2:fluix_covered_cable',
            inputs: [
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'powah:dielectric_paste',
                'thermal:beekeeper_fabric'
            ],
            id: `ae2:network/cables/covered_fluix`
        },
        {
            output: '12x ae2:fluix_covered_cable',
            inputs: [
                'powah:dielectric_rod',
                'powah:dielectric_rod',
                'powah:dielectric_rod',
                'powah:dielectric_rod',
                'powah:dielectric_rod',
                'powah:dielectric_rod',
                'thermal:beekeeper_fabric'
            ],
            id: `${id_prefix}fluix_covered_cable`
        },
        {
            output: 'ae2:conversion_monitor',
            inputs: ['ae2:storage_monitor', 'pneumaticcraft:logistics_core'],
            id: `ae2:network/parts/monitors_conversion`
        },
        {
            output: '18x kubejs:dimensional_storage_crystal',
            inputs: ['occultism:dimensional_matrix', '#ae2:knife'],
            id: `${id_prefix}dimensional_storage_crystal`
        },
        {
            output: 'ae2:crafting_accelerator',
            inputs: ['ae2:crafting_unit', 'ars_nouveau:wixie_charm'],
            id: `ae2:network/crafting/cpu_crafting_accelerator`
        },
        {
            output: 'ae2:network_tool',
            inputs: ['#ae2:quartz_wrench', '#ae2:illuminated_panel', 'quark:rainbow_rune'],
            id: `ae2:tools/network_tool`
        },
        {
            output: 'ae2:wireless_access_point',
            inputs: ['ae2:wireless_receiver', 'pneumaticcraft:logistics_core', 'ae2:fluix_glass_cable'],
            id: `ae2:network/wireless_access_point`
        },
        {
            output: 'ae2:basic_card',
            inputs: ['modularrouters:augment_core', '#forge:gems/sunstone_crystal', 'powah:dielectric_paste'],
            id: `ae2:materials/basiccard`
        },
        {
            output: 'ae2:advanced_card',
            inputs: ['modularrouters:augment_core', '#forge:gems/moonstone_crystal', 'powah:dielectric_paste'],
            id: `ae2:materials/advancedcard`
        },
        {
            output: 'ae2:void_card',
            inputs: ['ae2:basic_card', 'pneumaticcraft:logistics_core', '#forge:essences/fire'],
            id: `ae2:materials/cardvoid`
        },
        {
            output: 'ae2:equal_distribution_card',
            inputs: ['ae2:advanced_card', 'pneumaticcraft:logistics_core', '#forge:essences/air'],
            id: `ae2:materials/carddistribution`
        },
        {
            output: 'ae2:pattern_encoding_terminal',
            inputs: ['ae2:crafting_terminal', 'pneumaticcraft:logistics_core', 'ae2:blank_pattern'],
            id: `ae2:network/parts/terminals_pattern_encoding`
        },
        {
            output: 'ae2:pattern_access_terminal',
            inputs: ['#ae2:illuminated_panel', 'pneumaticcraft:logistics_core', '#ae2:pattern_provider'],
            id: `ae2:network/parts/terminals_pattern_access`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
