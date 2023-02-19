ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    const recipes = [
        {
            output: 'ars_nouveau:wixie_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                'twilightforest:torchberries',
                'hexerei:witch_helmet',
                'twilightforest:torchberries'
            ],
            ritual_dummy: 'kubejs:ritual_summon_wixie',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_wixie`
        },
        {
            output: 'ars_nouveau:wixie_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: ['ars_nouveau:wixie_shards'],
            ritual_dummy: 'kubejs:ritual_summon_wixie_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_wixie_from_shards`
        },
        {
            output: 'ars_nouveau:amethyst_golem_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                '#forge:gems/amethyst',
                '#forge:gems/carminite',
                '#forge:gems/amethyst'
            ],
            ritual_dummy: 'kubejs:ritual_summon_amethyst_golem',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_amethyst_golem`
        },
        {
            output: 'ars_nouveau:starbuncle_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                '#forge:raw_materials/gold',
                'naturesaura:gold_leaf'
            ],
            ritual_dummy: 'kubejs:ritual_summon_starbuncle',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_starbuncle`
        },
        {
            output: 'ars_nouveau:starbuncle_charm',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: ['ars_nouveau:starbuncle_shards'],
            ritual_dummy: 'kubejs:ritual_summon_starbuncle_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_starbuncle_from_shards`
        },
        {
            output: Item.of(
                'hexerei:willow_broom',
                '{Inventory:{Items:[{Count:1b,Slot:0,id:"hexerei:gold_rings"},{Count:1b,Slot:1,id:"hexerei:small_satchel"},{Count:1b,Slot:2,id:"hexerei:broom_brush",tag:{Damage:0}}],Size:30}}'
            ),
            activation_item: 'hexerei:blood_bottle',
            inputs: [
                'hexerei:gold_rings',
                'hexerei:broom_brush',
                'ars_nouveau:air_essence',
                'hexerei:small_satchel',
                'hexerei:willow_log',
                'hexerei:willow_log'
            ],
            ritual_dummy: 'kubejs:ritual_craft_willow_broom',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_sacrifice: {
                tag: 'enigmatica:ravens',
                display_name: 'ritual.occultism.sacrifice.ravens'
            },
            duration: 10,
            id: `${id_prefix}ritual_craft_willow_broom`
        },
        {
            // Water Breathing
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#minecraft:fishes',
                '#minecraft:fishes',
                '#minecraft:fishes',
                '#minecraft:fishes'
            ],
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:cthulhu_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_cthulhu',
            duration: 10,
            id: `occultism:ritual/familiar_cthulhu`
        },
        {
            // Jump Boost
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'minecraft:apple',
                'minecraft:apple',
                'minecraft:apple',
                'minecraft:apple'
            ],
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:deer_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_deer',
            duration: 10,
            id: `occultism:ritual/familiar_deer`
        },
        {
            // Fire Resistance, Attacks Enemies
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'ars_nouveau:fire_essence',
                'ars_nouveau:fire_essence',
                'ars_nouveau:fire_essence',
                'ars_nouveau:fire_essence'
            ],
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:devil_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_devil',
            duration: 10,
            id: `occultism:ritual/familiar_devil`
        },
        {
            // Increases XP gains
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:storage_blocks/diamond',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/emerald',
                'ars_nouveau:fire_essence'
            ],
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:dragon_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_dragon',
            duration: 10,
            id: `occultism:ritual/familiar_dragon`
        },
        {
            // Prevents other Familiars from dying and heals the Player
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:fairy_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_fairy',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                'ars_nouveau:fire_essence',
                'ars_nouveau:water_essence',
                'ars_nouveau:earth_essence',
                'ars_nouveau:air_essence'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_fairy`
        },
        {
            // Item Magnet
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:greedy_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_greedy',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:ingots/copper',
                '#forge:ingots/copper',
                'ars_nouveau:earth_essence',
                'ars_nouveau:earth_essence'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_greedy`
        },
        {
            // Prevents Player Death, losing a limb for each death prevented.
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:guardian_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_guardian',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:earth_essence',
                'ars_nouveau:earth_essence'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_guardian`
        },
        {
            // Grants damage buffs against recently killed mobs
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:headless_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_headless',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:crops/wheat',
                'minecraft:hay_block',
                '#forge:rods/wooden',
                'minecraft:carved_pumpkin'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_headless`
        },
        {
            // Fights for the Player, grants Dodge effect
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:mummy_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_mummy',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'immersiveengineering:hemp_fabric',
                'immersiveengineering:hemp_fabric',
                'immersiveengineering:hemp_fabric',
                'immersiveengineering:hemp_fabric'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_mummy`
        },
        {
            // Multi-Jump, Jump Boost, Slow Fall
            output: 'occultism:jei_dummy/none',
            ritual_type: 'occultism:summon_tamed',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:otherworld_bird',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_otherworld_bird',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:feathers',
                '#forge:feathers',
                'ars_nouveau:air_essence',
                'ars_nouveau:air_essence'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_otherworld_bird`
        },
        {
            // Just a pet
            output: 'occultism:jei_dummy/none',
            ritual_type: 'occultism:summon_with_chance_of_chicken_tamed',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'minecraft:parrot',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_parrot',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:dyes/green',
                '#forge:dyes/yellow',
                '#forge:dyes/red',
                '#forge:dyes/blue',
                '#forge:feathers'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_parrot`
        },
        {
            // Night Vision
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:bat_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_bat',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot'
            ],
            duration: 10,
            id: `occultism:ritual/bat_familiar`
        },
        {
            // Increases wood breaking speed
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:beaver_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_beaver',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#minecraft:logs',
                '#minecraft:logs',
                '#minecraft:logs',
                '#minecraft:logs'
            ],
            duration: 10,
            id: `occultism:ritual/beaver_familiar`
        },
        {
            // Attacks enemies and makes them glow
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:beholder_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_beholder',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'minecraft:spider_eye',
                'minecraft:spider_eye',
                'minecraft:spider_eye',
                'minecraft:spider_eye'
            ],
            duration: 10,
            id: `occultism:ritual/beholder_familiar`
        },
        {
            // Repairs Equipmet and upgrades other familiars.
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:blacksmith_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_blacksmith',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'minecraft:anvil',
                'simplytools:iron_hammer',
                'minecraft:blast_furnace',
                'ars_nouveau:fire_essence'
            ],
            duration: 10,
            id: `occultism:ritual/blacksmith_familiar`
        },
        {
            // Rideable Mount
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:chimera_familiar',
            ritual_type: 'occultism:familiar',
            ritual_dummy: 'occultism:ritual_dummy/familiar_chimera',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:leather',
                '#forge:feathers',
                '#minecraft:wool',
                '#forge:bones'
            ],
            duration: 10,
            id: `occultism:ritual/chimera_familiar`
        },
        {
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'hexerei:seed_mixture',
                'hexerei:seed_mixture',
                'hexerei:seed_mixture',
                'hexerei:seed_mixture'
            ],
            entity_to_summon: 'hexerei:crow',
            ritual_dummy: 'kubejs:ritual_summon_crow',
            ritual_type: 'occultism:summon_tamed',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_crow`
        },
        {
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'ars_nouveau:fire_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:fire_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:fire_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:fire_essence'
            ],
            entity_to_summon: 'minecraft:blaze',
            entity_nbt: '{NoAI:1b,PersistenceRequired:1b,Corrupted:1b,DeathLootTable:"minecraft:entities/bat"}',
            ritual_dummy: 'kubejs:ritual_summon_bound_blaze',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_summon_bound_blaze`
        },
        {
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'ars_nouveau:air_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:air_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:air_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:air_essence'
            ],
            entity_to_summon: 'thermal:blitz',
            entity_nbt: '{NoAI:1b,PersistenceRequired:1b,Corrupted:1b,DeathLootTable:"minecraft:entities/bat"}',
            ritual_dummy: 'kubejs:ritual_summon_bound_blitz',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_summon_bound_blitz`
        },
        {
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'ars_nouveau:earth_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:earth_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:earth_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:earth_essence'
            ],
            entity_to_summon: 'thermal:basalz',
            entity_nbt: '{NoAI:1b,PersistenceRequired:1b,Corrupted:1b,DeathLootTable:"minecraft:entities/bat"}',
            ritual_dummy: 'kubejs:ritual_summon_bound_basalz',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_summon_bound_basalz`
        },
        {
            output: 'occultism:jei_dummy/none',
            activation_item: 'ars_nouveau:conjuration_essence',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'ars_nouveau:water_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:water_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:water_essence',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:water_essence'
            ],
            entity_to_summon: 'thermal:blizz',
            entity_nbt: '{NoAI:1b,PersistenceRequired:1b,Corrupted:1b,DeathLootTable:"minecraft:entities/bat"}',
            ritual_dummy: 'kubejs:ritual_summon_bound_blizz',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_summon_bound_blizz`
        },
        {
            output: 'create:blaze_burner',
            activation_item: 'minecraft:nether_bricks',
            inputs: [
                '#forge:ingots/fiery',
                '#forge:ingots/fiery',
                '#forge:ingots/fiery',
                '#forge:ingots/fiery',
                'pneumaticcraft:compressed_brick_tile',
                'pneumaticcraft:compressed_brick_tile',
                'pneumaticcraft:compressed_brick_tile',
                'pneumaticcraft:compressed_brick_tile'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/fire',
                display_name: 'ritual.occultism.sacrifice.fire_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_blaze_burner',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_blaze_burner`
        },
        {
            output: '4x pneumaticcraft:module_expansion_card',
            activation_item: 'immersiveengineering:coil_mv',
            inputs: [
                'pneumaticcraft:compressed_stone_slab',
                'pneumaticcraft:compressed_stone_slab',
                'pneumaticcraft:compressed_stone_slab',
                'pneumaticcraft:compressed_stone_slab',
                '#forge:gems/certus_quartz',
                '#forge:gems/certus_quartz',
                '#forge:gems/certus_quartz',
                '#forge:gems/certus_quartz'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/air',
                display_name: 'ritual.occultism.sacrifice.air_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_module_expansion_card',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_module_expansion_card`
        },

        /*
        Custom Summons
        Custom Summon Rituals make use of a dummy item which, 
        when spawned in world is immediately removed, triggering an actual summon. 
        Define the summon in constants/custom_spawns.js

        These should always use the 'occultism:craft' ritual_type
        */
        {
            output: 'kubejs:summon_death_tome',
            activation_item: '#forge:bookshelves',
            inputs: [
                'ars_elemental:anima_essence',
                'ars_nouveau:air_essence',
                'ars_elemental:anima_essence',
                'ars_nouveau:air_essence'
            ],
            ritual_dummy: 'kubejs:ritual_summon_death_tome',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_evil',
            duration: 10,
            id: `${id_prefix}ritual_summon_death_tome`
        },
        {
            output: Item.of('kubejs:aura_leaf', { aura_amount: 500000, aura_max: 1250000 }),
            activation_item: '#twilightforest:trophies',
            inputs: [
                '#forge:ingots/ironwood',
                '#forge:ingots/ironwood',
                '#forge:ingots/ironwood',
                '#forge:ingots/ironwood'
            ],
            ritual_dummy: 'kubejs:aura_leaf',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 180,
            id: `${id_prefix}ritual_aura_generation`
        },
        {
            output: Item.of('kubejs:tree_of_life_1', { aura_amount: 100000, aura_max: 1000000 }),
            activation_item: 'quark:ancient_sapling',
            inputs: [
                'naturesaura:calling_spirit',
                'naturesaura:calling_spirit',
                'naturesaura:calling_spirit',
                'naturesaura:calling_spirit',
                'naturesaura:sky_ingot',
                'ae2:sky_dust',
                'naturesaura:sky_ingot',
                'ae2:sky_dust',
                'ae2:sky_dust',
                'naturesaura:sky_ingot',
                'ae2:sky_dust',
                'naturesaura:sky_ingot'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_1',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_1`
        },
        {
            output: 'kubejs:teleport_everdawn',
            activation_item: '#forge:gems/moonstone',
            inputs: [
                'naturesaura:sky_ingot',
                'naturesaura:gold_leaf',
                'ars_nouveau:air_essence',
                'naturesaura:gold_leaf',

                'ae2:sky_dust',
                'ae2:sky_dust',
                'ae2:sky_dust',
                'ae2:sky_dust',

                'ae2:sky_dust',
                'ae2:sky_dust',
                'ae2:sky_dust',
                'ae2:sky_dust'
            ],
            ritual_dummy: 'kubejs:ritual_teleport_everdawn',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_1',
            duration: 10,
            id: `${id_prefix}ritual_teleport_everdawn`
        },
        {
            output: Item.of('kubejs:tree_of_life_2', { aura_amount: 200000, aura_max: 1000000 }),
            activation_item: 'twilightforest:rainbow_oak_sapling',
            inputs: [
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_2',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_1',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_2`
        },
        {
            output: Item.of('kubejs:tree_of_life_3', { aura_amount: 500000, aura_max: 1500000 }),
            activation_item: 'twilightforest:rainbow_oak_sapling',
            inputs: [
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_3',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_2',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_3`
        },
        {
            output: Item.of('kubejs:tree_of_life_4', { aura_amount: 4000000, aura_max: 4000000 }),
            activation_item: 'twilightforest:rainbow_oak_sapling',
            inputs: [
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/iesnium'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_4',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_3',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_4`
        }
    ];

    /*
        Ingredient Display in JEI
            inputs: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
