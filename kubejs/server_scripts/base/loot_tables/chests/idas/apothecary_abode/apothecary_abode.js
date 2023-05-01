ServerEvents.chestLootTables((event) => {
    event.modify(`idas:apothecary_abode/apothecary_abode`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 3];

            pool.addItem('farmersdelight:hot_cocoa', 75, [1, 3]);
            pool.addItem(Item.of('minecraft:splash_potion', '{Potion:"minecraft:weakness"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}'), 75, 1);
            pool.addItem(Item.of('minecraft:potion', '{Potion:"minecraft:strong_swiftness"}'), 75, 1);
            pool.addItem('occultism:soul_gem', 50, [1, 3]);
            pool.addItem(
                Item.of('ars_nouveau:potion_flask', {
                    Damage: 8,
                    an_potion_flask: {
                        PotionData: {
                            CustomPotionEffects: [
                                {
                                    Ambient: 0,
                                    Amplifier: 0,
                                    CurativeItems: [{ Count: 1, id: 'minecraft:milk_bucket' }],
                                    Duration: 9600,
                                    Id: 71,
                                    ShowIcon: 1,
                                    ShowParticles: 0,
                                    'forge:id': 'ars_nouveau:mana_regen'
                                }
                            ],
                            Potion: 'ars_nouveau:spell_damage_potion_long',
                            includedPotions: [
                                'ars_nouveau:mana_regen_potion_long',
                                'ars_nouveau:spell_damage_potion_long'
                            ]
                        },
                        count: 8
                    }
                }),
                25,
                1
            );
            pool.addItem(
                Item.of('ars_nouveau:potion_flask', {
                    Damage: 8,
                    an_potion_flask: {
                        PotionData: {
                            CustomPotionEffects: [
                                {
                                    Ambient: 0,
                                    Amplifier: 0,
                                    CurativeItems: [{ Count: 1, id: 'minecraft:milk_bucket' }],
                                    Duration: 9600,
                                    Id: 3,
                                    ShowIcon: 1,
                                    ShowParticles: 0,
                                    'forge:id': 'minecraft:haste'
                                }
                            ],
                            Potion: 'minecraft:long_swiftness',
                            includedPotions: ['apotheosis:long_haste', 'minecraft:long_swiftness']
                        },
                        count: 8
                    }
                }),
                25,
                1
            );
            pool.addItem(
                Item.of('ars_nouveau:potion_flask', {
                    Damage: 8,
                    an_potion_flask: {
                        PotionData: {
                            CustomPotionEffects: [
                                {
                                    Ambient: 0,
                                    Amplifier: 1,
                                    CurativeItems: [{ Count: 1, id: 'minecraft:milk_bucket' }],
                                    Duration: 1200,
                                    Id: 22,
                                    ShowIcon: 1,
                                    ShowParticles: 0,
                                    'forge:id': 'minecraft:absorption'
                                },
                                {
                                    Ambient: 0,
                                    Amplifier: 1,
                                    CurativeItems: [{ Count: 1, id: 'minecraft:milk_bucket' }],
                                    Duration: 3600,
                                    Id: 83,
                                    ShowIcon: 1,
                                    ShowParticles: 0,
                                    'forge:id': 'ars_nouveau:recovery'
                                }
                            ],
                            Potion: 'minecraft:long_regeneration',
                            includedPotions: [
                                'apotheosis:absorption',
                                'minecraft:long_regeneration',
                                'ars_nouveau:recovery_potion_strong'
                            ]
                        },
                        count: 8
                    }
                }),
                25,
                1
            );

            pool.addItem('minecraft:crossbow', 25, 1).enchantWithLevels(10, true);
            pool.addItem('minecraft:experience_bottle', 25, 1);
        });
    });
});
