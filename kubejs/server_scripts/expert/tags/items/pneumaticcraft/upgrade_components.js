ServerEvents.tags('item', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    event.get('pneumaticcraft:upgrade_components').remove(['minecraft:lapis_lazuli']);
});
