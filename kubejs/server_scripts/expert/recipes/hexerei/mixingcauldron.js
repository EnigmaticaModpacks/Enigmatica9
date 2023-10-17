ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/hexerei/mixingcauldron/';
    const recipes = [
        {
            output: '4x twilightforest:raw_ironwood',
            inputs: [
                '#forge:essences/manipulation',
                'hexerei:belladonna_berries',
                'naturesaura:gold_leaf',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:raw_ores/iron',
                'hexerei:dried_yellow_dock_flowers',
                'twilightforest:liveroot',
                'hexerei:belladonna_berries'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}raw_ironwood`
        },
        {
            output: Item.of('occultism:chalk_white', { Unbreakable: 1 }),
            inputs: [
                'minecraft:calcite',
                'hexerei:dried_sage',
                'hexerei:dried_mugwort_leaves',
                'hexerei:dried_sage',
                'minecraft:calcite',
                'hexerei:dried_sage',
                'hexerei:dried_mugwort_leaves',
                'hexerei:dried_sage'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_white`
        },
        {
            output: Item.of('occultism:chalk_gold', { Unbreakable: 1 }),
            inputs: [
                'minecraft:calcite',
                'naturesaura:gold_powder',
                'naturesaura:gold_leaf',
                'naturesaura:gold_powder',
                'minecraft:calcite',
                'naturesaura:gold_powder',
                'naturesaura:gold_leaf',
                'naturesaura:gold_powder'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_gold`
        },
        {
            output: Item.of('occultism:chalk_purple', { Unbreakable: 1 }),
            inputs: [
                'minecraft:calcite',
                '#forge:dusts/fluix',
                'occultism:spirit_attuned_gem',
                '#forge:dusts/fluix',
                'minecraft:calcite',
                '#forge:dusts/fluix',
                'occultism:spirit_attuned_gem',
                '#forge:dusts/fluix'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_purple`
        },
        {
            output: Item.of('occultism:chalk_red', { Unbreakable: 1 }),
            inputs: [
                'minecraft:calcite',
                '#forge:gems/carminite',
                '#forge:essences/afrit',
                '#forge:gems/carminite',
                'minecraft:calcite',
                '#forge:gems/carminite',
                '#forge:essences/afrit',
                '#forge:gems/carminite'
            ],
            liquid: { fluid: 'hexerei:blood_fluid' },
            liquidOutput: { fluid: 'hexerei:blood_fluid' },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_red`
        },
        {
            output: 'hexerei:blood_sigil',
            inputs: [
                'minecraft:flint',
                'ars_nouveau:sourcestone',
                'minecraft:flint',
                'ars_nouveau:sourcestone',
                'minecraft:flint',
                'ars_nouveau:sourcestone',
                'minecraft:flint',
                'ars_nouveau:sourcestone'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:harming' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:harming' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}blood_sigil`
        },
        {
            output: 'ars_nouveau:magebloom_crop',
            inputs: [
                'immersiveengineering:seed',
                '#forge:gems/source',
                'hexerei:belladonna_berries',
                '#forge:gems/source',
                'hexerei:mandrake_root',
                '#forge:gems/source',
                'hexerei:belladonna_berries',
                '#forge:gems/source'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}magebloom_crop`
        },
        {
            output: 'ars_nouveau:magebloom_crop',
            inputs: [
                'immersiveengineering:seed',
                'ars_nouveau:magebloom',
                'hexerei:belladonna_berries',
                'ars_nouveau:magebloom',
                'hexerei:mandrake_root',
                'ars_nouveau:magebloom',
                'hexerei:belladonna_berries',
                'ars_nouveau:magebloom'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 250,
            heatRequirement: 'heated',
            id: `${id_prefix}magebloom_crop_from_magebloom`
        },
        {
            output: 'superiorshields:ironwood_shield',
            inputs: [
                '#forge:storage_blocks/source',
                '#forge:ingots/ironwood',
                'twilightforest:torchberries',
                '#forge:ingots/ironwood',
                'ars_nouveau:ring_of_potential',
                '#forge:ingots/ironwood',
                'twilightforest:torchberries',
                '#forge:ingots/ironwood'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}ironwood_shield`
        },
        {
            output: 'superiorshields:steeleaf_shield',
            inputs: [
                '#forge:storage_blocks/source',
                '#forge:ingots/steeleaf',
                'twilightforest:firefly',
                '#forge:ingots/steeleaf',
                'ars_nouveau:ring_of_potential',
                '#forge:ingots/steeleaf',
                'twilightforest:firefly',
                '#forge:ingots/steeleaf'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}steeleaf_shield`
        },
        {
            output: 'superiorshields:knightmetal_shield',
            inputs: [
                '#forge:storage_blocks/source',
                '#forge:ingots/knightmetal',
                'twilightforest:knightmetal_ring',
                '#forge:ingots/knightmetal',
                'ars_nouveau:ring_of_potential',
                '#forge:ingots/knightmetal',
                'twilightforest:knightmetal_ring',
                '#forge:ingots/knightmetal'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}knightmetal_shield`
        },
        {
            output: 'tiab:time_in_a_bottle',
            inputs: [
                'naturesaura:calling_spirit',
                'naturesaura:calling_spirit',
                '#forge:essences/water',
                '#forge:essences/fire',
                '#forge:essences/manipulation',
                '#forge:essences/earth',
                '#forge:essences/air',
                'naturesaura:calling_spirit'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_swiftness' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_swiftness' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: 'tiab:time_in_a_bottle'
        },
        {
            output: '4x twilightforest:fiery_ingot',
            inputs: [
                '#forge:essences/fire',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:dusts/constantan',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:storage_blocks/source',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:dusts/constantan',
                'hexerei:dried_yellow_dock_flowers'
            ],
            liquid: { fluid: 'minecraft:lava' },
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 1000,
            id: `${id_prefix}fiery_ingot`
        },
        {
            output: 'naturesaura:loot_finder',
            inputs: [
                '#forge:gems/emerald',
                '#forge:nuggets/gold',
                'hexerei:dried_sage',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'hexerei:dried_sage',
                '#forge:nuggets/gold'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}loot_finder`
        },
        {
            output: 'naturesaura:light_staff',
            inputs: [
                'twilightforest:torchberries',
                '#forge:nuggets/gold',
                'hexerei:dried_yellow_dock_flowers',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:nuggets/gold'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}light_staff`
        },
        {
            output: 'naturesaura:cave_finder',
            inputs: [
                'twilightforest:liveroot',
                '#forge:nuggets/gold',
                'hexerei:dried_belladonna_flowers',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'naturesaura:ancient_planks',
                'hexerei:dried_belladonna_flowers',
                '#forge:nuggets/gold'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}cave_finder`
        },
        {
            output: 'naturesaura:pet_reviver',
            inputs: [
                '#forge:string',
                'hexerei:dried_yellow_dock_leaves',
                'twilightforest:torchberries',
                'hexerei:dried_mugwort_flowers',
                '#forge:plates/gold',
                'hexerei:dried_yellow_dock_flowers',
                'twilightforest:torchberries',
                'hexerei:dried_mugwort_leaves'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}pet_reviver`
        },
        {
            output: 'naturesaura:shockwave_creator',
            inputs: [
                '#forge:string',
                'hexerei:dried_mandrake_flowers',
                '#forge:plates/lead',
                'hexerei:belladonna_berries',
                '#forge:essences/earth',
                'hexerei:belladonna_berries',
                '#forge:plates/lead',
                'hexerei:dried_mandrake_flowers'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}shockwave_creator`
        },
        {
            output: 'naturesaura:death_ring',
            inputs: [
                'ars_nouveau:ring_of_potential',
                'hexerei:belladonna_berries',
                '#forge:nuggets/electrum',
                'hexerei:mandrake_root',
                '#forge:essences/anima',
                'hexerei:mandrake_root',
                '#forge:nuggets/electrum',
                'hexerei:belladonna_berries'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            fluidLevelsConsumed: 100,
            heatRequirement: 'heated',
            id: `${id_prefix}death_ring`
        },
        {
            output: 'hexerei:crow_ankh_amulet',
            inputs: [
                '#forge:string',
                'hexerei:belladonna_berries',
                '#forge:nuggets/electrum',
                'hexerei:mandrake_root',
                '#forge:essences/anima',
                'hexerei:mandrake_root',
                '#forge:nuggets/electrum',
                'hexerei:belladonna_berries'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            fluidLevelsConsumed: 100,
            heatRequirement: 'heated',
            id: 'hexerei:crow_ankh_amulet_from_mixing_cauldron'
        },
        {
            output: 'occultism:familiar_ring',
            inputs: [
                'occultism:soul_gem',
                'hexerei:dried_mandrake_flowers',
                '#forge:nuggets/electrum',
                'hexerei:dried_sage',
                'ars_nouveau:ring_of_potential',
                'hexerei:dried_sage',
                '#forge:nuggets/electrum',
                'hexerei:dried_mandrake_flowers'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}familiar_ring`
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_4',
            inputs: [
                'pneumaticcraft:jet_boots_upgrade_3',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_nouveau:glyph_wind_shear',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_elemental:air_focus',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_nouveau:glyph_wind_shear',
                'pneumaticcraft:reinforced_pressure_tube'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:slow_falling' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:slow_falling' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}jet_boots_upgrade_4`
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_5',
            inputs: [
                'pneumaticcraft:jet_boots_upgrade_4',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_nouveau:glyph_glide',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_elemental:air_focus',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_nouveau:glyph_glide',
                'pneumaticcraft:advanced_pressure_tube'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_slow_falling' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_slow_falling' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}jet_boots_upgrade_5`
        },
        {
            output: 'ars_nouveau:blank_thread',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                '#forge:dusts/moon_dust',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                '#forge:dusts/moon_dust',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' }
            },
            fluidLevelsConsumed: 200,
            heatRequirement: 'heated',
            id: `${id_prefix}blank_thread`
        },
        {
            output: 'pneumaticcraft:jumping_upgrade_2',
            inputs: [
                'pneumaticcraft:upgrade_matrix',
                'pneumaticcraft:pressure_tube',
                'ars_nouveau:glyph_leap',
                'pneumaticcraft:pressure_tube',
                'ars_nouveau:glyph_underfoot',
                'pneumaticcraft:pressure_tube',
                'ars_nouveau:glyph_leap',
                'pneumaticcraft:pressure_tube'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}jumping_upgrade_2`
        },
        {
            output: 'pneumaticcraft:jumping_upgrade_3',
            inputs: [
                'pneumaticcraft:jumping_upgrade_2',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_nouveau:glyph_amplify',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_elemental:air_focus',
                'pneumaticcraft:reinforced_pressure_tube',
                'ars_nouveau:glyph_amplify',
                'pneumaticcraft:reinforced_pressure_tube'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_leaping' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_leaping' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}jumping_upgrade_3`
        },
        {
            output: 'pneumaticcraft:jumping_upgrade_4',
            inputs: [
                'pneumaticcraft:jumping_upgrade_3',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_nouveau:glyph_amplify',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_elemental:air_focus',
                'pneumaticcraft:advanced_pressure_tube',
                'ars_nouveau:glyph_amplify',
                'pneumaticcraft:advanced_pressure_tube'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_leaping' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_leaping' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}jumping_upgrade_4`
        },
        {
            output: 'pneumaticcraft:night_vision_upgrade',
            inputs: [
                'pneumaticcraft:upgrade_matrix',
                'occultism:spirit_attuned_gem',
                'ars_nouveau:glyph_light',
                'occultism:spirit_attuned_gem',
                'ars_nouveau:glyph_self',
                'occultism:spirit_attuned_gem',
                'ars_nouveau:glyph_light',
                'occultism:spirit_attuned_gem'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_night_vision' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:long_night_vision' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}night_vision_upgrade`
        },
        {
            output: 'pneumaticcraft:armor_upgrade',
            inputs: [
                'pneumaticcraft:upgrade_matrix',
                '#forge:essences/abjuration',
                '#forge:gems/infused_diamond',
                '#forge:essences/abjuration',
                'ars_nouveau:glyph_self',
                '#forge:essences/abjuration',
                '#forge:gems/infused_diamond',
                '#forge:essences/abjuration'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:resistance' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:resistance' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}armor_upgrade`
        },
        {
            output: 'pneumaticcraft:gilded_upgrade',
            inputs: [
                'pneumaticcraft:upgrade_matrix',
                '#forge:essences/abjuration',
                '#forge:plates/gold',
                '#forge:essences/abjuration',
                'ars_nouveau:glyph_self',
                '#forge:essences/abjuration',
                '#forge:plates/gold',
                '#forge:essences/abjuration'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}gilded_upgrade`
        },
        {
            output: 'pneumaticcraft:ender_visor_upgrade',
            inputs: [
                'pneumaticcraft:upgrade_matrix',
                '#forge:essences/abjuration',
                'minecraft:carved_pumpkin',
                '#forge:essences/abjuration',
                'ars_nouveau:glyph_self',
                '#forge:essences/abjuration',
                'minecraft:carved_pumpkin',
                '#forge:essences/abjuration'
            ],
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_elemental:enderference_potion_long' }
            },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_elemental:enderference_potion_long' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}ender_visor_upgrade`
        },
        {
            output: 'pneumaticcraft:elytra_upgrade',
            inputs: [
                'pneumaticcraft:upgrade_matrix',
                'hexerei:infused_fabric',
                'ars_nouveau:glyph_glide',
                'hexerei:infused_fabric',
                'ars_nouveau:glyph_self',
                'hexerei:infused_fabric',
                'ars_nouveau:glyph_glide',
                'hexerei:infused_fabric'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}elytra_upgrade`
        },
        {
            output: 'ars_nouveau:potion_flask',
            inputs: [
                '#forge:essences/abjuration',
                '#forge:nuggets/electrum',
                '#forge:gems/source',
                '#forge:nuggets/electrum',
                'thermal:jar',
                '#forge:nuggets/electrum',
                '#forge:gems/source',
                '#forge:nuggets/electrum'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}potion_flask`
        },
        {
            output: 'ars_nouveau:potion_melder',
            inputs: [
                'minecraft:cauldron',
                '#forge:nuggets/electrum',
                '#forge:essences/abjuration',
                '#forge:nuggets/electrum',
                '#forge:storage_blocks/source',
                '#forge:nuggets/electrum',
                '#forge:essences/abjuration',
                '#forge:nuggets/electrum'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}potion_melder`
        },
        {
            output: '4x hexerei:infused_fabric',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                '#forge:fabrics/ersatz_leather',
                'ars_nouveau:magebloom_fiber',
                '#forge:fabrics/ersatz_leather',
                'ars_nouveau:magebloom_fiber',
                '#forge:fabrics/ersatz_leather',
                'ars_nouveau:magebloom_fiber',
                '#forge:fabrics/ersatz_leather'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 333,
            id: `hexerei:infused_fabric_from_mixing_cauldron`
        },
        {
            output: '4x kubejs:bright_arcanite_crystal',
            inputs: [
                'kubejs:dim_arcanite_crystal',
                '#forge:dusts/dimensional',
                '#forge:dusts/dimensional',
                '#forge:dusts/dimensional',
                'kubejs:dim_arcanite_crystal',
                '#forge:dusts/dimensional',
                '#forge:dusts/dimensional',
                '#forge:dusts/dimensional'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'ars_elemental:shock_potion' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_elemental:shock_potion' }
            },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}bright_arcanite_crystal`
        },
        {
            output: '4x kubejs:iridescent_arcanite_crystal',
            inputs: [
                'kubejs:bright_arcanite_crystal',
                '#forge:dusts/sylvanite',
                '#forge:dusts/sylvanite',
                '#forge:dusts/sylvanite',
                'kubejs:bright_arcanite_crystal',
                '#forge:dusts/sylvanite',
                '#forge:dusts/sylvanite',
                '#forge:dusts/sylvanite'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'ars_elemental:shock_potion' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_elemental:shock_potion' }
            },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}iridescent_arcanite_crystal`
        },
        {
            output: 'hexerei:replacer_satchel',
            inputs: [
                'hexerei:medium_satchel',
                'hexerei:dried_mugwort_flowers',
                '#forge:essences/manipulation',
                'hexerei:dried_belladonna_flowers',
                'hexerei:broom_brush',
                'hexerei:dried_mandrake_flowers',
                '#forge:essences/manipulation',
                'hexerei:dried_yellow_dock_flowers'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:thick' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:thick' } },
            fluidLevelsConsumed: 1000,
            id: `hexerei:replacer_satchel_from_mixing_cauldron`
        },
        {
            output: 'hexerei:wet_broom_brush',
            inputs: [
                'hexerei:mandrake_root',
                'minecraft:wheat',
                'hexerei:mugwort_leaves',
                'minecraft:wheat',
                'hexerei:mandrake_root',
                'minecraft:wheat',
                'hexerei:yellow_dock_leaves',
                'minecraft:wheat'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            id: `${id_prefix}wet_broom_brush`
        },
        {
            output: 'hexerei:wet_herb_enhanced_broom_brush',
            inputs: [
                ['hexerei:broom_brush', 'hexerei:wet_broom_brush'],
                'hexerei:belladonna_flowers',
                'hexerei:belladonna_berries',
                'hexerei:mandrake_root',
                'hexerei:mandrake_flowers',
                'hexerei:mandrake_root',
                'hexerei:mugwort_flowers',
                'hexerei:yellow_dock_flowers'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            id: `${id_prefix}wet_herb_enhanced_broom_brush`
        },
        {
            output: 'ars_scalaes:wet_magebloom_brush',
            inputs: [
                ['hexerei:herb_enhanced_broom_brush', 'hexerei:wet_herb_enhanced_broom_brush'],
                'ars_nouveau:magebloom',
                'ars_nouveau:magebloom',
                'hexerei:mandrake_root',
                'hexerei:mandrake_flowers',
                'hexerei:mandrake_root',
                'ars_nouveau:magebloom',
                'ars_nouveau:magebloom'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:mana_regen_potion' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:mana_regen_potion' }
            },
            fluidLevelsConsumed: 2000,
            id: `${id_prefix}wet_magebloom_brush`
        },
        {
            output: 'hexerei:wet_moon_dust_brush',
            inputs: [
                ['ars_scalaes:magebloom_brush', 'ars_scalaes:wet_magebloom_brush'],
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                'naturesaura:calling_spirit',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:mana_regen_potion' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:mana_regen_potion' }
            },
            fluidLevelsConsumed: 2000,
            id: `${id_prefix}wet_moon_dust_brush`
        },
        {
            output: '8x hexerei:moon_dust',
            inputs: [
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 250,
            id: `${id_prefix}moon_dust`
        },
        {
            output: 'hexerei:warhammer',
            inputs: [
                'simplytools:golden_hammer',
                '#forge:dusts/moon_dust',
                '#forge:storage_blocks/fiery',
                'hexerei:mahogany_planks',
                'hexerei:mahogany_planks',
                'hexerei:mahogany_planks',
                '#forge:storage_blocks/fiery',
                '#forge:dusts/moon_dust'
            ],
            liquid: { fluid: 'minecraft:lava' },
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 2000,
            id: `${id_prefix}warhammer`
        },
        {
            output: 'hexerei:candle_dipper',
            inputs: [
                '#forge:ingots/tin',
                '#forge:ingots/tin',
                '#forge:ingots/tin',
                '#forge:nuggets/silver',
                '#forge:nuggets/silver',
                '#forge:nuggets/silver',
                '#forge:ingots/tin',
                '#forge:ingots/tin'
            ],
            liquid: { fluid: 'minecraft:lava' },
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 1000,
            id: 'hexerei:candle_dipper_from_mixing_cauldron'
        },
        {
            output: 'hexerei:small_satchel',
            inputs: [
                '#forge:string',
                '#forge:leather',
                '#forge:leather',
                '#forge:leather',
                '#forge:nuggets/silver',
                '#forge:leather',
                '#forge:leather',
                '#forge:leather'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 500,
            heatRequirement: 'heated',
            id: 'hexerei:small_satchel_from_mixing_cauldron'
        },
        {
            output: 'hexerei:medium_satchel',
            inputs: [
                'hexerei:small_satchel',
                '#forge:leather',
                '#forge:leather',
                '#forge:leather',
                '#forge:string',
                '#forge:leather',
                '#forge:leather',
                '#forge:leather'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 500,
            heatRequirement: 'heated',
            id: 'hexerei:medium_satchel_from_mixing_cauldron'
        },
        {
            output: 'hexerei:large_satchel',
            inputs: [
                'hexerei:small_satchel',
                '#forge:string',
                '#forge:leather',
                '#forge:string',
                'hexerei:medium_satchel',
                '#forge:string',
                '#forge:leather',
                '#forge:string'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 500,
            heatRequirement: 'heated',
            id: 'hexerei:large_satchel_from_mixing_cauldron'
        },
        {
            output: 'hexerei:crystal_ball',
            inputs: [
                '#forge:storage_blocks/source',
                'ae2:quartz_vibrant_glass',
                'ae2:quartz_vibrant_glass',
                'ae2:quartz_vibrant_glass',
                'occultism:otherstone_pedestal',
                'ae2:quartz_vibrant_glass',
                'ae2:quartz_vibrant_glass',
                'ae2:quartz_vibrant_glass'
            ],
            liquid: { fluid: 'minecraft:lava' },
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 1000,
            id: `${id_prefix}crystal_ball`
        },
        {
            output: '12x supplementaries:soap',
            inputs: [
                '#forge:tallow',
                '#forge:dusts/ash',
                '#forge:dusts/ash',
                '#forge:dusts/ash',
                '#forge:tallow',
                '#forge:dusts/ash',
                '#forge:dusts/ash',
                '#forge:dusts/ash'
            ],
            liquid: { fluid: 'minecraft:water' },
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}soap`
        },
        {
            output: `6x byg:brimstone`,
            inputs: [
                '#forge:dusts/sulfur',
                'minecraft:netherrack',
                'minecraft:netherrack',
                'minecraft:netherrack',
                '#forge:dusts/sulfur',
                'minecraft:netherrack',
                'minecraft:netherrack',
                'minecraft:netherrack'
            ],
            liquid: { fluid: 'minecraft:lava' },
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 100,
            heatRequirement: 'heated',
            id: `${id_prefix}brimstone`
        },
        {
            output: `4x minecraft:netherrack`,
            inputs: [
                '#forge:cobblestone',
                'create:cinder_flour',
                '#forge:cobblestone',
                'create:cinder_flour',
                '#forge:cobblestone',
                'create:cinder_flour',
                '#forge:cobblestone',
                'create:cinder_flour'
            ],
            liquid: { fluid: 'minecraft:lava' },
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 100,
            heatRequirement: 'heated',
            id: `${id_prefix}netherrack`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
