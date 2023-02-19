EntityEvents.spawned((event) => {
    if (!event.entity.item || event.entity.item == null || event.entity.item == undefined) {
        return;
    }

    let item_type = event.entity.item.id.split(':')[1];
    if (Object.keys(ritual_effects).includes(item_type)) {
        let abs = { x: event.entity.x, y: event.entity.y, z: event.entity.z }; // Absolute Coordinates. these should not change throughout the script
        let ritual_dimension = String(event.level.getDimension());
        let ritual_effect = ritual_effects[item_type];
        event.entity.item.count = 0; // Set the count of the item to zero, removing it.
        let command, coordinates;

        // Summon Entity Handling
        if (ritual_effect.summon) {
            let spread = ritual_effect.summon.spread;
            ritual_effect.summon.entities.forEach((entity) => {
                let cur = { x: randomFloat(abs.x, spread), y: abs.y, z: randomFloat(abs.z, spread) };

                // Summon desired entities
                command = `/execute in ${ritual_dimension} run summon ${entity} ${cur.x} ${cur.y} ${cur.z}`;
                event.server.runCommandSilent(command);
            });
        }

        // Apply Potion Effect Handling
        // Runs after summon, allowing summoned mobs to get buffs
        if (ritual_effect.potion) {
            ritual_effect.potion.spells.forEach((spell) => {
                let area = getSelectorArea(abs.x, abs.y, abs.z, spell.range);
                let amplifier = spell.level - 1 < 0 ? 0 : spell.level - 1;
                let limit = spell.limit;
                let effect = spell.effect;
                let duration = spell.duration;

                // Apply desired spell
                command = `/execute in ${ritual_dimension} run effect give @e[limit=${limit},sort=nearest,${area}] ${effect} ${duration} ${amplifier} true`;
                event.server.runCommandSilent(command);
            });
        }

        // Teleportation Handling
        // Runs after potion effects, allowing the application of protective buffs (like slowfall) before teleportation.
        if (ritual_effect.teleport) {
            let destination = ritual_effect.teleport.arrival;
            let cur = { x: abs.x, y: abs.y - 0.5, z: abs.z };
            let dest = {
                x: randomFloat(abs.x, ritual_effect.teleport.uncertainty),
                y: abs.y + 200,
                z: randomFloat(abs.z, ritual_effect.teleport.uncertainty)
            };
            let area = getSelectorArea(abs.x, abs.y, abs.z, 16);
            let limit = ritual_effect.teleport.limit;
            let revolutions = 9;
            let height = 0.1;
            let upper_radius = 5;
            let lower_radius = 1;
            let density = 50;
            let duration = 18 * 20;
            let delay;

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
                    event.server.scheduleInTicks(index * delay, (schedule) => {
                        // spiral of spooky particles
                        command = `/execute in ${ritual_dimension} run particle twilightforest:annihilate ${coord.x} ${coord.y} ${coord.z} 0.5 0.5 0.5 0.1 9`;
                        schedule.server.runCommandSilent(command);

                        // spiral shockwave
                        // Disabled due to crash. Pending fix from Thermal
                        // command = `/execute in ${ritual_dimension} run particle cofh_core:shockwave 3 3 3 0.5 ${
                        //     coord.x
                        // } ${coord.y - 1} ${coord.z} 0.2 0.2 0.2 0.1 10`;
                        // schedule.server.runCommandSilent(command);

                        if (index % 10 === 0) {
                            command = `/execute in ${ritual_dimension} run playsound minecraft:ambient.cave block @p ${coord.x} ${coord.y} ${coord.z} 1 0.5`;
                            schedule.server.runCommandSilent(command);
                        }

                        if (index % 3 === 0) {
                            command = `/execute in ${ritual_dimension} run playsound minecraft:block.rooted_dirt.step block @p ${coord.x} ${coord.y} ${coord.z} 1 0.1`;
                            schedule.server.runCommandSilent(command);

                            command = `/execute in ${ritual_dimension} run playsound minecraft:block.soul_sand.step block @p ${coord.x} ${coord.y} ${coord.z} 1 0.1`;
                            schedule.server.runCommandSilent(command);
                        }
                    });

                    // extra particles, trailing behind
                    event.server.scheduleInTicks(index * delay + 10, (schedule) => {
                        // spiral of dragon_breath
                        command = `/execute in ${ritual_dimension} run particle minecraft:dragon_breath ${coord.x} ${coord.y} ${coord.z} 0.5 0.5 0.5 0.1 9`;
                        schedule.server.runCommandSilent(command);
                    });

                    event.server.scheduleInTicks(index * delay + 5, (schedule) => {
                        // spiral of swirlies
                        command = `/execute in ${ritual_dimension} run particle minecraft:entity_effect ${coord.x} ${coord.y} ${coord.z} 0.44 0.07 0.89 1 0`;
                        schedule.server.runCommandSilent(command);
                    });
                });

            // Flash at the end of the spiral
            delay = duration;
            event.server.scheduleInTicks(delay, (schedule) => {
                command = `/execute in ${ritual_dimension} run particle minecraft:flash ${abs.x} ${abs.y} ${abs.z} 0 0 0 0.1 1`;
                schedule.server.runCommandSilent(command);

                command = `/execute in ${ritual_dimension} run playsound minecraft:block.end_portal.spawn block @p ${abs.x} ${abs.y} ${abs.z} 10 1`;
                schedule.server.runCommandSilent(command);

                command = `/execute in ${ritual_dimension} run effect give @e[limit=${limit},sort=nearest,${area}] minecraft:darkness 10 0 true`;
                schedule.server.runCommandSilent(command);
            });

            if (ritual_effect.teleport.departure.includes(ritual_dimension)) {
                let delay = duration + 20;
                event.server.scheduleInTicks(delay, (schedule) => {
                    let area = getSelectorArea(abs.x, abs.y, abs.z, ritual_effect.teleport.range);

                    // Warn player of upcoming teleportation
                    command = `/execute in ${ritual_dimension} run title @p[${area}] subtitle {"text":"Mind the Gap","color":"#D3D3D3"}`;
                    schedule.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run title @p[${area}] title {"text":"Teleportation Ritual","underlined":true,"color":"#EF0AEF"}`;
                    schedule.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run playsound minecraft:block.respawn_anchor.set_spawn block @p ${abs.x} ${abs.y} ${abs.z} 10 1`;
                    schedule.server.runCommandSilent(command);
                });

                delay = duration + 100;
                event.server.scheduleInTicks(delay, (schedule) => {
                    // Yeet the player to the target dimension after delay
                    command = `/execute in ${ritual_dimension} as @e[limit=${limit},sort=nearest,${area}] in ${destination} run tp ${dest.x} ${dest.y} ${dest.z}`;
                    schedule.server.runCommandSilent(command);
                });
            } else {
                let delay = duration + 20;
                event.server.scheduleInTicks(delay, (schedule) => {
                    let area = getSelectorArea(abs.x, abs.y, abs.z, 10);

                    // Warn player this cannot be perfomed in this dimension.
                    command = `/execute in ${ritual_dimension} run title @p[${area}] subtitle {"text":"Destination Unreachable","color":"#D3D3D3"}`;
                    schedule.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run title @p[${area}] title {"text":"Teleportation Ritual","underlined":true,"color":"#EF0AEF"}`;
                    schedule.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run playsound minecraft:block.respawn_anchor.deplete block @p ${abs.x} ${abs.y} ${abs.z} 10 1`;
                    schedule.server.runCommandSilent(command);
                });
            }
        }

        // Gateway Pearl Handling
        if (ritual_effect.gateway) {
            let cur = { x: abs.x, y: abs.y, z: abs.z };
            let gate = { x: abs.x, y: abs.y + 0.5, z: abs.z };
            let gateway_type = event.entity.item.nbt.gateway;
            let radius = event.entity.item.nbt.radius;
            let num_points = 5;
            let duration = 2 * 20;
            let density = 5;
            let delay;

            // Draw a slow circle
            coordinates = getCircleCoordinates(cur.x, cur.y, cur.z, radius, density);
            delay = duration / coordinates.length;
            coordinates.forEach((coord, index) => {
                event.server.scheduleInTicks(index * delay, (schedule) => {
                    command = `/execute in ${ritual_dimension} run particle minecraft:soul_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                    schedule.server.runCommandSilent(command);

                    if (index % 5 === 0) {
                        command = `/execute in ${ritual_dimension} run playsound minecraft:particle.soul_escape block @p ${coord.x} ${coord.y} ${coord.z} 0.5 1`;
                        schedule.server.runCommandSilent(command);
                    }

                    if (index % Math.floor(coordinates.length / num_points) === 0) {
                        command = `/execute in ${ritual_dimension} run playsound blue_skies:entity.armored_frost_spirit.hurt block @p ${coord.x} ${coord.y} ${coord.z} 2 1`;
                        schedule.server.runCommandSilent(command);
                    }
                });
            });

            // Draw the full Pentagram in one go after the slow circle
            coordinates = coordinates.concat(getStarCoordinates(cur.x, cur.y, cur.z, radius, num_points, density));
            delay = duration + 40;
            event.server.scheduleInTicks(delay, (schedule) => {
                coordinates.forEach((coord) => {
                    command = `/execute in ${ritual_dimension} run particle minecraft:soul_fire_flame ${coord.x} ${coord.y} ${coord.z}`;
                    schedule.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run particle twilightforest:leaf_rune ${coord.x} ${
                        coord.y + 0.5
                    } ${coord.z}`;
                    schedule.server.runCommandSilent(command);

                    command = `/execute in ${ritual_dimension} run particle minecraft:smoke ${coord.x} ${
                        coord.y - 0.5
                    } ${coord.z}`;
                    schedule.server.runCommandSilent(command);
                });

                command = `/execute in ${ritual_dimension} run playsound supplementaries:block.bellows.retract block @p ${gate.x} ${gate.y} ${gate.z} 20 1`;
                schedule.server.runCommandSilent(command);

                command = `/execute in ${ritual_dimension} run playsound minecraft:block.sculk_shrieker.shriek block @p ${gate.x} ${gate.y} ${gate.z} 10 0.5`;
                schedule.server.runCommandSilent(command);

                // Open the Gateway
                command = `/execute in ${ritual_dimension} run open_gateway ${gate.x} ${gate.y} ${gate.z} ${gateway_type}`;
                schedule.server.runCommandSilent(command);
            });
        }

        // Aura Generation
        if (ritual_effect.aura) {
            let aura_amount = event.entity.item.nbt.aura_amount;
            let aura_max = event.entity.item.nbt.aura_max;
            let cur = { x: abs.x, y: abs.y + ritual_effect.aura.y_offset, z: abs.z };
            let revolutions = 9;
            let height = 3;
            let upper_radius = 8;
            let lower_radius = 5;
            let density = 250 * (aura_amount / aura_max);
            let duration = 3 * 20;
            let aura_per_step;
            let delay;
            let color;
            let secondary_particle;

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
            aura_per_step = Math.floor(aura_amount / coordinates.length);
            delay = duration / coordinates.length;
            coordinates.forEach((coord, index) => {
                event.server.scheduleInTicks(index * delay, (schedule) => {
                    // Generate some aura
                    command = `/execute in ${ritual_dimension} positioned ${coord.x} ${coord.y} ${coord.z} run eu aura ${aura_per_step} ${aura_max}`;
                    schedule.server.runCommandSilent(command);

                    // Sprinkle some leaves
                    command = `/execute in ${ritual_dimension} run particle twilightforest:fallen_leaf ${color} ${coord.x} ${coord.y} ${coord.z} 1 1 1 0.1 2`;
                    schedule.server.runCommandSilent(command);

                    // Sprinkle secondary particle
                    command = `/execute in ${ritual_dimension} run particle ${secondary_particle} ${coord.x} ${coord.y} ${coord.z} 1 1 1 0.1 1`;
                    schedule.server.runCommandSilent(command);

                    if (index % 5 === 0) {
                        command = `/execute in ${ritual_dimension} run playsound mekanismgenerators:tile.generator.wind block @p ${coord.x} ${coord.y} ${coord.z} 0.5 1`;
                        schedule.server.runCommandSilent(command);

                        command = `/execute in ${ritual_dimension} run playsound chimes:block.bamboo.chiming block @p ${coord.x} ${coord.y} ${coord.z} 1 1`;
                        schedule.server.runCommandSilent(command);
                    }
                });
            });

            delay = duration;
            event.server.scheduleInTicks(delay, (schedule) => {
                command = `/execute in ${ritual_dimension} run playsound twilightforest:block.twilightforest.beanstalk.grow block @p ${cur.x} ${cur.y} ${cur.z} 1 1`;
                schedule.server.runCommandSilent(command);

                command = `/execute in ${ritual_dimension} run playsound chimes:block.copper.chime block @p ${cur.x} ${cur.y} ${cur.z} 10 1`;
                schedule.server.runCommandSilent(command);
            });
        }

        // Remove Previous Tree of Life Handling
        if (ritual_effect.structure && ritual_effect.structure.remove) {
            let structure = NBTIO.read(ritual_effect.structure.remove);
            let start_delay = ritual_effect.structure.start_delay;
            let delay;
            let cur = {
                x: Math.floor(abs.x + ritual_effect.offset.x - Math.floor(structure.size[0] / 2)),
                y: Math.floor(abs.y + ritual_effect.offset.y),
                z: Math.floor(abs.z + ritual_effect.offset.z - Math.floor(structure.size[2] / 2))
            };

            structure.blocks.forEach((block) => {
                let palette = structure.palette[block.state];

                let coord = {
                    x: Math.floor(cur.x + block.pos[0]),
                    y: Math.floor(cur.y + block.pos[1]),
                    z: Math.floor(cur.z + block.pos[2])
                };

                // Remove any blocks that can't exist without something under them first to avoid them getting duplicated
                delay = start_delay;
                event.server.scheduleInTicks(delay, (schedule) => {
                    if (
                        ritual_effect.structure.soft_blocks &&
                        ritual_effect.structure.soft_blocks.includes(palette.Name)
                    ) {
                        command = `/execute in ${ritual_dimension} run fill ${coord.x} ${coord.y} ${coord.z} ${coord.x} ${coord.y} ${coord.z} air replace ${palette.Name}`;
                        schedule.server.runCommandSilent(command);
                    }
                });

                delay = start_delay + 0.5 * block.pos[1];
                event.server.scheduleInTicks(delay, (schedule) => {
                    command = `/execute in ${ritual_dimension} run fill ${coord.x} ${coord.y} ${coord.z} ${coord.x} ${coord.y} ${coord.z} air replace ${palette.Name}`;
                    schedule.server.runCommandSilent(command);
                });
            });
        }

        // Summon Tree of Life Handling
        if (ritual_effect.structure && ritual_effect.structure.add) {
            let structure = NBTIO.read(ritual_effect.structure.add);
            let start_delay = ritual_effect.structure.start_delay;
            let delay;
            let cur = {
                x: Math.floor(abs.x + ritual_effect.offset.x - Math.floor(structure.size[0] / 2)),
                y: Math.floor(abs.y + ritual_effect.offset.y),
                z: Math.floor(abs.z + ritual_effect.offset.z - Math.floor(structure.size[2] / 2))
            };

            structure.blocks.forEach((block) => {
                let palette = structure.palette[block.state];
                let block_properties = '';

                if (palette.Properties) {
                    Object.keys(palette.Properties).forEach((prop) => {
                        block_properties += `${prop}=${palette.Properties[prop]},`;
                    });
                    block_properties = block_properties.slice(0, -1);
                }

                let coord = {
                    x: Math.floor(cur.x + block.pos[0]),
                    y: Math.floor(cur.y + block.pos[1]),
                    z: Math.floor(cur.z + block.pos[2])
                };

                delay = start_delay + 0.5 * block.pos[1];
                event.server.scheduleInTicks(delay, (schedule) => {
                    if (palette.Name !== 'minecraft:air') {
                        command = `/execute in ${ritual_dimension} run particle blue_skies:frose_snow ${coord.x} ${coord.y} ${coord.z} 0.5 0.5 0.5 0.1 1`;
                        schedule.server.runCommandSilent(command);

                        command = `/execute in ${ritual_dimension} run particle blue_skies:dusk_smoke ${coord.x} ${coord.y} ${coord.z} 0.5 0.5 0.5 0.1 10`;
                        schedule.server.runCommandSilent(command);
                    }

                    command = `/execute in ${ritual_dimension} run setblock ${coord.x} ${coord.y} ${coord.z} ${palette.Name}[${block_properties}] replace`;
                    schedule.server.runCommandSilent(command);
                });

                delay = 20;
                event.server.scheduleInTicks(delay, (schedule) => {
                    let area = getSelectorArea(abs.x, abs.y, abs.z, 32);
                    command = `/execute in ${ritual_dimension} run title @p[${area}] ${ritual_effect.structure.title}`;
                    schedule.server.runCommandSilent(command);
                });

                delay = start_delay + 100;
                event.server.scheduleInTicks(delay, (schedule) => {
                    command = `/execute in ${ritual_dimension} run playsound twilightforest:music_disc.twilightforest.findings record @p ${abs.x} ${abs.y} ${abs.z} 0.5 0.5`;
                    schedule.server.runCommandSilent(command);
                });
            });
        }
    }
});
