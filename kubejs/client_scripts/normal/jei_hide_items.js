JEIEvents.hideItems((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    jei.normal.items.hidden.forEach((hiddenItem) => {
        event.hide(hiddenItem);
    });

    jei.normal.items.disabled.forEach((disabledItem) => {
        event.hide(disabledItem);
    });
});
