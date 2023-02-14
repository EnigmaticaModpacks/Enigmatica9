ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }
        { mod: 'gateways' },
        { output: /pendorite/ },
        { output: /emeraldite/ },
        { output: /ametrine/ },

        { id: /ars_nouveau:.*_dye/ },

        { id: /createaddition:mixing\/biomass/ },
        { id: /createaddition:crafting\/.*spool/ },
        { id: 'createaddition:crafting/barbed_wire' },
        { id: 'createaddition:crafting/redstone_relay' },
        { id: 'createaddition:crafting/connector' },
        { id: 'createaddition:compacting/seed_oil' },
        { id: 'createaddition:mixing/bioethanol' },
        { id: 'createaddition:mechanical_crafting/accumulator' },
        { id: 'createaddition:rolling/copper_plate' },
        { id: 'createaddition:rolling/iron_plate' },
        { id: 'createaddition:metalpress/wire_iron' },
        { id: 'createaddition:rolling/gold_plate' },
        { id: 'createaddition:metalpress/wire_gold' },
        { id: 'createaddition:rolling/straw' },
        { id: 'createaddition:compat/ae2/charged_certus_quartz' },
        { id: 'createaddition:crafting/accumulator_conversion' },

        { id: /mekanism:enriching\/dye/ },
        { id: /mekanism:compat\/byg\/dye/ },
        { id: /mekanism:compat\/byg\/sawing\/log/ },
        { id: /mekanism:sawing\/log/ },
        { id: /mekanism:compat\/byg\/combining\/.*_ore_/ },
        { id: /mekanism:bin\/.*/ },
        { id: /mekanism:crushing\/biofuel/ },
        { id: 'mekanism:processing/netherite/dust_to_ancient_debris' },
        { id: /mekanism:processing\/.*\/ore\/.*from_raw$/ },
        { id: /mekanism:processing\/.*\/to_ore$/ },
        { id: /mekanism:processing\/.*\/to_deepslate_ore$/ },

        { id: 'quark:tweaks/smelting/bone_meal_utility' },

        { id: 'create:compat/ae2/mixing/fluix_crystal' },
        { id: 'create:compat/byg/crushing/lignite_ore' },

        { id: 'hexerei:black_dye_from_pestle_and_mortar' },

        { id: 'occultism:crafting/butcher_knife' },

        { id: 'thermal:machines/centrifuge/centrifuge_allium' },
        { id: 'thermal:machines/centrifuge/centrifuge_azure_bluet' },
        { id: 'thermal:machines/centrifuge/centrifuge_blue_orchid' },
        { id: 'thermal:machines/centrifuge/centrifuge_cornflower' },
        { id: 'thermal:machines/centrifuge/centrifuge_dandelion' },
        { id: 'thermal:machines/centrifuge/centrifuge_lilac' },
        { id: 'thermal:machines/centrifuge/centrifuge_lily_of_the_valley' },
        { id: 'thermal:machines/centrifuge/centrifuge_orange_tulip' },
        { id: 'thermal:machines/centrifuge/centrifuge_oxeye_daisy' },
        { id: 'thermal:machines/centrifuge/centrifuge_peony' },
        { id: 'thermal:machines/centrifuge/centrifuge_pink_tulip' },
        { id: 'thermal:machines/centrifuge/centrifuge_poppy' },
        { id: 'thermal:machines/centrifuge/centrifuge_red_tulip' },
        { id: 'thermal:machines/centrifuge/centrifuge_rose_bush' },
        { id: 'thermal:machines/centrifuge/centrifuge_sunflower' },
        { id: 'thermal:machines/centrifuge/centrifuge_white_tulip' },
        { id: 'thermal:machines/centrifuge/centrifuge_wither_rose' },
        { id: 'thermal:rockwool/white_rockwool_from_smelting' },
        { id: 'thermal:machines/smelter/smelter_gravel' },
        { id: 'thermal:storage/tomato_block' },
        { id: 'thermal:storage/flax_block' },
        { id: 'thermal:storage/rice_block' },
        { id: 'thermal:storage/onion_block' },
        { id: 'thermal:storage/hops_block' },

        { id: 'thermal:storage/tomato_from_block' },
        { id: 'thermal:storage/flax_from_block' },
        { id: 'thermal:storage/rice_from_block' },
        { id: 'thermal:storage/onion_from_block' },
        { id: 'thermal:storage/hops_from_block' },
        { id: 'thermal:machines/press/press_tomato_packing' },
        { id: 'thermal:machines/press/press_flax_packing' },
        { id: 'thermal:machines/press/press_rice_packing' },
        { id: 'thermal:machines/press/press_onion_packing' },
        { id: 'thermal:machines/press/press_hops_packing' },
        { id: 'thermal:machines/press/press_tomato_unpacking' },
        { id: 'thermal:machines/press/press_flax_unpacking' },
        { id: 'thermal:machines/press/press_rice_unpacking' },
        { id: 'thermal:machines/press/press_onion_unpacking' },
        { id: 'thermal:machines/press/press_hops_unpacking' },
        { id: 'thermal:fuels/gourmand/gourmand_tomato_block' },
        { id: 'thermal:fuels/gourmand/gourmand_onion_block' },
        { id: 'thermal:smelting/cured_rubber_from_smelting' },
        { id: 'thermal:rubber_3' },
        { id: 'thermal:rubber_from_vine' },
        { id: 'thermal:rubber_from_dandelion' },
        { id: 'thermal:machines/refinery/refinery_crude_oil' },
        { id: 'thermal:machines/refinery/refinery_heavy_oil' },
        { id: 'thermal:machines/refinery/refinery_light_oil' },
        { id: 'thermal:machines/pyrolyzer/pyrolyzer_bitumen' },
        { id: 'thermal:compat/immersiveengineering/press_ie_hemp_to_plantoil' },
        { id: 'thermal:storage/sugar_cane_block' },

        { id: /pneumaticcraft:thermo_plant\/vegetable_oil_from_/ },
        { id: /pneumaticcraft:thermo_plant\/ethanol_from_/ },

        { id: /powah:smelting/ },
        { id: /powah:energizing\/.*uraninite/ },
        { id: /powah:crafting\/.*_starter/ },
        { id: 'powah:energizing/blazing_crystal_2' },
        { id: 'powah:crafting/energy_cell_basic_2' },
        { id: 'powah:crafting/cable_basic_2' },
        { id: 'powah:crafting/capacitor_basic' },
        { id: 'powah:crafting/capacitor_basic_tiny' },

        { type: 'create:cutting' },
        { type: 'createaddition:liquid_burning' },

        { type: 'farmersdelight:cutting', id: /wood/ },
        { type: 'farmersdelight:cutting', id: /log/ },

        { type: 'immersiveengineering:sawmill' },
        { type: 'immersiveengineering:cloche' },
        { type: 'immersiveengineering:alloy' },
        { type: 'immersiveengineering:squeezer' },
        { type: 'immersiveengineering:fermenter' },
        { type: 'immersiveengineering:generator_fuel' },

        { type: 'pneumaticcraft:fuel_quality' },

        { type: 'thermal:lapidary_fuel' },
        { type: 'thermal:sawmill' },
        { type: 'thermal:pulverizer_recycle' },
        { type: 'thermal:insolator' },
        { type: 'thermal:compression_fuel' }
    ];

    colors.forEach((color) => {
        recipes.push(
            { type: 'create:milling', output: `minecraft:${color}_dye` },
            { type: 'farmersdelight:cutting', output: `minecraft:${color}_dye` },
            { type: 'minecraft:crafting_shapeless', output: `minecraft:${color}_dye` }
        );
    });

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
