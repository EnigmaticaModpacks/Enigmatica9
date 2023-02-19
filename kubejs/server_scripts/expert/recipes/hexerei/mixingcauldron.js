ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/hexerei/mixingcauldron/';
    const recipes = [
        {
            liquid: { fluid: 'minecraft:water' },
            inputs: [
                'ars_nouveau:manipulation_essence',
                'hexerei:belladonna_berries',
                'naturesaura:gold_leaf',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:raw_ores/iron',
                'hexerei:dried_yellow_dock_flowers',
                'twilightforest:liveroot',
                'hexerei:belladonna_berries'
            ],
            output: 'twilightforest:raw_ironwood',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}raw_ironwood`
        },
        {
            liquid: { fluid: 'minecraft:water' },
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
            output: 'occultism:chalk_white',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_white`
        },
        {
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
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
            output: 'occultism:chalk_gold',
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}chalk_gold`
        },
        {
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:harming' } },
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
            output: 'hexerei:blood_sigil',
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'minecraft:harming' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}blood_sigil`
        },
        {
            liquid: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
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
            output: 'ars_nouveau:magebloom_crop',
            liquidOutput: { fluid: 'hexerei:potion', nbt: { Bottle: 'REGULAR', Potion: 'apotheosis:knowledge' } },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}magebloom_crop`
        },
        {
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
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
            output: 'superiorshields:ironwood_shield',
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}ironwood_shield`
        },
        {
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
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
            output: 'superiorshields:steeleaf_shield',
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}steeleaf_shield`
        },
        {
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
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
            output: 'superiorshields:knightmetal_shield',
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'ars_nouveau:shielding_potion_strong' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: `${id_prefix}knightmetal_shield`
        },
        {
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_swiftness' }
            },
            inputs: [
                'blue_skies:soul_fragment',
                'blue_skies:soul_fragment',
                'ars_nouveau:water_essence',
                'ars_nouveau:fire_essence',
                'ars_nouveau:manipulation_essence',
                'ars_nouveau:earth_essence',
                'ars_nouveau:air_essence',
                'blue_skies:soul_fragment'
            ],
            output: 'tiab:time_in_a_bottle',
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:strong_swiftness' }
            },
            fluidLevelsConsumed: 2000,
            heatRequirement: 'heated',
            id: 'tiab:time_in_a_bottle'
        },
        {
            liquid: { fluid: 'minecraft:lava' },
            inputs: [
                'ars_nouveau:fire_essence',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:dusts/constantan',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:storage_blocks/source',
                'hexerei:dried_yellow_dock_flowers',
                '#forge:dusts/constantan',
                'hexerei:dried_yellow_dock_flowers'
            ],
            output: 'twilightforest:fiery_block',
            liquidOutput: { fluid: 'minecraft:lava' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}fiery_block`
        },
        {
            liquid: { fluid: 'minecraft:water' },
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
            output: 'naturesaura:loot_finder',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}loot_finder`
        },
        {
            liquid: { fluid: 'minecraft:water' },
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
            output: 'naturesaura:light_staff',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}light_staff`
        },
        {
            liquid: { fluid: 'minecraft:water' },
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
            output: 'naturesaura:cave_finder',
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}cave_finder`
        },
        {
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }
            },
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
            output: 'naturesaura:pet_reviver',
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:regeneration' }
            },
            fluidLevelsConsumed: 333,
            heatRequirement: 'heated',
            id: `${id_prefix}pet_reviver`
        },
        {
            liquid: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            inputs: [
                '#forge:string',
                'hexerei:dried_mandrake_flowers',
                '#forge:plates/lead',
                'hexerei:belladonna_berries',
                'ars_nouveau:earth_essence',
                'hexerei:belladonna_berries',
                '#forge:plates/lead',
                'hexerei:dried_mandrake_flowers'
            ],
            output: 'naturesaura:shockwave_creator',
            liquidOutput: {
                fluid: 'hexerei:potion',
                nbt: { Bottle: 'REGULAR', Potion: 'minecraft:leaping' }
            },
            fluidLevelsConsumed: 333,
            heatRequirement: 'heated',
            id: `${id_prefix}shockwave_creator`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
