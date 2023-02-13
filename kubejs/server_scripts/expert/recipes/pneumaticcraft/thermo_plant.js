ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            fluid_output: { amount: 250, fluid: 'immersiveengineering:creosote' },
            item_output: { item: 'minecraft:charcoal' },
            item_input: [{ tag: 'minecraft:logs' }],
            exothermic: false,
            temperature: { max_temp: 1073, min_temp: 673 },
            speed: 0.5,
            id: `${id_prefix}charcoal`
        },
        {
            item_output: { item: 'immersiveengineering:treated_wood_horizontal' },
            item_input: [{ tag: 'minecraft:planks' }],
            fluid_input: { type: 'pneumaticcraft:fluid', amount: 125, fluid: 'immersiveengineering:creosote' },
            exothermic: false,
            speed: 4.0,
            id: `${id_prefix}treated_wood_horizontal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
