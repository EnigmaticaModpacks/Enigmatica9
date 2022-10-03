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
        // Dimension to execute commands in
        let runInDim = `/execute in ${event.level.dimension} run`;

        // Set the count of the item to zero, removing it.
        // event.entity.item.count = 0;
        event.entity.item.m_41764_(0);

        if (ritual_effects[item_type].summon) {
            let range = ritual_effects[item_type].summon.range;
            ritual_effects[item_type].summon.entities.forEach((entity) => {
                // Summon desired entities
                event.server.runCommandSilent(
                    `${runInDim} summon ${entity} ${randomFloat(x_coord, range)} ${y_coord} ${randomFloat(
                        z_coord,
                        range
                    )}`
                );
            });
        }

        if (ritual_effects[item_type].potion) {
            ritual_effects[item_type].potion.spells.forEach((spell) => {
                let d = spell.range,
                    r = d / 2,
                    x = x_coord - r,
                    y = y_coord - r,
                    z = z_coord - r,
                    amplifier = spell.level - 1 < 0 ? 0 : spell.level - 1;
                // Apply desired spell
                event.server.runCommandSilent(
                    `${runInDim} effect give @e[limit=${spell.limit},sort=nearest,x=${x},dx=${d},z=${z},dz=${d},y=${y},dy=${d}] ${spell.effect} ${spell.duration} ${amplifier} true`
                );
            });
        }
    }
});
