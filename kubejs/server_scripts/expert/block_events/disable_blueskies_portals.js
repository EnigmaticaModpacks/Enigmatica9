BlockEvents.rightClicked((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    if (event.block.id == 'blue_skies:turquoise_stonebrick' || event.block.id == 'blue_skies:lunar_stonebrick') {
        if (event.item.id == 'blue_skies:zeal_lighter') {
            event.cancel();
        }
    }
});
