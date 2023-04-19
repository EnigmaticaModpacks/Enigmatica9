ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // min_tier:
    // 1 = Foliot, 2 = Djinni, 3 = Afrit, 4 = Marid

    const id_prefix = 'enigmatica:normal/occultism/crushing/';
    const recipes = [
        {
            output: '2x pneumaticcraft:logistics_core',
            input: 'naturesaura:infused_slab',
            crushing_time: 60,
            min_tier: 1,
            id: `${id_prefix}logistics_core`
        },
        {
            output: 'ae2:logic_processor',
            input: 'ae2:printed_logic_processor',
            crushing_time: 60,
            min_tier: 2,
            id: `${id_prefix}logic_processor`
        },
        {
            output: 'ae2:calculation_processor',
            input: 'ae2:printed_calculation_processor',
            crushing_time: 60,
            min_tier: 3,
            id: `${id_prefix}calculation_processor`
        },
        {
            output: 'ae2:engineering_processor',
            input: 'ae2:printed_engineering_processor',
            crushing_time: 60,
            min_tier: 4,
            id: `${id_prefix}engineering_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';

        recipe.ingredient = Ingredient.of(recipe.input).toJson();
        recipe.result = Item.of(recipe.output).toJson();
        // Never multiply expert recipes
        recipe.ignore_crushing_multiplier = true;
        event.custom(recipe).id(recipe.id);
    });
});
