EntityEvents.spawned((event) => {
    if (event.entity.type !== 'minecraft:item') {
        return;
    }

    let item_type = event.entity.item.id.split(':')[1];
    console.log(item_type);

    if (
        event.entity.type == 'minecraft:item' &&
        Object.keys(custom_spawns).includes(item_type) &&
        event.entity.item != null &&
        event.entity.item != undefined
    ) {
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

        // Remove the entity.
        // event.entity.discard();
        //event.entity.m_146870_();
        // event.entity.remove();
        //event.entity.m_142687_();

        custom_spawns[item_type].entities.forEach((entity) => {
            event.server.runCommand(
                `/summon ${entity} ${generateRandomOffset(x_coord)} ${y_coord} ${generateRandomOffset(z_coord)}`
            );
        });
    }
});
