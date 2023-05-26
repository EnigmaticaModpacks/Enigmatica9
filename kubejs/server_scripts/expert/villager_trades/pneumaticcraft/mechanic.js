MoreJSEvents.villagerTrades((event) => {
    // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades#villager-trade-event
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'ae2:certus_quartz_crystal',
            inputs: [TradeItem.of('minecraft:emerald', 2, 5)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 10,
            experience: 2
        },
        {
            output: TradeItem.of('pneumaticcraft:logistics_core', 1, 3),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 10,
            experience: 2
        },
        {
            output: TradeItem.of('pneumaticcraft:bandage', 5, 10),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 10,
            experience: 2
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('pneumaticcraft:glycerol', 2, 4)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 16,
            experience: 2
        },
        {
            output: TradeItem.of('ae2:sky_stone_block', 1, 3),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 16,
            experience: 10
        },
        {
            output: TradeItem.of('pneumaticcraft:programming_puzzle', 16, 32),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 16,
            experience: 10
        },
        {
            output: 'pneumaticcraft:air_canister',
            inputs: [TradeItem.of('minecraft:emerald', 7, 14)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 5,
            experience: 10
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('ae2:charged_certus_quartz_crystal', 2, 4)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 10,
            experience: 10
        },

        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('ae2:quartz_glass', 2, 4)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 10,
            experience: 10
        },
        {
            output: TradeItem.of('ae2:fluix_crystal', 2, 6),
            inputs: [TradeItem.of('minecraft:emerald', 3, 7)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 8,
            experience: 15
        },

        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('ae2:matter_ball', 2, 7)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 12,
            experience: 12
        },
        {
            output: 'ae2:not_so_mysterious_cube',
            inputs: [TradeItem.of('minecraft:emerald', 48, 64)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 1,
            experience: 30
        },
        {
            output: TradeItem.of('pneumaticcraft:logistics_module', 4, 12),
            inputs: [TradeItem.of('minecraft:emerald', 2, 6)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 10,
            experience: 10
        },

        {
            output: 'pneumaticcraft:spawner_core_shell',
            inputs: [TradeItem.of('minecraft:emerald', 32, 64)],
            priceMultiplier: 0.2,
            level: 5,
            maxUses: 2,
            experience: 20
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('ae2:fluix_pearl', 12, 18)],
            priceMultiplier: 0.2,
            level: 5,
            maxUses: 2,
            experience: 12
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
