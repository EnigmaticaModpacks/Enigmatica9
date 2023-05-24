const armor_sets = [
    {
        armor: [
            'pneumaticcraft:pneumatic_helmet',
            'pneumaticcraft:pneumatic_chestplate',
            'pneumaticcraft:pneumatic_leggings',
            'pneumaticcraft:pneumatic_boots'
        ],
        effects: [{ potion: 'ars_nouveau:mana_regen', amp: 2 }]
    },

    // Wearing any piece of the meka suit disables spell casting since it makes you effectively immune to magic.
    {
        armor: ['mekanism:mekasuit_helmet', null, null, null],
        effects: [
            { potion: 'ars_elemental:hymn_of_order', amp: 0 },
            { potion: 'ars_nouveau:summoning_sickness', amp: 0 }
        ]
    },
    {
        armor: [null, 'mekanism:mekasuit_bodyarmor', null, null],
        effects: [
            { potion: 'ars_elemental:hymn_of_order', amp: 0 },
            { potion: 'ars_nouveau:summoning_sickness', amp: 0 }
        ]
    },
    {
        armor: [null, null, 'mekanism:mekasuit_pants', null],
        effects: [
            { potion: 'ars_elemental:hymn_of_order', amp: 0 },
            { potion: 'ars_nouveau:summoning_sickness', amp: 0 }
        ]
    },
    {
        armor: [null, null, null, 'mekanism:mekasuit_boots'],
        effects: [
            { potion: 'ars_elemental:hymn_of_order', amp: 0 },
            { potion: 'ars_nouveau:summoning_sickness', amp: 0 }
        ]
    }
];

const ars_elemental_types = ['aqua', 'air', ' fire', 'earth'];

ars_elemental_types.forEach((type) => {
    armor_sets.push({
        armor: [
            `ars_elemental:${type}_hat`,
            `ars_elemental:${type}_robes`,
            `ars_elemental:${type}_leggings`,
            `ars_elemental:${type}_boots`
        ],
        effects: [{ potion: 'ars_nouveau:spell_damage', amp: 2 }]
    });
});

armor_sets.forEach((armor_set) => {
    PlayerEvents.tick((event) => {
        const player = event.player;
        const playerData = player.persistentData;
        if (!player.isPlayer() || player.isFake()) {
            return;
        }

        if (isSetValid(player, armor_set.armor)) {
            playerData.armorSetBonus = true;
            playerData.armorSetEffects = armor_set.effects;
        } else {
            playerData.armorSetBonus = false;
        }

        if (playerData.armorSetBonus) {
            playerData.armorSetEffects.forEach((effect) => {
                if (player.potionEffects.getDuration(effect.potion) <= 21) {
                    player.potionEffects.add(effect.potion, 39, effect.amp, false, false);
                }
            });
        }
    });
});

function isSetValid(player, armor) {
    let head = armor[0];
    let chest = armor[1];
    let legs = armor[2];
    let feet = armor[3];

    // if (head == null || player.getHeadArmorItem().id == head) {
    //     head = true;
    // } else {
    //     head = false;
    // }

    // if (chest == null || player.getChestArmorItem().id == chest) {
    //     chest = true;
    // } else {
    //     chest = false;
    // }

    // if (legs == null || player.getLegsArmorItem().id == legs) {
    //     legs = true;
    // } else {
    //     legs = false;
    // }

    // if (feet == null || player.getFeetArmorItem().id == feet) {
    //     feet = true;
    // } else {
    //     feet = false;
    // }

    if (
        (head == null || player.getHeadArmorItem().id == head) &&
        (chest == null || player.getChestArmorItem().id == chest) &&
        (legs == null || player.getLegsArmorItem().id == legs) &&
        (feet == null || player.getFeetArmorItem().id == feet)
    ) {
        return true;
    } else {
        return false;
    }
}
