ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/imbuement/';

    const recipes = [
        {
            output: 'ars_nouveau:fire_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:fiery_blood', 'hexerei:dried_yellow_dock_flowers', 'minecraft:blaze_rod'],
            source: 2000,
            id: 'ars_nouveau:imbuement_fire_essence'
        },
        {
            output: 'ars_nouveau:air_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:raven_feather', 'hexerei:dried_sage', 'thermal:blitz_rod'],
            source: 2000,
            id: 'ars_nouveau:imbuement_air_essence'
        },
        {
            output: 'ars_nouveau:water_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:alpha_yeti_fur', 'hexerei:dried_belladonna_flowers', 'thermal:blizz_rod'],
            source: 2000,
            id: 'ars_nouveau:imbuement_water_essence'
        },
        {
            output: 'ars_nouveau:earth_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:magic_beans', 'hexerei:mandrake_root', 'thermal:basalz_rod'],
            source: 2000,
            id: 'ars_nouveau:imbuement_earth_essence'
        },
        {
            output: 'ars_nouveau:abjuration_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['#forge:ingots/ironwood', 'twilightforest:cicada', 'twilightforest:naga_scale'],
            source: 2000,
            id: 'ars_nouveau:imbuement_abjuration_essence'
        },
        {
            output: 'naturesaura:infused_stone',
            count: 1,
            reagent: 'minecraft:calcite',
            source: 500,
            id: `${id_prefix}infused_stone`
        },
        {
            output: 'ars_nouveau:conjuration_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['#forge:ingots/silver', 'ars_nouveau:magebloom_block', 'minecraft:compass'],
            source: 2000,
            id: `ars_nouveau:imbuement_conjuration_essence`
        },
        {
            output: 'ars_nouveau:manipulation_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['#forge:ingots/copper', 'minecraft:redstone_lamp', 'minecraft:clock'],
            source: 2000,
            id: `ars_nouveau:imbuement_manipulation_essence`
        },
        {
            output: 'ars_elemental:anima_essence',
            count: 1,
            reagent: '#forge:gems/source',
            inputs: ['twilightforest:charm_of_life_2', '#forge:ingots/lead', 'hexerei:blood_bottle'],
            source: 2000,
            id: `ars_elemental:imbuement_anima_essence`
        },
        {
            output: 'pneumaticcraft:drill_bit_iron',
            count: 1,
            reagent: 'pneumaticcraft:compressed_stone',
            inputs: ['#forge:essences/earth', '#forge:essences/earth', '#forge:essences/earth'],
            source: 600,
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
            source: 1000,
            id: `${id_prefix}charged_certus_quartz_crystal`
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
