// priority: 100
MoreJSEvents.registerPotionBrewing((event) => {
    // Documentation: https://github.com/AlmostReliable/morejs/wiki/Potion-Brewing
    /**
     * Removes all potions where an awkward potion is used as theb base potion ingredient.
     * 1. Argument: The input potion id to filter.
     * 2. Argument: The ingredient to filter.
     * 3. Argument: The result potion id to filter.
     * Passing `null` counts as a wildcard.
     */
    // event.removeByPotion(null, 'ars_nouveau:abjuration_essence', null);
    // event.removeByPotion(null, 'ars_nouveau:wilden_horn', null);
    // event.removeByPotion(null, 'ars_nouveau:wilden_spike', null);
    // event.removeByPotion(null, 'ars_nouveau:wilden_wing', null);
});
