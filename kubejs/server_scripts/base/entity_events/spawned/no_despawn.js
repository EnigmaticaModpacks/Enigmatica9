EntityEvents.spawned((event) => {
    if (!event.entity.item || event.entity.item == null || event.entity.item == undefined) {
        return;
    }

    if (no_despawn.base.includes(event.entity.item.id)) {
        event.entity.setUnlimitedLifetime();
    }
});
