ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/modularrouters/shapeless/';

    const recipes = [
        {
            output: '64x modularrouters:energy_upgrade',
            inputs: ['modularrouters:blank_upgrade', 'powah:capacitor_nitro'],
            id: `${id_prefix}energy_upgrade_nitro`
        },
        {
            output: '16x modularrouters:energy_upgrade',
            inputs: ['modularrouters:blank_upgrade', 'powah:capacitor_spirited'],
            id: `${id_prefix}energy_upgrade_spirited`
        },
        {
            output: '4x modularrouters:energy_upgrade',
            inputs: ['modularrouters:blank_upgrade', 'powah:capacitor_niotic'],
            id: `${id_prefix}energy_upgrade_niotic`
        },
        {
            output: 'modularrouters:energy_upgrade',
            inputs: ['modularrouters:blank_upgrade', 'powah:capacitor_basic_large'],
            id: `modularrouters:energy_upgrade`
        },
        {
            output: '6x modularrouters:stack_upgrade',
            inputs: ['modularrouters:blank_upgrade', 'ae2:quartz_bricks', 'ae2:certus_quartz_crystal'],
            id: `modularrouters:stack_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
