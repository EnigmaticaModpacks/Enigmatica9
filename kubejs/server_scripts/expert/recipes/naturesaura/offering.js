ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/naturesaura/offering/';
    const recipes = [
        {
            output: { item: 'ae2:sky_dust', count: 4 },
            input: { tag: 'forge:dusts/moon_dust' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `${id_prefix}sky_dust`
        },
        {
            output: { item: 'emendatusenigmatica:sky_ingot', count: 2 },
            input: { tag: 'forge:ingots/aluminum' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `${id_prefix}sky_ingot`
        },
        {
            output: { item: 'emendatusenigmatica:sky_block', count: 2 },
            input: { tag: 'forge:storage_blocks/aluminum' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `${id_prefix}sky_block`
        },
        {
            output: { item: 'naturesaura:clock_hand' },
            input: { tag: 'forge:essences/manipulation' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `naturesaura:offering/clock_hand`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);
    });
});
