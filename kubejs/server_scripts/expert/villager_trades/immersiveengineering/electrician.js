MoreJSEvents.villagerTrades((event) => {
    // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades#villager-trade-event
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:wire_copper', 8, 16)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 16,
            experience: 2
        },
        {
            output: TradeItem.of('create:nixie_tube', 2, 4),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 16,
            experience: 1
        },
        {
            output: 'immersiveengineering:wirecutter',
            inputs: [TradeItem.of('minecraft:emerald', 1, 3)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 12,
            experience: 1
        },
        {
            output: 'immersiveengineering:screwdriver',
            inputs: [TradeItem.of('minecraft:emerald', 1, 3)],
            priceMultiplier: 0.2,
            level: 1,
            maxUses: 12,
            experience: 1
        },

        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:wire_electrum', 6, 12)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 16,
            experience: 5
        },
        {
            output: TradeItem.of('immersiveengineering:electron_tube', 2, 4),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 16,
            experience: 5
        },
        {
            output: 'immersiveengineering:armor_faraday_feet',
            inputs: [TradeItem.of('minecraft:emerald', 5, 7)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 3,
            experience: 15
        },
        {
            output: 'immersiveengineering:armor_faraday_legs',
            inputs: [TradeItem.of('minecraft:emerald', 9, 11)],
            priceMultiplier: 0.2,
            level: 2,
            maxUses: 3,
            experience: 15
        },

        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('immersiveengineering:wire_aluminum', 4, 8)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 16,
            experience: 10
        },
        {
            output: TradeItem.of('immersiveengineering:wirecoil_structure_steel', 1, 2),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 16,
            experience: 10
        },
        {
            output: 'immersiveengineering:armor_faraday_chest',
            inputs: [TradeItem.of('minecraft:emerald', 11, 15)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 3,
            experience: 20
        },
        {
            output: 'immersiveengineering:armor_faraday_head',
            inputs: [TradeItem.of('minecraft:emerald', 5, 7)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 3,
            experience: 20
        },

        {
            output: 'minecraft:emerald',
            inputs: [TradeItem.of('create:polished_rose_quartz', 2, 6)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 16,
            experience: 10
        },
        {
            output: TradeItem.of('create:display_board', 3, 6),
            inputs: ['minecraft:emerald'],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 16,
            experience: 5
        },
        {
            output: 'create:display_link',
            inputs: [TradeItem.of('minecraft:emerald', 7, 10)],
            priceMultiplier: 0.2,
            level: 4,
            maxUses: 3,
            experience: 20
        },

        {
            output: 'createaddition:tesla_coil',
            inputs: [TradeItem.of('minecraft:emerald', 20, 32)],
            priceMultiplier: 0.2,
            level: 5,
            maxUses: 3,
            experience: 20
        },
        {
            output: 'immersiveengineering:circuit_board',
            inputs: [TradeItem.of('minecraft:emerald', 1, 2)],
            priceMultiplier: 0.2,
            level: 5,
            maxUses: 8,
            experience: 5
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
            .addTrade('immersiveengineering:electrician', recipe.level, recipe.inputs, recipe.output)
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
