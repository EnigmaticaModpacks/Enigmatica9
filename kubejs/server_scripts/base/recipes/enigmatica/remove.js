ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { id: /ars_nouveau:.*_dye/ },

        { id: /mekanism:enriching\/dye/ },
        { id: /mekanism:compat\/byg\/dye/ },
        { id: /mekanism:compat\/byg\/sawing\/log/ },
        { id: /mekanism:sawing\/log/ },
        { id: /mekanism:compat\/byg\/combining\/.*_ore_/ },
        { id: /mekanism:bin\/.*/ },
        { id: 'mekanism:processing/netherite/dust_to_ancient_debris' },
        { id: /mekanism:crushing\/biofuel/ },

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

        { type: 'immersiveengineering:sawmill' },
        { type: 'immersiveengineering:cloche' },
        { type: 'immersiveengineering:generated_list' },
        { type: 'immersiveengineering:alloy' },
        { type: 'immersiveengineering:squeezer' },
        { type: 'immersiveengineering:fermenter' },

        { type: 'thermal:sawmill' },
        { type: 'thermal:pulverizer_recycle' },
        { type: 'thermal:insolator' },
        { type: 'thermal:compression_fuel' },

        { mod: 'gateways' },

        //// Emendatus Enigmatica Related stuff

        { id: /industrialforegoing:.*_gear/ },                              // Gears
        { id: /hammercrushing/, mod: 'immersiveengineering' },              // Dusts.js related
        { id: /immersiveengineering:crafting\/plate_.*_hammering/ },        // plates.js related
        { id: /immersiveengineering:crafting\/stick_/ },                    // rods.js related
        { id: /emendatusenigmatica:ingot\/from_dust.*\/refined_obsidian/ }, // Removes smelting recipes dust -> ingot for Refined Obsidian
        
        // Ore Processing Related

        // Slurries
        { id: /mekanism:processing\/.*\/slurry/ },
        { id: /mekanism:processing\/.*\/crystal\/from_slurry/ },

        // Ore -> Shards etc
        { id: /mekanism:processing\/.*\/from_raw_block/ }, 
        { id: /mekanism:processing\/.*\/from_raw_ore/ },
        { id: /mekanism:processing\/.*\/from_ore/ },

        // Combiner
        { id: /mekanism:processing\/.*\/ore\/.*from_raw$/ }, 
        { id: /mekanism:processing\/.*\/to_ore$/ },
        { id: /mekanism:processing\/.*\/to_deepslate_ore$/ },

        { type: 'create:crushing', id: /_ore$/ },
        { type: 'create:crushing', id: /_recycling$/ },
        { type: 'create:crushing', id: /raw_/ },
        { type: 'create:splashing', id: /_ore$/ },

        { type: 'immersiveengineering:crusher', id: /raw_block/ },
        { type: 'immersiveengineering:crusher', id: /raw_ore/ },
        { type: 'immersiveengineering:crusher', id: /ore_/ },

        { type: 'thermal:pulverizer', id: /pulverizer_raw/ },
        { type: 'thermal:pulverizer', id: /pulverizer_.*_ore/ },
        { type: 'thermal:centrifuge', id: /crushed_.*_ore/ },

        { id: 'thermal:machines/pulverizer/pulverizer_apatite'},
        { id: 'thermal:machines/pulverizer/pulverizer_cinnabar'},
        { id: 'thermal:machines/pulverizer/pulverizer_niter'},
        { id: 'thermal:machines/pulverizer/pulverizer_sulfur'},
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