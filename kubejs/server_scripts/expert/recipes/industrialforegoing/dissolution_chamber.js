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
            output: '4x hexerei:infused_fabric',
            inputs: [
                '#forge:fabrics/ersatz_leather',
                'ars_nouveau:magebloom_fiber',
                '#forge:fabrics/ersatz_leather',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                '#forge:fabrics/ersatz_leather',
                'ars_nouveau:magebloom_fiber',
                '#forge:fabrics/ersatz_leather'
            ],
            inputFluid: '{Amount:300,FluidName:"minecraft:water"}',
            processingTime: 60,
            id: `${id_prefix}infused_fabric`
        },
        {
            output: '2x industrialforegoing:machine_frame_advanced',
            inputs: [
                '#forge:ingots/soul_steel',
                'kubejs:energetic_transference_matrix',
                '#forge:ingots/soul_steel',
                'powah:capacitor_spirited',

                'powah:capacitor_spirited',
                '#forge:ingots/soul_steel',
                'ae2:calculation_processor',
                '#forge:ingots/soul_steel'
            ],
            inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
            processingTime: 800,
            id: `${id_prefix}machine_frame_advanced`
        },
        {
            output: Item.of('industrialforegoing:speed_addon_1', 4, '{TitaniumAugment:{Speed:2.0f}}'),
            inputs: [
                'modularrouters:augment_core',
                'ars_nouveau:starbuncle_charm',
                'modularrouters:augment_core',
                '#forge:gems/blazing',
                '#forge:gems/blazing',
                'modularrouters:augment_core',
                'ars_nouveau:starbuncle_charm',
                'modularrouters:augment_core'
            ],
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/speed_addon_1`
        },
        {
            output: Item.of('industrialforegoing:efficiency_addon_1', 4, '{TitaniumAugment:{Efficiency:0.9f}}'),
            inputs: [
                'modularrouters:augment_core',
                'ars_nouveau:amethyst_golem_charm',
                'modularrouters:augment_core',
                '#forge:gems/blazing',
                '#forge:gems/blazing',
                'modularrouters:augment_core',
                'ars_nouveau:amethyst_golem_charm',
                'modularrouters:augment_core'
            ],
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/efficiency_addon_1`
        },
        {
            output: Item.of('industrialforegoing:processing_addon_1', 4, '{TitaniumAugment:{Processing:2.0f}}'),
            inputs: [
                'modularrouters:augment_core',
                'ars_nouveau:wixie_charm',
                'modularrouters:augment_core',
                '#forge:gems/blazing',
                '#forge:gems/blazing',
                'modularrouters:augment_core',
                'ars_nouveau:wixie_charm',
                'modularrouters:augment_core'
            ],
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/processing_addon_1`
        },
        {
            output: Item.of('industrialforegoing:speed_addon_2', 4, '{TitaniumAugment:{Speed:3.0f}}'),
            inputs: [
                'industrialforegoing:speed_addon_1',
                'pneumaticcraft:printed_circuit_board',
                'industrialforegoing:speed_addon_1',
                '#forge:gems/subzero',
                '#forge:gems/subzero',
                'industrialforegoing:speed_addon_1',
                'pneumaticcraft:printed_circuit_board',
                'industrialforegoing:speed_addon_1'
            ],
            inputFluid: '{Amount:1000,FluidName:"kubejs:magicite"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/speed_addon_2`
        },
        {
            output: Item.of('industrialforegoing:efficiency_addon_2', 4, '{TitaniumAugment:{Efficiency:0.8f}}'),
            inputs: [
                'industrialforegoing:efficiency_addon_1',
                'pneumaticcraft:printed_circuit_board',
                'industrialforegoing:efficiency_addon_1',
                '#forge:gems/subzero',
                '#forge:gems/subzero',
                'industrialforegoing:efficiency_addon_1',
                'pneumaticcraft:printed_circuit_board',
                'industrialforegoing:efficiency_addon_1'
            ],
            inputFluid: '{Amount:1000,FluidName:"kubejs:magicite"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/efficiency_addon_2`
        },
        {
            output: Item.of('industrialforegoing:processing_addon_2', 4, '{TitaniumAugment:{Processing:3.0f}}'),
            inputs: [
                'industrialforegoing:processing_addon_1',
                'pneumaticcraft:printed_circuit_board',
                'industrialforegoing:processing_addon_1',
                '#forge:gems/subzero',
                '#forge:gems/subzero',
                'industrialforegoing:processing_addon_1',
                'pneumaticcraft:printed_circuit_board',
                'industrialforegoing:processing_addon_1'
            ],
            inputFluid: '{Amount:1000,FluidName:"kubejs:magicite"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/processing_addon_2`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
