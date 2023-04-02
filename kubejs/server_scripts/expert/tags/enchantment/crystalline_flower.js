ServerEvents.tags('enchantment', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // event.get('the_bumblezone:crystalline_flower/disallowed_enchantments').add(['minecraft:respiration']);
});
