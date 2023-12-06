// priority: 100
MoreJSEvents.registerPotionBrewing((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // Documentation: https://github.com/AlmostReliable/morejs/wiki/Potion-Brewing
    /**
     * Removes all potions where an awkward potion is used as the base potion ingredient.
     * 1. Argument: The input potion id to filter.
     * 2. Argument: The ingredient to filter.
     * 3. Argument: The result potion id to filter.
     * Passing `null` counts as a wildcard.
     */
    //event.removeByPotion("minecraft:awkward", null, null);

    event.removeByPotion(null, 'minecraft:nether_wart', null);
    event.removeByPotion(null, 'minecraft:shulker_shell', null);
    event.removeByPotion(null, 'quark:crab_shell', null);
});
