EntityEvents.spawned((event) => {
    if (!event.entity.isLiving()) {
        return;
    }
    let mob_type = String(event.entity.entityType).split('.')[2];
    let mod_id = String(event.entity.entityType).split('.')[1];

    if (mod_id == 'pneumaticcraft') {
        // Fixes timing issue with Drones loading their programs. Following segments that add NBT data are overwritting the program data somehow.
        return;
    }

    let entity_data;
    // Set up ForgeData persistent data if not already present
    if (!event.entity.fullNBT.hasOwnProperty('ForgeData')) {
        entity_data = event.entity.fullNBT;
        entity_data.ForgeData = {};
        event.entity.fullNBT = entity_data;
    }

    // Make PNC spawners create Corrupted mobs (from Spirit)
    if (event.entity.fullNBT.ForgeData.hasOwnProperty('pneumaticcraft:pressurized_spawner')) {
        entity_data = event.entity.fullNBT;
        entity_data.Corrupted = true;
        event.entity.fullNBT = entity_data;
    }

    // Don't apply buffs to Spirit spawner mobs
    // Don't apply buffs to Apotheosis bosses
    // Don't re-apply buffs to already checked mobs
    if (
        event.entity.fullNBT.hasOwnProperty('Corrupted') ||
        event.entity.fullNBT.ForgeData.hasOwnProperty('apoth.boss') ||
        event.entity.fullNBT.ForgeData.hasOwnProperty('enigmatica_equipment')
    ) {
        return;
    }

    // Mark mob as checked
    entity_data = event.entity.fullNBT;
    entity_data.ForgeData.enigmatica_equipment = true;
    event.entity.fullNBT = entity_data;

    // End if mob isn't in 'armored_mobs' constant
    if (!Object.keys(armored_mobs).includes(mod_id) || !Object.keys(armored_mobs[mod_id]).includes(mob_type)) {
        return;
    }

    // Get Event Dimension
    let mob_dimension = String(event.level.getDimension());
    // Get Event Coordinates
    let x_coord = event.entity.x;
    let y_coord = event.entity.y;
    let z_coord = event.entity.z;

    // Randomly select a weighted equipment set for this mob from 'armored_mobs' constant.
    // The 'default' set is used to leave the mob unchanged
    let equipment_set = weightedEquipment(armored_mobs[mod_id][mob_type].equipment);
    if (equipment_set.default) {
        return;
    }

    // Optional Enchantment Handling
    let enchant_level = 0;
    let use_treasure_enchants = false;
    if (equipment_set.enchant) {
        // Sets the enchantment level to a random integer between two values. Defaults to 0 (disabled) if not specified in 'armored_mobs' constant

        if (Math.random() < equipment_set.enchant.chance) {
            enchant_level = randomInt(equipment_set.enchant.level.min, equipment_set.enchant.level.max);
        }

        // Allow treasure enchants, such as Mending, to appear on the equipment
        // Default to false if not specified in 'armored_mobs' constant
        if (equipment_set.enchant.treasure) {
            use_treasure_enchants = equipment_set.enchant.treasure;
        }
    }

    // Equip any equipment defined in 'armored_mobs' constant
    if (equipment_set.head) {
        event.entity.headArmorItem = randomEnchant(equipment_set.head.item, enchant_level, use_treasure_enchants);
        event.entity.setDropChance('head', equipment_set.head.drop_rate);
    }
    if (equipment_set.chest) {
        event.entity.chestArmorItem = randomEnchant(equipment_set.chest.item, enchant_level, use_treasure_enchants);
        event.entity.setDropChance('chest', equipment_set.chest.drop_rate);
    }
    if (equipment_set.legs) {
        event.entity.legsArmorItem = randomEnchant(equipment_set.legs.item, enchant_level, use_treasure_enchants);
        event.entity.setDropChance('legs', equipment_set.legs.drop_rate);
    }
    if (equipment_set.feet) {
        event.entity.feetArmorItem = randomEnchant(equipment_set.feet.item, enchant_level, use_treasure_enchants);
        event.entity.setDropChance('feet', equipment_set.feet.drop_rate);
    }
    if (equipment_set.mainhand) {
        event.entity.mainHandItem = randomEnchant(equipment_set.mainhand.item, enchant_level, use_treasure_enchants);
        event.entity.setDropChance('mainhand', equipment_set.mainhand.drop_rate);
    }
    if (equipment_set.offhand) {
        event.entity.offHandItem = randomEnchant(equipment_set.offhand.item, enchant_level, use_treasure_enchants);
        event.entity.setDropChance('offhand', equipment_set.offhand.drop_rate);
    }

    // Optional name for the mob
    if (equipment_set.custom_name) {
        entity_data = event.entity.fullNBT;
        entity_data.CustomName = `{ "text" : "${equipment_set.custom_name}" }`;
        event.entity.fullNBT = entity_data;
    }

    // Optional Potion Effects
    // add(MobEffect mobEffect, int duration, int amplifier, boolean ambient, boolean showParticles)
    if (equipment_set.effects)
        equipment_set.effects.forEach((effect) => {
            event.entity.potionEffects.add(effect.type, 9999999, effect.amplifier - 1, false, false);
        });

    // Optional Health Boost
    if (equipment_set.max_health) {
        event.entity.maxHealth = equipment_set.max_health;
        event.entity.health = equipment_set.max_health;
    }

    // Optional Extra Spawns
    if (equipment_set.summons) {
        equipment_set.summons.forEach((summon) => {
            let spawn_count = randomInt(summon.count.min, summon.count.max);
            let spread = summon.spread;

            // Summon desired number of entities
            for (let i = 0; i < spawn_count; i++) {
                let x = randomFloat(x_coord, spread);
                let y = y_coord;
                let z = randomFloat(z_coord, spread);

                let command = `/execute in ${mob_dimension} run summon ${summon.mob} ${x} ${y} ${z}`;
                event.server.runCommandSilent(command);

                command = `/execute in ${mob_dimension} run particle minecraft:explosion_emitter ${x} ${y} ${z}`;
                event.server.runCommandSilent(command);
            }
        });
    }
});
