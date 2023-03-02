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
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
