ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            fluid_output: { amount: 250, fluid: 'immersiveengineering:creosote' },
            item_input: [{ tag: 'minecraft:logs' }],
            exothermic: false,
            temperature: { max_temp: 1073, min_temp: 673.15 },
            speed: 0.5,
            id: `${id_prefix}charcoal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
