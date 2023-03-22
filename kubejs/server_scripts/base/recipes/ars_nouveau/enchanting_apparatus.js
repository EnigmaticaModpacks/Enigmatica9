ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: { item: 'ars_nouveau:archmage_hood' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:diamond_helmet' },
                { item: 'naturesaura:sky_helmet' },
                { item: 'blue_skies:charoite_helmet' },
                { item: 'twilightforest:knightmetal_helmet' },
                { item: 'twilightforest:steeleaf_helmet' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_hood`
        },
        {
            output: { item: 'ars_nouveau:archmage_robes' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:diamond_chestplate' },
                { item: 'naturesaura:sky_chest' },
                { item: 'blue_skies:charoite_chestplate' },
                { item: 'twilightforest:knightmetal_chestplate' },
                { item: 'twilightforest:steeleaf_chestplate' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_robes`
        },
        {
            output: { item: 'ars_nouveau:archmage_leggings' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:diamond_leggings' },
                { item: 'naturesaura:sky_pants' },
                { item: 'blue_skies:charoite_leggings' },
                { item: 'twilightforest:knightmetal_leggings' },
                { item: 'twilightforest:steeleaf_leggings' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_leggings`
        },
        {
            output: { item: 'ars_nouveau:archmage_boots' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:diamond_boots' },
                { item: 'naturesaura:sky_shoes' },
                { item: 'blue_skies:charoite_boots' },
                { item: 'twilightforest:knightmetal_boots' },
                { item: 'twilightforest:steeleaf_boots' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:archmage_boots`
        },
        {
            output: { item: 'ars_nouveau:apprentice_hood' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:iron_helmet' },
                { item: 'naturesaura:infused_iron_helmet' },
                { item: 'blue_skies:aquite_helmet' },
                { item: 'twilightforest:ironwood_helmet' },
                { item: 'immersiveengineering:armor_steel_head' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_hood`
        },
        {
            output: { item: 'ars_nouveau:apprentice_robes' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:iron_chestplate' },
                { item: 'naturesaura:infused_iron_chest' },
                { item: 'blue_skies:aquite_chestplate' },
                { item: 'twilightforest:ironwood_chestplate' },
                { item: 'immersiveengineering:armor_steel_chest' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_robes`
        },
        {
            output: { item: 'ars_nouveau:apprentice_leggings' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:iron_leggings' },
                { item: 'naturesaura:infused_iron_pants' },
                { item: 'blue_skies:aquite_leggings' },
                { item: 'twilightforest:ironwood_leggings' },
                { item: 'immersiveengineering:armor_steel_legs' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_leggings`
        },
        {
            output: { item: 'ars_nouveau:apprentice_boots' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:iron_boots' },
                { item: 'naturesaura:infused_iron_shoess' },
                { item: 'blue_skies:aquite_boots' },
                { item: 'twilightforest:ironwood_boots' },
                { item: 'immersiveengineering:armor_steel_feet' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:apprentice_boots`
        },
        {
            output: { item: 'ars_nouveau:novice_hood' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:golden_helmet' },
                { item: 'blue_skies:pyrope_helmet' },
                { item: 'blue_skies:horizonite_helmet' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_hood`
        },
        {
            output: { item: 'ars_nouveau:novice_robes' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:golden_chestplate' },
                { item: 'blue_skies:pyrope_chestplate' },
                { item: 'blue_skies:horizonite_chestplate' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_robes`
        },
        {
            output: { item: 'ars_nouveau:novice_leggings' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:golden_leggings' },
                { item: 'blue_skies:pyrope_leggings' },
                { item: 'blue_skies:horizonite_leggings' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_leggings`
        },
        {
            output: { item: 'ars_nouveau:novice_boots' },
            pedestalItems: [
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } },
                { item: { item: 'ars_nouveau:magebloom_fiber' } }
            ],
            reagent: [
                { item: 'minecraft:golden_boots' },
                { item: 'blue_skies:pyrope_boots' },
                { item: 'blue_skies:horizonite_boots' }
            ],
            keepNbtOfReagent: true,
            sourceCost: 0,
            id: `ars_nouveau:novice_boots`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
