JEIEvents.addItems((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    added_items.normal.forEach((item) => {
        if (item.nbt == null) {
            event.add(Item.of(item.id));
        } else {
            event.add(Item.of(item.id, item.nbt));
        }
    });
});
