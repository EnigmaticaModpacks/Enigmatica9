ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/redstonepen/shapeless/';

    const recipes = [
        {
            output: 'redstonepen:basic_pulse_button',
            inputs: ['#minecraft:wooden_buttons', '#forge:nuggets/silver'],
            id: 'redstonepen:basic_pulse_button_recipe'
        },
        {
            output: 'redstonepen:basic_button',
            inputs: ['#minecraft:wooden_buttons', '#forge:nuggets/copper'],
            id: 'redstonepen:basic_button_recipe'
        },
        {
            output: 'redstonepen:basic_lever',
            inputs: ['minecraft:lever', '#forge:nuggets/tin'],
            id: 'redstonepen:basic_lever_recipe'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
