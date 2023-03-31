ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/dissolution_chamber/';
    const recipes = [
        {
            output: '2x mekanism:bio_fuel',
            outputFluid: '{Amount:16000,FluidName:"industrialforegoing:meat"}',
            inputs: [
                '#forge:foods/meat/raw',
                '#forge:foods/meat/raw',
                '#forge:foods/meat/raw',
                '#forge:foods/meat/raw',
                '#forge:foods/meat/raw',
                '#forge:foods/meat/raw',
                '#forge:foods/meat/raw',
                '#forge:foods/meat/raw'
            ],
            inputFluid: '{Amount:2000,FluidName:"minecraft:water"}',
            processingTime: 200,
            id: `${id_prefix}meat_and_bio_fuel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
