ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/shapeless/';

    const recipes = [
        {
            output: 'minecraft:crafting_table',
            inputs: [
                '#ae2:glass_cable',
                '#ae2:glass_cable',
                '#ae2:glass_cable',
                '#ae2:glass_cable',
                '#ae2:glass_cable',
                '#ae2:glass_cable',
                'powah:dielectric_paste'
            ],
            id: `powah:crafting/dielectric_rod`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
