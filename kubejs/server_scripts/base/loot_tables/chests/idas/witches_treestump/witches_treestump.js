ServerEvents.chestLootTables((event) => {
    event.modify(`idas:witches_treestump/witches_treestump`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 3];
            pool.addItem('emendatusenigmatica:raw_gold', 3, [2, 6]);
            pool.addItem('emendatusenigmatica:raw_iron', 1, [2, 6]);
            pool.addItem('emendatusenigmatica:raw_copper', 2, [2, 6]);
            pool.addItem('naturesaura:death_ring', 2, 1);
            pool.addItem('ars_elemental:earth_focus', 1, 1);
            pool.addItem('occultism:soul_gem', 1, [1, 3]);
            pool.addItem(Item.of('occultism:familiar_ring', '{familiarType:"occultism:fairy_familiar"}'), 1, 1);

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
                1,
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
                1,
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
                1,
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];

            pool.addItem('hexerei:witch_chestplate', 75, 1).enchantWithLevels(10, true);
            pool.addItem('hexerei:witch_helmet', 75, 1).enchantWithLevels(10, true);
            pool.addItem('hexerei:witch_boots', 75, 1).enchantWithLevels(10, true);
            pool.addItem('hexerei:mushroom_witch_hat', 75, 1).enchantWithLevels(10, true);

            pool.addItem('minecraft:crossbow', 75, 1).enchantWithLevels(10, true);
            pool.addItem('minecraft:experience_bottle', 25, [8, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];

            pool.addItem('farmersdelight:mushroom_rice', 25, [1, 4]);
            pool.addItem('farmersdelight:nether_salad', 25, [1, 4]);
            pool.addItem('farmersdelight:bone_broth', 25, [1, 4]);
        });

        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.75);
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'enigmatica:ars_nouveau_glyph_cache/tier_1' });
        });
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.randomChance(0.75);
            pool.addEntry({ type: 'loot_table', weight: 25, name: 'enigmatica:ars_nouveau_glyph_cache/tier_2' });
        });
    });
});
