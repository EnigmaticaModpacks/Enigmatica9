// TODO: Re-enable if Railways is re-added

// ServerEvents.recipes((event) => {
//     if (global.isExpertMode == false) {
//         return;
//     }
//     const id_prefix = 'enigmatica:expert/railways/shaped/';

//     const recipes = [
//         {
//             output: '16x railways:track_monorail',
//             pattern: ['AAA', 'BBB', 'CCC'],
//             key: {
//                 A: '#forge:plates/bronze',
//                 B: 'create:metal_bracket',
//                 C: 'create:metal_girder'
//             },
//             id: `${id_prefix}track_monorail_from_bronze`
//         },
//         {
//             output: '32x railways:track_monorail',
//             pattern: ['AAA', 'BBB', 'CCC'],
//             key: {
//                 A: '#forge:plates/iron',
//                 B: 'create:metal_bracket',
//                 C: 'create:metal_girder'
//             },
//             id: `${id_prefix}track_monorail_from_iron`
//         },
//         {
//             output: '48x railways:track_monorail',
//             pattern: ['AAA', 'BBB', 'CCC'],
//             key: {
//                 A: '#forge:plates/osmium',
//                 B: 'create:metal_bracket',
//                 C: 'create:metal_girder'
//             },
//             id: `${id_prefix}track_monorail_from_osmium`
//         },
//         {
//             output: 'railways:smokestack_caboosestyle',
//             pattern: ['ABA', ' C '],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone_slab',
//                 B: 'pneumaticcraft:compressed_stone',
//                 C: 'minecraft:campfire'
//             },
//             id: 'railways:crafting/smokestack_caboosestyle'
//         },
//         {
//             output: 'railways:smokestack_long',
//             pattern: ['ACA'],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone_slab',
//                 C: 'minecraft:campfire'
//             },
//             id: 'railways:crafting/smokestack_long'
//         },
//         {
//             output: 'railways:smokestack_coalburner',
//             pattern: ['A A', 'A A', 'ACA'],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone',
//                 C: 'minecraft:campfire'
//             },
//             id: 'railways:crafting/smokestack_coalburner'
//         },
//         {
//             output: 'railways:smokestack_oilburner',
//             pattern: ['A A', 'ACA'],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone',
//                 C: 'minecraft:campfire'
//             },
//             id: 'railways:crafting/smokestack_oilburner'
//         },
//         {
//             output: 'railways:smokestack_streamlined',
//             pattern: ['ACA'],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone',
//                 C: 'minecraft:campfire'
//             },
//             id: 'railways:crafting/smokestack_streamlined'
//         },
//         {
//             output: 'railways:smokestack_woodburner',
//             pattern: ['ABA', 'BCB'],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone_slab',
//                 B: 'pneumaticcraft:compressed_stone',
//                 C: 'minecraft:campfire'
//             },
//             id: 'railways:crafting/smokestack_woodburner'
//         },
//         {
//             output: 'railways:smokestack_diesel',
//             pattern: ['ABA'],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone',
//                 B: 'create:propeller'
//             },
//             id: 'railways:crafting/smokestack_diesel'
//         },
//         {
//             output: 'railways:track_coupler',
//             pattern: ['A', 'B', 'C'],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone_slab',
//                 B: 'pneumaticcraft:logistics_core',
//                 C: 'create:railway_casing'
//             },
//             id: 'railways:crafting/track_coupler'
//         },
//         {
//             output: '4x railways:semaphore',
//             pattern: [' A ', 'BCD', ' A '],
//             key: {
//                 A: 'pneumaticcraft:compressed_stone',
//                 B: '#minecraft:fences',
//                 C: 'create:andesite_casing',
//                 D: 'pneumaticcraft:logistics_core'
//             },
//             id: 'railways:crafting/semaphore'
//         },
//         {
//             output: 'railways:conductor_whistle',
//             pattern: ['AB', ' C'],
//             key: {
//                 A: '#forge:ingots/bronze',
//                 B: '#forge:nuggets/bronze',
//                 C: '#forge:string'
//             },
//             id: 'railways:crafting/conductor_whistle'
//         },
//         {
//             output: 'railways:track_switch_brass',
//             pattern: ['A', 'B', 'C'],
//             key: {
//                 A: 'minecraft:lever',
//                 B: 'create:brass_casing',
//                 C: 'pneumaticcraft:logistics_core'
//             },
//             id: 'railways:crafting/track_switch_brass'
//         },
//         {
//             output: 'railways:track_switch_andesite',
//             pattern: ['A', 'B', 'C'],
//             key: {
//                 A: 'minecraft:lever',
//                 B: 'create:andesite_casing',
//                 C: 'pneumaticcraft:logistics_core'
//             },
//             id: 'railways:crafting/track_switch_andesite'
//         },
//         {
//             output: 'railways:remote_lens',
//             pattern: ['A', 'B', 'C'],
//             key: {
//                 A: '#forge:nuggets/signalum',
//                 B: '#forge:plates/gold',
//                 C: 'ars_nouveau:scryers_crystal'
//             },
//             id: 'railways:crafting/remote_lens'
//         }
//     ];

//     colors.forEach((color) => {
//         recipes.push({
//             output: `railways:${color}_conductor_cap`,
//             pattern: ['AAA', 'ABA', 'ACA'],
//             key: {
//                 A: 'ars_nouveau:magebloom_fiber',
//                 B: '#forge:ingots/silver',
//                 C: `#forge:dyes/${color}`
//             },
//             id: `${id_prefix}${color}_conductor_cap`
//         });
//     });

//     // Convert tracks to shaped
//     event.forEachRecipe({ type: 'create:sequenced_assembly' }, (r) => {
//         let source_recipe = JSON.parse(r.json);
//         let output = source_recipe.results[0].item;

//         if (!output.includes('railways:track') || output.includes('monorail')) {
//             return;
//         }

//         let track_base = source_recipe.ingredient.item;
//         let track_type = output.split(':')[1];
//         let rails = [
//             { material: 'iron', count: 32 },
//             { material: 'osmium', count: 48 },
//             { material: 'bronze', count: 16 }
//         ];
//         let gold_exceptions = ['track_warped', 'track_crimson', 'track_blackstone'];
//         if (gold_exceptions.includes(track_type)) {
//             rails.push({ material: 'gold', count: 32 });
//         }

//         rails.forEach((rail) => {
//             recipes.push({
//                 output: Item.of(output).withCount(rail.count),
//                 pattern: ['ABA', 'ACA', 'ABA'],
//                 key: {
//                     A: `#forge:rods/${rail.material}`,
//                     B: track_base,
//                     C: '#forge:gravel'
//                 },
//                 id: `${id_prefix}${track_type}_from_${rail.material}`
//             });
//         });
//     });

//     recipes.forEach((recipe) => {
//        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
//     });
// });
