MoreJSEvents.villagerTrades((event) => {
    // https://github.com/AlmostReliable/morejs/wiki/Villager-Trades#villager-trade-event
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [];

    const tablets = [
        'ars_nouveau:ritual_burrowing',
        'ars_nouveau:ritual_challenge',
        'ars_nouveau:ritual_binding',
        'ars_nouveau:ritual_awakening',
        'ars_nouveau:ritual_disintegration',
        'ars_nouveau:ritual_sunrise',
        'ars_nouveau:ritual_conjure_island_plains',
        'ars_nouveau:ritual_flight',
        'ars_nouveau:ritual_cloudshaping',
        'ars_nouveau:ritual_restoration',
        'ars_nouveau:ritual_forestation',
        'ars_nouveau:ritual_warping',
        'ars_nouveau:ritual_moonfall',
        'ars_nouveau:ritual_containment',
        'ars_nouveau:ritual_scrying',
        'ars_nouveau:ritual_flowering',
        'ars_nouveau:ritual_fertility',
        'ars_nouveau:ritual_overgrowth',
        'ars_nouveau:ritual_conjure_island_desert',
        'ars_nouveau:ritual_harvest',
        'ars_nouveau:ritual_animal_summon',
        'ars_nouveau:ritual_sanctuary',
        'ars_elemental:ritual_tesla_coil',
        'ars_elemental:ritual_squirrels',
        'ars_elemental:ritual_attraction',
        'ars_elemental:ritual_repulsion',
        'ars_elemental:ritual_detection'
    ];

    tablets.forEach((tablet) => {
        recipes.push({
            output: tablet,
            inputs: [TradeItem.of('minecraft:emerald', 4)],
            priceMultiplier: 0.2,
            level: 3,
            maxUses: 1,
            experience: 12
        });
    });

    /**
     * Adds a trade to the given profession.
     * - `profession`: The profession to add the trade to.
     * - `level`: The level, the villager needs to offer the trade.
     * - `input`: The input items for the trade. You can use a single item or an array with two items.
     * - `output`: The output items for the trade.
     */

    recipes.forEach((recipe) => {
        event
            .addTrade('ars_nouveau:shady_wizard', recipe.level, recipe.inputs, recipe.output)
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
