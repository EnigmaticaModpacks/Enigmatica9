ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const time_multiplier = 10;
    const id_prefix = 'enigmatica:expert/naturesaura/tree_ritual/';

    const recipes = [
        {
            output: 'naturesaura:offering_table',
            ingredients: [
                'naturesaura:infused_stone',
                'create:andesite_casing',
                '#forge:gems/source',
                '#forge:gems/source',
                'naturesaura:infused_stone',
                'create:andesite_casing',
                'naturesaura:infused_stone',
                'create:andesite_casing'
            ],
            time: 5,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}offering_table`
        },
        {
            output: 'ars_nouveau:blue_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'minecraft:water_bucket',
                'minecraft:water_bucket'
            ],
            time: 5,
            sapling: 'quark:blue_blossom_sapling',
            id: `${id_prefix}blue_archwood_sapling`
        },
        {
            output: 'ars_nouveau:purple_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'twilightforest:raven_feather',
                'twilightforest:raven_feather'
            ],
            time: 5,
            sapling: 'quark:lavender_blossom_sapling',
            id: `${id_prefix}purple_archwood_sapling`
        },
        {
            output: 'ars_nouveau:green_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'twilightforest:cicada',
                'twilightforest:cicada'
            ],
            time: 5,
            sapling: 'quark:yellow_blossom_sapling',
            id: `${id_prefix}green_archwood_sapling`
        },
        {
            output: 'ars_nouveau:red_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'minecraft:lava_bucket',
                'minecraft:lava_bucket'
            ],
            time: 5,
            sapling: 'quark:red_blossom_sapling',
            id: `${id_prefix}red_archwood_sapling`
        },
        {
            output: 'ars_elemental:yellow_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'twilightforest:firefly',
                'twilightforest:firefly'
            ],
            time: 5,
            sapling: 'quark:orange_blossom_sapling',
            id: `${id_prefix}yellow_archwood_sapling`
        },
        {
            output: '2x naturesaura:ancient_sapling',
            ingredients: [
                'quark:red_blossom_sapling',
                'twilightforest:liveroot',
                'hexerei:belladonna_flowers',
                'hexerei:sage',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            time: 5,
            sapling: 'quark:red_blossom_sapling',
            id: `naturesaura:tree_ritual/ancient_sapling`
        },
        {
            output: '2x quark:ancient_sapling',
            ingredients: [
                'quark:yellow_blossom_sapling',
                'twilightforest:liveroot',
                'hexerei:belladonna_flowers',
                'hexerei:sage',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            time: 5,
            sapling: 'quark:yellow_blossom_sapling',
            id: `${id_prefix}ancient_sapling`
        },
        {
            output: 'naturesaura:furnace_heater',
            ingredients: [
                'twilightforest:torchberries',
                'naturesaura:infused_stone',
                '#forge:gems/source',
                '#forge:gems/source',
                'naturesaura:gold_leaf',
                'minecraft:flint',
                'naturesaura:gold_leaf',
                'minecraft:flint'
            ],
            time: 5,
            sapling: 'quark:red_blossom_sapling',
            id: 'naturesaura:tree_ritual/furnace_heater'
        },
        {
            output: 'naturesaura:break_prevention',
            ingredients: [
                'ars_nouveau:mendosteen_pod',
                '#forge:ingots/steeleaf',
                '#forge:ingots/steeleaf',
                '#forge:ingots/steeleaf'
            ],
            time: 5,
            sapling: 'hexerei:mahogany_sapling',
            id: 'naturesaura:tree_ritual/break_prevention'
        },
        {
            output: 'occultism:soul_gem',
            ingredients: [
                '#forge:gems/diamond',
                '#forge:dusts/silver',
                'hexerei:dried_sage_bundle',
                'hexerei:dried_sage_bundle',
                'naturesaura:gold_leaf'
            ],
            time: 5,
            sapling: 'quark:lavender_blossom_sapling',
            id: `${id_prefix}soul_gem`
        },
        {
            output: 'naturesaura:eye',
            ingredients: [
                'hexerei:mindful_trance_blend',
                '#forge:ingots/silver',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            time: 25,
            sapling: 'hexerei:mahogany_sapling',
            id: 'naturesaura:tree_ritual/eye'
        },
        {
            output: 'naturesaura:eye_improved',
            ingredients: ['naturesaura:eye', '#forge:ingots/sky', 'naturesaura:gold_leaf', 'naturesaura:gold_leaf'],
            time: 25,
            sapling: 'hexerei:mahogany_sapling',
            id: 'naturesaura:tree_ritual/eye_improved'
        },
        {
            output: 'pneumaticcraft:drill_bit_compressed_iron',
            ingredients: [
                '#forge:ingots/infused_iron',
                '#forge:essences/abjuration',
                '#forge:essences/earth',
                '#forge:essences/earth'
            ],
            time: 40,
            sapling: 'quark:yellow_blossom_sapling',
            id: `${id_prefix}drill_bit_compressed_iron`
        },
        {
            output: 'ars_nouveau:storage_lectern',
            ingredients: [
                'ars_nouveau:archwood_chest',
                'ars_nouveau:archwood_chest',
                'ars_nouveau:blank_parchment',
                'ars_nouveau:blank_parchment',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            time: 20,
            sapling: 'ars_nouveau:blue_archwood_sapling',
            id: `${id_prefix}storage_lectern`
        },
        {
            output: 'enigmaticunity:dim_source_generator',
            ingredients: [
                'kubejs:dim_arcanite_crystal',
                '#forge:planks/archwood',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                'naturesaura:gold_leaf'
            ],
            time: 20,
            sapling: 'ars_elemental:yellow_archwood_sapling',
            id: `${id_prefix}dim_source_generator`
        },
        {
            output: 'enigmaticunity:bright_source_generator',
            ingredients: [
                'kubejs:bright_arcanite_crystal',
                '#forge:planks/archwood',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                'naturesaura:gold_leaf'
            ],
            time: 20,
            sapling: 'ars_elemental:yellow_archwood_sapling',
            id: `${id_prefix}bright_source_generator`
        },
        {
            output: 'enigmaticunity:iridescent_source_generator',
            ingredients: [
                'kubejs:iridescent_arcanite_crystal',
                '#forge:planks/archwood',
                '#forge:ingots/depths',
                '#forge:ingots/depths',
                'naturesaura:gold_leaf'
            ],
            time: 20,
            sapling: 'ars_elemental:yellow_archwood_sapling',
            id: `${id_prefix}iridescent_source_generator`
        },
        {
            output: 'ars_nouveau:scribes_table',
            ingredients: [
                'supplementaries:antique_ink',
                '#forge:ingots/infused_iron',
                '#forge:planks/archwood',
                '#forge:planks/archwood',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                '#forge:fabrics/infused',
                '#forge:fabrics/infused'
            ],
            time: 40,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}scribes_table`
        },
        {
            output: 'thermal:glowstone_mushroom_spores',
            ingredients: [
                'minecraft:warped_fungus',
                'thermal:phytosoil',
                '#forge:storage_blocks/glowstone',
                '#forge:storage_blocks/glowstone',
                'naturesaura:gold_leaf',
                '#forge:essences/manipulation'
            ],
            time: 40,
            sapling: 'quark:ancient_sapling',
            id: `${id_prefix}glowstone_mushroom_spores`
        },
        {
            output: 'thermal:gunpowder_mushroom_spores',
            ingredients: [
                'minecraft:crimson_fungus',
                'thermal:phytosoil',
                '#forge:storage_blocks/gunpowder',
                '#forge:storage_blocks/gunpowder',
                'naturesaura:gold_leaf',
                '#forge:essences/manipulation'
            ],
            time: 40,
            sapling: 'quark:ancient_sapling',
            id: `${id_prefix}gunpowder_mushroom_spores`
        },
        {
            output: 'thermal:slime_mushroom_spores',
            ingredients: [
                'minecraft:warped_fungus',
                'thermal:phytosoil',
                'minecraft:slime_block',
                'minecraft:slime_block',
                'naturesaura:gold_leaf',
                '#forge:essences/manipulation'
            ],
            time: 40,
            sapling: 'quark:ancient_sapling',
            id: `${id_prefix}slime_mushroom_spores`
        },
        {
            output: 'thermal:redstone_mushroom_spores',
            ingredients: [
                'minecraft:crimson_fungus',
                'thermal:phytosoil',
                '#forge:storage_blocks/redstone',
                '#forge:storage_blocks/redstone',
                'naturesaura:gold_leaf',
                '#forge:essences/manipulation'
            ],
            time: 40,
            sapling: 'quark:ancient_sapling',
            id: `${id_prefix}redstone_mushroom_spores`
        },
        {
            output: 'kubejs:primed_aetheric_heart',
            ingredients: [
                '#forge:storage_blocks/nitro_crystal',
                '#forge:storage_blocks/soul_steel',
                'spirit:soul_slate',
                'spirit:soul_slate',
                '#forge:storage_blocks/energized_steel',
                '#forge:storage_blocks/energized_steel',
                '#forge:storage_blocks/energized_steel',
                '#forge:storage_blocks/energized_steel'
            ],
            time: 20,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}primed_aetheric_heart`
        },
        {
            output: 'occultism:storage_stabilizer_tier1',
            ingredients: [
                'occultism:wormhole_frame',
                'kubejs:dimensional_storage_crystal',
                'ae2:fluix_pearl',
                'ae2:fluix_pearl',
                '#forge:ingots/bronze',
                '#forge:ingots/bronze',
                '#forge:ingots/bronze',
                '#forge:ingots/bronze'
            ],
            time: 40,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}storage_stabilizer_tier1`
        },
        {
            output: 'occultism:storage_stabilizer_tier2',
            ingredients: [
                'occultism:storage_stabilizer_tier1',
                'ae2:spatial_cell_component_2',
                'ae2:singularity',
                'ae2:singularity',
                '#forge:ingots/aluminum',
                '#forge:ingots/aluminum',
                '#forge:ingots/aluminum',
                '#forge:ingots/aluminum'
            ],
            time: 40,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}storage_stabilizer_tier2`
        },
        {
            output: 'occultism:storage_stabilizer_tier3',
            ingredients: [
                'occultism:storage_stabilizer_tier2',
                'ae2:spatial_cell_component_16',
                'ae2:singularity',
                'ae2:singularity',
                '#forge:ingots/brass',
                '#forge:ingots/brass',
                '#forge:ingots/brass',
                '#forge:ingots/brass'
            ],
            time: 40,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}storage_stabilizer_tier3`
        },
        {
            output: 'occultism:storage_stabilizer_tier4',
            ingredients: [
                'occultism:storage_stabilizer_tier3',
                'ae2:spatial_cell_component_128',
                'ae2:singularity',
                'ae2:singularity',
                '#forge:ingots/osmium',
                '#forge:ingots/osmium',
                '#forge:ingots/osmium',
                '#forge:ingots/osmium'
            ],
            time: 40,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}storage_stabilizer_tier4`
        },

        {
            output: 'ars_elemental:fire_focus',
            ingredients: [
                '#forge:essences/fire',
                'ae2:charged_certus_quartz_crystal',
                '#forge:wires/electrum',
                '#forge:wires/electrum',

                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            time: 40,
            sapling: 'ars_nouveau:red_archwood_sapling',
            id: `${id_prefix}fire_focus`
        },
        {
            output: 'ars_elemental:water_focus',
            ingredients: [
                '#forge:essences/water',
                'ae2:charged_certus_quartz_crystal',
                '#forge:wires/electrum',
                '#forge:wires/electrum',

                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            time: 40,
            sapling: 'ars_nouveau:blue_archwood_sapling',
            id: `${id_prefix}water_focus`
        },
        {
            output: 'ars_elemental:air_focus',
            ingredients: [
                '#forge:essences/air',
                'ae2:charged_certus_quartz_crystal',
                '#forge:wires/electrum',
                '#forge:wires/electrum',

                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            time: 40,
            sapling: 'ars_elemental:yellow_archwood_sapling',
            id: `${id_prefix}air_focus`
        },
        {
            output: 'ars_elemental:earth_focus',
            ingredients: [
                '#forge:essences/earth',
                'ae2:charged_certus_quartz_crystal',
                '#forge:wires/electrum',
                '#forge:wires/electrum',

                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            time: 40,
            sapling: 'ars_nouveau:green_archwood_sapling',
            id: `${id_prefix}earth_focus`
        },
        {
            output: 'ars_elemental:necrotic_focus',
            ingredients: [
                '#forge:essences/anima',
                'ae2:charged_certus_quartz_crystal',
                '#forge:wires/electrum',
                '#forge:wires/electrum',

                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            time: 40,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}necrotic_focus`
        },
        {
            output: 'ars_nouveau:summon_focus',
            ingredients: [
                '#forge:essences/conjuration',
                'ae2:charged_certus_quartz_crystal',
                '#forge:wires/electrum',
                '#forge:wires/electrum',

                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            time: 40,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}summon_focus`
        },
        {
            output: 'ars_nouveau:shapers_focus',
            ingredients: [
                '#forge:essences/manipulation',
                'ae2:charged_certus_quartz_crystal',
                '#forge:wires/electrum',
                '#forge:wires/electrum',

                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust'
            ],
            time: 40,
            sapling: 'hexerei:mahogany_sapling',
            id: `${id_prefix}shapers_focus`
        }

        /*
        {
            ingredients: [
                item, //top
                item, //bottom
                item, //left
                item, //right

                item, //topleft
                item, //bottomright
                item, //topright
                item //bottomleft
            output: 'naturesaura:oak_generator',
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:oak_generator'
        }
        */
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toJson();
        recipe.time = recipe.time * time_multiplier;

        event.custom(recipe).id(recipe.id);
    });
});
