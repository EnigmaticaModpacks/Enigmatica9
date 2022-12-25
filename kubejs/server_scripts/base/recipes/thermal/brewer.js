// ServerEvents.recipes((event) => {
//     const id_prefix = 'enigmatica:base/thermal/brewer/';

//     const recipes = [
//         {
//             ingredients: [{ item: 'ars_nouveau:abjuration_essence' }, { fluid: 'minecraft:water', amount: 1000 }],
//             result: [{ fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: 'minecraft:awkward' } }],
//             energy: 4000,
//             id: `${id_prefix}awkward_from_abjuration_essence`
//         },
//         {
//             ingredients: [{ item: 'ars_nouveau:wilden_spike' }, { fluid: 'minecraft:water', amount: 1000 }],
//             result: [{ fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: 'minecraft:long_water_breathing' } }],
//             energy: 4000,
//             id: `${id_prefix}long_water_breathing_from_wilden_spike`
//         },
//         {
//             ingredients: [{ item: 'ars_nouveau:wilden_horn' }, { fluid: 'minecraft:water', amount: 1000 }],
//             result: [{ fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: 'minecraft:strength' } }],
//             energy: 4000,
//             id: `${id_prefix}strength_from_wilden_horn`
//         },
//         {
//             ingredients: [{ item: 'ars_nouveau:wilden_wing' }, { fluid: 'minecraft:water', amount: 1000 }],
//             result: [{ fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: 'minecraft:leaping' } }],
//             energy: 4000,
//             id: `${id_prefix}leaping_from_wilden_wing`
//         }
//     ];

//     /*
//     // Thermal currently doesn't support nbt on fluid inputs in json recipes. Supposedly it is planned. These will enable support for these potions when it comes.
//     const potions = [
//         {
//             reagent: 'ars_nouveau:magebloom',
//             normal: 'ars_nouveau:spell_damage_potion',
//             long: 'ars_nouveau:spell_damage_potion_long',
//             strong: 'ars_nouveau:spell_damage_potion_strong'
//         },
//         {
//             reagent: 'ars_nouveau:bastion_pod',
//             normal: 'ars_nouveau:shielding_potion',
//             long: 'ars_nouveau:shielding_potion_long',
//             strong: 'ars_nouveau:shielding_potion_strong'
//         },
//         {
//             reagent: 'ars_nouveau:source_berry',
//             normal: 'ars_nouveau:mana_regen_potion',
//             long: 'ars_nouveau:mana_regen_potion_long',
//             strong: 'ars_nouveau:mana_regen_potion_strong'
//         },
//         {
//             reagent: 'ars_nouveau:bombegranate_pod',
//             normal: 'ars_nouveau:blasting_potion',
//             long: 'ars_nouveau:blasting_potion_long',
//             strong: 'ars_nouveau:blasting_potion_strong'
//         },
//         {
//             reagent: 'ars_nouveau:mendosteen_pod',
//             normal: 'ars_nouveau:recovery_potion',
//             long: 'ars_nouveau:recovery_potion_long',
//             strong: 'ars_nouveau:recovery_potion_strong'
//         },
//         {
//             reagent: 'ars_nouveau:frostaya_pod',
//             normal: 'ars_nouveau:freezing_potion',
//             long: 'ars_nouveau:freezing_potion_long',
//             strong: 'ars_nouveau:freezing_potion_strong'
//         },
//         {
//             reagent: 'ars_elemental:flashpine_pod',
//             normal: 'ars_elemental:shock_potion',
//             long: 'ars_elemental:shock_potion_long'
//         }
//     ];

//     potions.forEach((potion) => {
//         recipes.push({
//             ingredients: [
//                 { item: potion.reagent },
//                 { fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: 'minecraft:awkward' } }
//             ],
//             result: [{ fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: potion.normal } }],
//             energy: 4000,
//             id: `${id_prefix}${potion.normal.replace(':', '_')}`
//         });

//         if (potion.long) {
//             recipes.push({
//                 ingredients: [
//                     { item: 'minecraft:redstone' },
//                     { fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: potion.normal } }
//                 ],
//                 result: [{ fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: potion.long } }],
//                 energy: 4000,
//                 id: `${id_prefix}${potion.long.replace(':', '_')}`
//             });
//         }

//         if (potion.strong) {
//             recipes.push({
//                 ingredients: [
//                     { item: 'minecraft:glowstone_dust' },
//                     { fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: potion.normal } }
//                 ],
//                 result: [{ fluid: 'cofh_core:potion', amount: 1000, nbt: { Potion: potion.strong } }],
//                 energy: 4000,
//                 id: `${id_prefix}${potion.strong.replace(':', '_')}`
//             });
//         }
//     });
//     */

//     recipes.forEach((recipe) => {
//         recipe.type = 'thermal:brewer';
//         event.custom(recipe).id(recipe.id);
//     });
// });
