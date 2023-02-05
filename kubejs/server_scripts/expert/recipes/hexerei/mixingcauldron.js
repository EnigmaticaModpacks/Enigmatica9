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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
