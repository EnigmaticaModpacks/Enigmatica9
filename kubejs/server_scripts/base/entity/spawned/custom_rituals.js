EntityEvents.spawned((event) => {
    if (!event.entity.item || event.entity.item == null || event.entity.item == undefined) {
        return;
    }

    let item_type = event.entity.item.id.split(':')[1];

    if (Object.keys(ritual_effects).includes(item_type)) {
        // Get Coordinates
        // let x_coord = event.entity.x;
        let x_coord = event.entity.m_20185_();
        // let y_coord = event.entity.y;
        let y_coord = event.entity.m_20186_();
        // let z_coord = event.entity.z;
        let z_coord = event.entity.m_20189_();

        // Set the count of the item to zero.
        // event.entity.item.count = 0;
        event.entity.item.m_41764_(0);

        if (ritual_effects[item_type].summon) {
            let range = ritual_effects[item_type].summon.range;
            ritual_effects[item_type].summon.entities.forEach((entity) => {
                event.server.runCommandSilent(
                    `/summon ${entity} ${randomFloat(x_coord, range)} ${y_coord} ${randomFloat(z_coord, range)}`
                );
            });
        }
    }
});
