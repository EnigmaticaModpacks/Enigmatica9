ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // Altar's Max Fill rate is 300 aura per tick. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    const id_prefix = 'enigmatica:expert/naturesaura/altar/';
    const recipes = [
        {
            output: 'emendatusenigmatica:infused_iron_ingot',
            input: '#forge:ingots/ironwood',
            aura: 7500,
            time: 40,
            id: 'naturesaura:altar/infused_iron'
        },
        {
            output: 'emendatusenigmatica:infused_iron_block',
            input: '#forge:storage_blocks/ironwood',
            aura: 67500,
            time: 350,
            id: 'naturesaura:altar/infused_iron_block'
        },
        {
            output: 'nomadictents:golden_mallet',
            input: 'nomadictents:mallet',
            aura: 500000,
            time: 1800,
            id: 'nomadictents:golden_mallet'
        },
        {
            output: '4x kubejs:kaolin_clay',
            input: '#forge:storage_blocks/clay',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 3000,
            time: 10,
            id: `${id_prefix}kaolin_clay_from_clay`
        },
        {
            output: 'twilightforest:steeleaf_ingot',
            input: 'naturesaura:gold_leaf',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 3000,
            time: 10,
            id: `${id_prefix}steeleaf_ingot`
        },
        {
            output: '9x rftoolsbase:dimensionalshard',
            input: 'the_bumblezone:glistering_honey_crystal',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 90000,
            time: 300,
            id: `${id_prefix}dimensionalshard`
        },
        {
            output: '4x kubejs:spirit_of_devotion',
            input: '#forge:gems/infused_diamond',
            catalyst: 'kubejs:gloaming_catalyst',
            aura: 600,
            time: 10,
            id: `${id_prefix}spirit_of_devotion`
        },
        {
            output: 'thermal:deep_aquachow',
            input: 'thermal:aquachow',
            aura: 300,
            time: 5,
            id: `${id_prefix}deep_aquachow`
        },
        {
            output: '4x byg:subzero_crystal_shard',
            input: '#forge:storage_blocks/therium',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 15000,
            time: 80,
            id: `${id_prefix}subzero_crystal_shard`
        },
        {
            output: '4x byg:therium_crystal_shard',
            input: '#forge:storage_blocks/subzero',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 15000,
            time: 80,
            id: `${id_prefix}therium_crystal_shard`
        },
        {
            output: 'pneumaticcraft:drill_bit_netherite',
            input: 'pneumaticcraft:unassembled_netherite_drill_bit',
            aura: 500000,
            time: 1800,
            id: `${id_prefix}drill_bit_netherite`
        },
        {
            output: 'spirit:soul_crystal',
            input: 'spirit:crude_soul_crystal',
            aura: 15000,
            time: 80,
            id: `${id_prefix}soul_crystal`
        },
        {
            output: '3x kubejs:mote_of_renewal',
            input: Item.of('minecraft:lingering_potion', { Potion: 'ars_nouveau:recovery_potion_strong' }).weakNBT(),
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 3000,
            time: 10,
            id: `${id_prefix}mote_of_renewal`
        },
        {
            output: 'minecraft:dragon_breath',
            input: 'minecraft:honey_bottle',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 3000,
            time: 10,
            id: `naturesaura:altar/breath`
        },
        {
            output: 'ars_nouveau:source_berry',
            input: 'hexerei:belladonna_berries',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 10000,
            time: 60,
            id: `${id_prefix}source_berry`
        },
        {
            output: 'minecraft:spore_blossom',
            input: 'twilightforest:huge_water_lily',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 5000,
            time: 60,
            id: `${id_prefix}spore_blossom`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.output = Item.of(recipe.output).toJson();
        if (recipe.catalyst) {
            recipe.catalyst = { item: recipe.catalyst };
        }
        event.custom(recipe).id(recipe.id);
    });
});
