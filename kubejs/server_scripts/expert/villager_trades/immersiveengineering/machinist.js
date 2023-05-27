MoreJSEvents.villagerTrades((event) => {
    // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades#villager-trade-event
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'immersiveengineering:toolupgrade_drill_damage',
            inputs: [TradeItem.of('minecraft:emerald', 5, 10)],
            priceMultiplier: 0.2,
            level: 5,
            maxUses: 8,
            experience: 10
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_fortune',
            inputs: [TradeItem.of('minecraft:emerald', 5, 10)],
            priceMultiplier: 0.2,
            level: 5,
            maxUses: 8,
            experience: 10
        }
    ];
    /**
     * Adds a trade to the given profession.
     * - `profession`: The profession to add the trade to.
     * - `level`: The level, the villager needs to offer the trade.
     * - `input`: The input items for the trade. You can use a single item or an array with two items.
     * - `output`: The output items for the trade.
     */

    recipes.forEach((recipe) => {
        event
            .addTrade('immersiveengineering:machinist', recipe.level, recipe.inputs, recipe.output)
            .priceMultiplier(recipe.priceMultiplier)
            .maxUses(recipe.maxUses)
            .villagerExperience(recipe.experience);
    });

    // `addTrade` return the trade to set optional data.
    // trade.maxUses(number); // Sets the maximum amount of uses for the trade.
    // trade.villagerExperience(number); // Sets the amount of villager experience the trade gives.
    // trade.priceMultiplier(number); // Sets the price multiplier for the trade.
    // trade.transform((offer, entity, random) => { ... }); // Transforms the offer when it's generated.
});
