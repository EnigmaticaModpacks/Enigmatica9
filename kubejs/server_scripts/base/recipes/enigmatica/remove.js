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
        { mod: 'theoneprobe' },

        { output: /pendorite/ },
        { output: /emeraldite/ },
        { output: /ametrine/ },

        { output: /thermal.*cinnabar_ore/ },
        { output: /thermal.*niter_ore/ },
        { output: /thermal.*sulfur_ore/ },
        { output: /thermal.*sapphire_ore/ },
        { output: /thermal.*ruby_ore/ },
        { output: /mekanism.*fluorite_ore/ },
        { output: /rftoolsbase:dimensionalshard_/ },

        { input: /thermal.*cinnabar_ore/ },
        { input: /thermal.*niter_ore/ },
        { input: /thermal.*sulfur_ore/ },
        { input: /thermal.*sapphire_ore/ },
        { input: /thermal.*ruby_ore/ },
        { input: /mekanism.*fluorite_ore/ },
        { input: /rftoolsbase:dimensionalshard_/ },

        { id: /ars_nouveau:.*_dye/ },

        { id: 'create:compat/ae2/mixing/fluix_crystal' },
        { id: 'create:compat/byg/crushing/lignite_ore' },

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
        { id: 'createaddition:compat/immersiveengineering/crushing/coal_coke' },
        { id: 'createaddition:compat/immersiveengineering/crushing/coke_block' },

        { id: 'hexerei:black_dye_from_pestle_and_mortar' },

        { id: `industrialforegoing:stonework_generate/diorite` },
        { id: `industrialforegoing:stonework_generate/granite` },
        { id: `industrialforegoing:stonework_generate/andesite` },
        { id: `industrialforegoing:laser_drill_ore/ores/cinnabar` },

        { id: 'immersiveengineering:crafting/coal_coke_to_coke' },

        { id: /mekanism:enriching\/dye/ },
        { id: /mekanism:compat\/byg\/dye/ },
        { id: /mekanism:compat\/byg\/sawing\/log/ },
        { id: /mekanism:sawing\/log/ },
        { id: /mekanism:compat\/byg\/combining\/.*_ore_/ },
        { id: /mekanism:bin\/.*/ },
        { id: 'mekanism:processing/netherite/dust_to_ancient_debris' },
        { id: /mekanism:crushing\/biofuel/ },
        { id: `mekanism:processing/bronze/ingot/from_infusing` },

        { id: 'minecraft:bone_meal' },
        { id: 'minecraft:glass' },

        { id: /naturesaura:animal_spawner\/sheep_/ },

        { id: 'occultism:crafting/butcher_knife' },
        { id: /occultism:miner\/.*\/deepslate_/ },
        { id: 'occultism:miner/ores/sapphire_ore' },
        { id: 'occultism:miner/ores/ruby_ore' },

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

        { id: 'quark:tweaks/smelting/bone_meal_utility' },

        { id: 'rftoolsbase:dimensionalshard' },

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
        { id: 'thermal:machines/press/packing3x3/press_coal_coke_packing' },
        { id: 'thermal:machines/press/unpacking/press_coal_coke_unpacking' },
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

        { type: 'industrialforegoing:laser_drill_ore' },

        { type: 'pneumaticcraft:fuel_quality' },

        { type: 'starbunclemania:fluid_sourcelink' },

        { type: 'thermal:lapidary_fuel' },
        { type: 'thermal:sawmill' },
        { type: 'thermal:pulverizer_recycle' },
        { type: 'thermal:insolator' },
        { type: 'thermal:compression_fuel' },

        //// Emendatus Enigmatica Related stuff

        { id: /emendatusenigmatica:tinted_glass\/from_shard/ }, // Cluster Compat, it is disabled for purpose we have, but if the future you want to enable it back, this should be modified!
        { id: /emendatusenigmatica:spyglass\/from_shard/ }, // Cluster Compat, it is disabled for purpose we have, but if the future you want to enable it back, this should be modified!
        { id: /industrialforegoing:.*_gear/ }, // Gears
        { id: /hammercrushing/, mod: 'immersiveengineering' }, // Dusts.js related
        { id: /immersiveengineering:crafting\/plate_.*_hammering/ }, // plates.js related
        { id: /immersiveengineering:crafting\/stick_/ }, // rods.js related
        { id: /emendatusenigmatica:ingot\/from_dust.*\/refined_obsidian/ }, // Removes smelting recipes dust -> ingot for Refined Obsidian
        { id: 'create:crushing/veridium' },
        { id: 'create:crushing/ochrum' },
        { id: 'create:crushing/crimsite' },
        { id: 'create:crushing/asurine' },
        { id: 'create:crushing/tuff' },
        { id: 'create:splashing/red_sand' },
        { id: 'create:splashing/soul_sand' },
        { id: 'create:splashing/gravel' },
        { id: 'thermal:compat/create/pulverizer_create_veridium' },
        { id: 'thermal:compat/create/pulverizer_create_ochrum' },
        { id: 'thermal:compat/create/pulverizer_create_crimsite' },
        { id: 'thermal:compat/create/pulverizer_create_asurine' },
        { id: 'thermal:machines/pulverizer/pulverizer_gilded_blackstone' },

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

        { id: 'thermal:machines/pulverizer/pulverizer_apatite' },
        { id: 'thermal:machines/pulverizer/pulverizer_cinnabar' },
        { id: 'thermal:machines/pulverizer/pulverizer_niter' },
        { id: 'thermal:machines/pulverizer/pulverizer_sulfur' }
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
