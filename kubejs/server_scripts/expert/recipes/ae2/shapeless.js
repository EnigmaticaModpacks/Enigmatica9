ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2/shapeless/';

    const recipes = [
        {
            output: 'ae2:terminal',
            inputs: ['pneumaticcraft:logistics_core', '#ae2:illuminated_panel'],
            id: `ae2:network/parts/terminals`
        },
        {
            output: 'ae2:crafting_terminal',
            inputs: ['#forge:workbenches', 'ae2:terminal'],
            id: `ae2:network/parts/terminals_crafting`
        },
        {
            output: 'ae2:crafting_terminal',
            inputs: ['pneumaticcraft:logistics_core', '#ae2:illuminated_panel', '#forge:workbenches'],
            id: `${id_prefix}crafting_terminal`
        },
        {
            output: 'ae2:storage_bus',
            inputs: ['naturesaura:item_distributor', '#ae2:interface'],
            id: `ae2:network/parts/storage_bus`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
