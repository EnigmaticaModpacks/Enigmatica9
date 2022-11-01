ServerEvents.tags('enchantment', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const enchantments = ['minecraft:respiration'];

    event.get('the_bumblezone:blacklisted_crystalline_flower_enchantments').add(enchantments);
});
