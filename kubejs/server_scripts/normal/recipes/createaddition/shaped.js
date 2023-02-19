ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/createaddition/shaped/';

    const recipes = [
        {
            output: 'createaddition:modular_accumulator',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#forge:rods/copper',
                B: 'createaddition:capacitor',
                C: 'create:brass_casing',
                D: 'immersiveengineering:coil_lv'
            },
            id: `createaddition:crafting/modular_accumulator`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
