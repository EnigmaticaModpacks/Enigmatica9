ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/immersiveengineering/crusher/';

    const recipes = [
        {
            input: '#forge:gems/coal_coke',
            output: AlmostUnified.getPreferredItemForTag('forge:dusts/coal_coke'),
            secondaries: [],
            energy: 3000,
            id: `immersiveengineering:crusher/coke`
        },
        {
            input: '#forge:ores/netherite',
            output: '2x mekanism:dirty_netherite_scrap',
            secondaries: [
                {
                    chance: 0.33,
                    output: Item.of('mekanism:dirty_netherite_scrap').toJson()
                }
            ],
            energy: 10000,
            id: `${id_prefix}netherite_scrap`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:crusher';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
