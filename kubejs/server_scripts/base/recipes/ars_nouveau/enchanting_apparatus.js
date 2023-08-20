ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    const recipes = [];

    let armors = [
        {
            output: 'ars_nouveau:novice_hood',
            inputs: [
                'immersiveengineering:armor_faraday_head',
                'twilightforest:arctic_helmet',
                'minecraft:leather_helmet',
                'minecraft:chainmail_helmet',
                'minecraft:golden_helmet',
                'thermal:hazmat_helmet',
                'thermal:diving_helmet',
                'thermal:beekeeper_helmet',
                'minecraft:turtle_helmet',
                'create:copper_diving_helmet',
                'the_bumblezone:stingless_bee_helmet_1',
                'the_bumblezone:stingless_bee_helmet_2'
            ]
        },
        {
            output: 'ars_nouveau:novice_robes',
            inputs: [
                'immersiveengineering:armor_faraday_chest',
                'twilightforest:arctic_chestplate',
                'minecraft:leather_chestplate',
                'minecraft:chainmail_chestplate',
                'minecraft:golden_chestplate',
                'thermal:hazmat_chestplate',
                'thermal:diving_chestplate',
                'thermal:beekeeper_chestplate',
                'the_bumblezone:bumble_bee_chestplate_trans_2',
                'the_bumblezone:bumble_bee_chestplate_trans_1',
                'the_bumblezone:bumble_bee_chestplate_2',
                'the_bumblezone:bumble_bee_chestplate_1'
            ]
        },
        {
            output: 'ars_nouveau:novice_leggings',
            inputs: [
                'immersiveengineering:armor_faraday_legs',
                'twilightforest:arctic_leggings',
                'minecraft:leather_leggings',
                'minecraft:chainmail_leggings',
                'minecraft:golden_leggings',
                'thermal:hazmat_leggings',
                'thermal:diving_leggings',
                'thermal:beekeeper_leggings',
                'the_bumblezone:honey_bee_leggings_2',
                'the_bumblezone:honey_bee_leggings_1'
            ]
        },
        {
            output: 'ars_nouveau:novice_boots',
            inputs: [
                'immersiveengineering:armor_faraday_feet',
                'twilightforest:arctic_boots',
                'minecraft:leather_boots',
                'minecraft:chainmail_boots',
                'minecraft:golden_boots',
                'thermal:hazmat_boots',
                'thermal:diving_boots',
                'thermal:beekeeper_boots',
                'create:copper_diving_boots',
                'the_bumblezone:carpenter_bee_boots_2'
            ]
        },
        {
            output: 'ars_nouveau:apprentice_hood',
            inputs: [
                'twilightforest:steeleaf_helmet',
                'naturesaura:infused_iron_helmet',
                'immersiveengineering:armor_steel_head',
                'pneumaticcraft:compressed_iron_helmet',
                'twilightforest:ironwood_helmet',
                'minecraft:iron_helmet'
            ]
        },
        {
            output: 'ars_nouveau:apprentice_robes',
            inputs: [
                'twilightforest:steeleaf_chestplate',
                'naturesaura:infused_iron_chest',
                'immersiveengineering:armor_steel_chest',
                'pneumaticcraft:compressed_iron_chestplate',
                'twilightforest:ironwood_chestplate',
                'minecraft:iron_chestplate'
            ]
        },
        {
            output: 'ars_nouveau:apprentice_leggings',
            inputs: [
                'twilightforest:steeleaf_leggings',
                'naturesaura:infused_iron_pants',
                'immersiveengineering:armor_steel_legs',
                'pneumaticcraft:compressed_iron_leggings',
                'twilightforest:ironwood_leggings',
                'minecraft:iron_leggings'
            ]
        },
        {
            output: 'ars_nouveau:apprentice_boots',
            inputs: [
                'twilightforest:steeleaf_boots',
                'naturesaura:infused_iron_shoes',
                'immersiveengineering:armor_steel_feet',
                'pneumaticcraft:compressed_iron_boots',
                'twilightforest:ironwood_boots',
                'minecraft:iron_boots'
            ]
        },
        {
            output: 'ars_nouveau:archmage_hood',
            inputs: [
                'minecraft:diamond_helmet',
                'twilightforest:fiery_helmet',
                'twilightforest:knightmetal_helmet',
                'twilightforest:yeti_helmet',
                'naturesaura:sky_helmet',
                'twilightforest:phantom_helmet',
                'hexerei:witch_helmet'
            ]
        },
        {
            output: 'ars_nouveau:archmage_robes',
            inputs: [
                'minecraft:diamond_chestplate',
                'twilightforest:fiery_chestplate',
                'twilightforest:knightmetal_chestplate',
                'twilightforest:yeti_chestplate',
                'naturesaura:sky_chest',
                'twilightforest:phantom_chestplate',
                'twilightforest:naga_chestplate',
                'hexerei:witch_chestplate'
            ]
        },
        {
            output: 'ars_nouveau:archmage_leggings',
            inputs: [
                'minecraft:diamond_leggings',
                'twilightforest:fiery_leggings',
                'twilightforest:knightmetal_leggings',
                'twilightforest:yeti_leggings',
                'naturesaura:sky_pants',
                'twilightforest:naga_leggings'
            ]
        },
        {
            output: 'ars_nouveau:archmage_boots',
            inputs: [
                'minecraft:diamond_boots',
                'twilightforest:fiery_boots',
                'twilightforest:knightmetal_boots',
                'twilightforest:yeti_boots',
                'naturesaura:sky_shoes',
                'hexerei:witch_boots'
            ]
        }
    ];

    armors.forEach((armor) => {
        recipes.push({
            output: armor.output,
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: armor.inputs,
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: armor.output
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';

        recipe.output = Item.of(recipe.output).toJson();
        recipe.pedestalItems = recipe.inputs.map((input) => ({
            item: input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        }));
        recipe.reagent = recipe.reagents.map((reagent) =>
            reagent.startsWith('#') ? { tag: reagent.slice(1) } : { item: reagent }
        );

        event.custom(recipe).id(recipe.id);
    });
});
