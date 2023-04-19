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
            output: 'occultism:chalk_white',
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
            output: 'occultism:chalk_gold',
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
            output: 'occultism:chalk_purple',
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
            output: 'occultism:chalk_red',
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
                'blue_skies:soul_fragment',
                'blue_skies:soul_fragment',
                '#forge:essences/water',
                '#forge:essences/fire',
                '#forge:essences/manipulation',
                '#forge:essences/earth',
                '#forge:essences/air',
                'blue_skies:soul_fragment'
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
            output: '9x twilightforest:fiery_ingot',
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
            heatRequirement: 'heated',
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
                '#forge:gems/emerald',
                'hexerei:belladonna_berries',
                '#forge:nuggets/electrum',
                'hexerei:mandrake_root',
                'ars_nouveau:ring_of_potential',
                'hexerei:mandrake_root',
                '#forge:nuggets/electrum',
                'hexerei:belladonna_berries'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}death_ring`
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
                'ars_elemental:lesser_air_focus',
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
                'naturesaura:gold_leaf',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'naturesaura:gold_leaf',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' } },
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:long_knowledge' }
            },
            fluidLevelsConsumed: 2000,
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
                'ars_elemental:lesser_air_focus',
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
