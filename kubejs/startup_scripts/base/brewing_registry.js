// priority: 0
MoreJSEvents.registerPotionBrewing((event) => {
    // Documentation: https://github.com/AlmostReliable/morejs/wiki/Potion-Brewing

    const recipes = [
        {
            reagent: 'ars_nouveau:abjuration_essence',
            input: 'minecraft:water',
            output: 'minecraft:awkward'
        },
        {
            reagent: 'pneumaticcraft:glycerol',
            input: 'minecraft:water',
            output: 'minecraft:awkward'
        },
        {
            reagent: 'twilightforest:torchberries',
            input: 'minecraft:awkward',
            output: 'minecraft:night_vision'
        },
        {
            reagent: 'byg:nightshade_berries',
            input: 'minecraft:awkward',
            output: 'minecraft:night_vision'
        },
        {
            reagent: 'ars_elemental:anima_essence',
            input: 'minecraft:awkward',
            output: 'apotheosis:wither'
        },
        {
            reagent: 'thermal:frost_melon_slice',
            input: 'minecraft:awkward',
            output: 'minecraft:fire_resistance'
        },
        {
            reagent: 'byg:crimson_berries',
            input: 'minecraft:awkward',
            output: 'minecraft:fire_resistance'
        },
        {
            reagent: 'blue_skies:fiery_beans',
            input: 'minecraft:awkward',
            output: 'minecraft:strength'
        },
        {
            reagent: 'blue_skies:scalefruit',
            input: 'minecraft:awkward',
            output: 'apotheosis:resistance'
        },
        {
            reagent: 'thermal:coffee',
            input: 'minecraft:awkward',
            output: 'apotheosis:haste'
        },
        {
            reagent: 'blue_skies:cryo_root',
            input: 'minecraft:awkward',
            output: 'minecraft:slowness'
        },
        {
            reagent: 'cnb:pink_waterlily',
            input: 'minecraft:awkward',
            output: 'minecraft:healing'
        },
        {
            reagent: 'cnb:light_pink_waterlily',
            input: 'minecraft:awkward',
            output: 'minecraft:healing'
        },
        {
            reagent: 'cnb:yellow_waterlily',
            input: 'minecraft:awkward',
            output: 'minecraft:healing'
        },
        {
            reagent: 'hexerei:belladonna_berries',
            input: 'minecraft:awkward',
            output: 'minecraft:poison'
        },
        {
            reagent: 'blue_skies:pink_brewberry',
            input: 'minecraft:awkward',
            output: 'minecraft:regeneration'
        },
        {
            reagent: 'minecraft:cocoa_beans',
            input: 'minecraft:awkward',
            output: 'minecraft:swiftness'
        },
        {
            reagent: 'blue_skies:crescent_fruit',
            input: 'minecraft:awkward',
            output: 'minecraft:leaping'
        },
        {
            reagent: 'byg:death_cap',
            input: 'minecraft:awkward',
            output: 'minecraft:harming'
        },
        {
            reagent: 'ars_nouveau:experience_gem',
            input: 'minecraft:awkward',
            output: 'apotheosis:knowledge'
        },
        {
            reagent: 'quark:ancient_fruit',
            input: 'minecraft:awkward',
            output: 'apotheosis:knowledge'
        },
        {
            reagent: 'ars_nouveau:greater_experience_gem',
            input: 'minecraft:awkward',
            output: 'apotheosis:strong_knowledge'
        },
        {
            reagent: 'byg:ether_bulbs',
            input: 'minecraft:awkward',
            output: 'minecraft:invisibility'
        },
        {
            reagent: 'blue_skies:lunar_vine',
            input: 'minecraft:awkward',
            output: 'minecraft:slow_falling'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'apotheosis:haste',
            output: 'apotheosis:fatigue'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:water',
            output: 'minecraft:weakness'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:poison',
            output: 'minecraft:harming'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:long_poison',
            output: 'minecraft:harming'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:strong_poison',
            output: 'minecraft:strong_harming'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:night_vision',
            output: 'minecraft:invisibility'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:long_night_vision',
            output: 'minecraft:long_invisibility'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:leaping',
            output: 'minecraft:slowness'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:long_leaping',
            output: 'minecraft:long_slowness'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:strong_leaping',
            output: 'minecraft:strong_slowness'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:swiftness',
            output: 'minecraft:slowness'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:long_swiftness',
            output: 'minecraft:long_slowness'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:strong_swiftness',
            output: 'minecraft:strong_slowness'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:healing',
            output: 'minecraft:harming'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'minecraft:strong_healing',
            output: 'minecraft:strong_harming'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'apotheosis:resistance',
            output: 'apotheosis:sundering'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'apotheosis:long_resistance',
            output: 'apotheosis:long_sundering'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'apotheosis:strong_resistance',
            output: 'apotheosis:strong_sundering'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'apotheosis:haste',
            output: 'apotheosis:fatigue'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'apotheosis:long_haste',
            output: 'apotheosis:long_fatigue'
        },
        {
            reagent: 'hexerei:mandrake_root',
            input: 'apotheosis:strong_haste',
            output: 'apotheosis:strong_fatigue'
        }
    ];

    recipes.forEach((recipe) => {
        console.log(
            `Registering recipe for ${recipe.output}. Reagent: ${recipe.reagent}, Input Potion: ${recipe.input}`
        );
        event.addPotionBrewing(recipe.reagent, recipe.input, recipe.output);
    });
});

// Potion Types

/*
'apotheosis:strong_knowledge'
'apotheosis:long_knowledge'
'apotheosis:knowledge'

'apotheosis:strong_sundering'
'apotheosis:long_sundering'
'apotheosis:sundering'

'apotheosis:strong_wither'
'apotheosis:long_wither'
'apotheosis:wither'

'apotheosis:strong_fatigue'
'apotheosis:long_fatigue'
'apotheosis:fatigue'

'apotheosis:strong_haste'
'apotheosis:long_haste'
'apotheosis:haste'

'apotheosis:strong_absorption'
'apotheosis:long_absorption'
'apotheosis:absorption'

'apotheosis:strong_resistance'
'apotheosis:long_resistance'
'apotheosis:resistance'

'quark:strong_resilience'
'quark:long_resilience'
'quark:resilience'

'ars_nouveau:shielding_potion_strong'
'ars_nouveau:shielding_potion_long'
'ars_nouveau:shielding_potion'

'ars_nouveau:freezing_potion_strong'
'ars_nouveau:freezing_potion_long'
'ars_nouveau:freezing_potion'

'ars_nouveau:blasting_potion_strong'
'ars_nouveau:blasting_potion_long'
'ars_nouveau:blasting_potion'

'ars_nouveau:recovery_potion_strong'
'ars_nouveau:recovery_potion_long'
'ars_nouveau:recovery_potion'

'ars_nouveau:spell_damage_potion_strong'
'ars_nouveau:spell_damage_potion_long'
'ars_nouveau:spell_damage_potion'

'ars_nouveau:mana_regen_potion_strong'
'ars_nouveau:mana_regen_potion_long'
'ars_nouveau:mana_regen_potion'

'ars_elemental:shock_potion_long'
'ars_elemental:shock_potion'

'ars_elemental:enderference_potion_long'
'ars_elemental:enderference_potion'

'minecraft:long_slow_falling'
'minecraft:slow_falling'

'minecraft:luck'

'minecraft:long_weakness'
'minecraft:weakness'

'minecraft:strong_strength'
'minecraft:long_strength'
'minecraft:strength'

'minecraft:strong_regeneration'
'minecraft:long_regeneration'
'minecraft:regeneration'

'minecraft:strong_poison'
'minecraft:long_poison'
'minecraft:poison'

'minecraft:strong_harming'
'minecraft:harming'

'minecraft:strong_healing'
'minecraft:healing'

'minecraft:long_water_breathing'
'minecraft:water_breathing'

'minecraft:strong_turtle_master'
'minecraft:long_turtle_master'
'minecraft:turtle_master'

'minecraft:strong_slowness'
'minecraft:long_slowness'
'minecraft:slowness'

'minecraft:strong_swiftness'
'minecraft:long_swiftness'
'minecraft:swiftness'

'minecraft:long_fire_resistance'
'minecraft:fire_resistance'

'minecraft:strong_leaping'
'minecraft:long_leaping'
'minecraft:leaping'

'minecraft:long_invisibility'
'minecraft:invisibility'

'minecraft:long_night_vision'
'minecraft:night_vision'
*/
