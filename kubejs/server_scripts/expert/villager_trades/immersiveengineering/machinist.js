MoreJSEvents.villagerTrades((event) => {
    // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades#villager-trade-event
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('powah:crystal_blazing', 8, 16)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 16,
            experience: 2
        },
        {
            output: 'immersiveengineering:hammer',
            inputs: [TradeItem.of('minecraft:emerald', 1, 3)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 12,
            experience: 1
        },

        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('emendatusenigmatica:steel_ingot', 3, 6)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 12,
            experience: 10
        },
        {
            output: 'immersiveengineering:waterwheel_segment',
            inputs: [TradeItem.of('minecraft:emerald', 1, 3)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 8,
            experience: 10
        },

        {
            output: 'immersiveengineering:toolbox',
            inputs: [TradeItem.of('minecraft:emerald', 6, 8)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 3,
            experience: 20
        },
        {
            output: 'immersiveengineering:sawblade',
            inputs: [TradeItem.of('minecraft:emerald', 20, 40)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 3,
            experience: 15
        },
        {
            output: 'immersiveengineering:earmuffs',
            inputs: [TradeItem.of('minecraft:emerald', 4, 9)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 3,
            experience: 20
        },

        {
            output: 'immersiveengineering:drillhead_steel',
            inputs: [TradeItem.of('minecraft:emerald', 32, 48)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 3,
            experience: 30
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_capacity',
            inputs: [TradeItem.of('minecraft:emerald', 5, 10)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 8,
            experience: 10
        },
        {
            output: 'immersiveengineering:toolupgrade_drill_waterproof',
            inputs: [TradeItem.of('minecraft:emerald', 5, 10)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 8,
            experience: 10
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:light_engineering', 1, 2)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 16,
            experience: 10
        },

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
