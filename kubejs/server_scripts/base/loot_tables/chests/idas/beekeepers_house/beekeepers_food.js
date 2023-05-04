ServerEvents.chestLootTables((event) => {
    event.addChest(`idas:beekeepers_house/beekeepers_food`, (table) => {
        table.addPool((pool) => {
            pool.rolls = [2, 4];

            pool.addItem('farmersdelight:melon_juice', 75, [1, 4]);
            pool.addItem('farmersdelight:apple_cider', 75, [1, 4]);
            pool.addItem('farmersdelight:hot_cocoa', 75, [1, 4]);
            pool.addItem('create:builders_tea', 75, [1, 4]);

            pool.addItem('create:honeyed_apple', 75, [1, 4]);
            pool.addItem('minecraft:honey_bottle', 75, [1, 4]);
            pool.addItem('thermal:xp_stew', 75, [1, 4]);
            pool.addItem('thermal:hearty_stew', 75, [1, 4]);
            pool.addItem('thermal:spring_salad', 75, [1, 4]);
            pool.addItem('thermal:stuffed_pepper', 75, [1, 4]);
            pool.addItem('thermal:green_bean_pie', 75, [1, 4]);
            pool.addItem('thermal:pbj_sandwich', 75, [1, 4]);
            pool.addItem('thermal:cheese_wheel', 75, [1, 4]);
            pool.addItem('farmersdelight:grilled_salmon', 75, [1, 4]);
            pool.addItem('farmersdelight:squid_ink_pasta', 75, [1, 4]);
            pool.addItem('farmersdelight:ratatouille', 75, [1, 4]);
            pool.addItem('farmersdelight:steak_and_potatoes', 75, [1, 4]);
            pool.addItem('farmersdelight:vegetable_noodles', 75, [1, 4]);
            pool.addItem('farmersdelight:roasted_mutton_chops', 75, [1, 4]);
            pool.addItem('farmersdelight:mushroom_rice', 75, [1, 4]);
            pool.addItem('farmersdelight:pasta_with_mutton_chop', 75, [1, 4]);
            pool.addItem('farmersdelight:pasta_with_meatballs', 75, [1, 4]);
            pool.addItem('farmersdelight:bacon_and_eggs', 75, [1, 4]);
            pool.addItem('farmersdelight:noodle_soup', 75, [1, 4]);
            pool.addItem('farmersdelight:baked_cod_stew', 75, [1, 4]);
            pool.addItem('farmersdelight:pumpkin_soup', 75, [1, 4]);
            pool.addItem('farmersdelight:fried_rice', 75, [1, 4]);
            pool.addItem('farmersdelight:fish_stew', 75, [1, 4]);
            pool.addItem('farmersdelight:vegetable_soup', 75, [1, 4]);
            pool.addItem('farmersdelight:chicken_soup', 75, [1, 4]);
            pool.addItem('farmersdelight:beef_stew', 75, [1, 4]);
            pool.addItem('farmersdelight:cabbage_rolls', 75, [1, 4]);
            pool.addItem('farmersdelight:stuffed_potato', 75, [1, 4]);
            pool.addItem('farmersdelight:dumplings', 75, [1, 4]);
            pool.addItem('farmersdelight:mutton_wrap', 75, [1, 4]);
            pool.addItem('farmersdelight:bacon_sandwich', 75, [1, 4]);
            pool.addItem('farmersdelight:hamburger', 75, [1, 4]);
            pool.addItem('farmersdelight:chicken_sandwich', 75, [1, 4]);
            pool.addItem('farmersdelight:egg_sandwich', 75, [1, 4]);
            pool.addItem('farmersdelight:barbecue_stick', 75, [1, 4]);
            pool.addItem('farmersdelight:mixed_salad', 75, [1, 4]);
            pool.addItem('farmersdelight:fruit_salad', 75, [1, 4]);
            pool.addItem('farmersdelight:honey_cookie', 75, [4, 12]);
            pool.addItem('farmersdelight:sweet_berry_cookie', 75, [4, 12]);

            pool.addItem('minecraft:cake', 50, [1, 4]);
            pool.addItem('farmersdelight:sweet_berry_cheesecake', 50, [1, 4]);
            pool.addItem('thermal:chocolate_cake', 50, [1, 4]);
            pool.addItem('thermal:carrot_cake', 50, [1, 4]);
            pool.addItem('minecraft:pumpkin_pie', 50, [1, 4]);
            pool.addItem('farmersdelight:chocolate_pie', 50, [1, 4]);
            pool.addItem('farmersdelight:apple_pie', 50, [1, 4]);

            pool.addItem('farmersdelight:rice_roll_medley_block', 25, [1, 2]);
            pool.addItem('farmersdelight:shepherds_pie_block', 25, [1, 2]);
            pool.addItem('farmersdelight:honey_glazed_ham_block', 25, [1, 2]);
            pool.addItem('farmersdelight:stuffed_pumpkin_block', 25, [1, 2]);
            pool.addItem('farmersdelight:roast_chicken_block', 25, [1, 2]);
        });
    });
});
