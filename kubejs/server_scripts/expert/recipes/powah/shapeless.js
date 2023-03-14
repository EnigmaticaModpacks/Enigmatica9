ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/shapeless/';

    const recipes = [
        {
            output: '6x powah:dielectric_rod',
            inputs: [
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'powah:dielectric_paste'
            ],
            id: `powah:crafting/dielectric_rod`
        },
        {
            output: 'powah:energizing_rod_niotic',
            inputs: ['powah:energizing_rod_basic', 'powah:capacitor_niotic'],
            id: `${id_prefix}energizing_rod/niotic`
        },
        {
            output: 'powah:energizing_rod_spirited',
            inputs: ['powah:energizing_rod_niotic', 'powah:capacitor_spirited'],
            id: `${id_prefix}energizing_rod/spirited`
        },
        {
            output: 'powah:energizing_rod_nitro',
            inputs: ['powah:energizing_rod_spirited', 'powah:capacitor_nitro'],
            id: `${id_prefix}energizing_rod/nitro`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
