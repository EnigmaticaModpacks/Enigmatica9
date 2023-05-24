// PlayerEvents.inventoryChanged((event) => {
//     const player = event.player;
//     if (!player.isPlayer() || player.isFake()) {
//         return;
//     }

//     if (event.item.id == 'tiab:time_in_a_bottle') {
//         return;
//     }

//     let head = player.getHeadArmorItem().id;
//     let chest = player.getChestArmorItem().id;
//     let legs = player.getLegsArmorItem().id;
//     let feet = player.getFeetArmorItem().id;

//     // player.tell(['Equipped ', Text.yellow(head), Text.yellow(chest), Text.yellow(legs), Text.yellow(feet)]);

//     if (head == 'pneumaticcraft:pneumatic_helmet') {
//         player.potionEffects.add('ars_nouveau:recovery', 500, 3, false, false);
//     }
//     // event.player.inventory.removeItem(event.getSlot(), event.item.count);
// });

PlayerEvents.tick((event) => {
    const player = event.player;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    if (
        player.getHeadArmorItem().id == 'pneumaticcraft:pneumatic_helmet' &&
        player.getChestArmorItem().id == 'pneumaticcraft:pneumatic_chestplate' &&
        player.getLegsArmorItem().id == 'pneumaticcraft:pneumatic_leggings' &&
        player.getFeetArmorItem().id == 'pneumaticcraft:pneumatic_boots'
    ) {
        player.potionEffects.add('ars_nouveau:recovery', 999999, 1, false, false);
        player.persistentData.armorSetBonus = true;
    } else {
        player.persistentData.armorSetBonus = false;
    }

    if (player.persistentData.armorSetBonus == false) {
        player.potionEffects.add('ars_nouveau:recovery', 1, 2, false, false);
    }
});
