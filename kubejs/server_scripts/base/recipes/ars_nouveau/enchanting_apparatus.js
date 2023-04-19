ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: 'ars_nouveau:archmage_hood',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:diamond_helmet',
                'naturesaura:sky_helmet',
                'blue_skies:charoite_helmet',
                'twilightforest:knightmetal_helmet',
                'twilightforest:steeleaf_helmet'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_hood`
        },
        {
            output: 'ars_nouveau:archmage_robes',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:diamond_chestplate',
                'naturesaura:sky_chest',
                'blue_skies:charoite_chestplate',
                'twilightforest:knightmetal_chestplate',
                'twilightforest:steeleaf_chestplate'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_robes`
        },
        {
            output: 'ars_nouveau:archmage_leggings',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:diamond_leggings',
                'naturesaura:sky_pants',
                'blue_skies:charoite_leggings',
                'twilightforest:knightmetal_leggings',
                'twilightforest:steeleaf_leggings'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_leggings`
        },
        {
            output: 'ars_nouveau:archmage_boots',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:diamond_boots',
                'naturesaura:sky_shoes',
                'blue_skies:charoite_boots',
                'twilightforest:knightmetal_boots',
                'twilightforest:steeleaf_boots'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_boots`
        },
        {
            output: 'ars_nouveau:apprentice_hood',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:iron_helmet',
                'naturesaura:infused_iron_helmet',
                'blue_skies:aquite_helmet',
                'twilightforest:ironwood_helmet',
                'immersiveengineering:armor_steel_head'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_hood`
        },
        {
            output: 'ars_nouveau:apprentice_robes',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:iron_chestplate',
                'naturesaura:infused_iron_chest',
                'blue_skies:aquite_chestplate',
                'twilightforest:ironwood_chestplate',
                'immersiveengineering:armor_steel_chest'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_robes`
        },
        {
            output: 'ars_nouveau:apprentice_leggings',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:iron_leggings',
                'naturesaura:infused_iron_pants',
                'blue_skies:aquite_leggings',
                'twilightforest:ironwood_leggings',
                'immersiveengineering:armor_steel_legs'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_leggings`
        },
        {
            output: 'ars_nouveau:apprentice_boots',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:iron_boots',
                'naturesaura:infused_iron_shoes',
                'blue_skies:aquite_boots',
                'twilightforest:ironwood_boots',
                'immersiveengineering:armor_steel_feet'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_boots`
        },
        {
            output: 'ars_nouveau:novice_hood',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: ['minecraft:golden_helmet', 'blue_skies:pyrope_helmet', 'blue_skies:horizonite_helmet'],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_hood`
        },
        {
            output: 'ars_nouveau:novice_robes',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: [
                'minecraft:golden_chestplate',
                'blue_skies:pyrope_chestplate',
                'blue_skies:horizonite_chestplate'
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_robes`
        },
        {
            output: 'ars_nouveau:novice_leggings',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: ['minecraft:golden_leggings', 'blue_skies:pyrope_leggings', 'blue_skies:horizonite_leggings'],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_leggings`
        },
        {
            output: 'ars_nouveau:novice_boots',
            inputs: [
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber',
                'ars_nouveau:magebloom_fiber'
            ],
            reagents: ['minecraft:golden_boots', 'blue_skies:pyrope_boots', 'blue_skies:horizonite_boots'],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_boots`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        recipe.output = Item.of(recipe.output).toJson();
        recipe.pedestalItems = recipe.inputs.map((input) => ({ item: Ingredient.of(input).toJson() }));
        recipe.reagent = recipe.reagents.map((reagent) => Ingredient.of(reagent).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
