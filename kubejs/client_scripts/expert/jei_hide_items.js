JEIEvents.hideItems((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    jei.expert.items.hidden.forEach((hiddenItem) => {
        event.hide(hiddenItem);
    });

    jei.expert.items.disabled.forEach((disabledItem) => {
        event.hide(disabledItem);
    });
});
