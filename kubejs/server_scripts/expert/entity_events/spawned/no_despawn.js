EntityEvents.spawned((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    if (!event.entity.item || event.entity.item == null || event.entity.item == undefined) {
        return;
    }

    if (no_despawn.expert.includes(event.entity.item.id)) {
        event.entity.setUnlimitedLifetime();
    }
});
