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
                'twilightforest:liveroot',
                'twilightforest:liveroot',
                'twilightforest:liveroot',
                '#forge:raw_ores/iron',
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'naturesaura:gold_powder'
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
