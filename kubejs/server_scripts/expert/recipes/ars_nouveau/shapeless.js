ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_nouveau/shapeless/';

    const recipes = [
        {
            output: 'ars_nouveau:warp_scroll',
            inputs: [
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                '#forge:dusts/moon_dust',
                'ars_nouveau:blank_parchment',
                '#forge:gems/source',
                '#forge:gems/source',
                '#forge:gems/source',
                '#forge:gems/source'
            ],
            id: 'ars_nouveau:warp_scroll'
        },
        {
            output: 'ars_nouveau:ritual_harvest',
            inputs: ['ars_nouveau:green_archwood_log', '#forge:essences/earth', 'naturesaura:infused_iron_hoe'],
            id: 'ars_nouveau:ritual_harvest'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
