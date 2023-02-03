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
                'naturesaura:gold_powder',
                '#forge:raw_ores/iron',
                'twilightforest:liveroot',
                '#forge:raw_ores/iron',
                'twilightforest:liveroot',
                '#forge:raw_ores/iron',
                'naturesaura:gold_powder'
            ],
            output: Item.of('twilightforest:raw_ironwood', 3),
            liquidOutput: { fluid: 'minecraft:water' },
            fluidLevelsConsumed: 1000,
            heatRequirement: 'heated',
            id: `${id_prefix}raw_ironwood`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
