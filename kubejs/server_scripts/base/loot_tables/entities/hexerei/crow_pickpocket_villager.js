ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // Override Stoneling Carry Loot Table
    event.addGeneric('quark:entities/crow_pickpocket_villager', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;

            // General Trades
            pool.addItem('minecraft:emerald', 50);
            pool.addItem('minecraft:paper', 25);
            pool.addItem('minecraft:iron_nugget', 25);
            pool.addItem('minecraft:wheat_seeds', 25);
            pool.addItem('minecraft:torch', 25);

            // Farmer Trades
            pool.addItem('minecraft:golden_carrot', 15).addCondition(isProfession('minecraft:farmer'));
            pool.addItem('minecraft:apple', 50).addCondition(isProfession('minecraft:farmer'));
            pool.addItem('minecraft:bread', 50).addCondition(isProfession('minecraft:farmer'));
            pool.addItem('minecraft:carrot', 50).addCondition(isProfession('minecraft:farmer'));
            pool.addItem('minecraft:potato', 50).addCondition(isProfession('minecraft:farmer'));
            pool.addItem('minecraft:wheat', 50).addCondition(isProfession('minecraft:farmer'));
            pool.addItem('minecraft:pumpkin_pie', 25).addCondition(isProfession('minecraft:farmer'));
            pool.addItem('minecraft:cake', 2).addCondition(isProfession('minecraft:farmer'));

            // Leatherworker Trades
            pool.addItem('minecraft:leather', 50).addCondition(isProfession('minecraft:leatherworker'));
            pool.addItem('minecraft:rabbit_hide', 50).addCondition(isProfession('minecraft:leatherworker'));
            pool.addItem('minecraft:saddle', 5).addCondition(isProfession('minecraft:leatherworker'));
            pool.addItem('minecraft:leather_helmet', 5).addCondition(isProfession('minecraft:leatherworker'));
            pool.addItem('minecraft:leather_chestplate', 5).addCondition(isProfession('minecraft:leatherworker'));
            pool.addItem('minecraft:leather_leggings', 5).addCondition(isProfession('minecraft:leatherworker'));
            pool.addItem('minecraft:leather_boots', 5).addCondition(isProfession('minecraft:leatherworker'));

            // Butcher Trades
            pool.addItem('minecraft:chicken', 50).addCondition(isProfession('minecraft:butcher'));
            pool.addItem('minecraft:cooked_chicken', 50).addCondition(isProfession('minecraft:butcher'));
            pool.addItem('minecraft:beef', 50).addCondition(isProfession('minecraft:butcher'));
            pool.addItem('minecraft:cooked_beef', 50).addCondition(isProfession('minecraft:butcher'));
            pool.addItem('minecraft:porkchop', 50).addCondition(isProfession('minecraft:butcher'));
            pool.addItem('minecraft:cooked_porkchop', 50).addCondition(isProfession('minecraft:butcher'));
            pool.addItem('minecraft:rabbit_stew', 50).addCondition(isProfession('minecraft:butcher'));

            // Cartographer Trades
            pool.addItem('minecraft:paper', 50).addCondition(isProfession('minecraft:cartographer'));
            pool.addItem('minecraft:map', 15).addCondition(isProfession('minecraft:cartographer'));
            pool.addItem('minecraft:compass', 5).addCondition(isProfession('minecraft:cartographer'));

            // Shepherd Trades
            pool.addItem('minecraft:shears', 15).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:string', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:white_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:orange_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:magenta_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:light_blue_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:yellow_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:lime_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:pink_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:gray_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:light_gray_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:cyan_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:purple_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:blue_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:brown_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:green_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:red_wool', 50).addCondition(isProfession('minecraft:shepherd'));
            pool.addItem('minecraft:black_wool', 50).addCondition(isProfession('minecraft:shepherd'));

            // Fisherman Trades
            pool.addItem('minecraft:cod', 50).addCondition(isProfession('minecraft:fisherman'));
            pool.addItem('minecraft:cooked_cod', 50).addCondition(isProfession('minecraft:fisherman'));
            pool.addItem('minecraft:salmon', 50).addCondition(isProfession('minecraft:fisherman'));
            pool.addItem('minecraft:cooked_salmon', 50).addCondition(isProfession('minecraft:fisherman'));
            pool.addItem('minecraft:string', 25).addCondition(isProfession('minecraft:fisherman'));
            pool.addItem('thermal:aquachow', 50).addCondition(isProfession('minecraft:fisherman'));
            pool.addItem('thermal:deep_aquachow', 25).addCondition(isProfession('minecraft:fisherman'));

            // Weaponsmith Trades
            pool.addItem('minecraft:coal', 50).addCondition(isProfession('minecraft:weaponsmith'));
            pool.addItem('minecraft:diamond', 1).addCondition(isProfession('minecraft:weaponsmith'));
            pool.addItem('minecraft:iron_ingot', 20).addCondition(isProfession('minecraft:weaponsmith'));
            pool.addItem('minecraft:iron_sword', 15).addCondition(isProfession('minecraft:weaponsmith'));
            pool.addItem('minecraft:iron_axe', 15).addCondition(isProfession('minecraft:weaponsmith'));
            pool.addItem('minecraft:diamond_sword', 1).addCondition(isProfession('minecraft:weaponsmith'));

            // Mason Trades
            pool.addItem('minecraft:clay_ball', 50).addCondition(isProfession('minecraft:mason'));
            pool.addItem('minecraft:bricks', 50).addCondition(isProfession('minecraft:mason'));
            pool.addItem('engineersdecor:clinker_brick_block', 50).addCondition(isProfession('minecraft:mason'));
            pool.addItem('engineersdecor:slag_brick_block', 50).addCondition(isProfession('minecraft:mason'));
            pool.addItem('minecraft:stone_bricks', 50).addCondition(isProfession('minecraft:mason'));
            pool.addItem('minecraft:terracotta', 50).addCondition(isProfession('minecraft:mason'));

            // Fletcher Trades
            pool.addItem('minecraft:stick', 50).addCondition(isProfession('minecraft:fletcher'));
            pool.addItem('minecraft:arrow', 50).addCondition(isProfession('minecraft:fletcher'));
            pool.addItem('minecraft:bow', 5).addCondition(isProfession('minecraft:fletcher'));
            pool.addItem('minecraft:feather', 50).addCondition(isProfession('minecraft:fletcher'));
            pool.addItem('minecraft:flint', 50).addCondition(isProfession('minecraft:fletcher'));

            // Armorer Trades
            pool.addItem('minecraft:diamond_helmet', 1).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:coal', 50).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:iron_helmet', 5).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:iron_chestplate', 5).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:iron_leggings', 5).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:iron_boots', 5).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:chainmail_helmet', 15).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:chainmail_chestplate', 15).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:chainmail_leggings', 15).addCondition(isProfession('minecraft:armorer'));
            pool.addItem('minecraft:chainmail_boots', 15).addCondition(isProfession('minecraft:armorer'));

            // Toolsmith Trades
            pool.addItem('minecraft:charcoal', 50).addCondition(isProfession('minecraft:toolsmith'));
            pool.addItem('minecraft:iron_hoe', 25).addCondition(isProfession('minecraft:toolsmith'));
            pool.addItem('minecraft:iron_pickaxe', 25).addCondition(isProfession('minecraft:toolsmith'));
            pool.addItem('minecraft:iron_axe', 25).addCondition(isProfession('minecraft:toolsmith'));
            pool.addItem('minecraft:iron_shovel', 25).addCondition(isProfession('minecraft:toolsmith'));
            pool.addItem('minecraft:diamond_hoe', 5).addCondition(isProfession('minecraft:toolsmith'));
            pool.addItem('minecraft:diamond_pickaxe', 5).addCondition(isProfession('minecraft:toolsmith'));

            // Librarian Trades
            pool.addItem('minecraft:paper', 50).addCondition(isProfession('minecraft:librarian'));
            pool.addItem('minecraft:book', 50).addCondition(isProfession('minecraft:librarian'));
            pool.addItem('minecraft:lantern', 50).addCondition(isProfession('minecraft:librarian'));
            pool.addItem('minecraft:name_tag', 50).addCondition(isProfession('minecraft:librarian'));
            pool.addItem('minecraft:book', 1)
                .addCondition(isProfession('minecraft:librarian'))
                .addFunction({ function: 'minecraft:enchant_with_levels', levels: { min: 1, max: 10 } });

            // Cleric Trades
            pool.addItem('minecraft:redstone', 5).addCondition(isProfession('minecraft:cleric'));
            pool.addItem('minecraft:lapis_lazuli', 10).addCondition(isProfession('minecraft:cleric'));
            pool.addItem('minecraft:glowstone_dust', 10).addCondition(isProfession('minecraft:cleric'));
            pool.addItem('minecraft:experience_bottle', 5).addCondition(isProfession('minecraft:cleric'));

            // Pressure Mechanic Trades (Charging Station)
            pool.addItem('minecraft:redstone', 5).addCondition(isProfession('pneumaticcraft:mechanic'));

            // Immersive Engineering Structural Engineer (Engineer's Crafting Table)
            pool.addItem('minecraft:redstone', 5).addCondition(isProfession('immersiveengineering:engineer'));

            // Immersive Engineering Machinist (Anvil)
            pool.addItem('minecraft:redstone', 5).addCondition(isProfession('immersiveengineering:machinist'));

            // Immersive Engineering Electrician (Engineer's Circuit Table)
            pool.addItem('minecraft:redstone', 5).addCondition(isProfession('immersiveengineering:electrician'));

            // Immersive Engineering Outfitter (Banner with Shader Applied by Right-Click)
            pool.addItem('minecraft:redstone', 5).addCondition(isProfession('immersiveengineering:outfitter'));

            // Immersive Engineering Gunsmith (Engineer's Workbench)
            pool.addItem('minecraft:redstone', 5).addCondition(isProfession('immersiveengineering:gunsmith'));
        });
    });
});

function isProfession(profession) {
    return {
        condition: 'entity_properties',
        predicate: { nbt: `{VillagerData:{profession:"${profession}"}}` },
        entity: 'this'
    };
}
