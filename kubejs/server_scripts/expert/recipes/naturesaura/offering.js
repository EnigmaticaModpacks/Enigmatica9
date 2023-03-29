ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/naturesaura/offering/';
    const recipes = [
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
        },
        {
            output: { item: 'naturesaura:clock_hand' },
            input: { tag: 'forge:essences/manipulation' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `naturesaura:offering/clock_hand`
        },
        {
            output: { item: 'naturesaura:tainted_gold', count: 2 },
            input: { tag: 'forge:ingots/netherite' },
            start_item: { item: 'kubejs:spirit_of_devotion' },
            id: `${id_prefix}lumium_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);
    });
});
