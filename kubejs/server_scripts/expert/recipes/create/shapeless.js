ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/shapeless/';

    const recipes = [
        {
            output: 'create:sequenced_gearshift',
            inputs: ['create:brass_casing', 'create:cogwheel', 'immersiveengineering:component_electronic'],
            id: `create:crafting/kinetics/sequenced_gearshift`
        },
        {
            output: 'create:adjustable_chain_gearshift',
            inputs: ['create:encased_chain_drive', 'immersiveengineering:component_electronic'],
            id: `create:crafting/kinetics/adjustable_chain_gearshift`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
