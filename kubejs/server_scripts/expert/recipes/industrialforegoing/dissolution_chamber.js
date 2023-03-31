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
        },
        {
            output: '2x industrialforegoing:machine_frame_advanced',
            inputs: [
                '#forge:ingots/steel',
                'pneumaticcraft:printed_circuit_board',
                '#forge:ingots/steel',
                'powah:energy_cable_spirited',

                'powah:energy_cable_spirited',
                '#forge:ingots/steel',
                'kubejs:energetic_transference_matrix',
                '#forge:ingots/steel'
            ],
            inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
            processingTime: 800,
            id: `${id_prefix}machine_frame_advanced`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
