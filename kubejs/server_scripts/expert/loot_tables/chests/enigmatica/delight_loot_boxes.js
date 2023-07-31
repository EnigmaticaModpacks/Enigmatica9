ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.addGeneric('enigmatica:loot_boxes/sorcerers_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('minecraft:book', 1, 1).addFunction({
                function: 'minecraft:enchant_with_levels',
                levels: { min: 29, max: 100 },
                treasure: true
            });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/miners_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:gems/emerald'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:gems/diamond'), 1, [2, 8]);

            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:raw_materials/copper'), 1, [12, 20]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:raw_materials/silver'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:raw_materials/gold'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:raw_materials/tin'), 1, [8, 16]);
        });
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('simplytools:iron_hammer', 1, 1)
                .addFunction({
                    function: 'minecraft:enchant_with_levels',
                    levels: { min: 10, max: 30 },
                    treasure: false
                })
                .randomChance(0.1);
            pool.addItem('simplytools:diamond_hammer', 1, 1)
                .addFunction({
                    function: 'minecraft:enchant_with_levels',
                    levels: { min: 29, max: 50 },
                    treasure: false
                })
                .randomChance(0.05);
        });
    });

    event.addGeneric('enigmatica:loot_boxes/scavengers_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('minecraft:paper', 1, 16);
            pool.addItem('minecraft:leather', 1, 8);
            pool.addItem('minecraft:book', 1, 4);
            pool.addItem('farmersdelight:canvas', 1, 16);
            pool.addItem('minecraft:glass', 1, 16);
            pool.addItem('minecraft:terracotta', 1, 16);
            pool.addItem('minecraft:nether_brick', 1, 8);
            pool.addItem('minecraft:gunpowder', 1, 8);
            pool.addItem('minecraft:honeycomb', 1, 8);
            pool.addItem('minecraft:honey_bottle', 1, 8);
            pool.addItem('minecraft:ender_pearl', 1, 4);
        });

        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('ars_nouveau:starbuncle_shards', 1, 1);
            pool.addItem('ars_nouveau:whirlisprig_shards', 1, 1);
            pool.addItem('ars_nouveau:wixie_shards', 1, 1);
            pool.addItem('ars_nouveau:drygmy_shard', 1, 1);
            pool.addItem('ars_elemental:siren_shards', 1, 1);
            pool.addItem('sophisticatedstorage:stack_upgrade_tier_1', 1, 1);
            pool.addItem('sophisticatedstorage:stack_upgrade_tier_2', 1, 1);
            pool.addItem('sophisticatedstorage:basic_to_iron_tier_upgrade', 1, 1);
            pool.addItem('sophisticatedstorage:iron_to_gold_tier_upgrade', 1, 1);
            pool.addItem('functionalstorage:copper_upgrade', 1, 1);
            pool.addItem('functionalstorage:gold_upgrade', 1, 1);
            pool.addItem(
                Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}'),
                1,
                1
            );
            pool.addItem(Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}'), 1, 1);
        });
    });

    event.addGeneric('enigmatica:loot_boxes/farmers_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;
            pool.addItem('farmersdelight:dumplings', 1, [4, 8]);
            pool.addItem('farmersdelight:mutton_wrap', 1, [4, 8]);
            pool.addItem('farmersdelight:chicken_sandwich', 1, [4, 8]);
            pool.addItem('farmersdelight:bacon_sandwich', 1, [4, 8]);
            pool.addItem('farmersdelight:hamburger', 1, [4, 8]);
            pool.addItem('pneumaticcraft:cod_n_chips', 1, [4, 8]);
            pool.addItem('pneumaticcraft:salmon_tempura', 1, [4, 8]);
        });
    });

    event.addGeneric('enigmatica:loot_boxes/alchemists_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = 2.0;
            pool.addItem('naturesaura:end_city_finder', 1, 4);
            pool.addItem('naturesaura:fortress_finder', 1, 4);
            pool.addItem('minecraft:ender_eye', 1, 4);
            pool.addItem('naturesaura:outpost_finder', 1, 4);
            pool.addItem('twilightforest:transformation_powder', 1, 1);
            pool.addItem('twilightforest:charm_of_life_2', 1, 1);
            pool.addItem('occultism:soul_gem', 1, 1);

            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:long_swiftness"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:long_fire_resistance"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:long_leaping"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:long_invisibility"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:long_night_vision"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"apotheosis:long_knowledge"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"apotheosis:long_haste"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"apotheosis:long_resistance"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:long_water_breathing"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"ars_nouveau:shielding_potion_long"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"ars_nouveau:spell_damage_potion_long"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"ars_nouveau:mana_regen_potion_long"},count:8}}'
                ),
                1,
                1
            );
            pool.addItem(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time',
                    '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:long_strength"},count:8}}'
                ),
                1,
                1
            );
        });
    });
});
