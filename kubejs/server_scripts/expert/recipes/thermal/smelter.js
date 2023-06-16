ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/thermal/smelter/';

    const recipes = [
        {
            ingredients: [
                { tag: 'forge:dusts/quartz' },
                { item: 'minecraft:obsidian' },
                { tag: 'forge:glass/colorless' }
            ],
            result: [{ item: 'thermal:obsidian_glass', count: 2 }],
            energy: 4800,
            id: `${id_prefix}obsidian_glass`
        },
        {
            ingredients: [{ tag: 'forge:dusts/lumium' }, { item: 'thermal:obsidian_glass', count: 2 }],
            result: [{ item: 'thermal:lumium_glass', count: 2 }],
            energy: 4800,
            id: `${id_prefix}lumium_glass`
        },
        {
            ingredients: [{ tag: 'forge:dusts/signalum' }, { item: 'thermal:obsidian_glass', count: 2 }],
            result: [{ item: 'thermal:signalum_glass', count: 2 }],
            energy: 4800,
            id: `${id_prefix}signalum_glass`
        },
        {
            ingredients: [{ tag: 'forge:dusts/enderium' }, { item: 'thermal:obsidian_glass', count: 2 }],
            result: [{ item: 'thermal:enderium_glass', count: 2 }],
            energy: 4800,
            id: `${id_prefix}enderium_glass`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/copper', count: 3 },
                { tag: 'forge:dusts/tin' },
                { tag: 'forge:dusts/redstone' }
            ],
            result: [{ item: 'emendatusenigmatica:bronze_ingot', count: 4 }, { item: 'thermal:slag' }],
            energy: 2400,
            id: `${id_prefix}bronze_ingot`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/silver', count: 2 },
                { tag: 'forge:dusts/gold', count: 2 },
                { tag: 'forge:dusts/redstone' }
            ],
            result: [{ item: 'emendatusenigmatica:electrum_ingot', count: 4 }, { item: 'thermal:slag' }],
            energy: 2400,
            id: `${id_prefix}electrum_ingot`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/iron', count: 2 },
                { tag: 'forge:dusts/nickel' },
                { tag: 'forge:dusts/redstone', count: 2 }
            ],
            result: [
                { item: 'emendatusenigmatica:invar_ingot', count: 3 },
                { item: 'thermal:slag', count: 2 }
            ],
            energy: 2400,
            id: `${id_prefix}invar_ingot`
        },
        {
            ingredients: [
                { tag: 'forge:dusts/nickel', count: 2 },
                { tag: 'forge:dusts/copper', count: 2 },
                { tag: 'forge:dusts/redstone' }
            ],
            result: [{ item: 'emendatusenigmatica:constantan_ingot', count: 4 }, { item: 'thermal:slag' }],
            energy: 2400,
            id: `${id_prefix}constantan_ingot`
        },
        {
            ingredients: [{ tag: 'forge:dusts/aluminum', count: 4 }, { tag: 'forge:essences/manipulation' }],
            result: [{ item: 'emendatusenigmatica:signalum_ingot', count: 4 }, { item: 'thermal:slag' }],
            energy: 2400,
            id: `${id_prefix}signalum_ingot`
        },
        {
            ingredients: [{ tag: 'forge:dusts/constantan', count: 4 }, { item: 'minecraft:glow_berries' }],
            result: [{ item: 'emendatusenigmatica:lumium_ingot', count: 4 }, { item: 'thermal:slag' }],
            energy: 2400,
            id: `${id_prefix}lumium_ingot_from_glow_berries`
        },
        {
            ingredients: [{ tag: 'forge:dusts/constantan', count: 4 }, { item: 'twilightforest:torchberries' }],
            result: [{ item: 'emendatusenigmatica:lumium_ingot', count: 4 }, { item: 'thermal:slag' }],
            energy: 2400,
            id: `${id_prefix}lumium_ingot_from_torchberries`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { tag: 'forge:essences/water', count: 2 },
                { tag: 'forge:gems/source' }
            ],
            result: [{ item: 'thermal:machine_efficiency_augment' }],
            energy: 10000,
            id: `${id_prefix}machine_efficiency_augment`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { tag: 'forge:essences/fire', count: 2 },
                { tag: 'forge:gems/source' }
            ],
            result: [{ item: 'thermal:machine_speed_augment' }],
            energy: 10000,
            id: `${id_prefix}machine_speed_augment`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { tag: 'forge:essences/air', count: 2 },
                { item: 'powah:capacitor_basic_large' }
            ],
            result: [{ item: 'thermal:rf_coil_augment' }],
            energy: 10000,
            id: `${id_prefix}rf_coil_augment`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { tag: 'forge:essences/fire', count: 2 },
                { item: 'powah:capacitor_basic_large' }
            ],
            result: [{ item: 'thermal:rf_coil_xfer_augment' }],
            energy: 10000,
            id: `${id_prefix}rf_coil_xfer_augment`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { tag: 'forge:essences/water', count: 2 },
                { item: 'powah:capacitor_basic_large' }
            ],
            result: [{ item: 'thermal:rf_coil_storage_augment' }],
            energy: 10000,
            id: `${id_prefix}rf_coil_storage_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { item: 'thermal:fluid_cell_frame' }],
            result: [{ item: 'thermal:fluid_tank_augment' }],
            energy: 10000,
            id: `${id_prefix}fluid_tank_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { tag: 'forge:fabrics/infused', count: 4 }],
            result: [{ item: 'thermal:machine_output_augment' }],
            energy: 10000,
            id: `${id_prefix}machine_output_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { tag: 'forge:gems/infused_diamond' }],
            result: [{ item: 'thermal:machine_catalyst_augment' }],
            energy: 10000,
            id: `${id_prefix}machine_catalyst_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { tag: 'forge:gems/quartz', count: 4 }],
            result: [{ item: 'thermal:area_radius_augment' }],
            energy: 10000,
            id: `${id_prefix}area_radius_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { item: 'pneumaticcraft:logistics_core' }],
            result: [{ item: 'thermal:machine_cycle_augment' }],
            energy: 10000,
            id: `${id_prefix}machine_cycle_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { tag: 'forge:storage_blocks/knightmetal' }],
            result: [{ item: 'thermal:machine_null_augment' }],
            energy: 10000,
            id: `${id_prefix}machine_null_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { item: 'ars_nouveau:potion_flask_amplify' }],
            result: [{ item: 'thermal:potion_amplifier_augment' }],
            energy: 10000,
            id: `${id_prefix}potion_amplifier_augment`
        },
        {
            ingredients: [{ item: 'modularrouters:augment_core' }, { item: 'ars_nouveau:potion_flask_extend_time' }],
            result: [{ item: 'thermal:potion_duration_augment' }],
            energy: 10000,
            id: `${id_prefix}potion_duration_augment`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { item: 'immersiveengineering:component_electronic' },
                { item: 'immersiveengineering:coil_mv' }
            ],
            result: [{ item: 'thermal:dynamo_throttle_augment' }],
            energy: 10000,
            id: `${id_prefix}dynamo_throttle_augment`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { item: 'thermal:energy_cell_frame' },
                { item: 'quark:rainbow_rune', count: 4 }
            ],
            result: [{ item: 'thermal:dynamo_output_augment' }],
            energy: 10000,
            id: `${id_prefix}dynamo_output_augment`
        },
        {
            ingredients: [
                { item: 'modularrouters:augment_core' },
                { item: 'minecraft:lodestone' },
                { tag: 'forge:gems/source', count: 4 }
            ],
            result: [{ item: 'thermal:dynamo_fuel_augment' }],
            energy: 10000,
            id: `${id_prefix}dynamo_fuel_augment`
        },
        {
            ingredients: [{ item: 'minecraft:netherite_scrap' }, { tag: 'forge:ingots/soul_steel', count: 4 }],
            result: [{ item: `minecraft:netherite_ingot`, count: 4 }],
            energy: 20000,
            id: `${id_prefix}netherite_ingot`
        },
        {
            ingredients: [
                { item: 'pneumaticcraft:logistics_core' },
                { item: 'ae2:singularity' },
                { item: 'mekanism:teleportation_core' }
            ],
            result: [{ item: `kubejs:energetic_transference_matrix`, count: 2 }],
            energy: 8000,
            id: `${id_prefix}energetic_transference_matrix`
        },
        {
            ingredients: [{ tag: 'forge:gems/spirit_attuned' }, { tag: 'forge:ingots/knightmetal', count: 4 }],
            result: [{ item: `naturesaura:depth_ingot`, count: 4 }],
            energy: 8000,
            id: `${id_prefix}depth_ingot`
        },
        {
            ingredients: [
                { item: 'thermal:rubber', count: 4 },
                { tag: 'forge:essences/fire' },
                { tag: 'forge:essences/water' }
            ],
            result: [{ item: `thermal:cured_rubber`, count: 4 }],
            energy: 1000,
            id: `${id_prefix}cured_rubber`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        event.custom(recipe).id(recipe.id);
    });
});
