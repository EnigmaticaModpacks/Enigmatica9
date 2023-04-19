//priority: 1005
const PowahAPI = Java.loadClass('owmii.powah.api.PowahAPI');

const tagIsEmpty = (tag) => {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
};

const getStrippedLogFrom = (logBlock) => {
    let result = air;
    buildWoodVariants.find((wood) => {
        if (wood.logBlock == logBlock) {
            result = wood.logBlockStripped;
            return result;
        }
    });
    return result;
};

const playerHas = (item, player) => {
    return player.inventory.find(item) != -1;
};

const RandomSource = Java.loadClass('net.minecraft.util.RandomSource');
const RealEnchantHelper = Java.loadClass('shadows.apotheosis.ench.table.RealEnchantmentHelper');

function randomEnchant(item, level, treasure) {
    if (level == 0) {
        return Item.of(item);
    }

    // shadows.apotheosis.ench.table.RealEnchantmentHelper.selectEnchantment(RandomSource rand, ItemStack stack, int level, float quanta, float arcana, float rectification, boolean treasure)
    let enchants = RealEnchantHelper.selectEnchantment(
        RandomSource.create(),
        Item.of(item),
        level,
        30.0,
        0.0,
        0.0,
        treasure
    );

    let enchantedItem = Item.of(item);
    enchants.forEach((enchant) => {
        enchantedItem = Item.of(enchantedItem).enchant(enchant.enchantment, enchant.level);
    });

    return enchantedItem;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function weightedEquipment(options) {
    let i;
    let weights = [];

    for (i = 0; i < options.length; i++) {
        weights[i] = options[i].weight + (weights[i - 1] || 0);
    }

    let random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++) {
        if (weights[i] > random) {
            break;
        }
    }

    return options[i].set;
}

function randomFloat(number, offset) {
    let min = number - offset;
    let max = number + offset;

    return Math.random() * (max - min + 1) + min;
}

function generatePentacleEntry(ritual_name, x_placement, y_placement, parents) {
    let entry = {
        name: ritual_name,
        background_u_index: 0,
        background_v_index: 0,
        category: 'occultism:pentacles',
        description: '',
        hide_while_locked: false,
        icon: 'occultism:pentacle',
        name: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.name`,
        pages: [
            {
                type: 'modonomicon:text',
                anchor: '',
                show_title_separator: true,
                text: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.text`,
                title: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.title`,
                use_markdown_in_title: false
            },
            {
                type: 'modonomicon:multiblock',
                anchor: '',
                multiblock_id: `occultism:${ritual_name}`,
                multiblock_name: '',
                show_visualize_button: true,
                text: ''
            }
        ],
        parents: parents,
        x: x_placement,
        y: y_placement
    };

    return entry;
}

function getSelectorArea(x_coord, y_coord, z_coord, diameter) {
    let r = diameter / 2,
        x = x_coord - r,
        y = y_coord - r,
        z = z_coord - r;
    return `x=${x},dx=${diameter},z=${z},dz=${diameter},y=${y},dy=${diameter}`;
}

function getItemsInTag(tag) {
    let out_items = [];

    Ingredient.of(tag).itemIds.forEach((entry) => {
        if (entry.startsWith('#')) {
            out_items.concat(getItemsInTag(entry));
        } else {
            out_items.push(entry);
        }
    });

    return out_items;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function generateGatewayWave(entries, loot_per_mob, modifiers, max_wave_time, setup_time) {
    let wave = { entities: [], rewards: [], max_wave_time: max_wave_time, setup_time: setup_time };

    // Set modifiers if present
    if (modifiers !== 'none') {
        wave.modifiers = modifiers;
    }

    // build entities and rewards arrays
    entries.forEach((entry) => {
        wave.entities.push({ entity: entry.entity, nbt: entry.nbt });

        let index = wave.rewards.findIndex((reward) => reward.entity === entry.entity);
        // Increment existing entries or create if new
        if (index >= 0) {
            wave.rewards[index].rolls = wave.rewards[index].rolls + loot_per_mob;
        } else {
            // Slimes and Magma Cubes need special NBT to drop loots.
            if (entry.entity == 'minecraft:slime') {
                entry.nbt = '{"Size": 0}';
            }
            if (entry.entity == 'minecraft:magma_cube') {
                entry.nbt = '{"Size": 1}';
            }
            wave.rewards.push({ type: 'entity_loot', entity: entry.entity, nbt: entry.nbt, rolls: loot_per_mob });
        }
    });
    return wave;
}

function printSpawnChances(entities, caller) {
    // For use with Apotheosis Bosses scripts for checking spawn rates.
    console.log(`==========${caller}==========`);
    var spawn_total = [];
    entities.forEach((entity) => {
        if (entity.weight) {
            entity.dimensions.forEach((dimension) => {
                if (spawn_total[dimension]) {
                    spawn_total[dimension] = spawn_total[dimension] + entity.weight;
                } else {
                    spawn_total[dimension] = entity.weight;
                }
            });
        }
    });

    entities.forEach((entity) => {
        if (entity.weight) {
            entity.dimensions.forEach((dimension) => {
                console.log(
                    `Entity: ${entity.entity.split(':')[1]}, Dimension: ${dimension.split(':')[1]}, Weight: ${
                        entity.weight
                    }, Spawn Chance: ${100 * (entity.weight / spawn_total[dimension])}%`
                );
            });
        }
    });
}

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
