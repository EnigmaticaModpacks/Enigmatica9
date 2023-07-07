ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/shaped/';
    const recipes = [
        {
            output: Item.of('powah:capacitor_basic_large', 2),
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: '#forge:dusts/fluix',
                B: 'powah:dielectric_paste',
                C: '#forge:gems/subzero'
            },
            id: `powah:crafting/capacitor_basic_large`
        },
        {
            output: 'powah:energizing_rod_basic',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:gems/prismarine',
                B: 'powah:dielectric_rod',
                C: 'powah:capacitor_basic_large'
            },
            id: `${id_prefix}energizing_rod/basic`
        },
        {
            output: 'powah:player_transmitter_basic',
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: 'ae2:fluix_pearl',
                B: 'powah:capacitor_basic_large',
                C: 'powah:dielectric_rod',
                D: 'ars_nouveau:arcane_core'
            },
            id: `${id_prefix}player_transmitter_basic`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
