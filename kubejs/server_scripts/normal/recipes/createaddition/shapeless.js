ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/createaddition/shapeless/';

    const recipes = [
        {
            output: 'createaddition:portable_energy_interface',
            inputs: ['create:brass_casing', 'create:chute'],
            id: `${id_prefix}portable_energy_interface`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
