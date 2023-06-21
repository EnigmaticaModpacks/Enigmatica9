ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/shaped/';

    const recipes = [
        {
            output: 'immersiveengineering:mold_gear',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:plates/invar',
                B: '#forge:gears/steel'
            },
            id: `${id_prefix}mold_gear`
        },
        {
            output: 'immersiveengineering:mold_rod',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:plates/invar',
                B: '#forge:rods/steel'
            },
            id: `${id_prefix}mold_rod`
        },
        {
            output: 'immersiveengineering:mold_wire',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:plates/invar',
                B: '#forge:wires/steel'
            },
            id: `${id_prefix}mold_wire`
        },
        {
            output: 'immersiveengineering:mold_plate',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:plates/invar',
                B: '#forge:plates/steel'
            },
            id: `${id_prefix}mold_plate`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
