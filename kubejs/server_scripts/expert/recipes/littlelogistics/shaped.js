ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/littlelogistics/shaped/';

    const recipes = [
        {
            output: 'littlelogistics:energy_locomotive',
            pattern: [' A ', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/tin',
                B: 'minecraft:piston',
                C: 'immersiveengineering:component_electronic',
                D: 'littlelogistics:seater_car'
            },
            id: 'littlelogistics:energy_locomotive'
        },
        {
            output: 'littlelogistics:energy_tug',
            pattern: [' A ', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/tin',
                B: 'minecraft:piston',
                C: 'immersiveengineering:component_electronic',
                D: 'littlelogistics:seater_barge'
            },
            id: 'littlelogistics:energy_tug'
        },
        {
            output: 'littlelogistics:vessel_charger',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#forge:plates/bronze',
                B: 'ars_nouveau:source_jar',
                C: 'naturesaura:infused_stone',
                D: '#forge:gems/source'
            },
            id: 'littlelogistics:vessel_charger'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
