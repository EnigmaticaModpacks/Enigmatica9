ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/createaddition/charging/';
    const recipes = [
        {
            input: { item: 'ae2:certus_quartz_crystal' },
            result: { item: 'ae2:charged_certus_quartz_crystal' },
            energy: 3200,
            id: `${id_prefix}charged_certus_quartz_crystal`
        },
        {
            input: { item: 'minecraft:snowball' },
            result: { item: 'powah:charged_snowball' },
            energy: 500000,
            id: `${id_prefix}charged_snowball`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:charging';
        event.custom(recipe).id(recipe.id);
    });
});
