ServerEvents.recipes((event) => {
    const id_prefex = 'enigmatica:base/blue_skies/shapeless/';

    const recipes = [
        {
            output: '9x blue_skies:ventium_ingot',
            inputs: ['#forge:storage_blocks/ventium'],
            id: `blue_skies:ventium_from_block`
        },
        {
            output: '9x blue_skies:falsite_ingot',
            inputs: ['#forge:storage_blocks/falsite'],
            id: `blue_skies:falsite_from_block`
        },
        {
            output: '9x blue_skies:moonstone',
            inputs: ['#forge:storage_blocks/moonstone'],
            id: `blue_skies:moonstone_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
