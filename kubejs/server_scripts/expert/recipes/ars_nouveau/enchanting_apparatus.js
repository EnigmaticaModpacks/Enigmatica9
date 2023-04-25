ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: '8x create:mechanical_crafter',
            inputs: [
                'create:brass_casing',
                'create:brass_casing',
                'create:brass_casing',
                'create:brass_casing',
                'create:brass_casing',
                'create:brass_casing',
                'create:brass_casing',
                'create:brass_casing'
            ],
            reagents: ['minecraft:crafting_table'],
            sourceCost: 500,
            id: `${id_prefix}mechanical_crafter`
        },
        {
            output: '2x mekanism:teleportation_core',
            inputs: ['#forge:essences/conjuration', 'quark:rainbow_rune', 'quark:rainbow_rune'],
            reagents: ['occultism:spirit_attuned_gem'],
            sourceCost: 500,
            id: `${id_prefix}teleportation_core`
        },
        {
            output: 'occultism:storage_controller_base',
            inputs: ['#forge:ingots/energized_steel', '#forge:ingots/energized_steel', '#forge:ingots/energized_steel'],
            reagents: ['occultism:otherstone_pedestal'],
            sourceCost: 2000,
            id: `${id_prefix}storage_controller_base`
        },
        {
            output: Item.of('occultism:dimensional_matrix', '{spiritName:""}'),
            inputs: ['rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard'],
            reagents: ['mekanism:teleportation_core'],
            sourceCost: 2000,
            id: `${id_prefix}dimensional_matrix`
        },
        {
            output: 'occultism:stable_wormhole',
            inputs: ['rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard'],
            reagents: ['occultism:wormhole_frame'],
            sourceCost: 2000,
            id: `${id_prefix}stable_wormhole`
        },
        {
            output: 'powah:binding_card_dim',
            inputs: ['rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard'],
            reagents: ['powah:binding_card'],
            sourceCost: 2000,
            id: `${id_prefix}binding_card_dim`
        },
        {
            output: '2x ae2:crafting_unit',
            inputs: [
                'pneumaticcraft:logistics_core',
                'naturesaura:infused_stone',
                'powah:capacitor_niotic',
                'naturesaura:infused_stone',
                'pneumaticcraft:logistics_core',
                'naturesaura:infused_stone',
                'powah:capacitor_niotic',
                'naturesaura:infused_stone'
            ],
            reagents: ['ars_nouveau:wixie_charm'],
            sourceCost: 5000,
            id: `${id_prefix}crafting_unit`
        },
        {
            output: 'naturesaura:animal_spawner',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:golden_carrot',
                'minecraft:hay_block',
                'minecraft:golden_apple'
            ],
            reagents: ['spirit:broken_spawner'],
            sourceCost: 9000,
            id: `${id_prefix}animal_spawner`
        },
        {
            output: 'pneumaticcraft:drill_bit_diamond',
            inputs: ['#forge:ingots/skies', 'ars_nouveau:glyph_aoe'],
            reagents: ['pneumaticcraft:drill_bit_compressed_iron'],
            sourceCost: 3000,
            id: `${id_prefix}drill_bit_diamond`
        },
        {
            output: 'create:brass_hand',
            inputs: ['#forge:essences/manipulation', '#forge:leather', '#forge:leather', '#forge:leather'],
            reagents: ['#forge:ingots/energized_steel'],
            sourceCost: 1000,
            id: `${id_prefix}brass_hand`
        },
        {
            output: 'immersiveengineering:mold_plate',
            inputs: ['#forge:plates', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_plate`
        },
        {
            output: 'immersiveengineering:mold_wire',
            inputs: ['#forge:wires', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_wire`
        },
        {
            output: 'immersiveengineering:mold_rod',
            inputs: ['#forge:rods/all_metal', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_rod`
        },
        {
            output: 'immersiveengineering:mold_gear',
            inputs: ['#forge:gears', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:compressed_stone_slab'],
            sourceCost: 1000,
            id: `${id_prefix}mold_gear`
        },
        {
            output: 'pneumaticcraft:volume_upgrade',
            inputs: ['pneumaticcraft:pressure_chamber_wall', '#forge:essences/air', '#forge:essences/air'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}volume_upgrade`
        },
        {
            output: 'pneumaticcraft:range_upgrade',
            inputs: ['#forge:gems/source', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}range_upgrade`
        },
        {
            output: 'pneumaticcraft:security_upgrade',
            inputs: ['pneumaticcraft:pressure_gauge', '#forge:essences/abjuration', '#forge:essences/abjuration'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}security_upgrade`
        },
        {
            output: 'pneumaticcraft:speed_upgrade',
            inputs: ['#forge:gems/fluix', '#forge:essences/water', '#forge:essences/water'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}speed_upgrade`
        },
        {
            output: 'pneumaticcraft:item_life_upgrade',
            inputs: ['ars_nouveau:mendosteen_pod', '#forge:essences/abjuration', '#forge:essences/abjuration'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}item_life_upgrade`
        },
        {
            output: 'pneumaticcraft:entity_tracker_upgrade',
            inputs: ['ae2:charged_certus_quartz_crystal', '#forge:essences/air', '#forge:essences/air'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}entity_tracker_upgrade`
        },
        {
            output: 'pneumaticcraft:block_tracker_upgrade',
            inputs: ['ae2:charged_certus_quartz_crystal', '#forge:essences/earth', '#forge:essences/earth'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}block_tracker_upgrade`
        },
        {
            output: 'pneumaticcraft:dispenser_upgrade',
            inputs: ['ae2:certus_quartz_crystal', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}dispenser_upgrade`
        },
        {
            output: 'pneumaticcraft:magnet_upgrade',
            inputs: ['minecraft:lodestone', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}magnet_upgrade`
        },
        {
            output: 'pneumaticcraft:minigun_upgrade',
            inputs: ['pneumaticcraft:minigun', '#forge:essences/fire', '#forge:essences/fire'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}minigun_upgrade`
        },
        {
            output: '4x pneumaticcraft:inventory_upgrade',
            inputs: ['#forge:essences/abjuration', 'thermal:fluid_reservoir', 'thermal:satchel'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}inventory_upgrade`
        },
        {
            output: 'pneumaticcraft:standby_upgrade',
            inputs: ['#comforts:sleeping_bags', '#forge:essences/abjuration', '#forge:essences/abjuration'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}standby_upgrade`
        },
        {
            output: 'pneumaticcraft:charging_upgrade',
            inputs: ['pneumaticcraft:charging_module', '#forge:essences/air', '#forge:essences/air'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}charging_upgrade`
        },
        {
            output: 'pneumaticcraft:stomp_upgrade',
            inputs: ['#forge:storage_blocks/lead', '#forge:essences/earth', '#forge:essences/earth'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}stomp_upgrade`
        },
        {
            output: 'pneumaticcraft:flippers_upgrade',
            inputs: ['thermal:diving_boots', '#forge:essences/water', '#forge:essences/water'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}flippers_upgrade`
        },
        {
            output: 'pneumaticcraft:scuba_upgrade',
            inputs: ['thermal:diving_helmet', '#forge:essences/water', '#forge:essences/water'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}scuba_upgrade`
        },
        {
            output: 'pneumaticcraft:coordinate_tracker_upgrade',
            inputs: ['ars_nouveau:ritual_scrying', '#forge:essences/manipulation', '#forge:essences/manipulation'],
            reagents: ['pneumaticcraft:upgrade_matrix'],
            sourceCost: 0,
            id: `${id_prefix}coordinate_tracker_upgrade`
        },
        {
            output: 'pneumaticcraft:pneumatic_helmet',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_helmet',
                'minecraft:diamond_helmet',
                'naturesaura:sky_helmet',
                'blue_skies:charoite_helmet',
                'twilightforest:knightmetal_helmet',
                'twilightforest:steeleaf_helmet'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_helmet`
        },
        {
            output: 'pneumaticcraft:pneumatic_chestplate',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_chestplate',
                'minecraft:diamond_chestplate',
                'naturesaura:sky_chest',
                'blue_skies:charoite_chestplate',
                'twilightforest:knightmetal_chestplate',
                'twilightforest:steeleaf_chestplate'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_chestplate`
        },
        {
            output: 'pneumaticcraft:pneumatic_leggings',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_leggings',
                'minecraft:diamond_leggings',
                'naturesaura:sky_pants',
                'blue_skies:charoite_leggings',
                'twilightforest:knightmetal_leggings',
                'twilightforest:steeleaf_leggings'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_leggings`
        },
        {
            output: 'pneumaticcraft:pneumatic_boots',
            inputs: [
                'pneumaticcraft:module_expansion_card',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron',
                'pneumaticcraft:air_canister',
                '#forge:ingots/compressed_iron'
            ],
            reagents: [
                'pneumaticcraft:compressed_iron_boots',
                'minecraft:diamond_boots',
                'naturesaura:sky_shoes',
                'blue_skies:charoite_boots',
                'twilightforest:knightmetal_boots',
                'twilightforest:steeleaf_boots'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `${id_prefix}pneumatic_boots`
        },
        {
            output: 'mininggadgets:mininggadget_simple',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:nuggets/silver',
                'powah:capacitor_niotic',
                '#forge:wooden_grip',
                'ars_nouveau:glyph_break',
                'immersiveengineering:component_electronic',
                'powah:capacitor_niotic',
                '#forge:nuggets/silver'
            ],
            reagents: ['ars_nouveau:wand'],
            sourceCost: 0,
            id: `${id_prefix}mininggadget_simple`
        },
        {
            output: 'mininggadgets:mininggadget_fancy',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:nuggets/gold',
                'powah:capacitor_niotic',
                '#forge:wooden_grip',
                'ars_nouveau:glyph_break',
                'immersiveengineering:component_electronic',
                'powah:capacitor_niotic',
                '#forge:nuggets/gold'
            ],
            reagents: ['ars_nouveau:wand'],
            sourceCost: 0,
            id: `${id_prefix}mininggadget_fancy`
        },
        {
            output: 'mininggadgets:mininggadget',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:nuggets/electrum',
                'powah:capacitor_niotic',
                '#forge:wooden_grip',
                'ars_nouveau:glyph_break',
                'immersiveengineering:component_electronic',
                'powah:capacitor_niotic',
                '#forge:nuggets/electrum'
            ],
            reagents: ['ars_nouveau:wand'],
            sourceCost: 0,
            id: `${id_prefix}mininggadget`
        },
        {
            output: 'ars_nouveau:summon_focus',
            inputs: [
                'ars_elemental:mark_of_mastery',
                '#forge:wires/electrum',
                '#forge:wires/electrum',
                'blue_skies:summoning_tome',
                '#forge:wires/electrum',
                '#forge:wires/electrum'
            ],
            reagents: ['#forge:storage_blocks/source'],
            sourceCost: 10000,
            id: 'ars_nouveau:summon_focus'
        },
        {
            output: Item.of('thermal:upgrade_augment_2', '{AugmentData:{BaseMod:4,Type:"Upgrade"}}'),
            inputs: [
                '#forge:ingots/energized_steel',
                '#forge:ingots/energized_steel',
                '#forge:ingots/energized_steel',
                '#forge:gems/infused_diamond',
                '#forge:gems/infused_diamond',
                '#forge:gems/infused_diamond'
            ],
            reagents: ['thermal:upgrade_augment_1'],
            sourceCost: 5000,
            id: `${id_prefix}upgrade_augment_2`
        },
        {
            output: Item.of('thermal:upgrade_augment_3', '{AugmentData:{BaseMod:8,Type:"Upgrade"}}'),
            inputs: [
                'ars_elemental:mark_of_mastery',
                '#forge:gems/spirited',
                '#forge:gems/spirited',
                'pneumaticcraft:printed_circuit_board',
                '#forge:gems/spirited',
                '#forge:gems/spirited'
            ],
            reagents: ['thermal:upgrade_augment_2'],
            sourceCost: 10000,
            id: `${id_prefix}upgrade_augment_3`
        },
        {
            output: 'thermal:dynamo_disenchantment',
            inputs: [
                'immersiveengineering:coil_mv',
                '#forge:gems/source',
                'quark:rainbow_rune',
                'minecraft:lodestone',
                'powah:capacitor_niotic',
                'minecraft:lodestone',
                'quark:rainbow_rune',
                '#forge:gems/source'
            ],
            reagents: ['thermal:energy_cell_frame'],
            sourceCost: 10000,
            id: `${id_prefix}dynamo_disenchantment`
        },
        {
            output: 'ars_elemental:thread_summon',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/conjuration',
                'blue_skies:summoning_tome',
                '#ars_nouveau:wilden_drop',
                '#ars_nouveau:wilden_drop'
            ],
            reagents: ['ars_nouveau:blank_thread'],
            sourceCost: 0,
            id: `ars_elemental:thread_summon`
        },
        {
            output: Item.of(
                'immersiveengineering:revolver',
                '{perks:{cooldown:0.75d,luck:1.0d,noise:0.75d},upgrades:{}}'
            ),
            inputs: [
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                'naturesaura:calling_spirit',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/source',
                '#forge:storage_blocks/source'
            ],
            reagents: ['immersiveengineering:revolver'],
            sourceCost: 2000,
            id: `${id_prefix}revolver_tier_1`
        },
        {
            output: Item.of(
                'immersiveengineering:revolver',
                '{perks:{cooldown:0.5d,luck:2.0d,noise:0.5d},upgrades:{}}'
            ),
            inputs: [
                '#forge:ingots/skies',
                '#forge:ingots/skies',
                '#forge:ingots/skies',
                'kubejs:spirit_of_devotion',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/source',
                '#forge:storage_blocks/source'
            ],
            reagents: ['immersiveengineering:revolver'],
            sourceCost: 5000,
            id: `${id_prefix}revolver_tier_2`
        },
        {
            output: 'ae2:quantum_link',
            inputs: [
                'ae2:quartz_glass',
                'ae2:fluix_pearl',
                'ae2:quartz_glass',
                'ae2:fluix_pearl',
                'ae2:quartz_glass',
                'ae2:fluix_pearl',
                'ae2:quartz_glass',
                'ae2:fluix_pearl'
            ],
            reagents: ['occultism:dimensional_matrix'],
            sourceCost: 10000,
            id: `${id_prefix}quantum_link`
        },
        {
            output: 'mekanism:metallurgic_infuser',
            inputs: [
                '#forge:gems/infused_diamond',
                '#forge:plates/obsidian',
                'ae2:quartz_glass',
                '#forge:plates/obsidian',
                '#forge:gems/infused_diamond',
                '#forge:plates/obsidian',
                'ae2:quartz_glass',
                '#forge:plates/obsidian'
            ],
            reagents: ['ars_nouveau:arcane_core'],
            sourceCost: 10000,
            id: `${id_prefix}metallurgic_infuser`
        },
        {
            output: 'functionalstorage:diamond_upgrade',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond'
            ],
            reagents: ['functionalstorage:gold_upgrade'],
            sourceCost: 1000,
            id: `${id_prefix}diamond_upgrade`
        },
        {
            output: 'sophisticatedstorage:gold_to_diamond_tier_upgrade',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond'
            ],
            reagents: ['sophisticatedstorage:upgrade_base'],
            sourceCost: 1000,
            id: `${id_prefix}gold_to_diamond_tier_upgrade`
        },
        {
            output: 'sophisticatedstorage:stack_upgrade_tier_4',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:repository',
                '#forge:gems/diamond'
            ],
            reagents: ['sophisticatedstorage:stack_upgrade_tier_3'],
            sourceCost: 1000,
            id: `${id_prefix}stack_upgrade_tier_4`
        }
    ];

    const gem_types = [
        { mod: 'minecraft', material: 'diamond', essence: 'abjuration' },
        { mod: 'blue_skies', material: 'pyrope', essence: 'fire' },
        { mod: 'blue_skies', material: 'aquite', essence: 'water' },
        { mod: 'blue_skies', material: 'diopside', essence: 'earth' },
        { mod: 'blue_skies', material: 'charoite', essence: 'air' }
    ];

    const equipment_types = [
        { slot: 'helmet', count: 5 },
        { slot: 'chestplate', count: 8 },
        { slot: 'leggings', count: 7 },
        { slot: 'boots', count: 4 },
        { slot: 'sword', count: 2 },
        { slot: 'pickaxe', count: 3 },
        { slot: 'axe', count: 3 },
        { slot: 'shovel', count: 1 },
        { slot: 'hoe', count: 2 }
    ];

    gem_types.forEach((gem_type) => {
        equipment_types.forEach((equipment_type) => {
            let inputs = [`#forge:essences/${gem_type.essence}`];

            for (let i = 0; i < equipment_type.count; i++) {
                inputs.push(`#forge:gems/${gem_type.material}`);
            }

            recipes.push({
                output: `${gem_type.mod}:${gem_type.material}_${equipment_type.slot}`,
                inputs: inputs,
                reagents: [`minecraft:golden_${equipment_type.slot}`],
                keepNbtOfReagent: true,
                sourceCost: 0,
                id: `${id_prefix}${gem_type.material}_${equipment_type.slot}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        recipe.output = Item.of(recipe.output).toJson();
        recipe.pedestalItems = recipe.inputs.map((input) => ({ item: Ingredient.of(input).toJson() }));
        recipe.reagent = recipe.reagents.map((reagent) => Ingredient.of(reagent).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
