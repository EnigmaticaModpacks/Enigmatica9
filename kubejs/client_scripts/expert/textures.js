ClientEvents.highPriorityAssets((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const models = [
        {
            path: 'pneumaticcraft:models/item/module_expansion_card',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/module_expansion_card' }
            }
        },
        {
            path: 'pneumaticcraft:models/item/drill_bit_iron',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/drill_bit_iron' }
            }
        },
        {
            path: 'pneumaticcraft:models/item/drill_bit_compressed_iron',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/drill_bit_compressed_iron' }
            }
        },
        {
            path: 'pneumaticcraft:models/item/drill_bit_diamond',
            json_model: {
                parent: 'item/generated',
                textures: { layer0: 'kubejs:item/drill_bit_diamond' }
            }
        }
    ];

    models.forEach((texture) => {
        event.add(texture.path, texture.json_model);
    });
});
