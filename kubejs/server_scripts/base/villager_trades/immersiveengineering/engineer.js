MoreJSEvents.villagerTrades((event) => {
    // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades#villager-trade-event

    const recipes = [
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:treated_wood_horizontal', 4, 6)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 16,
            experience: 2
        },
        {
            output: TradeItem.of('immersiveengineering:treated_scaffold', 5, 8),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 16,
            experience: 1
        },
        {
            output: TradeItem.of('immersiveengineering:balloon', 1, 3),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 12,
            experience: 2
        },

        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('emendatusenigmatica:iron_rod', 4, 8)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 16,
            experience: 10
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('emendatusenigmatica:aluminum_rod', 4, 8)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 16,
            experience: 10
        },
        {
            output: TradeItem.of('immersiveengineering:alu_scaffolding_standard', 4, 8),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 12,
            experience: 5
        },
        {
            output: TradeItem.of('immersiveengineering:steel_scaffolding_standard', 4, 8),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 12,
            experience: 5
        },

        {
            output: TradeItem.of('immersiveengineering:wirecoil_structure_rope', 4, 6),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 16,
            experience: 10
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:connector_structural', 4, 8)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 16,
            experience: 10
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:concrete', 4, 8)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 16,
            experience: 10
        },
        {
            output: TradeItem.of('immersiveengineering:concrete_leaded', 4, 6),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 16,
            experience: 10
        },

        {
            output: TradeItem.of('immersiveengineering:treated_post', 2, 3),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 8,
            experience: 20
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:insulating_glass', 2, 6)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 16,
            experience: 10
        },
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:duroplast', 2, 6)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 16,
            experience: 10
        },

        {
            output: TradeItem.of('immersiveengineering:wirecoil_structure_steel', 4, 6),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 5,
            maxUses: 16,
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
            .addTrade('immersiveengineering:engineer', recipe.level, recipe.inputs, recipe.output)
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
