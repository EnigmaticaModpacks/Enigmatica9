ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/imbuement/';

    const recipes = [
        {
            output: 'emendatusenigmatica:source_gem',
            count: 1,
            reagent: '#forge:gems/amethyst',
            source: 100,
            id: 'ars_nouveau:imbuement_amethyst'
        },
        {
            output: 'emendatusenigmatica:source_block',
            count: 1,
            reagent: '#forge:storage_blocks/amethyst',
            source: 400,
            id: 'ars_nouveau:imbuement_amethyst_block'
        },
        {
            output: 'ars_nouveau:fire_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:fiery_blood', 'hexerei:dried_yellow_dock_flowers', 'minecraft:blaze_rod'],
            source: 500,
            id: 'ars_nouveau:imbuement_fire_essence'
        },
        {
            output: 'ars_nouveau:air_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:raven_feather', 'hexerei:dried_sage', 'thermal:blitz_rod'],
            source: 500,
            id: 'ars_nouveau:imbuement_air_essence'
        },
        {
            output: 'ars_nouveau:water_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:alpha_yeti_fur', 'hexerei:dried_belladonna_flowers', 'thermal:blizz_rod'],
            source: 500,
            id: 'ars_nouveau:imbuement_water_essence'
        },
        {
            output: 'ars_nouveau:earth_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:magic_beans', 'hexerei:mandrake_root', 'thermal:basalz_rod'],
            source: 500,
            id: 'ars_nouveau:imbuement_earth_essence'
        },
        {
            output: 'ars_nouveau:abjuration_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['#forge:ingots/bronze', 'twilightforest:cicada', 'twilightforest:naga_scale'],
            source: 500,
            id: 'ars_nouveau:imbuement_abjuration_essence'
        },
        {
            output: 'ars_nouveau:conjuration_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['#forge:ingots/silver', 'ars_nouveau:magebloom_block', 'minecraft:compass'],
            source: 500,
            id: `ars_nouveau:imbuement_conjuration_essence`
        },
        {
            output: 'ars_nouveau:manipulation_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['#forge:ingots/copper', 'minecraft:redstone_lamp', 'minecraft:clock'],
            source: 500,
            id: `ars_nouveau:imbuement_manipulation_essence`
        },
        {
            output: 'ars_nouveau:fire_essence',
            count: 4,
            reagent: '#forge:storage_blocks/source',
            inputs: ['twilightforest:fiery_blood', 'hexerei:dried_yellow_dock_flowers', 'minecraft:blaze_rod'],
            source: 2000,
            id: `${id_prefix}imbuement_fire_essence_from_block`
        },
        {
            output: 'ars_nouveau:air_essence',
            count: 4,
            reagent: '#forge:storage_blocks/source',
            inputs: ['twilightforest:raven_feather', 'hexerei:dried_sage', 'thermal:blitz_rod'],
            source: 2000,
            id: `${id_prefix}imbuement_air_essence_from_block`
        },
        {
            output: 'ars_nouveau:water_essence',
            count: 4,
            reagent: '#forge:storage_blocks/source',
            inputs: ['twilightforest:alpha_yeti_fur', 'hexerei:dried_belladonna_flowers', 'thermal:blizz_rod'],
            source: 2000,
            id: `${id_prefix}imbuement_water_essence_from_block`
        },
        {
            output: 'ars_nouveau:earth_essence',
            count: 4,
            reagent: '#forge:storage_blocks/source',
            inputs: ['twilightforest:magic_beans', 'hexerei:mandrake_root', 'thermal:basalz_rod'],
            source: 2000,
            id: `${id_prefix}imbuement_earth_essence_from_block`
        },
        {
            output: 'ars_nouveau:abjuration_essence',
            count: 4,
            reagent: '#forge:storage_blocks/source',
            inputs: ['#forge:ingots/bronze', 'twilightforest:cicada', 'twilightforest:naga_scale'],
            source: 2000,
            id: `${id_prefix}imbuement_abjuration_essence_from_block`
        },
        {
            output: 'ars_nouveau:conjuration_essence',
            count: 4,
            reagent: '#forge:storage_blocks/source',
            inputs: ['#forge:ingots/silver', 'ars_nouveau:magebloom_block', 'minecraft:compass'],
            source: 2000,
            id: `${id_prefix}imbuement_conjuration_essence_from_block`
        },
        {
            output: 'ars_nouveau:manipulation_essence',
            count: 4,
            reagent: '#forge:storage_blocks/source',
            inputs: ['#forge:ingots/copper', 'minecraft:redstone_lamp', 'minecraft:clock'],
            source: 2000,
            id: `${id_prefix}imbuement_manipulation_essence_from_block`
        },
        {
            output: 'naturesaura:infused_stone',
            count: 1,
            reagent: 'minecraft:calcite',
            source: 500,
            id: `${id_prefix}infused_stone`
        },

        {
            output: 'ars_elemental:anima_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:charm_of_life_2', '#forge:ingots/lead', 'hexerei:blood_bottle'],
            source: 500,
            id: `ars_elemental:imbuement_anima_essence`
        },
        {
            output: 'pneumaticcraft:drill_bit_iron',
            count: 1,
            reagent: 'pneumaticcraft:compressed_stone',
            inputs: ['#forge:essences/earth', '#forge:essences/earth', '#forge:essences/earth'],
            source: 500,
            id: `${id_prefix}drill_bit_iron`
        },
        {
            output: 'ars_elemental:mark_of_mastery',
            count: 1,
            reagent: '#forge:gems/infused_diamond',
            inputs: [
                'ars_nouveau:wilden_tribute',
                '#forge:essences/abjuration',
                '#forge:essences/anima',
                '#forge:essences/manipulation',
                '#forge:essences/conjuration'
            ],
            source: 10000,
            id: 'ars_elemental:imbuement_mark_of_mastery'
        },
        {
            output: 'naturesaura:calling_spirit',
            count: 1,
            reagent: '#forge:dusts/subzero',
            inputs: ['#forge:essences/air', '#forge:essences/fire', '#forge:essences/water', '#forge:essences/earth'],
            source: 10000,
            id: `${id_prefix}calling_spirit`
        },
        {
            output: 'ae2:charged_certus_quartz_crystal',
            count: 1,
            reagent: 'ae2:certus_quartz_crystal',
            inputs: [],
            source: 500,
            id: `${id_prefix}charged_certus_quartz_crystal`
        },
        {
            output: 'ae2:charged_certus_quartz_crystal',
            count: 4,
            reagent: 'ae2:quartz_block',
            inputs: [],
            source: 2000,
            id: `${id_prefix}charged_certus_quartz_crystal_from_block`
        },
        {
            output: 'thermal:fire_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['minecraft:blaze_powder'],
            source: 50,
            id: `${id_prefix}fire_grenade`
        },
        {
            output: 'thermal:ice_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['thermal:blizz_powder'],
            source: 50,
            id: `${id_prefix}ice_grenade`
        },
        {
            output: 'thermal:lightning_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['thermal:blitz_powder'],
            source: 50,
            id: `${id_prefix}lightning_grenade`
        },
        {
            output: 'thermal:earth_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['thermal:basalz_powder'],
            source: 50,
            id: `${id_prefix}earth_grenade`
        },
        {
            output: 'thermal:ender_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['#forge:gems/ender_pearl'],
            source: 50,
            id: `${id_prefix}ender_grenade`
        },
        {
            output: 'thermal:glowstone_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['#forge:dusts/glowstone'],
            source: 50,
            id: `${id_prefix}glowstone_grenade`
        },
        {
            output: 'thermal:redstone_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['#forge:dusts/redstone'],
            source: 50,
            id: `${id_prefix}redstone_grenade`
        },
        {
            output: 'thermal:slime_grenade',
            count: 1,
            reagent: 'thermal:explosive_grenade',
            inputs: ['#forge:slimeballs'],
            source: 50,
            id: `${id_prefix}slime_grenade`
        },
        {
            output: 'kubejs:primordial_seed',
            count: 1,
            reagent: 'minecraft:enchanted_golden_apple',
            inputs: [
                'twilightforest:quest_ram_trophy',
                'ars_nouveau:drygmy_charm',
                'ars_nouveau:whirlisprig_charm',
                'ars_elemental:firenando_charm',
                'ars_elemental:siren_charm'
            ],
            source: 10000,
            id: `${id_prefix}primordial_seed`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        if (recipe.inputs) {
            recipe.pedestalItems = recipe.inputs.map((input) => ({ item: Ingredient.of(input).toJson() }));
        } else {
            recipe.pedestalItems = [];
        }

        recipe.input = Ingredient.of(recipe.reagent).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
