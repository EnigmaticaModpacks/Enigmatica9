ServerEvents.genericLootTables((event) => {
    event.addGeneric('enigmatica:loot_boxes/sorcerers_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = [1, 2];
            pool.addItem('minecraft:book', 1, 1).addFunction({
                function: 'minecraft:enchant_with_levels',
                levels: { min: 29, max: 50 },
                treasure: true
            });
        });
    });

    event.addGeneric('enigmatica:loot_boxes/miners_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = [9, 15];
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/redstone'), 1, [12, 20]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/copper'), 1, [12, 20]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/iron'), 1, [12, 20]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/emerald'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/silver'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/nickel'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/gold'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/lapis'), 1, [8, 16]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/aluminum'), 1, [2, 8]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/uranium'), 1, [2, 8]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/diamond'), 1, [2, 8]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/zinc'), 1, [2, 8]);
            pool.addItem(AlmostUnified.getPreferredItemForTag('forge:ores/lead'), 1, [2, 8]);
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
            pool.rolls = 2.0;
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
            pool.addItem('minecraft:heart_of_the_sea', 1, 1);
            pool.addItem('ars_nouveau:starbuncle_shards', 1, 1);
            pool.addItem('ars_nouveau:whirlisprig_shards', 1, 1);
            pool.addItem('ars_nouveau:wixie_shards', 1, 1);
            pool.addItem('ars_nouveau:drygmy_shard', 1, 1);
            pool.addItem('ars_elemental:siren_shards', 1, 1);
            pool.addItem('twilightforest:raven_feather', 1, 1);
            pool.addItem('naturesaura:pet_reviver', 1, 1);
        });
    });

    event.addGeneric('enigmatica:loot_boxes/farmers_delight', (table) => {
        table.addPool((pool) => {
            pool.rolls = 4.0;
            pool.addItem('ars_nouveau:source_berry_pie', 1, 8);
            pool.addItem('ars_nouveau:source_berry_roll', 1, 8);
            pool.addItem('byg:blueberry_pie', 1, 8);
            pool.addItem('byg:green_apple_pie', 1, 8);
            pool.addItem('byg:nightshade_berry_pie', 1, 8);
            pool.addItem('create:builders_tea', 1, 8);
            pool.addItem('create:chocolate_glazed_berries', 1, 8);
            pool.addItem('create:honeyed_apple', 1, 8);
            pool.addItem('create:sweet_roll', 1, 8);
            pool.addItem('farmersdelight:apple_pie_slice', 1, 8);
            pool.addItem('farmersdelight:bacon_and_eggs', 1, 8);
            pool.addItem('farmersdelight:bacon_sandwich', 1, 8);
            pool.addItem('farmersdelight:baked_cod_stew', 1, 8);
            pool.addItem('farmersdelight:barbecue_stick', 1, 8);
            pool.addItem('farmersdelight:beef_stew', 1, 8);
            pool.addItem('farmersdelight:cabbage_rolls', 1, 8);
            pool.addItem('farmersdelight:cake_slice', 1, 8);
            pool.addItem('farmersdelight:chicken_sandwich', 1, 8);
            pool.addItem('farmersdelight:chicken_soup', 1, 8);
            pool.addItem('farmersdelight:chocolate_pie_slice', 1, 8);
            pool.addItem('farmersdelight:cod_roll', 1, 8);
            pool.addItem('farmersdelight:cooked_rice', 1, 8);
            pool.addItem('farmersdelight:dumplings', 1, 8);
            pool.addItem('farmersdelight:egg_sandwich', 1, 8);
            pool.addItem('farmersdelight:fish_stew', 1, 8);
            pool.addItem('farmersdelight:fried_rice', 1, 8);
            pool.addItem('farmersdelight:fruit_salad', 1, 8);
            pool.addItem('farmersdelight:glow_berry_custard', 1, 8);
            pool.addItem('farmersdelight:grilled_salmon', 1, 8);
            pool.addItem('farmersdelight:hamburger', 1, 8);
            pool.addItem('farmersdelight:honey_cookie', 1, 8);
            pool.addItem('farmersdelight:honey_glazed_ham', 1, 8);
            pool.addItem('farmersdelight:kelp_roll_slice', 1, 8);
            pool.addItem('farmersdelight:melon_popsicle', 1, 8);
            pool.addItem('farmersdelight:mixed_salad', 1, 8);
            pool.addItem('farmersdelight:mushroom_rice', 1, 8);
            pool.addItem('farmersdelight:mutton_wrap', 1, 8);
            pool.addItem('farmersdelight:noodle_soup', 1, 8);
            pool.addItem('farmersdelight:pasta_with_meatballs', 1, 8);
            pool.addItem('farmersdelight:pasta_with_mutton_chop', 1, 8);
            pool.addItem('farmersdelight:pumpkin_soup', 1, 8);
            pool.addItem('farmersdelight:ratatouille', 1, 8);
            pool.addItem('farmersdelight:roast_chicken', 1, 8);
            pool.addItem('farmersdelight:roasted_mutton_chops', 1, 8);
            pool.addItem('farmersdelight:salmon_roll', 1, 8);
            pool.addItem('farmersdelight:shepherds_pie', 1, 8);
            pool.addItem('farmersdelight:squid_ink_pasta', 1, 8);
            pool.addItem('farmersdelight:steak_and_potatoes', 1, 8);
            pool.addItem('farmersdelight:stuffed_potato', 1, 8);
            pool.addItem('farmersdelight:stuffed_pumpkin', 1, 8);
            pool.addItem('farmersdelight:sweet_berry_cheesecake_slice', 1, 8);
            pool.addItem('farmersdelight:sweet_berry_cookie', 1, 8);
            pool.addItem('farmersdelight:vegetable_noodles', 1, 8);
            pool.addItem('farmersdelight:vegetable_soup', 1, 8);
            pool.addItem('minecraft:baked_potato', 1, 8);
            pool.addItem('minecraft:beetroot_soup', 1, 8);
            pool.addItem('minecraft:cooked_beef', 1, 8);
            pool.addItem('minecraft:cooked_chicken', 1, 8);
            pool.addItem('minecraft:pumpkin_pie', 1, 8);
            pool.addItem('minecraft:rabbit_stew', 1, 8);
            pool.addItem('pneumaticcraft:cod_n_chips', 1, 8);
            pool.addItem('pneumaticcraft:salmon_tempura', 1, 8);
            pool.addItem('pneumaticcraft:sourdough_bread', 1, 8);
            pool.addItem('thermal:green_bean_pie', 1, 8);
            pool.addItem('thermal:pbj_sandwich', 1, 8);
            pool.addItem('thermal:stuffed_pepper', 1, 8);
            pool.addItem('thermal:sushi_maki', 1, 8);
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
            pool.addItem('twilightforest:charm_of_life_1', 1, 1);
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
