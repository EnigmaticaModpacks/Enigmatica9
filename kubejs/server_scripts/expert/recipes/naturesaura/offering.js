ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/naturesaura/offering/';
    const recipes = [
        // {
        //     output: { item: 'twilightforest:ironwood_ingot', count: 2 },
        //     input: { item: 'twilightforest:raw_ironwood' },
        //     start_item: { tag: 'forge:gems/source' },
        //     id: `${id_prefix}ironwood_ingot`
        // },
        {
            output: { item: 'ae2:sky_dust', count: 4 },
            input: { tag: 'forge:dusts/quartz' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `${id_prefix}sky_dust`
        },
        {
            output: { item: 'naturesaura:sky_ingot', count: 2 },
            input: { tag: 'forge:ingots/aluminum' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `naturesaura:offering/sky_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);
    });
});
