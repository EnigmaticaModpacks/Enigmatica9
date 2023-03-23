ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: { item: 'create:mechanical_crafter', count: 8 },
            pedestalItems: [
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } }
            ],
            reagent: [{ item: 'minecraft:crafting_table' }],
            sourceCost: 500,
            id: `${id_prefix}mechanical_crafter`
        },
        {
            output: { item: 'mekanism:teleportation_core', count: 2 },
            pedestalItems: [
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } }
            ],
            reagent: [{ item: 'occultism:spirit_attuned_gem' }],
            sourceCost: 500,
            id: `${id_prefix}teleportation_core`
        },
        {
            output: { item: 'occultism:storage_controller_base' },
            pedestalItems: [
                { item: { tag: 'forge:ingots/energized_steel' } },
                { item: { tag: 'forge:ingots/energized_steel' } },
                { item: { tag: 'forge:ingots/energized_steel' } }
            ],
            reagent: [{ item: 'occultism:otherstone_pedestal' }],
            sourceCost: 2000,
            id: `${id_prefix}storage_controller_base`
        },
        {
            output: {
                item: 'occultism:dimensional_matrix',
                nbt: { spiritName: '' }
            },
            pedestalItems: [
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } }
            ],
            reagent: [{ item: 'mekanism:teleportation_core' }],
            sourceCost: 2000,
            id: `${id_prefix}dimensional_matrix`
        },
        {
            output: { item: 'occultism:stable_wormhole' },
            pedestalItems: [
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } }
            ],
            reagent: [{ item: 'occultism:wormhole_frame' }],
            sourceCost: 2000,
            id: `${id_prefix}stable_wormhole`
        },
        {
            output: { item: 'ae2:crafting_unit', count: 2 },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:logistics_core' } },
                { item: { item: 'naturesaura:infused_stone' } },
                { item: { item: 'powah:energy_cable_niotic' } },
                { item: { item: 'naturesaura:infused_stone' } },
                { item: { item: 'pneumaticcraft:logistics_core' } },
                { item: { item: 'naturesaura:infused_stone' } },
                { item: { item: 'powah:energy_cable_niotic' } },
                { item: { item: 'naturesaura:infused_stone' } }
            ],
            reagent: [{ item: 'ars_nouveau:wixie_charm' }],
            sourceCost: 5000,
            id: `${id_prefix}crafting_unit`
        },
        {
            output: { item: 'naturesaura:animal_spawner' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'minecraft:golden_carrot' } },
                { item: { item: 'minecraft:hay_block' } },
                { item: { item: 'minecraft:golden_apple' } }
            ],
            reagent: [{ item: 'spirit:broken_spawner' }],
            sourceCost: 9000,
            id: `${id_prefix}animal_spawner`
        },
        {
            output: { item: 'pneumaticcraft:drill_bit_diamond' },
            pedestalItems: [{ item: { tag: 'forge:ingots/skies' } }, { item: { item: 'ars_nouveau:glyph_aoe' } }],
            reagent: [{ item: 'pneumaticcraft:drill_bit_compressed_iron' }],
            sourceCost: 3000,
            id: `${id_prefix}drill_bit_diamond`
        },
        {
            output: { item: 'create:brass_hand' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:leather' } },
                { item: { tag: 'forge:leather' } },
                { item: { tag: 'forge:leather' } }
            ],
            reagent: [{ tag: 'forge:ingots/energized_steel' }],
            sourceCost: 1000,
            id: `${id_prefix}brass_hand`
        },
        {
            output: { item: 'minecraft:netherite_ingot', count: 4 },
            pedestalItems: [
                { item: { tag: 'forge:ingots/electrum' } },
                { item: { tag: 'forge:ingots/electrum' } },
                { item: { tag: 'forge:ingots/electrum' } },
                { item: { tag: 'forge:ingots/electrum' } }
            ],
            reagent: [{ item: 'minecraft:netherite_scrap' }],
            sourceCost: 5000,
            id: `${id_prefix}netherite_ingot`
        },
        {
            output: { item: 'immersiveengineering:mold_plate', count: 1 },
            pedestalItems: [{ item: { tag: 'forge:plates' } }, { item: { item: 'ars_nouveau:manipulation_essence' } }],
            reagent: [{ item: 'pneumaticcraft:compressed_stone_slab' }],
            sourceCost: 1000,
            id: `${id_prefix}mold_plate`
        },
        {
            output: { item: 'immersiveengineering:mold_wire', count: 1 },
            pedestalItems: [{ item: { tag: 'forge:wires' } }, { item: { item: 'ars_nouveau:manipulation_essence' } }],
            reagent: [{ item: 'pneumaticcraft:compressed_stone_slab' }],
            sourceCost: 1000,
            id: `${id_prefix}mold_wire`
        },
        {
            output: { item: 'immersiveengineering:mold_rod', count: 1 },
            pedestalItems: [
                { item: { tag: 'forge:rods/all_metal' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:compressed_stone_slab' }],
            sourceCost: 1000,
            id: `${id_prefix}mold_rod`
        },
        {
            output: { item: 'immersiveengineering:mold_gear', count: 1 },
            pedestalItems: [{ item: { tag: 'forge:gears' } }, { item: { item: 'ars_nouveau:manipulation_essence' } }],
            reagent: [{ item: 'pneumaticcraft:compressed_stone_slab' }],
            sourceCost: 1000,
            id: `${id_prefix}mold_gear`
        },
        {
            output: { item: 'pneumaticcraft:volume_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:pressure_chamber_wall' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}volume_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:range_upgrade', count: 1 },
            pedestalItems: [
                { item: { tag: 'forge:gems/source' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}range_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:security_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:pressure_gauge' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}security_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:speed_upgrade', count: 1 },
            pedestalItems: [
                { item: { tag: 'forge:gems/fluix' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}speed_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:item_life_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'ars_nouveau:mendosteen_pod' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}item_life_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:entity_tracker_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'ae2:charged_certus_quartz_crystal' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}entity_tracker_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:block_tracker_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'ae2:charged_certus_quartz_crystal' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}block_tracker_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:dispenser_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'ae2:certus_quartz_crystal' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}dispenser_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:magnet_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'minecraft:lodestone' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}magnet_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:minigun_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:minigun' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}minigun_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:inventory_upgrade', count: 4 },
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'thermal:fluid_reservoir' } },
                { item: { item: 'thermal:satchel' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}inventory_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:standby_upgrade', count: 1 },
            pedestalItems: [
                { item: { tag: 'comforts:sleeping_bags' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}standby_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:charging_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:charging_module' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}charging_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:stomp_upgrade', count: 1 },
            pedestalItems: [
                { item: { tag: 'forge:storage_blocks/lead' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}stomp_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:flippers_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'thermal:diving_boots' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}flippers_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:scuba_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'thermal:diving_helmet' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}scuba_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:coordinate_tracker_upgrade', count: 1 },
            pedestalItems: [
                { item: { item: 'ars_nouveau:ritual_scrying' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } }
            ],
            reagent: [{ item: 'pneumaticcraft:upgrade_matrix' }],
            sourceCost: 0,
            id: `${id_prefix}coordinate_tracker_upgrade`
        },
        {
            output: { item: 'pneumaticcraft:pneumatic_helmet' },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:module_expansion_card' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } }
            ],
            reagent: [
                { item: 'pneumaticcraft:compressed_iron_helmet' },
                { item: 'minecraft:diamond_helmet' },
                { item: 'naturesaura:sky_helmet' },
                { item: 'blue_skies:charoite_helmet' },
                { item: 'twilightforest:knightmetal_helmet' },
                { item: 'twilightforest:steeleaf_helmet' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_helmet`
        },
        {
            output: { item: 'pneumaticcraft:pneumatic_chestplate' },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:module_expansion_card' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } }
            ],
            reagent: [
                { item: 'pneumaticcraft:compressed_iron_chestplate' },
                { item: 'minecraft:diamond_chestplate' },
                { item: 'naturesaura:sky_chest' },
                { item: 'blue_skies:charoite_chestplate' },
                { item: 'twilightforest:knightmetal_chestplate' },
                { item: 'twilightforest:steeleaf_chestplate' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_chestplate`
        },
        {
            output: { item: 'pneumaticcraft:pneumatic_leggings' },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:module_expansion_card' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } }
            ],
            reagent: [
                { item: 'pneumaticcraft:compressed_iron_leggings' },
                { item: 'minecraft:diamond_leggings' },
                { item: 'naturesaura:sky_pants' },
                { item: 'blue_skies:charoite_leggings' },
                { item: 'twilightforest:knightmetal_leggings' },
                { item: 'twilightforest:steeleaf_leggings' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_leggings`
        },
        {
            output: { item: 'pneumaticcraft:pneumatic_boots' },
            pedestalItems: [
                { item: { item: 'pneumaticcraft:module_expansion_card' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } },
                { item: { item: 'pneumaticcraft:air_canister' } },
                { item: { tag: 'forge:ingots/compressed_iron' } }
            ],
            reagent: [
                { item: 'pneumaticcraft:compressed_iron_boots' },
                { item: 'minecraft:diamond_boots' },
                { item: 'naturesaura:sky_shoes' },
                { item: 'blue_skies:charoite_boots' },
                { item: 'twilightforest:knightmetal_boots' },
                { item: 'twilightforest:steeleaf_boots' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_boots`
        },
        {
            output: { item: 'ars_nouveau:thread_gliding' },
            pedestalItems: [
                { item: { item: 'immersiveengineering:glider' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } }
            ],
            reagent: [{ item: 'ars_nouveau:blank_thread' }],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:thread_gliding`
        }
    ];

    const gunparts = ['barrel', 'hammer', 'drum'];

    gunparts.forEach((gunpart) => {
        recipes.push(
            {
                output: {
                    item: `immersiveengineering:gunpart_${gunpart}`,
                    nbt: '{generatePerks:1b,perks:{luck:0.50d}}'
                },
                pedestalItems: [
                    { item: { item: 'ars_nouveau:earth_essence' } },
                    { item: { item: 'ars_nouveau:earth_essence' } },
                    { item: { item: 'ars_nouveau:earth_essence' } },
                    { item: { tag: 'forge:storage_blocks/diamond' } },
                    { item: { tag: 'forge:storage_blocks/lapis' } },
                    { item: { tag: 'forge:storage_blocks/lapis' } },
                    { item: { tag: 'forge:storage_blocks/source' } },
                    { item: { tag: 'forge:storage_blocks/source' } }
                ],
                reagent: [{ item: `immersiveengineering:gunpart_${gunpart}` }],
                sourceCost: 0,
                id: `${id_prefix}${gunpart}_luck`
            },
            {
                output: {
                    item: `immersiveengineering:gunpart_${gunpart}`,
                    nbt: '{generatePerks:1b,perks:{cooldown:0.85d}}'
                },
                pedestalItems: [
                    { item: { item: 'ars_nouveau:air_essence' } },
                    { item: { item: 'ars_nouveau:air_essence' } },
                    { item: { item: 'ars_nouveau:air_essence' } },
                    { item: { tag: 'forge:storage_blocks/diamond' } },
                    { item: { tag: 'forge:storage_blocks/lapis' } },
                    { item: { tag: 'forge:storage_blocks/lapis' } },
                    { item: { tag: 'forge:storage_blocks/source' } },
                    { item: { tag: 'forge:storage_blocks/source' } }
                ],
                reagent: [{ item: `immersiveengineering:gunpart_${gunpart}` }],
                sourceCost: 0,
                id: `${id_prefix}${gunpart}_cooldown`
            },
            {
                output: {
                    item: `immersiveengineering:gunpart_${gunpart}`,
                    nbt: '{generatePerks:1b,perks:{noise:0.50d}}'
                },
                pedestalItems: [
                    { item: { item: 'ars_nouveau:water_essence' } },
                    { item: { item: 'ars_nouveau:water_essence' } },
                    { item: { item: 'ars_nouveau:water_essence' } },
                    { item: { tag: 'forge:wool' } },
                    { item: { tag: 'forge:storage_blocks/lapis' } },
                    { item: { tag: 'forge:storage_blocks/lapis' } },
                    { item: { tag: 'forge:storage_blocks/source' } },
                    { item: { tag: 'forge:storage_blocks/source' } }
                ],
                reagent: [{ item: `immersiveengineering:gunpart_${gunpart}` }],
                sourceCost: 0,
                id: `${id_prefix}${gunpart}_noise`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
