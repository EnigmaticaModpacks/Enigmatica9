// ServerEvents.recipes((event) => {
//     const id_prefix = 'enigmatica:base/nomadictents/tent_size/';
//     const recipes = [];

//     const tent_sizes = ['tiny', 'small', 'medium', 'large', 'giant', 'mega'];
//     tent_sizes.forEach((size, index) => {
//         let previous_size;
//         if (size != 'tiny') {
//             previous_size = tent_sizes[index - 1];
//         }

//         recipes.push({
//             pattern: ['CWC', 'WTW'],
//             key: {
//                 W: { item: 'nomadictents:yurt_section' },
//                 C: { item: 'nomadictents:obsidian_crossbeams' },
//                 T: { item: 'nomadictents:large_yurt' }
//             },
//             result: { item: 'nomadictents:giant_yurt', count: 1 },
//             id: 'nomadictents:giant_yurt'
//         });
//     });

//     recipes.forEach((recipe) => {
//         recipe.type = 'nomadictents:tent_size';
//         event.custom(recipe).id(recipe.id);
//     });
// });
