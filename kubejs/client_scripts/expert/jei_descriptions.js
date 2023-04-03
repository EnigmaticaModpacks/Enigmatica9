JEIEvents.information((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const descriptions = [
        {
            items: ['naturesaura:projectile_generator'],
            text: [`Valid Projectiles:`, ``, `● Ender Pearls`, `● Bottles o' Enchanting`]
        },
        {
            items: ['blue_skies:turquoise_stonebrick', 'blue_skies:lunar_stonebrick', 'blue_skies:zeal_lighter'],
            text: [`Blueskies Portals are disabled in Expert.`]
        },
        {
            items: ['ars_nouveau:novice_spell_book'],
            text: [
                `Obtained as a drop from the Lich in Twilight Forest. Come prepared, as they won't give it up without a fight.`
            ]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            event.addItem(item, description.text);
        });
    });

    jei.expert.items.disabled.forEach((item) => {
        if (item !== air) {
            // console.log(`Adding description for ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
