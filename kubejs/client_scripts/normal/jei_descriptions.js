JEIEvents.information((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const descriptions = [
        {
            items: ['naturesaura:projectile_generator'],
            text: [`Valid Projectiles:`, ``, `● Snowballs`, `● Eggs`, `● Arrows`, `● Fire Charges`, `● Spectral Arrows`]
        },
        {
            items: ['naturesaura:projectile_generator'],
            text: [`● Ender Pearls`, `● Llama Spit`, `● Bottles o' Enchanting`, `● Shulker Bullets`, `● Tridents`]
        },
        {
            items: ['ars_nouveau:mendosteen_pod'],
            text: [
                `Found on naturally occuring Flourishing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Flourishing Archwood Logs.`
            ]
        },
        {
            items: ['ars_nouveau:frostaya_pod'],
            text: [
                `Found on naturally occuring Cascading Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Cascading Archwood Logs.`
            ]
        },
        {
            items: ['ars_nouveau:bombegranate_pod'],
            text: [
                `Found on naturally occuring Blazing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Blazing Archwood Logs.`
            ]
        },
        {
            items: ['ars_nouveau:bastion_pod'],
            text: [
                `Found on naturally occuring Vexing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Vexing Archwood Logs.`
            ]
        },
        {
            items: ['ars_elemental:flashpine_pod'],
            text: [
                `Found on naturally occuring Flashing Archwood Trees.`,
                ` `,
                `May be grown like Cocoa Beans on Flashing Archwood Logs.`
            ]
        }
    ];

    descriptions.forEach((description) => {
        description.items.forEach((item) => {
            event.addItem(item, description.text);
        });
    });

    jei.normal.items.disabled.forEach((item) => {
        if (item !== air) {
            console.log(`Adding description for ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
