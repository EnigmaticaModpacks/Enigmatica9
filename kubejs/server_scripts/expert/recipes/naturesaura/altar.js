ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // Altar's Max Fill rate is 300 aura per tick. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    const id_prefix = 'enigmatica:expert/naturesaura/altar/';
    const recipes = [
        {
            output: 'naturesaura:infused_stone',
            input: 'minecraft:calcite',
            aura_type: 'naturesaura:overworld',
            aura: 7500,
            time: 40,
            id: 'naturesaura:altar/infused_stone'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';

        // input: { item: 'minecraft:stone' }
        recipe.input = Ingredient.of(recipe.input).toJson();

        //  output: { item: 'naturesaura:infused_stone' },
        recipe.output = Ingredient.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
