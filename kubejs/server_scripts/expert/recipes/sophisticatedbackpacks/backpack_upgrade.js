ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/sophisticatedbackpacks/backpack_upgrade/';

    const recipes = [
        {
            output: 'sophisticatedbackpacks:iron_backpack',
            pattern: ['III', 'IBI', 'III'],
            key: {
                B: { item: 'sophisticatedbackpacks:copper_backpack' },
                I: { tag: 'forge:ingots/iron' }
            },
            id: 'sophisticatedbackpacks:iron_backpack'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'sophisticatedbackpacks:backpack_upgrade';
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
