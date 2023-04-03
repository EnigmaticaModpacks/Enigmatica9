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
                '#forge:ingots/soul_steel',
                'pneumaticcraft:printed_circuit_board',
                '#forge:ingots/soul_steel',
                'powah:energy_cable_spirited',

                'powah:energy_cable_spirited',
                '#forge:ingots/soul_steel',
                'kubejs:energetic_transference_matrix',
                '#forge:ingots/soul_steel'
            ],
            inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
            processingTime: 800,
            id: `${id_prefix}machine_frame_advanced`
        },
        {
            output: Item.of('industrialforegoing:speed_addon_1', 2, '{TitaniumAugment:{Speed:2.0f}}'),
            inputs: [
                '#forge:gems/blazing',
                'pneumaticcraft:printed_circuit_board',
                'mininggadgets:upgrade_empty',
                'ae2:fluix_glass_cable',

                'ae2:fluix_glass_cable',
                'mininggadgets:upgrade_empty',
                'pneumaticcraft:printed_circuit_board',
                '#forge:gems/blazing'
            ],
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/speed_addon_1`
        },
        {
            output: Item.of('industrialforegoing:efficiency_addon_1', 2, '{TitaniumAugment:{Efficiency:0.9f}}'),
            inputs: [
                'powah:charged_snowball',
                'pneumaticcraft:printed_circuit_board',
                'mininggadgets:upgrade_empty',
                'ae2:fluix_glass_cable',

                'ae2:fluix_glass_cable',
                'mininggadgets:upgrade_empty',
                'pneumaticcraft:printed_circuit_board',
                'powah:charged_snowball'
            ],
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/efficiency_addon_1`
        },
        {
            output: Item.of('industrialforegoing:processing_addon_1', 2, '{TitaniumAugment:{Processing:2.0f}}'),
            inputs: [
                '#forge:gems/spirit_attuned',
                'pneumaticcraft:printed_circuit_board',
                'mininggadgets:upgrade_empty',
                'ae2:fluix_glass_cable',

                'ae2:fluix_glass_cable',
                'mininggadgets:upgrade_empty',
                'pneumaticcraft:printed_circuit_board',
                '#forge:gems/spirit_attuned'
            ],
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/processing_addon_1`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
