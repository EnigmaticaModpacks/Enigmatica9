EntityEvents.spawned((event) => {
    let entity = event.entity;
    if (entity.type == 'minecraft:item') {
        return;
    }

    let mob_type = entity.type.replace(':', '_');

    if (Object.keys(armored_mobs).includes(mob_type)) {
        let mob = armored_mobs[mob_type];
        if (Math.random() >= mob.equip_chance) {
            let random_enchant_level = randomIntFromInterval(mob.enchant_level.min, mob.enchant_level.max);

            entity.headArmorItem = enchantRandom(mob.equipment.head, random_enchant_level, false);
            entity.chestArmorItem = enchantRandom(mob.equipment.chest, random_enchant_level, true);
            entity.legsArmorItem = enchantRandom(mob.equipment.legs, random_enchant_level, true);
            entity.feetArmorItem = enchantRandom(mob.equipment.feet, random_enchant_level, true);
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
