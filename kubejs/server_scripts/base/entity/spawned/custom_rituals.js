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
        // Dimension ritual was executed in
        let ritual_dimension = String(event.level.dimension);
        // Set the count of the item to zero, removing it.
        // event.entity.item.count = 0;
        event.entity.item.m_41764_(0);
        // Get Ritual
        let ritual_effect = ritual_effects[item_type];
        // Instantiate the rest of our variables
        let spread, x, y, z, area, amplifier, limit, effect, duration, destination;

        if (ritual_effect.summon) {
            spread = ritual_effect.summon.spread;
            ritual_effect.summon.entities.forEach((entity) => {
                x = randomFloat(x_coord, spread);
                y = y_coord;
                z = randomFloat(z_coord, spread);
                // Summon desired entities
                event.server.runCommandSilent(`/execute in ${ritual_dimension} run summon ${entity} ${x} ${y} ${z}`);
            });
        }

        // Runs after summon, allowing summoned mobs to get buffs
        if (ritual_effect.potion) {
            ritual_effect.potion.spells.forEach((spell) => {
                area = getSelectorArea(x_coord, y_coord, z_coord, spell.range);
                amplifier = spell.level - 1 < 0 ? 0 : spell.level - 1;
                limit = spell.limit;
                effect = spell.effect;
                duration = spell.duration;

                // Apply desired spell
                event.server.runCommandSilent(
                    `/execute in ${ritual_dimension} run effect give @e[limit=${limit},sort=nearest,${area}] ${effect} ${duration} ${amplifier} true`
                );
            });
        }

        // Runs after potion effects, allowing the application of protective buffs (like slowfall) before teleportation.
        if (ritual_effect.teleport) {
            if (ritual_effect.teleport.departure.includes(ritual_dimension)) {
                area = getSelectorArea(x_coord, y_coord, z_coord, ritual_effect.teleport.range);
                limit = ritual_effect.teleport.limit;
                x = randomFloat(x_coord, ritual_effect.teleport.uncertainty);
                y = y_coord + 200;
                z = randomFloat(z_coord, ritual_effect.teleport.uncertainty);
                destination = ritual_effect.teleport.arrival;

                // Yeet the player to the target dimension
                event.server.runCommandSilent(
                    `/execute in ${ritual_dimension} as @e[limit=${limit},sort=nearest,${area}] in ${destination} run tp ${x} ${y} ${z}`
                );
            } else {
                // Warn player this cannot be perfomed in this dimension.
                area = getSelectorArea(x_coord, y_coord, z_coord, 10);
                event.server.runCommandSilent(
                    `/execute in ${ritual_dimension} run tellraw @p[${area}] "Ritual Destination unreachable from here."`
                );
            }
        }
    }
});
