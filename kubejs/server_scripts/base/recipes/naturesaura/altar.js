ServerEvents.recipes((event) => {
    // Altar's Max Fill rate is 300 aura per tick. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    const id_prefix = 'enigmatica:base/naturesaura/altar/';
    const recipes = [
        {
            output: '4x thermal:basalz_powder',
            input: 'thermal:basalz_rod',
            aura_type: 'naturesaura:overworld',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `${id_prefix}basalz_powder`
        },
        {
            output: '4x thermal:blitz_powder',
            input: 'thermal:blitz_rod',
            aura_type: 'naturesaura:overworld',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `${id_prefix}blitz_powder`
        },
        {
            output: '4x thermal:blizz_powder',
            input: 'thermal:blizz_rod',
            aura_type: 'naturesaura:overworld',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `${id_prefix}blizz_powder`
        },
        {
            output: '4x minecraft:blaze_powder',
            input: 'minecraft:blaze_rod',
            aura_type: 'naturesaura:overworld',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `naturesaura:altar/blaze`
        },
        {
            output: 'minecraft:bamboo',
            input: 'minecraft:stick',
            aura_type: 'naturesaura:overworld',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 600,
            time: 20,
            id: `${id_prefix}bamboo`
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
