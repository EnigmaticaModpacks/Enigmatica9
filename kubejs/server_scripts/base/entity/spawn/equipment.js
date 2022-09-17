EntityEvents.spawned((event) => {
    let entity = event.entity;

    if (entity.type.includes(entity_blacklist)) {
        return;
    }

    let mob_type = entity.type.replace(':', '_');

    if (Object.keys(armored_mobs).includes(mob_type)) {
        let mob = armored_mobs[mob_type];
        // Randomly select a weighted equipment set for this mob from 'armored_mobs' constant.
        // The 'default' set is used to leave the mob's equipment unchanged
        let equipment_set = weightedEquipment(mob.equipment);
        if (equipment_set.default) {
            return;
        }

        // Sets the enchantment level to a random integer. 0 disables enchanting.
        let enchant_level = randomInt(equipment_set.enchant.level.min, equipment_set.enchant.level.max);
        if (Math.random() >= equipment_set.enchant.chance) {
            enchant_level = 0;
        }

        // Enable treasure enchants, such as Mending to appear on the equipment.
        // Default to false if not specified in 'armored_mobs' constant
        let use_treasure_enchants = false;
        if (equipment_set.enchant.treasure) {
            use_treasure_enchants = equipment_set.enchant.treasure;
        }

        // Equip any equipment defined in 'armored_mobs' constant
        if (equipment_set.head) {
            entity.headArmorItem = randomEnchant(equipment_set.head, enchant_level, use_treasure_enchants);
        }
        if (equipment_set.chest) {
            entity.chestArmorItem = randomEnchant(equipment_set.chest, enchant_level, use_treasure_enchants);
        }
        if (equipment_set.legs) {
            entity.legsArmorItem = randomEnchant(equipment_set.legs, enchant_level, use_treasure_enchants);
        }
        if (equipment_set.feet) {
            entity.feetArmorItem = randomEnchant(equipment_set.feet, enchant_level, use_treasure_enchants);
        }
        if (equipment_set.mainhand) {
            entity.mainHandItem = randomEnchant(equipment_set.mainhand, enchant_level, use_treasure_enchants);
        }
    }
});

// Get the full NBT of the mob.
// let entity_data = event.entity.fullNBT;

// console.log(Object.keys(event));
// console.log(Object.keys(event.entity));
// // Set up some equipment
// let head = { Count: 1, id: 'minecraft:netherite_helmet' };
// let chest = { Count: 1, id: 'minecraft:netherite_chestplate' };
// let legs = { Count: 1, id: 'minecraft:netherite_leggings' };
// let feet = { Count: 1, id: 'minecraft:netherite_boots' };
// entity_data.ArmorItems = [feet, legs, chest, head];

// // Set the new NBT.
// event.entity.fullNBT = entity_data;
