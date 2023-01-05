EntityEvents.spawned((event) => {
    if (!event.entity.item || event.entity.item == null || event.entity.item == undefined) {
        return;
    }

    let item_type = event.entity.item.id.split(':')[1];
    if (Object.keys(ritual_effects).includes(item_type)) {
        // Get absolute Coordinates. these should not change throughout the script
        let abs = { x: event.entity.x, y: event.entity.y, z: event.entity.z };

        // Dimension ritual was executed in
        let ritual_dimension = String(event.level.getDimension());

        // Set the count of the item to zero, removing it.
        event.entity.item.count = 0;

        // Get Ritual
        let ritual_effect = ritual_effects[item_type];
        // Instantiate the rest of our variables

        let area,
            delay,
            color,
            limit,
            effect,
            spread,
            command,
            duration,
            amplifier,
            coordinates,
            destination,
            secondary_particle;

        if (ritual_effect.summon) {
            spread = ritual_effect.summon.spread;
            ritual_effect.summon.entities.forEach((entity) => {
                let cur = { x: randomFloat(abs.x, spread), y: abs.y, z: randomFloat(abs.z, spread) };
                // Summon desired entities
                command = `/execute in ${ritual_dimension} run summon ${entity} ${cur.x} ${cur.y} ${cur.z}`;
                // console.log(command);
                event.server.runCommandSilent(command);
            });
        }

        // Runs after summon, allowing summoned mobs to get buffs
        if (ritual_effect.potion) {
            ritual_effect.potion.spells.forEach((spell) => {
                area = getSelectorArea(abs.x, abs.y, abs.z, spell.range);
                amplifier = spell.level - 1 < 0 ? 0 : spell.level - 1;
                limit = spell.limit;
                effect = spell.effect;
                duration = spell.duration;

                // Apply desired spell
                command = `/execute in ${ritual_dimension} run effect give @e[limit=${limit},sort=nearest,${area}] ${effect} ${duration} ${amplifier} true`;
                event.server.runCommandSilent(command);
            });
        }

        // Runs after potion effects, allowing the application of protective buffs (like slowfall) before teleportation.
        if (ritual_effect.teleport) {
            if (ritual_effect.teleport.departure.includes(ritual_dimension)) {
                let revolutions = 9;
                let height = 1;
                let upper_radius = 16;
                let lower_radius = 1;
                let density = 50;
                let duration = 6 * 20;

                let cur = { x: abs.x, y: abs.y - 0.5, z: abs.z };
                // Slowly draw a spiral in reverse
                coordinates = getSpiralCoordinates(
                    cur.x,
                    cur.y,
                    cur.z,
                    revolutions,
                    height,
                    upper_radius,
                    lower_radius,
                    density
                );
                delay = duration / coordinates.length;

                coordinates
                    .slice()
                    .reverse()
                    .forEach((coord, index) => {
                        event.server.scheduleInTicks(index * delay, (c) => {
                            // spiral of swirlies
                            command = `/execute in ${ritual_dimension} run particle minecraft:entity_effect ${coord.x} ${coord.y} ${coord.z} 0.44 0.07 0.89 1 0`;
                            event.server.runCommandSilent(command);
                        });
                    });

                // Flash at the end of the spiral
                delay = duration;

                event.server.scheduleInTicks(delay, (c) => {
                    command = `/execute in ${ritual_dimension} run particle minecraft:flash ${abs.x} ${abs.y} ${abs.z} 0 0 0 0.1 1`;
                    event.server.runCommandSilent(command);
                });

                // Yeet the player to the target dimension after delay
                let dest = {
                    x: randomFloat(abs.x, ritual_effect.teleport.uncertainty),
                    y: abs.y + 200,
                    z: randomFloat(abs.z, ritual_effect.teleport.uncertainty)
                };
                area = getSelectorArea(abs.x, abs.y, abs.z, ritual_effect.teleport.range);
                destination = ritual_effect.teleport.arrival;
                limit = ritual_effect.teleport.limit;
                delay = duration + 20;

                event.server.scheduleInTicks(delay, (c) => {
                    command = `/execute in ${ritual_dimension} as @e[limit=${limit},sort=nearest,${area}] in ${destination} run tp ${dest.x} ${dest.y} ${dest.z}`;
                    event.server.runCommandSilent(command);
                });
            } else {
                // Warn player this cannot be perfomed in this dimension.
                area = getSelectorArea(abs.x, abs.y, abs.z, 10);
                command = `/execute in ${ritual_dimension} run tellraw @p[${area}] "Ritual destination unreachable from here."`;
                // console.log(command);
                event.server.runCommandSilent(command);
            }
        }

        // Gateway Pearl Handling
        if (ritual_effect.gateway) {
            let cur = { x: abs.x, y: abs.y - 0.5, z: abs.z };
            let gate = { x: abs.x, y: abs.y + 1, z: abs.z };
            let gateway_type = event.entity.item.nbt.gateway;
            let radius = event.entity.item.nbt.radius;
            let num_points = 5;
            duration = 2 * 20;
            density = 5;

            // Draw a slow circle
            coordinates = getCircleCoordinates(cur.x, cur.y, cur.z, radius, density);
            delay = duration / coordinates.length;

            coordinates.forEach((coord, index) => {
                event.server.scheduleInTicks(index * delay, (c) => {
                    command = `/execute in ${ritual_dimension} run particle minecraft:soul_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                    event.server.runCommandSilent(command);
                });
            });

            // Draw the full Pentagram in one go after the slow circle
            coordinates = coordinates.concat(getStarCoordinates(cur.x, cur.y, cur.z, radius, num_points, density));
            delay = duration + 20;

            event.server.scheduleInTicks(delay, (c) => {
                coordinates.forEach((coord) => {
                    command = `/execute in ${ritual_dimension} run particle minecraft:soul_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                    event.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run particle twilightforest:leaf_rune ${coord.x} ${
                        coord.y + 0.5
                    } ${coord.z}`;
                    event.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run particle minecraft:smoke ${coord.x} ${
                        coord.y - 0.5
                    } ${coord.z}`;
                    event.server.runCommandSilent(command);
                });

                // Open the Gateway
                command = `/execute in ${ritual_dimension} run open_gateway ${gate.x} ${gate.y} ${gate.z} ${gateway_type}`;
                event.server.runCommandSilent(command);
            });
        }

        // Aura Generation
        if (ritual_effect.aura) {
            let cur = { x: abs.x, y: abs.y + 1, z: abs.z };
            let revolutions = 9;
            let height = 3;
            let upper_radius = 8;
            let lower_radius = 5;
            let density = 10;
            let aura_amount = event.entity.item.nbt.aura_amount;
            let aura_max = event.entity.item.nbt.aura_max;

            if (ritual_dimension == 'minecraft:the_nether' || ritual_dimension == 'blue_skies:everbright') {
                // Ghosts Aura - Red
                color = '201 11 8';
                secondary_particle = 'minecraft:soul';
            } else if (ritual_dimension == 'minecraft:the_end' || ritual_dimension == 'the_bumblezone:the_bumblezone') {
                // Darkness Aura - Purple
                color = '209 26 237';
                secondary_particle = 'minecraft:dragon_breath';
            } else {
                // Sunny Aura - Green
                color = '11 227 44';
                secondary_particle = 'twilightforest:jar_wandering_firefly';
            }

            // Draw the Spiral
            coordinates = getSpiralCoordinates(
                cur.x,
                cur.y,
                cur.z,
                revolutions,
                height,
                upper_radius,
                lower_radius,
                density
            );
            duration = 3 * 20;
            delay = duration / coordinates.length;
            let aura_per_step = Math.floor(aura_amount / coordinates.length);

            coordinates.forEach((coord, index) => {
                event.server.scheduleInTicks(index * delay, (c) => {
                    // Generate some aura
                    command = `/execute in ${ritual_dimension} positioned ${coord.x} ${coord.y} ${coord.z} run eu aura ${aura_per_step} ${aura_max}`;
                    event.server.runCommandSilent(command);

                    // Sprinkle some leaves
                    command = `/execute in ${ritual_dimension} run particle twilightforest:fallen_leaf ${color} ${coord.x} ${coord.y} ${coord.z} 1 1 1 0.1 2`;
                    event.server.runCommandSilent(command);

                    // Sprinkle secondary particle
                    command = `/execute in ${ritual_dimension} run particle ${secondary_particle} ${coord.x} ${coord.y} ${coord.z} 1 1 1 0.1 1`;
                    event.server.runCommandSilent(command);
                });
            });
        }
    }
});
