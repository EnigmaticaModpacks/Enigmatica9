ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { mod: 'computercraft' },
        { mod: 'superiorshields' },
        { output: 'twilightforest:raw_ironwood' },
        { output: 'minecraft:blast_furnace' },
        { output: 'minecraft:furnace' },
        { output: 'create:andesite_alloy' },

        { type: 'thermal:smelter_recycle' },
        { type: 'ae2:charger' },

        { id: /immersiveengineering:blastfurnace\/fuel_charcoal/ },
        { id: /immersiveengineering:crafting\/.*_mix/ },
        { id: 'immersiveengineering:crafting/treated_wood_horizontal' },

        { id: 'ae2:network/blocks/crystal_processing_charger' },
        { id: 'ae2:network/parts/quartz_fiber_part' },

        { id: 'ars_nouveau:imbuement_chamber' },
        { id: 'ars_nouveau:wixie_charm' },
        { id: 'ars_nouveau:starbuncle_charm' },
        { id: 'ars_nouveau:magebloom_crop' },
        { id: 'ars_nouveau:mycelial_sourcelink' },
        { id: 'ars_nouveau:vitalic_sourcelink' },
        { id: 'ars_nouveau:volcanic_sourcelink' },
        { id: 'ars_nouveau:agronomic_sourcelink' },

        { id: 'constructionwand:stone_wand' },
        { id: 'constructionwand:iron_wand' },

        { id: 'create:crafting/kinetics/white_sail' },
        { id: 'create:mechanical_crafting/wand_of_symmetry' },
        { id: 'create:crafting/kinetics/empty_blaze_burner' },
        { id: 'create:conversion_0' },

        { id: 'hexerei:pestle_and_mortar_from_mixing_cauldron' },
        { id: 'hexerei:willow_broom_from_mixing_cauldron' },
        { id: 'hexerei:blood_sigil_from_mixing_cauldron' },
        { id: 'hexerei:herb_jar_from_mixing_cauldron' },
        { id: 'hexerei:mixing_cauldron' },

        { id: 'immersiveengineering:blastfurnace/steel' },

        { id: 'industrialforegoing:washing_factory' },
        { id: 'industrialforegoing:fermentation_station' },
        { id: 'industrialforegoing:fluid_sieving_machine' },

        { id: 'pneumaticcraft:pressure_chamber/compressed_stone' },
        { id: 'pneumaticcraft:pressure_chamber_valve' },
        { id: 'pneumaticcraft:pressure_chamber_glass' },
        { id: 'pneumaticcraft:thermal_compressor' },
        { id: 'pneumaticcraft:advanced_air_compressor' },
        { id: 'pneumaticcraft:advanced_liquid_compressor' },
        { id: 'pneumaticcraft:liquid_compressor' },
        { id: 'pneumaticcraft:solar_compressor' },
        { id: 'pneumaticcraft:manual_compressor' },
        { id: 'pneumaticcraft:logistics_core' },
        { id: 'pneumaticcraft:spawner_agitator' },
        { id: 'pneumaticcraft:module_expansion_card' },

        { id: 'supplementaries:jar' },

        { id: 'thermal:enderium_dust_2' },
        { id: 'thermal:lumium_dust_4' },
        { id: 'thermal:signalum_dust_4' },
        { id: 'thermal:invar_dust_3' },
        { id: 'thermal:bronze_dust_4' },
        { id: 'thermal:jar_4' },

        { id: 'twilightforest:equipment/fiery_ingot_crafting' },
        { id: 'twilightforest:material/fiery_iron_ingot' },
        { id: 'twilightforest:material/fiery_iron_ingot_reversed' },

        { id: /chalk/, mod: 'occultism' },

        // Disable Power Generation

        { id: 'ae2:network/blocks/energy_vibration_chamber' },

        { id: 'createaddition:mechanical_crafting/alternator' },
        { id: 'createaddition:crafting/modular_accumulator' },

        { id: 'immersiveengineering:crafting/electric_lantern' },
        { id: 'immersiveengineering:crafting/transformer' },
        { id: 'immersiveengineering:crafting/thermoelectric_generator' },
        { id: 'immersiveengineering:crafting/dynamo' },

        { id: 'mekanismgenerators:rotational_complex' },
        { id: 'mekanismgenerators:reactor/glass' },
        { id: 'mekanismgenerators:saturating_condenser' },
        { id: 'mekanismgenerators:control_rod_assembly' },
        { id: 'mekanismgenerators:hohlraum' },
        { id: 'mekanismgenerators:laser_focus_matrix' },

        { id: 'pneumaticcraft:pneumatic_dynamo' },

        { mod: 'immersiveengineering', id: /capacitor/ },
        { mod: 'immersiveengineering', id: /_lv/ },
        { mod: 'immersiveengineering', id: /_mv/ },
        { mod: 'immersiveengineering', id: /_hv/ },
        { mod: 'industrialforegoing', id: /mycelial/ },
        { mod: 'industrialforegoing', id: /generator/ },
        { mod: 'mekanism', id: /induction/ },
        { mod: 'mekanism', id: /energy_cube/ },
        { mod: 'mekanismgenerators', id: /generator\/(?!gas_burning$)/ },
        { mod: 'mekanismgenerators', id: /turbine/ },
        { mod: 'mekanismgenerators', id: /fission/ },
        { mod: 'mekanismgenerators', id: /reactor/ },
        { mod: 'powah', id: /solar_panel/ },
        { mod: 'powah', id: /thermo_generator/ },
        { mod: 'powah', id: /magmator/ },
        { mod: 'powah', id: /furnator/ },
        { mod: 'thermal', id: /dynamo/ },

        // Disable Ore Processing

        { type: 'minecraft:smelting', output: '#forge:nuggets' },
        { type: 'minecraft:smelting', output: '#forge:ingots' },
        { type: 'minecraft:smelting', output: '#forge:gems' },
        { type: 'minecraft:smelting', output: '#forge:dusts' },
        { type: 'minecraft:smelting', output: /ingot_from_crushed/ },

        // { type: 'minecraft:blasting', input: '#forge:ores' },
        // { type: 'minecraft:blasting', input: '#forge:raw_materials' },

        { type: 'minecraft:blasting', output: '#forge:nuggets' },
        { type: 'minecraft:blasting', output: '#forge:ingots' },
        { type: 'minecraft:blasting', output: '#forge:gems' },
        { type: 'minecraft:blasting', output: '#forge:dusts' },
        { type: 'minecraft:blasting', output: /ingot_from_crushed/ },

        { type: 'create:crushing', id: /_ore$/ },
        { type: 'create:crushing', id: /_recycling$/ },
        { type: 'create:crushing', id: /raw_/ },
        { type: 'create:splashing', id: /_ore$/ },

        { type: 'immersiveengineering:arc_furnace' },
        { type: 'immersiveengineering:crusher', id: /raw_block/ },
        { type: 'immersiveengineering:crusher', id: /raw_ore/ },
        { type: 'immersiveengineering:crusher', id: /ore_/ },
        { type: 'immersiveengineering:crusher', id: /ingot_/ },

        { type: 'thermal:smelter' },
        { type: 'thermal:centrifuge', id: /centrifuge_.*_dust/ },
        { type: 'thermal:centrifuge', id: /crushed_.*_ore/ },
        { type: 'thermal:pulverizer', id: /ingot_to_dust/ },
        { type: 'thermal:pulverizer', id: /pulverizer_raw/ },
        { type: 'thermal:pulverizer', id: /pulverizer_.*_ore/ },

        { type: 'occultism:crushing', id: /dust/ },

        { id: 'create:crushing/crimsite' },
        { id: 'create:crushing/asurine' },
        { id: 'create:crushing/ochrum' },
        { id: 'create:crushing/veridium' },
        { id: 'create:crushing/tuff' },
        { id: 'create:crushing/calcite' },
        { id: 'create:crushing/dripstone_block' },
        { id: 'create:crushing/diorite' },
        { id: 'create:splashing/gravel' },
        { id: 'create:splashing/soul_sand' },
        { id: 'create:splashing/red_sand' },

        { id: /hammercrushing/, mod: 'immersiveengineering' },
        { id: /block_blast/, mod: 'quark' },

        { id: /mekanism:processing\/.*\/slurry/ },
        { id: /mekanism:processing\/.*\/crystal/ },
        { id: /mekanism:processing\/.*\/shard/ },
        { id: /mekanism:processing\/.*\/clump/ },
        { id: /mekanism:processing\/.*\/dirty_dust/ },
        { id: /mekanism:processing\/.*\/dust/ },

        { id: /thermal:fire_charge/ },
        { id: 'thermal:compat/create/pulverizer_create_crimsite' },
        { id: 'thermal:compat/create/pulverizer_create_asurine' },
        { id: 'thermal:compat/create/pulverizer_create_ochrum' },
        { id: 'thermal:compat/create/pulverizer_create_veridium' },
        { id: 'thermal:machines/pulverizer/pulverizer_diorite' },
        { id: 'thermal:machines/pulverizer/pulverizer_granite' },
        { id: 'thermal:machines/pulverizer/pulverizer_andesite' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
