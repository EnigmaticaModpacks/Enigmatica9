ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchantment/';
    const recipes = [
        {
            enchantment: 'apotheosis:chromatic',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:wool/red' } },
                { item: { tag: 'forge:wool/green' } },
                { item: { tag: 'forge:wool/blue' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'apotheosis:obliteration',
            level: 1,
            pedestalItems: [
                { item: { item: 'minecraft:obsidian' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'apotheosis:splitting',
            level: 1,
            pedestalItems: [
                { item: { tag: 'forge:storage_blocks/iron' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'apotheosis:bane_of_illagers',
            level: 1,
            pedestalItems: [
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'apotheosis:bane_of_illagers',
            level: 2,
            pedestalItems: [
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'apotheosis:bane_of_illagers',
            level: 3,
            pedestalItems: [
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'apotheosis:bane_of_illagers',
            level: 4,
            pedestalItems: [
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'apotheosis:bane_of_illagers',
            level: 5,
            pedestalItems: [
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:gems/emerald' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },

        {
            enchantment: 'apotheosis:natures_blessing',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'apotheosis:natures_blessing',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'apotheosis:natures_blessing',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'apotheosis:natures_blessing',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'apotheosis:natures_blessing',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { item: 'minecraft:bone_block' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },

        {
            enchantment: 'apotheosis:reflective',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/iron' } }
            ]
        },
        {
            enchantment: 'apotheosis:reflective',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/iron' } }
            ]
        },
        {
            enchantment: 'apotheosis:reflective',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/iron' } }
            ]
        },
        {
            enchantment: 'apotheosis:reflective',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/iron' } }
            ]
        },
        {
            enchantment: 'apotheosis:reflective',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/iron' } }
            ]
        },

        {
            enchantment: 'apotheosis:icy_thorns',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:ices/blue' } }
            ]
        },
        {
            enchantment: 'apotheosis:icy_thorns',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:ices/blue' } }
            ]
        },
        {
            enchantment: 'apotheosis:icy_thorns',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:ices/blue' } }
            ]
        },

        {
            enchantment: 'minecraft:thorns',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'minecraft:thorns',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },

        {
            enchantment: 'apotheosis:stable_footing',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { item: 'ars_nouveau:earth_essence' } }
            ]
        },

        {
            enchantment: 'apotheosis:shield_bash',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'apotheosis:shield_bash',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'apotheosis:shield_bash',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'apotheosis:shield_bash',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'apotheosis:tempting',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'minecraft:golden_carrot' } },
                { item: { item: 'minecraft:golden_carrot' } },
                { item: { item: 'minecraft:golden_carrot' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'travelanchors:range',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:ender_pearl' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'travelanchors:range',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:ender_pearl' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'travelanchors:range',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:ender_pearl' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'travelanchors:range',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:ender_pearl' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'travelanchors:range',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:ender_pearl' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'travelanchors:teleportation',
            level: 1,
            pedestalItems: [
                { item: { item: 'travelanchors:travel_staff' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'twilightforest:destruction',
            level: 1,
            pedestalItems: [
                { item: { tag: 'forge:storage_blocks/knightmetal' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'twilightforest:destruction',
            level: 2,
            pedestalItems: [
                { item: { tag: 'forge:storage_blocks/knightmetal' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'twilightforest:destruction',
            level: 3,
            pedestalItems: [
                { item: { tag: 'forge:storage_blocks/knightmetal' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'twilightforest:chill_aura',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'twilightforest:alpha_yeti_fur' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'twilightforest:chill_aura',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'twilightforest:alpha_yeti_fur' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'twilightforest:chill_aura',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'twilightforest:alpha_yeti_fur' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:ices/blue' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'twilightforest:fire_react',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { tag: 'forge:storage_blocks/fiery' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'twilightforest:fire_react',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { tag: 'forge:storage_blocks/fiery' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'twilightforest:fire_react',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { tag: 'forge:storage_blocks/fiery' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'the_bumblezone:neurotoxins',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'the_bumblezone:bee_stinger' } },
                { item: { item: 'minecraft:soul_sand' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'the_bumblezone:neurotoxins',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'the_bumblezone:bee_stinger' } },
                { item: { item: 'the_bumblezone:bee_stinger' } },
                { item: { item: 'minecraft:soul_sand' } },
                { item: { item: 'minecraft:soul_sand' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'the_bumblezone:potent_poison',
            level: 1,
            pedestalItems: [
                { item: { item: 'minecraft:spider_eye' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'the_bumblezone:potent_poison',
            level: 2,
            pedestalItems: [
                { item: { item: 'minecraft:spider_eye' } },
                { item: { item: 'minecraft:spider_eye' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'the_bumblezone:potent_poison',
            level: 3,
            pedestalItems: [
                { item: { item: 'minecraft:spider_eye' } },
                { item: { item: 'minecraft:spider_eye' } },
                { item: { item: 'minecraft:spider_eye' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'the_bumblezone:comb_cutter',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'the_bumblezone:honey_crystal_shards' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:wither_spikes',
            level: 1,
            pedestalItems: [
                { item: { item: 'minecraft:wither_rose' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/quartz' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:wither_spikes',
            level: 2,
            pedestalItems: [
                { item: { item: 'minecraft:wither_rose' } },
                { item: { item: 'minecraft:wither_rose' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/quartz' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:poison_spikes',
            level: 1,
            pedestalItems: [
                { item: { item: 'minecraft:spider_eye' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/quartz' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:poison_spikes',
            level: 2,
            pedestalItems: [
                { item: { item: 'minecraft:spider_eye' } },
                { item: { item: 'minecraft:spider_eye' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/quartz' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:frost_nova',
            level: 1,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:frost_nova',
            level: 2,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:frost_nova',
            level: 3,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:fire_nova',
            level: 1,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:fire_nova',
            level: 2,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:fire_nova',
            level: 3,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:shulking_nova',
            level: 1,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'minecraft:chorus_fruit' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:shulking_nova',
            level: 2,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'minecraft:chorus_fruit' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:shulking_nova',
            level: 3,
            pedestalItems: [
                { item: { item: 'minecraft:firework_star' } },
                { item: { item: 'minecraft:chorus_fruit' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:quickened',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { tag: 'forge:storage_blocks/redstone' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:quickened',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { tag: 'forge:storage_blocks/redstone' } },
                { item: { tag: 'forge:storage_blocks/redstone' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'superiorshields:quickened',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { tag: 'forge:storage_blocks/redstone' } },
                { item: { tag: 'forge:storage_blocks/redstone' } },
                { item: { tag: 'forge:storage_blocks/redstone' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:curing',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'minecraft:milk_bucket' } },
                { item: { tag: 'forge:storage_blocks/quartz' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'superiorshields:amplify',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } }
            ]
        },

        {
            enchantment: 'superiorshields:raging',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_horn' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { item: 'ars_nouveau:fire_essence' } }
            ]
        },

        {
            enchantment: 'superiorshields:capacity',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } }
            ]
        },
        {
            enchantment: 'superiorshields:capacity',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/diamond' } }
            ]
        },
        {
            enchantment: 'superiorshields:capacity',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/diamond' } }
            ]
        },

        {
            enchantment: 'spirit:soul_reaper',
            level: 1,
            pedestalItems: [
                { item: { item: 'spirit:soul_powder_block' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'spirit:soul_reaper',
            level: 2,
            pedestalItems: [
                { item: { item: 'spirit:soul_powder_block' } },
                { item: { item: 'spirit:soul_powder_block' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'spirit:soul_reaper',
            level: 3,
            pedestalItems: [
                { item: { item: 'spirit:soul_powder_block' } },
                { item: { item: 'spirit:soul_powder_block' } },
                { item: { item: 'spirit:soul_powder_block' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'spirit:soul_reaper',
            level: 4,
            pedestalItems: [
                { item: { item: 'spirit:soul_steel_block' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'spirit:soul_reaper',
            level: 5,
            pedestalItems: [
                { item: { item: 'spirit:soul_steel_block' } },
                { item: { item: 'spirit:soul_steel_block' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'simplytools:power_of_the_depth',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'simplytools:power_of_the_depth',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'simplytools:power_of_the_depth',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'simplytools:power_of_the_depth',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'simplytools:power_of_the_depth',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { item: 'ars_nouveau:earth_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'parry:rebound',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'parry:rebound',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'parry:rebound',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'parry:rebound',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },
        {
            enchantment: 'parry:rebound',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:piston' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } }
            ]
        },

        {
            enchantment: 'minecraft:piercing',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/quartz' } }
            ]
        },
        {
            enchantment: 'minecraft:piercing',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/quartz' } },
                { item: { tag: 'forge:storage_blocks/quartz' } }
            ]
        },

        {
            enchantment: 'minecraft:channeling',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'minecraft:lightning_rod' } },
                { item: { item: 'minecraft:lightning_rod' } },
                { item: { item: 'minecraft:lightning_rod' } }
            ]
        },

        {
            enchantment: 'minecraft:riptide',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:riptide',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:riptide',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:riptide',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } }
            ]
        },
        {
            enchantment: 'minecraft:riptide',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } }
            ]
        },

        {
            enchantment: 'minecraft:impaling',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:impaling',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:impaling',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:impaling',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } }
            ]
        },
        {
            enchantment: 'minecraft:impaling',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:water_essence' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'ars_nouveau:wilden_spike' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } }
            ]
        },

        {
            enchantment: 'minecraft:loyalty',
            level: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:loyalty',
            level: 2,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:loyalty',
            level: 3,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } },
                { item: { item: 'minecraft:prismarine_bricks' } }
            ]
        },
        {
            enchantment: 'minecraft:loyalty',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } }
            ]
        },
        {
            enchantment: 'minecraft:loyalty',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } },
                { item: { item: 'minecraft:dark_prismarine' } }
            ]
        },

        {
            enchantment: 'minecraft:unbreaking',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'minecraft:unbreaking',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:abjuration_essence' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:gems/diamond' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },

        {
            enchantment: 'minecraft:sweeping',
            level: 4,
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        },
        {
            enchantment: 'minecraft:sweeping',
            level: 5,
            pedestalItems: [
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { item: 'ars_nouveau:manipulation_essence' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        }
    ];

    for (let i = 1; i <= 6; i++) {
        recipes.push({
            enchantment: 'cofh_core:holding',
            level: i,
            pedestalItems: [
                { item: { item: 'thermal:rf_coil_augment' } },
                { item: { item: 'thermal:fluid_tank_augment' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/source' } },
                { item: { tag: 'forge:storage_blocks/lapis' } }
            ]
        });
    }

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchantment';
        if (!recipe.sourceCost) {
            recipe.sourceCost = 1800 * recipe.level;
        }
        if (recipe.sourceCost > 10000) {
            recipe.sourceCost = 10000;
        }
        recipe.id = `${id_prefix}${recipe.enchantment.split(':')[1]}_${recipe.level}`;
        event.custom(recipe).id(recipe.id);
    });
});
