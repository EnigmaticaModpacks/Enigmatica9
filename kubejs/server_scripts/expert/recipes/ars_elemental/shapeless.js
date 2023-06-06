ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_elemental/shapeless/';

    const recipes = [
        {
            output: 'ars_elemental:ritual_squirrels',
            inputs: ['ars_elemental:yellow_archwood_log', '#forge:gems/fluix', '#forge:nuggets/gold'],
            id: 'ars_elemental:tablet_ritual_squirrels'
        },
        {
            output: 'ars_elemental:ritual_attraction',
            inputs: ['ars_nouveau:green_archwood_log', '#forge:essences/earth', 'minecraft:lodestone'],
            id: 'ars_elemental:tablet_ritual_attraction'
        },
        {
            output: 'ars_elemental:ritual_repulsion',
            inputs: ['ars_elemental:yellow_archwood_log', '#forge:essences/air', 'minecraft:skeleton_skull'],
            id: 'ars_elemental:tablet_ritual_repulsion'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
