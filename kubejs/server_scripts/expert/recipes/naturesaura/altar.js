ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // Altar's Max Fill rate is 300 aura per tick. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    const id_prefix = 'enigmatica:expert/naturesaura/altar/';
    const recipes = [
        {
            output: 'naturesaura:infused_iron',
            input: '#forge:ingots/ironwood',
            aura_type: 'naturesaura:overworld',
            aura: 15000,
            time: 80,
            id: 'naturesaura:altar/infused_iron'
        },
        {
            output: 'naturesaura:infused_iron_block',
            input: '#forge:storage_blocks/ironwood',
            aura_type: 'naturesaura:overworld',
            aura: 135000,
            time: 700,
            id: 'naturesaura:altar/infused_iron_block'
        },
        {
            output: 'nomadictents:golden_mallet',
            input: 'nomadictents:mallet',
            aura_type: 'naturesaura:overworld',
            aura: 500000,
            time: 1800,
            id: 'nomadictents:golden_mallet'
        },
        {
            output: '4x kubejs:kaolin_clay',
            input: '#forge:storage_blocks/clay',
            aura_type: 'naturesaura:overworld',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 3000,
            time: 10,
            id: `${id_prefix}kaolin_clay_from_clay`
        },
        {
            output: 'twilightforest:steeleaf_ingot',
            input: 'naturesaura:gold_leaf',
            aura_type: 'naturesaura:overworld',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 15000,
            time: 80,
            id: `${id_prefix}steeleaf_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.output = Item.of(recipe.output).toJson();
        if (recipe.catalyst) {
            recipe.catalyst = { item: recipe.catalyst };
        }
        event.custom(recipe).id(recipe.id);
    });
});
