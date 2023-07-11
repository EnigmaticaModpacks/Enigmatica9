ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    const recipes = [
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:foliot',
            spirit_job_type: 'occultism:crush_tier1',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_foliot',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:gems/carminite',
                '#ae2:knife',
                '#forge:gems/carminite',
                'naturesaura:gold_leaf'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_foliot',
            duration: 20,
            id: 'occultism:ritual/summon_foliot_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:djinni',
            spirit_job_type: 'occultism:crush_tier2',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_djinni',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:gems/carminite',
                '#ae2:knife',
                '#forge:gems/carminite',
                'naturesaura:gold_leaf'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_djinni',
            duration: 20,
            id: 'occultism:ritual/summon_djinni_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:afrit',
            spirit_job_type: 'occultism:crush_tier3',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_afrit',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:gems/carminite',
                '#ae2:knife',
                '#forge:gems/carminite',
                'naturesaura:gold_leaf'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_afrit',
            duration: 20,
            id: 'occultism:ritual/summon_afrit_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:marid',
            spirit_job_type: 'occultism:crush_tier4',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_marid',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:gems/carminite',
                '#ae2:knife',
                '#forge:gems/carminite',
                'naturesaura:gold_leaf'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_marid_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_marid',
            duration: 20,
            id: 'occultism:ritual/summon_marid_crusher'
        },
        {
            output: 'ars_nouveau:wixie_charm',
            activation_item: '#forge:essences/conjuration',
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
            activation_item: '#forge:essences/conjuration',
            inputs: ['ars_nouveau:wixie_shards'],
            ritual_dummy: 'kubejs:ritual_summon_wixie_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_wixie_from_shards`
        },
        {
            output: 'ars_nouveau:amethyst_golem_charm',
            activation_item: '#forge:essences/conjuration',
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
            output: '2x ars_nouveau:bookwyrm_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'ars_nouveau:blank_parchment',
                'ars_nouveau:blank_parchment',
                'ars_nouveau:blank_parchment',
                'ars_nouveau:blank_parchment'
            ],
            ritual_dummy: 'kubejs:ritual_summon_bookwyrm',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_bookwyrm`
        },
        {
            output: 'ars_nouveau:starbuncle_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                '#forge:ingots/gold',
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
            activation_item: '#forge:essences/conjuration',
            inputs: ['ars_nouveau:starbuncle_shards'],
            ritual_dummy: 'kubejs:ritual_summon_starbuncle_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_starbuncle_from_shards`
        },
        {
            output: 'ars_nouveau:drygmy_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: ['hexerei:mindful_trance_blend', 'quark:moss_paste', 'naturesaura:loot_finder', 'quark:moss_paste'],
            ritual_dummy: 'kubejs:ritual_summon_drygmy',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_drygmy`
        },
        {
            output: 'ars_nouveau:drygmy_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: ['ars_nouveau:drygmy_shard'],
            ritual_dummy: 'kubejs:ritual_summon_drygmy_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_drygmy_from_shards`
        },
        {
            output: 'ars_nouveau:whirlisprig_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                '#forge:ingots/steeleaf',
                'naturesaura:light_staff',
                '#forge:ingots/steeleaf'
            ],
            ritual_dummy: 'kubejs:ritual_summon_whirlisprig',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_whirlisprig`
        },
        {
            output: 'ars_nouveau:whirlisprig_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: ['ars_nouveau:whirlisprig_shards'],
            ritual_dummy: 'kubejs:ritual_summon_whirlisprig_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_whirlisprig_from_shards`
        },
        {
            output: 'ars_elemental:siren_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: ['hexerei:mindful_trance_blend', 'thermal:aquachow', 'thermal:junk_net', 'thermal:aquachow'],
            ritual_dummy: 'kubejs:ritual_summon_siren',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_siren`
        },
        {
            output: 'ars_elemental:siren_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: ['ars_elemental:siren_shards'],
            ritual_dummy: 'kubejs:ritual_summon_siren_from_shards',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_siren_from_shards`
        },
        {
            output: 'ars_elemental:firenando_charm',
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                'twilightforest:fiery_blood',
                'twilightforest:fiery_sword',
                'twilightforest:fiery_blood'
            ],
            ritual_dummy: 'kubejs:ritual_summon_firenando',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_firenando`
        },
        {
            output: Item.of('hexerei:willow_broom', {
                Inventory: {
                    Items: [
                        { Count: 1, Slot: 0, id: 'hexerei:gold_rings' },
                        { Count: 1, Slot: 1, id: 'hexerei:small_satchel' },
                        { Count: 1, Slot: 2, id: 'hexerei:broom_brush' }
                    ],
                    Size: 30
                },
                display: { Name: '{"translate":"item.hexerei.willow_broom"}' },
                floatMode: 0
            }),
            activation_item: 'hexerei:blood_bottle',
            inputs: [
                'hexerei:mindful_trance_blend',
                'hexerei:small_satchel',
                'hexerei:broom_brush',
                'hexerei:gold_rings',
                'hexerei:dried_yellow_dock_leaves',
                'hexerei:dried_yellow_dock_leaves',
                'hexerei:willow_log',
                'hexerei:willow_log'
            ],
            ritual_dummy: 'kubejs:ritual_craft_willow_broom',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_craft_willow_broom`
        },
        {
            output: Item.of('hexerei:witch_hazel_broom', {
                Inventory: {
                    Items: [
                        { Count: 1, Slot: 0, id: 'hexerei:gold_rings' },
                        { Count: 1, Slot: 1, id: 'hexerei:small_satchel' },
                        { Count: 1, Slot: 2, id: 'hexerei:broom_brush' }
                    ],
                    Size: 30
                },
                display: { Name: '{"translate":"item.hexerei.witch_hazel_broom"}' },
                floatMode: 0
            }),
            activation_item: 'hexerei:blood_bottle',
            inputs: [
                'hexerei:mindful_trance_blend',
                'hexerei:small_satchel',
                'hexerei:broom_brush',
                'hexerei:gold_rings',
                'hexerei:dried_yellow_dock_leaves',
                'hexerei:dried_yellow_dock_leaves',
                'hexerei:witch_hazel_log',
                'hexerei:witch_hazel_log'
            ],
            ritual_dummy: 'kubejs:ritual_craft_witch_hazel_broom',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_craft_witch_hazel_broom`
        },
        {
            output: Item.of('ars_scalaes:archwood_broom', {
                Inventory: {
                    Items: [
                        { Count: 1, Slot: 0, id: 'hexerei:gold_rings' },
                        { Count: 1, Slot: 1, id: 'hexerei:small_satchel' },
                        { Count: 1, Slot: 2, id: 'hexerei:broom_brush' }
                    ],
                    Size: 30
                },
                display: { Name: '{"translate":"item.ars_scalaes.archwood_broom"}' },
                floatMode: 0
            }),
            activation_item: 'hexerei:blood_bottle',
            inputs: [
                'hexerei:mindful_trance_blend',
                'hexerei:small_satchel',
                'hexerei:broom_brush',
                'hexerei:gold_rings',
                'hexerei:dried_yellow_dock_leaves',
                'hexerei:dried_yellow_dock_leaves',
                '#forge:logs/archwood',
                '#forge:logs/archwood'
            ],
            ritual_dummy: 'kubejs:ritual_craft_archwood_broom',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_craft_archwood_broom`
        },
        {
            output: Item.of('hexerei:mahogany_broom', {
                Inventory: {
                    Items: [
                        { Count: 1, Slot: 0, id: 'hexerei:gold_rings' },
                        { Count: 1, Slot: 1, id: 'hexerei:small_satchel' },
                        { Count: 1, Slot: 2, id: 'hexerei:broom_brush' }
                    ],
                    Size: 30
                },
                display: { Name: '{"translate":"item.hexerei.mahogany_broom"}' },
                floatMode: 0
            }),
            activation_item: 'hexerei:blood_bottle',
            inputs: [
                'hexerei:mindful_trance_blend',
                'hexerei:small_satchel',
                'hexerei:broom_brush',
                'hexerei:gold_rings',
                'hexerei:dried_yellow_dock_leaves',
                'hexerei:dried_yellow_dock_leaves',
                'hexerei:mahogany_log',
                'hexerei:mahogany_log',
                '#forge:gems/therium',
                '#forge:gems/therium',
                '#forge:gems/therium',
                '#forge:gems/therium'
            ],
            ritual_dummy: 'kubejs:ritual_craft_mahogany_broom',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_craft_mahogany_broom`
        },
        {
            // Water Breathing
            output: Item.of('occultism:spawn_egg/familiar_cthulhu', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_cthulhu"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_cthulhu.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            output: Item.of('occultism:spawn_egg/familiar_deer', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_deer"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_deer.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            output: Item.of('occultism:spawn_egg/familiar_devil', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_devil"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_devil.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:essences/fire',
                '#forge:essences/fire',
                '#forge:essences/fire',
                '#forge:essences/fire'
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
            output: Item.of('occultism:spawn_egg/familiar_dragon', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_dragon"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_dragon.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:storage_blocks/diamond',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/emerald',
                '#forge:essences/fire'
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
            output: Item.of('occultism:spawn_egg/familiar_fairy', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_fairy"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_fairy.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
                '#forge:essences/fire',
                '#forge:essences/water',
                '#forge:essences/earth',
                '#forge:essences/air'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_fairy`
        },
        {
            // Item Magnet
            output: Item.of('occultism:spawn_egg/familiar_greedy', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_greedy"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_greedy.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
                '#forge:essences/earth',
                '#forge:essences/earth'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_greedy`
        },
        {
            // Prevents Player Death, losing a limb for each death prevented.
            output: Item.of('occultism:spawn_egg/familiar_guardian', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_guardian"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_guardian.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
                '#forge:essences/earth',
                '#forge:essences/earth'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_guardian`
        },
        {
            // Grants damage buffs against recently killed mobs
            output: Item.of('occultism:spawn_egg/familiar_headless', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_headless"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_headless.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            output: Item.of('occultism:spawn_egg/familiar_mummy', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_mummy"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_mummy.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            output: Item.of('occultism:spawn_egg/otherworld_bird', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_otherworld_bird"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_otherworld_bird.tooltip"}']
                }
            }),
            ritual_type: 'occultism:summon_tamed',
            activation_item: '#forge:essences/conjuration',
            pentacle_id: 'occultism:summon_familiar',
            entity_to_summon: 'occultism:otherworld_bird',
            ritual_type: 'occultism:summon_tamed',
            ritual_dummy: 'occultism:ritual_dummy/familiar_otherworld_bird',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:feathers',
                '#forge:feathers',
                '#forge:essences/air',
                '#forge:essences/air'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_otherworld_bird`
        },
        {
            // Just a pet
            output: Item.of('occultism:spawn_egg/familiar_parrot', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_parrot"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_parrot.tooltip"}']
                }
            }),
            ritual_type: 'occultism:summon_with_chance_of_chicken_tamed',
            activation_item: '#forge:essences/conjuration',
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
            output: Item.of('occultism:spawn_egg/familiar_bat', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_bat"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_bat.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            id: `occultism:ritual/familiar_bat`
        },
        {
            // Increases wood breaking speed
            output: Item.of('occultism:spawn_egg/familiar_beaver', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_beaver"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_beaver.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            id: `occultism:ritual/familiar_beaver`
        },
        {
            // Attacks enemies and makes them glow
            output: Item.of('occultism:spawn_egg/familiar_beholder', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_beholder"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_beholder.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            id: `occultism:ritual/familiar_beholder`
        },
        {
            // Repairs Equipmet and upgrades other familiars.
            output: Item.of('occultism:spawn_egg/familiar_blacksmith', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_blacksmith"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_blacksmith.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
                '#forge:essences/fire'
            ],
            duration: 10,
            id: `occultism:ritual/familiar_blacksmith`
        },
        {
            // Rideable Mount
            output: Item.of('occultism:spawn_egg/familiar_chimera', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.familiar_chimera"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.familiar_chimera.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            id: `occultism:ritual/familiar_chimera`
        },
        {
            output: Item.of('hexerei:crow_spawn_egg', {
                display: {
                    Name: '{"translate":"item.kubejs.ritual_summon_crow"}',
                    Lore: ['{"translate":"item.kubejs.ritual_summon_crow.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
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
            output: Item.of('minecraft:allay_spawn_egg', {
                display: {
                    Name: '{"translate":"item.kubejs.ritual_summon_allay"}',
                    Lore: ['{"translate":"item.kubejs.ritual_summon_allay.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:gems/amethyst',
                '#forge:gems/amethyst',
                '#forge:gems/amethyst',
                '#forge:gems/amethyst'
            ],
            entity_to_summon: 'minecraft:allay',
            ritual_dummy: 'kubejs:ritual_summon_allay',
            ritual_type: 'occultism:summon_tamed',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_summon_allay`
        },
        {
            output: Item.of('minecraft:blaze_spawn_egg', {
                display: {
                    Name: '{"translate":"item.kubejs.ritual_summon_bound_blaze"}',
                    Lore: ['{"translate":"item.kubejs.ritual_summon_bound_blaze.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                '#forge:essences/fire',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/fire',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/fire',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/fire'
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
            output: Item.of('thermal:blitz_spawn_egg', {
                display: {
                    Name: '{"translate":"item.kubejs.ritual_summon_bound_blitz"}',
                    Lore: ['{"translate":"item.kubejs.ritual_summon_bound_blitz.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                '#forge:essences/air',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/air',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/air',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/air'
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
            output: Item.of('thermal:basalz_spawn_egg', {
                display: {
                    Name: '{"translate":"item.kubejs.ritual_summon_bound_basalz"}',
                    Lore: ['{"translate":"item.kubejs.ritual_summon_bound_basalz.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                '#forge:essences/earth',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/earth',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/earth',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/earth'
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
            output: Item.of('thermal:blizz_spawn_egg', {
                display: {
                    Name: '{"translate":"item.kubejs.ritual_summon_bound_blizz"}',
                    Lore: ['{"translate":"item.kubejs.ritual_summon_bound_blizz.tooltip"}']
                }
            }),
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                'quark:gold_bars',
                '#forge:essences/water',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/water',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/water',
                'ars_nouveau:magebloom_fiber',
                '#forge:essences/water'
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
            output: '8x pneumaticcraft:module_expansion_card',
            activation_item: 'ae2:quartz_block',
            inputs: [
                'pneumaticcraft:compressed_stone_slab',
                'pneumaticcraft:compressed_stone_slab',
                'pneumaticcraft:compressed_stone_slab',
                'pneumaticcraft:compressed_stone_slab',
                '#forge:wires/electrum',
                '#forge:wires/electrum',
                '#forge:wires/electrum',
                '#forge:wires/electrum'
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
        {
            output: '8x immersiveengineering:component_electronic',
            activation_item: 'minecraft:quartz_block',
            inputs: [
                '#forge:treated_wood_slab',
                '#forge:treated_wood_slab',
                '#forge:treated_wood_slab',
                '#forge:treated_wood_slab',
                '#forge:wires/electrum',
                '#forge:wires/electrum',
                '#forge:wires/electrum',
                '#forge:wires/electrum'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/fire',
                display_name: 'ritual.occultism.sacrifice.fire_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_component_electronic',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_component_electronic`
        },
        {
            output: Item.of('pneumaticcraft:flux_compressor', {
                BlockEntityTag: {
                    UpgradeInventory: { Items: [{ Count: 1, Slot: 0, id: 'pneumaticcraft:security_upgrade' }], Size: 4 }
                }
            }),
            activation_item: 'minecraft:blast_furnace',
            inputs: [
                'ars_elemental:air_focus',
                'naturesaura:furnace_heater',
                'ars_elemental:fire_focus',
                'create:shaft',
                '#forge:ingots/infused_iron',
                '#forge:gems/source',
                '#forge:ingots/infused_iron',
                'create:propeller',
                '#forge:ingots/infused_iron',
                '#forge:gems/source',
                '#forge:ingots/infused_iron',
                'create:propeller'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/air',
                display_name: 'ritual.occultism.sacrifice.air_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_flux_compressor',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_flux_compressor`
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_3',
            activation_item: 'pneumaticcraft:upgrade_matrix',
            inputs: [
                'ars_nouveau:ritual_flight',
                'ars_nouveau:glyph_launch',
                'ars_nouveau:glyph_underfoot',
                'ars_nouveau:glyph_launch',
                'pneumaticcraft:pressure_tube',
                'pneumaticcraft:pressure_tube',
                'pneumaticcraft:pressure_tube',
                'pneumaticcraft:pressure_tube',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/air',
                display_name: 'ritual.occultism.sacrifice.air_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_jet_boots_upgrade_3',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_jet_boots_upgrade_3`
        },
        {
            output: '4x ae2:controller',
            activation_item: 'pneumaticcraft:logistics_core',
            inputs: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'quark:rainbow_rune',
                'powah:capacitor_niotic',
                'quark:rainbow_rune',
                'powah:capacitor_niotic',
                'powah:capacitor_niotic',
                'quark:rainbow_rune',
                'powah:capacitor_niotic',
                'quark:rainbow_rune'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/water',
                display_name: 'ritual.occultism.sacrifice.water_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_controller',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_controller`
        },
        {
            output: 'industrialforegoing:ore_laser_base',
            activation_item: 'thermal:machine_frame',
            inputs: [
                'ars_elemental:earth_focus',
                '#forge:gears/aluminum',
                '#forge:storage_blocks/source',
                '#forge:gears/aluminum',

                '#forge:ingots/brass',
                'spirit:soul_glass',
                '#forge:ingots/brass',
                'spirit:soul_glass',

                '#forge:ingots/brass',
                'spirit:soul_glass',
                '#forge:ingots/brass',
                'spirit:soul_glass'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/earth',
                display_name: 'ritual.occultism.sacrifice.earth_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_ore_laser_base',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_ore_laser_base`
        },
        {
            output: '2x createaddition:electric_motor',
            activation_item: 'create:brass_casing',
            inputs: [
                'create:shaft',
                'powah:capacitor_basic_large',
                'create:shaft',
                'powah:capacitor_basic_large',
                'immersiveengineering:coil_mv',
                'immersiveengineering:coil_mv',
                'immersiveengineering:coil_mv',
                'immersiveengineering:coil_mv',
                'minecraft:lodestone',
                'minecraft:lodestone',
                'minecraft:lodestone',
                'minecraft:lodestone'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/earth',
                display_name: 'ritual.occultism.sacrifice.earth_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_electric_motor',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_electric_motor`
        },
        {
            output: 'industrialforegoing:fluid_laser_base',
            activation_item: 'thermal:machine_frame',
            inputs: [
                'ars_elemental:water_focus',
                '#forge:gears/aluminum',
                '#forge:storage_blocks/source',
                '#forge:gears/aluminum',

                '#forge:ingots/brass',
                'spirit:soul_glass',
                '#forge:ingots/brass',
                'spirit:soul_glass',

                '#forge:ingots/brass',
                'spirit:soul_glass',
                '#forge:ingots/brass',
                'spirit:soul_glass'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/water',
                display_name: 'ritual.occultism.sacrifice.water_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_fluid_laser_base',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:lesser_binding',
            duration: 10,
            id: `${id_prefix}ritual_craft_fluid_laser_base`
        },
        {
            output: 'kubejs:energetic_transference_matrix',
            activation_item: 'naturesaura:calling_spirit',
            inputs: [
                'pneumaticcraft:logistics_core',
                'ae2:quantum_entangled_singularity',
                'mekanism:teleportation_core',
                'ae2:quantum_entangled_singularity'
            ],
            ritual_dummy: 'kubejs:ritual_craft_energetic_transference_matrix',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_1',
            duration: 10,
            id: `${id_prefix}ritual_craft_energetic_transference_matrix`
        },
        {
            output: Item.of('minecraft:ender_pearl', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.possess_enderman"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.possess_enderman.tooltip"}']
                }
            }),
            activation_item: 'minecraft:chorus_flower',
            inputs: [
                '#forge:essences/anima',
                '#forge:dusts/obsidian',
                '#forge:dusts/obsidian',
                '#forge:dusts/obsidian'
            ],
            entity_to_summon: 'occultism:possessed_enderman',
            ritual_dummy: 'occultism:ritual_dummy/possess_enderman',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:summon_lesser_evil',
            duration: 10,
            id: `occultism:ritual/possess_enderman`
        },
        {
            output: Item.of('minecraft:end_stone', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.possess_endermite"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.possess_endermite.tooltip"}']
                }
            }),
            activation_item: 'minecraft:stone_bricks',
            inputs: [
                '#forge:essences/anima',
                '#forge:essences/borer',
                '#forge:essences/borer',
                '#forge:essences/borer'
            ],
            entity_to_summon: 'occultism:possessed_endermite',
            ritual_dummy: 'occultism:ritual_dummy/possess_endermite',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:summon_lesser_evil',
            duration: 10,
            id: `occultism:ritual/possess_endermite`
        },
        {
            output: Item.of('minecraft:ghast_tear', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.possess_ghast"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.possess_ghast.tooltip"}']
                }
            }),
            activation_item: 'minecraft:nether_bricks',
            inputs: ['#forge:essences/anima', '#forge:dusts/quartz', '#forge:dusts/quartz', '#forge:dusts/quartz'],
            entity_to_summon: 'occultism:possessed_ghast',
            ritual_dummy: 'occultism:ritual_dummy/possess_ghast',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:summon_lesser_evil',
            duration: 10,
            id: `occultism:ritual/possess_ghast`
        },
        {
            output: Item.of('occultism:afrit_essence', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.summon_wild_afrit"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.summon_wild_afrit.tooltip"}']
                }
            }),
            activation_item: 'occultism:book_of_binding_bound_afrit',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/fire',
                'naturesaura:depth_sword',
                '#forge:essences/air',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            entity_to_summon: 'occultism:afrit_wild',
            entity_to_sacrifice: { tag: 'enigmatica:deer', display_name: 'ritual.occultism.sacrifice.deer' },
            ritual_dummy: 'occultism:ritual_dummy/summon_wild_afrit',
            ritual_type: 'occultism:summon',
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 10,
            id: `occultism:ritual/summon_wild_afrit`
        },
        {
            output: Item.of('3x mekanism:sps_port'),
            activation_item: '#industrialforegoing:machine_frame/supreme',
            inputs: [
                'ae2:spatial_anchor',
                'ae2:spatial_anchor',
                'ae2:spatial_anchor',
                'ae2:spatial_anchor',

                'ae2:spatial_pylon',
                'mekanism:sps_casing',
                'ae2:spatial_pylon',
                'mekanism:sps_casing',

                'ae2:spatial_pylon',
                'mekanism:sps_casing',
                'ae2:spatial_pylon',
                'mekanism:sps_casing'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/air',
                display_name: 'ritual.occultism.sacrifice.air_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_sps_port',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_3',
            duration: 60,
            id: `${id_prefix}ritual_craft_sps_port`
        },
        {
            output: 'powah:energizing_orb',
            activation_item: 'hexerei:crystal_ball',
            inputs: [
                'ae2:quartz_glass',
                'ae2:quartz_glass',
                '#forge:essences/manipulation',
                'ae2:quartz_glass',

                'ae2:quartz_glass',
                'ae2:quartz_glass',
                'ae2:sky_stone_block',
                'ae2:quartz_glass',

                'ae2:quartz_glass',
                'ae2:quartz_glass',
                'ae2:sky_stone_block',
                'ae2:quartz_glass'
            ],
            entity_to_sacrifice: {
                tag: 'enigmatica:elementals/water',
                display_name: 'ritual.occultism.sacrifice.water_elementals'
            },
            ritual_dummy: 'kubejs:ritual_craft_energizing_orb',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_1',
            duration: 60,
            id: `${id_prefix}ritual_craft_energizing_orb`
        },
        {
            output: Item.of('trofers:large_pillar', '{BlockEntityTag:{Trophy:"trofers:tree_of_life"}}'),
            activation_item: 'ars_nouveau:ritual_restoration',
            inputs: [
                'kubejs:heart_of_the_tempest',
                'minecraft:heart_of_the_sea',
                'kubejs:heart_of_the_mountain',
                'kubejs:heart_of_the_inferno'
            ],
            ritual_dummy: 'kubejs:ritual_craft_tree_of_life_trophy',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_4',
            duration: 60,
            id: `${id_prefix}ritual_craft_tree_of_life_trophy`
        },
        {
            output: 'farmingforblockheads:market',
            activation_item: '#forge:essences/conjuration',
            inputs: [
                'hexerei:mindful_trance_blend',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',

                'ars_elemental:yellow_archwood',
                'ars_nouveau:green_archwood_wood',
                'ars_nouveau:blue_archwood_wood',
                'ars_nouveau:red_archwood_wood',

                'ars_elemental:yellow_archwood',
                'ars_nouveau:green_archwood_wood',
                'ars_nouveau:blue_archwood_wood',
                'ars_nouveau:red_archwood_wood'
            ],
            ritual_dummy: 'kubejs:ritual_craft_market',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_familiar',
            duration: 10,
            id: `${id_prefix}ritual_craft_market`
        },

        /*
        Custom Summons
        Custom Summon Rituals make use of a dummy item which, 
        when spawned in world is immediately removed, triggering an actual summon. 
        Define the summon in constants/custom_spawns.js

        These should always use the 'occultism:craft' ritual_type
        */
        {
            output: Item.of('kubejs:aura_leaf', { aura_amount: 1000000, aura_max: 2000000 }),
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
            duration: 20,
            id: `${id_prefix}ritual_aura_generation`
        },
        {
            output: Item.of('kubejs:tree_of_life_1', { aura_amount: 200000, aura_max: 2000000 }),
            activation_item: 'kubejs:shard_of_renewal',
            inputs: [
                'naturesaura:calling_spirit',
                'naturesaura:calling_spirit',
                'naturesaura:calling_spirit',
                'naturesaura:calling_spirit',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_1',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_1`
        },
        {
            output: Item.of('kubejs:tree_of_life_2', { aura_amount: 400000, aura_max: 2000000 }),
            activation_item: 'kubejs:shard_of_enduring',
            inputs: [
                'kubejs:spirit_of_devotion',
                'kubejs:spirit_of_devotion',
                'kubejs:spirit_of_devotion',
                'kubejs:spirit_of_devotion',
                '#forge:ingots/depths',
                '#forge:ingots/depths',
                '#forge:ingots/depths',
                '#forge:ingots/depths',
                '#forge:ingots/depths',
                '#forge:ingots/depths',
                '#forge:ingots/depths',
                '#forge:ingots/depths'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_2',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_1',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_2`
        },
        {
            output: Item.of('kubejs:tree_of_life_3', { aura_amount: 1000000, aura_max: 2000000 }),
            activation_item: 'kubejs:shard_of_rebirth',
            inputs: [
                'naturesaura:birth_spirit',
                'naturesaura:birth_spirit',
                'naturesaura:birth_spirit',
                'naturesaura:birth_spirit',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_3',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_2',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_3`
        },
        {
            output: Item.of('kubejs:tree_of_life_4', { aura_amount: 4000000, aura_max: 4000000 }),
            activation_item: 'kubejs:shard_of_wisdom',
            inputs: [
                '#forge:gems/infused_ender',
                '#forge:gems/infused_ender',
                '#forge:gems/infused_ender',
                '#forge:gems/infused_ender',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky'
            ],
            ritual_dummy: 'kubejs:ritual_tree_of_life_4',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_3',
            duration: 60,
            id: `${id_prefix}ritual_tree_of_life_4`
        },
        {
            output: 'kubejs:teleport_overworld',
            activation_item: 'create:honeyed_apple',
            inputs: [
                '#forge:honeycombs',
                'naturesaura:gold_leaf',
                '#forge:pollen',
                'naturesaura:gold_leaf',

                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers',

                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers',
                '#minecraft:small_flowers'
            ],
            ritual_dummy: 'kubejs:ritual_teleport_overworld',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_2',
            duration: 10,
            id: `${id_prefix}ritual_teleport_overworld`
        },
        {
            output: 'kubejs:teleport_nether',
            activation_item: '#forge:nether_stars',
            inputs: [
                '#forge:ingots/tainted_gold',
                'naturesaura:gold_leaf',
                '#forge:essences/fire',
                'naturesaura:gold_leaf',

                'create:cinder_flour',
                'create:cinder_flour',
                'create:cinder_flour',
                'create:cinder_flour',

                'create:cinder_flour',
                'create:cinder_flour',
                'create:cinder_flour',
                'create:cinder_flour'
            ],
            ritual_dummy: 'kubejs:ritual_teleport_nether',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_2',
            duration: 10,
            id: `${id_prefix}ritual_teleport_nether`
        },
        {
            output: 'kubejs:teleport_end',
            activation_item: '#forge:gems/infused_ender',
            inputs: [
                '#forge:ingots/energized_steel',
                'naturesaura:gold_leaf',
                '#forge:essences/air',
                'naturesaura:gold_leaf',

                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',

                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ],
            ritual_dummy: 'kubejs:ritual_teleport_end',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:tree_of_life_stage_3',
            duration: 10,
            id: `${id_prefix}ritual_teleport_end`
        },
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:wither_council_gate", radius:5}`),
            activation_item: '#forge:ingots/tainted_gold',
            inputs: [
                'minecraft:wither_skeleton_skull',
                'minecraft:wither_skeleton_skull',
                'spirit:compressed_soul_powder_block',
                'minecraft:wither_skeleton_skull'
            ],
            ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:wither_council_gate", radius:5}`),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_greater_evil',
            duration: 10,
            id: `${id_prefix}wither_council_gate`
        },
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:wilden_grove_gate", radius:5}`),
            activation_item: 'the_bumblezone:royal_jelly_bottle',
            inputs: [
                'hexerei:blood_bottle',
                'hexerei:blood_bottle',
                'hexerei:blood_bottle',
                'hexerei:blood_bottle',
                'kubejs:mystery_mash',
                'kubejs:mystery_mash',
                'kubejs:mystery_mash',
                'kubejs:mystery_mash',
                'kubejs:mystery_mash',
                'kubejs:mystery_mash',
                'kubejs:mystery_mash',
                'kubejs:mystery_mash'
            ],
            ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:wilden_grove_gate", radius:5}`),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_greater_evil',
            entity_to_sacrifice: {
                tag: 'enigmatica:deer',
                display_name: 'ritual.occultism.sacrifice.deer'
            },
            duration: 10,
            id: `${id_prefix}wilden_grove_gate`
        },
        {
            output: 'kubejs:ritual_of_enduring_flight',
            activation_item: 'ars_nouveau:ritual_flight',
            inputs: ['#forge:ingots/sky', '#forge:ingots/sky', '#forge:ingots/sky', '#forge:ingots/sky'],
            ritual_dummy: 'kubejs:ritual_of_enduring_flight',
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_foliot',
            duration: 20,
            id: `${id_prefix}ritual_of_enduring_flight`
        },
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:wild_hunt_gate", radius:5}`),
            activation_item: 'minecraft:skeleton_skull',
            inputs: ['#forge:essences/anima', '#forge:dusts/lead', '#forge:dusts/lead', '#forge:dusts/lead'],
            entity_to_sacrifice: { tag: 'enigmatica:deer', display_name: 'ritual.occultism.sacrifice.deer' },
            ritual_dummy: Item.of('minecraft:wither_skeleton_skull', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.summon_wild_hunt"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.summon_wild_hunt.tooltip"}']
                }
            }),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_lesser_evil',
            duration: 10,
            id: `occultism:ritual/summon_wild_hunt`
        },
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:possessed_skeleton_gate", radius:5}`),
            activation_item: 'byg:hanging_bones',
            inputs: ['#forge:essences/anima', 'minecraft:bone_meal', 'minecraft:bone_meal', 'minecraft:bone_meal'],
            entity_to_sacrifice: { tag: 'enigmatica:deer', display_name: 'ritual.occultism.sacrifice.deer' },
            ritual_dummy: Item.of('minecraft:skeleton_skull', {
                display: {
                    Name: '{"translate":"item.occultism.ritual_dummy.possess_skeleton"}',
                    Lore: ['{"translate":"item.occultism.ritual_dummy.possess_skeleton.tooltip"}']
                }
            }),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_lesser_evil',
            duration: 10,
            id: `occultism:ritual/possess_skeleton`
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

    let gateways = [
        {
            type: 'death_tome',
            inputs: ['#forge:essences/conjuration', '#forge:bookshelves', '#forge:essences/anima', '#forge:bookshelves']
        },
        {
            type: 'creeper',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:storage_blocks/gunpowder',
                '#forge:essences/anima',
                'minecraft:vine'
            ]
        },
        {
            type: 'enderman',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:gems/ender_pearl',
                '#forge:essences/anima',
                '#forge:gems/ender_pearl'
            ]
        },
        {
            type: 'ghast',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:storage_blocks/gunpowder',
                '#forge:essences/anima',
                'minecraft:ghast_tear'
            ]
        },
        {
            type: 'magma_cube',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:magma_block',
                '#forge:essences/anima',
                'minecraft:magma_block'
            ]
        },
        {
            type: 'shulker',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:shulker_shell',
                '#forge:essences/anima',
                'minecraft:shulker_shell'
            ]
        },
        {
            type: 'skeleton',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:bone_block',
                '#forge:essences/anima',
                'minecraft:bone_block'
            ]
        },
        {
            type: 'slime',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:slime_block',
                '#forge:essences/anima',
                'minecraft:slime_block'
            ]
        },
        {
            type: 'spider',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:spider_eye',
                '#forge:essences/anima',
                'minecraft:spider_eye'
            ]
        },
        {
            type: 'witch',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:dusts/moon_dust',
                '#forge:essences/anima',
                '#forge:dusts/moon_dust'
            ]
        },
        {
            type: 'zombie',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:rotten_flesh',
                '#forge:essences/anima',
                'minecraft:rotten_flesh'
            ]
        },
        {
            type: 'blaze',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/fire',
                '#forge:essences/fire',
                '#forge:essences/fire'
            ]
        },
        {
            type: 'basalz',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/earth',
                '#forge:essences/earth',
                '#forge:essences/earth'
            ]
        },
        {
            type: 'blizz',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/water',
                '#forge:essences/water',
                '#forge:essences/water'
            ]
        },
        {
            type: 'blitz',
            inputs: ['#forge:essences/conjuration', '#forge:essences/air', '#forge:essences/air', '#forge:essences/air']
        },
        {
            type: 'swarm',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:stone_bricks',
                'minecraft:end_stone_bricks',
                'twilightforest:towerwood'
            ]
        }
    ];

    // Helper for generating lang entries. Leave disabled normally.
    // Static entries generated to facilitate translation.
    // Copy Paste results into assets/kubejs/lang/en_us.json
    /* 
            gateways.forEach((gateway) => {
                let lang_entries = {};
                let formatted_type = toTitleCase(gateway.type.replace(/_/g, ' '));
        
                let ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate_small`;
                lang_entries[`${ritual}.started`] = `Started Opening Small ${formatted_type} Gateway`;
                lang_entries[`${ritual}.finished`] = `Small ${formatted_type} Gateway Opened`;
                lang_entries[`${ritual}.interrupted`] = `Small ${formatted_type} Gateway Interrupted`;
                lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;
        
                ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate`;
                lang_entries[`${ritual}.started`] = `Started Opening ${formatted_type} Gateway`;
                lang_entries[`${ritual}.finished`] = `${formatted_type} Gateway Opened`;
                lang_entries[`${ritual}.interrupted`] = `${formatted_type} Gateway Interrupted`;
                lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;
        
                ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate_large`;
                lang_entries[`${ritual}.started`] = `Started Opening Large ${formatted_type} Gateway`;
                lang_entries[`${ritual}.finished`] = `Large ${formatted_type} Gateway Opened`;
                lang_entries[`${ritual}.interrupted`] = `Large ${formatted_type} Gateway Interrupted`;
                lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;
        
                console.log(JSON.stringify(lang_entries));
            });
            */

    gateways.forEach((gateway) => {
        recipes.push(
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_small", radius:5}`),
                activation_item: '#forge:storage_blocks/emerald',
                inputs: gateway.inputs,
                ritual_dummy: Item.of(
                    'gateways:gate_pearl',
                    `{gateway:"gateways:${gateway.type}_gate_small", radius:5}`
                ),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:summon_lesser_evil',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate_small`
            },
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate", radius:5}`),
                activation_item: '#forge:storage_blocks/niotic_crystal',
                inputs: gateway.inputs,
                ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate", radius:5}`),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:summon_lesser_evil',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate`
            },
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_large", radius:5}`),
                activation_item: '#forge:storage_blocks/spirited_crystal',
                inputs: gateway.inputs,
                ritual_dummy: Item.of(
                    'gateways:gate_pearl',
                    `{gateway:"gateways:${gateway.type}_gate_large", radius:5}`
                ),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:summon_greater_evil',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate_large`
            }
        );
    });

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
