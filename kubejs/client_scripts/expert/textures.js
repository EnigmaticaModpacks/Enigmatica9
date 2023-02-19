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
        }
    ];

    models.forEach((texture) => {
        event.add(texture.path, texture.json_model);
    });
});
