ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/createaddition/charging/';
    const recipes = [
        // {
        //     input: { item: 'ae2:certus_quartz_crystal' },
        //     result: { item: 'ae2:charged_certus_quartz_crystal' },
        //     energy: 3200,
        //     id: `${id_prefix}charged_certus_quartz_crystal`
        // },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:charging';
        event.custom(recipe).id(recipe.id);
    });
});
