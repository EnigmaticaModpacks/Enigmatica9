JEIEvents.addItems((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    added_items.expert.forEach((item) => {
        if (item.nbt == null) {
            event.add(Item.of(item.id));
        } else {
            event.add(Item.of(item.id, item.nbt));
        }
    });
});
