JEIEvents.addItems((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    jei.normal.items.added.forEach((item) => {
        if (item.nbt == null) {
            event.add(Item.of(item.id));
        } else {
            event.add(Item.of(item.id, item.nbt));
        }
    });
});
