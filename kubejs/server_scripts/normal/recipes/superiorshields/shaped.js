ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/superiorshields/shaped/';

    const recipes = [
        {
            output: 'superiorshields:enchanter_shield',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:gems/source'
            },
            id: 'superiorshields:enchanter_shield'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
