JEIEvents.information((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const descriptions = [
        {
            items: ['naturesaura:projectile_generator'],
            text: [
                `Valid Projectiles:`,
                ``,
                `● Ars Nouveau Spell Projectiles`,
                `● Ender Pearls`,
                `● Bottles o' Enchanting`
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
            console.log(`Adding description for ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
