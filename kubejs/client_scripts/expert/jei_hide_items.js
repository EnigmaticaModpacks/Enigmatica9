JEIEvents.hideItems((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    jei.expert.items.hidden.forEach((hiddenItem) => {
        if (!Item.of(hiddenItem).isEmpty()) {
            event.hide(hiddenItem);
        }
    });

    jei.expert.items.disabled.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            console.log(disabledItem);
            event.hide(disabledItem);
        }
    });
});
