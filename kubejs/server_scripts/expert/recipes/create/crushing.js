ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/crushing/';

    let recipes = [
        {
            outputs: [
                { item: 'twilightforest:knightmetal_ingot', count: 2 },
                { item: 'minecraft:leather', chance: 0.5 },
                { item: 'twilightforest:knightmetal_ingot', count: 1, chance: 0.6 },
                { item: 'minecraft:string', count: 2, chance: 0.25 }
            ],
            inputs: ['minecraft:iron_horse_armor'],
            processingTime: 60,
            id: `create:crushing/iron_horse_armor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:crushing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
