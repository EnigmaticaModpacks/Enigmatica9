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
            output: '3x industrialforegoing:machine_frame_advanced',
            inputs: [
                '#forge:ingots/soul_steel',
                'immersiveengineering:rs_engineering',
                '#forge:ingots/soul_steel',
                'immersiveengineering:light_engineering',

                'immersiveengineering:light_engineering',
                'ae2:calculation_processor',
                'powah:capacitor_spirited',
                'ae2:calculation_processor'
            ],
            inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
            processingTime: 800,
            id: `${id_prefix}machine_frame_advanced`
        },
        {
            output: '3x industrialforegoing:machine_frame_supreme',
            inputs: [
                '#forge:ingots/depths',
                'immersiveengineering:rs_engineering',
                '#forge:ingots/depths',
                'immersiveengineering:heavy_engineering',

                'immersiveengineering:heavy_engineering',
                'ae2:engineering_processor',
                'powah:capacitor_nitro',
                'ae2:engineering_processor'
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
            inputFluid: '{Amount:1000,FluidName:"hexerei:quicksilver_fluid"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/speed_addon_1`
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
            output: '4x mekanism:upgrade_speed',
            inputs: [
                'powah:blank_card',
                'ars_nouveau:starbuncle_charm',
                'powah:blank_card',
                '#forge:gems/therium',
                '#forge:gems/therium',
                'powah:blank_card',
                'pneumaticcraft:printed_circuit_board',
                'powah:blank_card'
            ],
            inputFluid: '{Amount:1000,FluidName:"hexerei:quicksilver_fluid"}',
            processingTime: 200,
            id: `${id_prefix}upgrade_speed`
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
            output: '4x mekanism:upgrade_energy',
            inputs: [
                'powah:blank_card',
                'ars_nouveau:amethyst_golem_charm',
                'powah:blank_card',
                '#forge:gems/therium',
                '#forge:gems/therium',
                'powah:blank_card',
                'pneumaticcraft:printed_circuit_board',
                'powah:blank_card'
            ],
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `${id_prefix}upgrade_energy`
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
            inputFluid: '{Amount:1000,FluidName:"pneumaticcraft:lubricant"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/efficiency_addon_2`
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
            inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/processing_addon_1`
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
            inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
            processingTime: 200,
            id: `industrialforegoing:dissolution_chamber/processing_addon_2`
        },
        {
            output: '4x mekanism:upgrade_gas',
            inputs: [
                'powah:blank_card',
                'pneumaticcraft:regulator_tube_module',
                'powah:blank_card',
                '#forge:gems/therium',
                '#forge:gems/therium',
                'powah:blank_card',
                'pneumaticcraft:printed_circuit_board',
                'powah:blank_card'
            ],
            inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
            processingTime: 200,
            id: `${id_prefix}upgrade_gas`
        },

        {
            output: '4x mekanism:upgrade_muffling',
            inputs: [
                'powah:blank_card',
                '#minecraft:wool',
                'powah:blank_card',
                '#forge:gems/therium',
                '#forge:gems/therium',
                'powah:blank_card',
                '#minecraft:wool',
                'powah:blank_card'
            ],
            inputFluid: '{Amount:1000,FluidName:"minecraft:water"}',
            processingTime: 200,
            id: `${id_prefix}upgrade_muffling`
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
            output: '2x mekanism:sps_casing',
            inputs: [
                'immersiveengineering:coil_hv',
                '#pneumaticcraft:plastic_sheets',
                'immersiveengineering:coil_hv',

                '#pneumaticcraft:plastic_sheets',
                '#pneumaticcraft:plastic_sheets',

                'immersiveengineering:coil_hv',
                '#industrialforegoing:machine_frame/supreme',
                'immersiveengineering:coil_hv'
            ],
            inputFluid: '{Amount:8000,FluidName:"immersiveengineering:concrete"}',
            processingTime: 1600,
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
        },
        {
            output: '4x quark:dragon_scale',
            inputs: [
                'minecraft:obsidian',
                'twilightforest:armor_shard',
                'twilightforest:armor_shard',
                'twilightforest:armor_shard',
                'twilightforest:armor_shard'
            ],
            inputFluid: '{Amount:50,FluidName:"thermal:ender"}',
            processingTime: 200,
            id: `${id_prefix}dragon_scale`
        },
        {
            output: 'minecraft:dragon_head',
            inputs: [
                'ars_nouveau:wilden_horn',
                'minecraft:obsidian',
                'ars_nouveau:wilden_horn',
                'minecraft:chorus_flower',
                'minecraft:chorus_flower',
                '#forge:gems/dimensional',
                '#forge:gems/dimensional',
                '#forge:gems/dimensional'
            ],
            inputFluid: '{Amount:8000,FluidName:"thermal:ender"}',
            processingTime: 1200,
            id: `${id_prefix}dragon_head`
        },
        {
            output: 'minecraft:dragon_egg',
            inputs: [
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                '#forge:gems/infused_ender',
                'minecraft:obsidian'
            ],
            inputFluid: '{Amount:1000,FluidName:"thermal:ender"}',
            processingTime: 200,
            id: `${id_prefix}dragon_egg`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
