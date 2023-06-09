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
            output: '2x industrialforegoing:machine_frame_supreme',
            inputs: [
                '#forge:ingots/depths',
                'kubejs:energetic_transference_matrix',
                '#forge:ingots/depths',
                'powah:capacitor_nitro',

                'powah:capacitor_nitro',
                '#forge:ingots/depths',
                'ae2:engineering_processor',
                '#forge:ingots/depths'
            ],
            inputFluid: '{Amount:1000,FluidName:"hexerei:quicksilver_fluid"}',
            processingTime: 800,
            id: `${id_prefix}machine_frame_supreme`
        },
        {
            output: Item.of('industrialforegoing:speed_addon_1', 4, '{TitaniumAugment:{Speed:2.0f}}'),
            inputs: [
                'modularrouters:augment_core',
                'ars_nouveau:starbuncle_charm',
                'modularrouters:augment_core',
                '#forge:gems/therium',
                '#forge:gems/therium',
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
                '#forge:gems/therium',
                '#forge:gems/therium',
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
                '#forge:gems/therium',
                '#forge:gems/therium',
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
            inputFluid: '{Amount:1000,FluidName:"hexerei:quicksilver_fluid"}',
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
            inputFluid: '{Amount:1000,FluidName:"hexerei:quicksilver_fluid"}',
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
            inputFluid: '{Amount:1000,FluidName:"hexerei:quicksilver_fluid"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/processing_addon_2`
        },
        {
            output: '9x twilightforest:fiery_ingot',
            inputs: [
                'hexerei:dried_yellow_dock_flowers',
                '#forge:essences/fire',
                'hexerei:dried_yellow_dock_flowers',

                '#forge:dusts/constantan',
                '#forge:dusts/constantan',

                'hexerei:dried_yellow_dock_flowers',
                '#forge:storage_blocks/source',
                'hexerei:dried_yellow_dock_flowers'
            ],
            inputFluid: '{Amount:1000,FluidName:"minecraft:lava"}',
            processingTime: 60,
            id: `${id_prefix}fiery_ingot`
        },
        {
            output: '9x twilightforest:raw_ironwood',
            inputs: [
                'hexerei:belladonna_berries',
                '#forge:essences/manipulation',
                'hexerei:belladonna_berries',

                'twilightforest:liveroot',
                'naturesaura:gold_leaf',

                'hexerei:dried_yellow_dock_flowers',
                '#forge:raw_ores/iron',
                'hexerei:dried_yellow_dock_flowers'
            ],
            inputFluid: '{Amount:1000,FluidName:"minecraft:water"}',
            processingTime: 60,
            id: `${id_prefix}raw_ironwood`
        },
        {
            output: 'mekanism:sps_casing',
            inputs: [
                '#forge:wires/steel',
                'powah:capacitor_nitro',
                '#forge:wires/steel',

                '#pneumaticcraft:plastic_sheets',
                '#pneumaticcraft:plastic_sheets',

                '#forge:wires/steel',
                'powah:capacitor_nitro',
                '#forge:wires/steel'
            ],
            inputFluid: '{Amount:1000,FluidName:"immersiveengineering:concrete"}',
            processingTime: 800,
            id: `${id_prefix}sps_casing`
        },
        {
            output: '12x minecraft:glowstone_dust',
            inputs: [
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores',
                'thermal:glowstone_mushroom_spores'
            ],
            inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
            processingTime: 40,
            id: `${id_prefix}glowstone_dust_from_spores`
        },
        {
            output: '12x minecraft:redstone',
            inputs: [
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores',
                'thermal:redstone_mushroom_spores'
            ],
            inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
            processingTime: 40,
            id: `${id_prefix}redstone_from_spores`
        },
        {
            output: '12x minecraft:gunpowder',
            inputs: [
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores',
                'thermal:gunpowder_mushroom_spores'
            ],
            inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
            processingTime: 40,
            id: `${id_prefix}gunpowder_from_spores`
        },
        {
            output: '12x minecraft:slime_ball',
            inputs: [
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores',
                'thermal:slime_mushroom_spores'
            ],
            inputFluid: '{Amount:50,FluidName:"minecraft:water"}',
            processingTime: 40,
            id: `${id_prefix}slime_ball_from_spores`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
