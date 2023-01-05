EntityEvents.spawned((event) => {
    if (!event.entity.item || event.entity.item == null || event.entity.item == undefined) {
        return;
    }

    let item_type = event.entity.item.id.split(':')[1];
    if (Object.keys(ritual_effects).includes(item_type)) {
        // Get Coordinates
        let x_coord = event.entity.x;
        // let x_coord = event.entity.m_20185_();
        let y_coord = event.entity.y;
        // let y_coord = event.entity.m_20186_();
        let z_coord = event.entity.z;
        // let z_coord = event.entity.m_20189_();
        // console.log(`Coordinates: ${x_coord} ${y_coord} ${z_coord}`);

        // Dimension ritual was executed in
        let ritual_dimension = String(event.level.getDimension());

        // Set the count of the item to zero, removing it.
        event.entity.item.count = 0;
        // event.entity.item.m_41764_(0);
        // Get Ritual
        let ritual_effect = ritual_effects[item_type];
        // Instantiate the rest of our variables
        let spread, x, y, z, area, amplifier, limit, effect, duration, destination, command, coordinates, delay;

        if (ritual_effect.summon) {
            spread = ritual_effect.summon.spread;
            ritual_effect.summon.entities.forEach((entity) => {
                x = randomFloat(x_coord, spread);
                y = y_coord;
                z = randomFloat(z_coord, spread);
                // Summon desired entities
                command = `/execute in ${ritual_dimension} run summon ${entity} ${x} ${y} ${z}`;
                // console.log(command);
                event.server.runCommandSilent(command);
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
                command = `/execute in ${ritual_dimension} run effect give @e[limit=${limit},sort=nearest,${area}] ${effect} ${duration} ${amplifier} true`;
                // console.log(command);
                event.server.runCommandSilent(command);
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
                command = `/execute in ${ritual_dimension} as @e[limit=${limit},sort=nearest,${area}] in ${destination} run tp ${x} ${y} ${z}`;
                // console.log(command);
                event.server.runCommandSilent(command);
            } else {
                // Warn player this cannot be perfomed in this dimension.
                area = getSelectorArea(x_coord, y_coord, z_coord, 10);
                command = `/execute in ${ritual_dimension} run tellraw @p[${area}] "Ritual Destination unreachable from here."`;
                // console.log(command);
                event.server.runCommandSilent(command);
            }
        }

        // Gateway Pearl Handling
        if (ritual_effect.gateway) {
            x = x_coord;
            y = y_coord - 0.5;
            z = z_coord;

            let gateway_type = event.entity.item.nbt.gateway,
                radius = event.entity.item.nbt.radius,
                density = 5,
                num_points = 5,
                duration = 2 * 20;

            // Draw the Circle
            coordinates = getCircleCoordinates(x, y, z, radius, density);
            delay = duration / coordinates.length;

            coordinates.forEach((coord, index) => {
                event.server.scheduleInTicks(index * delay, (c) => {
                    command = `/execute in ${ritual_dimension} run particle minecraft:soul_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                    event.server.runCommandSilent(command);
                });
            });

            delay = duration + 20;
            coordinates = coordinates.concat(getStarCoordinates(x, y, z, radius, num_points, density));
            event.server.scheduleInTicks(delay, (c) => {
                coordinates.forEach((coord) => {
                    command = `/execute in ${ritual_dimension} run particle minecraft:soul_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                    event.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run particle minecraft:enchant ${coord.x} ${
                        coord.y + 0.5
                    } ${coord.z}`;
                    event.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run particle minecraft:smoke ${coord.x} ${
                        coord.y - 0.5
                    } ${coord.z}`;
                    event.server.runCommandSilent(command);
                });

                // Open the Gateway
                command = `/execute in ${ritual_dimension} run open_gateway ${x} ${y + 1.5} ${z} ${gateway_type}`;
                event.server.runCommandSilent(command);
            });
        }

        // Aura Generation
        if (ritual_effect.aura) {
            x = x_coord;
            y = y_coord + 1;
            z = z_coord;

            let duration = 3 * 20,
                revolutions = 9,
                height = 3,
                upper_radius = 8,
                lower_radius = 5,
                density = 100,
                aura_amount = event.entity.item.nbt.aura_amount,
                aura_max = event.entity.item.nbt.aura_max,
                color;

            if (ritual_dimension == 'minecraft:the_nether' || ritual_dimension == 'blue_skies:everbright') {
                // Ghosts Aura - Red
                color = '201 11 8';
            } else if (ritual_dimension == 'minecraft:the_end' || ritual_dimension == 'the_bumblezone:the_bumblezone') {
                // Darkness Aura - Purple
                color = '209 26 237';
            } else {
                // Sunny Aura - Green
                color = '11 227 44';
            }

            // Draw the Spiral
            coordinates = getSpiralCoordinates(x, y, z, revolutions, height, upper_radius, lower_radius, density);
            delay = duration / coordinates.length;
            let aura_per_step = Math.floor(aura_amount / coordinates.length);

            coordinates.forEach((coord, index) => {
                event.server.scheduleInTicks(index * delay, (c) => {
                    // Generate some aura
                    command = `/execute in ${ritual_dimension} positioned ${coord.x} ${coord.y} ${coord.z} run eu aura ${aura_per_step} ${aura_max}`;
                    event.server.runCommandSilent(command);

                    // Sprinkle some leaves
                    command = `/execute in ${ritual_dimension} run particle twilightforest:fallen_leaf ${color} ${coord.x} ${coord.y} ${coord.z} 1 1 1 0.1 1`;
                    event.server.runCommandSilent(command);
                });
            });
        }
    }
});

function getLineCoordinates(x1, y1, z1, x2, y2, z2, density) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    let dz = z2 - z1;
    let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    let num_points = Math.floor(distance * density); // points per block
    let stepX = dx / num_points;
    let stepY = dy / num_points;
    let stepZ = dz / num_points;

    let coordinates = [];
    for (let i = 0; i < num_points; i++) {
        let x = x1 + i * stepX;
        let y = y1 + i * stepY;
        let z = z1 + i * stepZ;

        coordinates.push({ x: x, y: y, z: z });
    }
    return coordinates;
}

function getStarCoordinates(x, y, z, radius, num_points, density) {
    let angle_step = (2 * 3.14159) / num_points;

    let coordinates = [];
    for (let i = 0; i < num_points; i++) {
        let angle1 = i * angle_step;
        let angle2 = (i + 2) * angle_step;

        let dx1 = radius * Math.cos(angle1);
        let dz1 = radius * Math.sin(angle1);

        let dx2 = radius * Math.cos(angle2);
        let dz2 = radius * Math.sin(angle2);

        let line_coordinates = getLineCoordinates(x + dx1, y, z + dz1, x + dx2, y, z + dz2, density);
        coordinates = coordinates.concat(line_coordinates);
    }
    return coordinates;
}

function getCircleCoordinates(x, y, z, radius, density) {
    let circumference = 2 * 3.14159 * radius;
    let num_points = Math.floor(circumference * density);
    let angle_step = (2 * 3.14159) / num_points;

    let coordinates = [];
    for (let i = 0; i < num_points; i++) {
        let angle = i * angle_step;
        let dx = radius * Math.cos(angle);
        let dz = radius * Math.sin(angle);

        coordinates.push({ x: x + dx, y: y, z: z + dz });
    }
    return coordinates;
}

function getSpiralCoordinates(x, y, z, revolutions, height, upper_radius, lower_radius, density) {
    let num_particles = density * revolutions,
        angle_step = (2 * 3.14159 * revolutions) / num_particles;

    let coordinates = [];
    for (let i = 0; i < num_particles; i++) {
        let angle = i * angle_step,
            radius = lower_radius + (upper_radius - lower_radius) * (i / num_particles),
            dx = radius * Math.cos(angle),
            dz = radius * Math.sin(angle),
            dy = height * (i / num_particles);

        coordinates.push({ x: x + dx, y: y + dy, z: z + dz });
    }
    return coordinates;
}
