JEIEvents.hideItems((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    jei.normal.items.hidden.forEach((hiddenItem) => {
        if (!Item.of(hiddenItem).isEmpty()) {
            event.hide(hiddenItem);
        }
    });

    jei.normal.items.disabled.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
