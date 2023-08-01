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
            ingredients: [{ item: 'thermal:rubber', count: 4 }, { tag: 'forge:essences/fire' }],
            result: [{ item: `thermal:cured_rubber`, count: 4 }],
            energy: 1000,
            id: `${id_prefix}cured_rubber`
        },
        {
            ingredients: [
                { item: 'pneumaticcraft:compressed_stone', count: 16 },
                { item: 'create:brass_casing', count: 4 },
                { item: 'create:encased_chain_drive' }
            ],
            result: [{ item: `create:crushing_wheel`, count: 2 }],
            energy: 16000,
            id: `${id_prefix}crushing_wheel`
        },
        {
            result: [{ item: 'pneumaticcraft:volume_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'pneumaticcraft:pressure_chamber_wall' },
                { tag: 'forge:essences/air', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}volume_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:range_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { tag: 'forge:gems/source' },
                { tag: 'forge:essences/manipulation', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}range_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:security_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'pneumaticcraft:pressure_gauge' },
                { tag: 'forge:essences/abjuration', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}security_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:speed_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { tag: 'forge:gems/fluix' },
                { tag: 'forge:essences/water', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}speed_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:item_life_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'ars_nouveau:mendosteen_pod' },
                { tag: 'forge:essences/abjuration', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}item_life_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:entity_tracker_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { tag: 'forge:essences/air', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}entity_tracker_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:block_tracker_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { tag: 'forge:essences/earth', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}block_tracker_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:dispenser_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'ae2:certus_quartz_crystal' },
                { tag: 'forge:essences/manipulation', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}dispenser_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:magnet_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'minecraft:lodestone' },
                { tag: 'forge:essences/manipulation', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}magnet_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:minigun_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'pneumaticcraft:minigun' },
                { tag: 'forge:essences/fire', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}minigun_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:inventory_upgrade', count: 4 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'thermal:satchel' },
                { tag: 'forge:essences/abjuration', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}inventory_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:standby_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { tag: 'comforts:sleeping_bags' },
                { tag: 'forge:essences/abjuration', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}standby_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:charging_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'pneumaticcraft:charging_module' },
                { tag: 'forge:essences/air', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}charging_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:stomp_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { tag: 'forge:storage_blocks/lead' },
                { tag: 'forge:essences/earth', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}stomp_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:flippers_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'thermal:diving_boots' },
                { tag: 'forge:essences/water', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}flippers_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:scuba_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'thermal:diving_helmet' },
                { tag: 'forge:essences/water', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}scuba_upgrade`
        },
        {
            result: [{ item: 'pneumaticcraft:coordinate_tracker_upgrade', count: 1 }],
            ingredients: [
                { item: 'pneumaticcraft:upgrade_matrix' },
                { item: 'ars_nouveau:ritual_scrying' },
                { tag: 'forge:essences/manipulation', count: 2 }
            ],
            energy: 8000,
            id: `${id_prefix}coordinate_tracker_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        event.custom(recipe).id(recipe.id);
    });
});
