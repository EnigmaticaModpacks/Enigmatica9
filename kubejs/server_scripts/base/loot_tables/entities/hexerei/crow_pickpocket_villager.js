ServerEvents.genericLootTables((event) => {
    event.addGeneric('hexerei:entities/crow_pickpocket_villager', (table) => {
        table.addPool((pool) => {
            pool.rolls = 1.0;

            // General Trades
            pool.addItem('minecraft:emerald', 50);
            pool.addItem('minecraft:paper', 25);
            pool.addItem('minecraft:iron_nugget', 25);
            pool.addItem('minecraft:wheat_seeds', 25);
            pool.addItem('minecraft:torch', 25);

            // Farmer Trades
            let profession = isProfession('minecraft:farmer');
            pool.addItem('minecraft:golden_carrot', 15).addCondition(profession);
            pool.addItem('minecraft:apple', 50).addCondition(profession);
            pool.addItem('minecraft:bread', 50).addCondition(profession);
            pool.addItem('minecraft:carrot', 50).addCondition(profession);
            pool.addItem('minecraft:potato', 50).addCondition(profession);
            pool.addItem('minecraft:wheat', 50).addCondition(profession);
            pool.addItem('minecraft:pumpkin_pie', 25).addCondition(profession);
            pool.addItem('minecraft:cake', 2).addCondition(profession);

            // Leatherworker Trades
            profession = isProfession('minecraft:leatherworker');
            pool.addItem('minecraft:leather', 50).addCondition(profession);
            pool.addItem('minecraft:rabbit_hide', 50).addCondition(profession);
            pool.addItem('minecraft:saddle', 5).addCondition(profession);
            pool.addItem('minecraft:leather_helmet', 5).addCondition(profession);
            pool.addItem('minecraft:leather_chestplate', 5).addCondition(profession);
            pool.addItem('minecraft:leather_leggings', 5).addCondition(profession);
            pool.addItem('minecraft:leather_boots', 5).addCondition(profession);

            // Butcher Trades
            profession = isProfession('minecraft:butcher');
            pool.addItem('minecraft:chicken', 50).addCondition(profession);
            pool.addItem('minecraft:cooked_chicken', 50).addCondition(profession);
            pool.addItem('minecraft:beef', 50).addCondition(profession);
            pool.addItem('minecraft:cooked_beef', 50).addCondition(profession);
            pool.addItem('minecraft:porkchop', 50).addCondition(profession);
            pool.addItem('minecraft:cooked_porkchop', 50).addCondition(profession);
            pool.addItem('minecraft:rabbit_stew', 50).addCondition(profession);

            // Cartographer Trades
            profession = isProfession('minecraft:cartographer');
            pool.addItem('minecraft:paper', 50).addCondition(profession);
            pool.addItem('minecraft:map', 15).addCondition(profession);
            pool.addItem('minecraft:compass', 5).addCondition(profession);

            // Shepherd Trades
            profession = isProfession('minecraft:shepherd');
            pool.addItem('minecraft:shears', 15).addCondition(profession);
            pool.addItem('minecraft:string', 50).addCondition(profession);
            pool.addItem('minecraft:white_wool', 50).addCondition(profession);
            pool.addItem('minecraft:orange_wool', 50).addCondition(profession);
            pool.addItem('minecraft:magenta_wool', 50).addCondition(profession);
            pool.addItem('minecraft:light_blue_wool', 50).addCondition(profession);
            pool.addItem('minecraft:yellow_wool', 50).addCondition(profession);
            pool.addItem('minecraft:lime_wool', 50).addCondition(profession);
            pool.addItem('minecraft:pink_wool', 50).addCondition(profession);
            pool.addItem('minecraft:gray_wool', 50).addCondition(profession);
            pool.addItem('minecraft:light_gray_wool', 50).addCondition(profession);
            pool.addItem('minecraft:cyan_wool', 50).addCondition(profession);
            pool.addItem('minecraft:purple_wool', 50).addCondition(profession);
            pool.addItem('minecraft:blue_wool', 50).addCondition(profession);
            pool.addItem('minecraft:brown_wool', 50).addCondition(profession);
            pool.addItem('minecraft:green_wool', 50).addCondition(profession);
            pool.addItem('minecraft:red_wool', 50).addCondition(profession);
            pool.addItem('minecraft:black_wool', 50).addCondition(profession);

            // Fisherman Trades
            profession = isProfession('minecraft:fisherman');
            pool.addItem('minecraft:cod', 50).addCondition(profession);
            pool.addItem('minecraft:cooked_cod', 50).addCondition(profession);
            pool.addItem('minecraft:salmon', 50).addCondition(profession);
            pool.addItem('minecraft:cooked_salmon', 50).addCondition(profession);
            pool.addItem('minecraft:string', 25).addCondition(profession);
            pool.addItem('thermal:aquachow', 50).addCondition(profession);
            pool.addItem('thermal:deep_aquachow', 25).addCondition(profession);

            // Weaponsmith Trades
            profession = isProfession('minecraft:weaponsmith');
            pool.addItem('minecraft:coal', 50).addCondition(profession);
            pool.addItem('minecraft:diamond', 1).addCondition(profession);
            pool.addItem('minecraft:iron_ingot', 20).addCondition(profession);
            pool.addItem('minecraft:iron_sword', 15).addCondition(profession);
            pool.addItem('minecraft:iron_axe', 15).addCondition(profession);
            pool.addItem('minecraft:diamond_sword', 1).addCondition(profession);

            // Mason Trades
            profession = isProfession('minecraft:mason');
            pool.addItem('minecraft:clay_ball', 50).addCondition(profession);
            pool.addItem('minecraft:bricks', 50).addCondition(profession);
            pool.addItem('engineersdecor:clinker_brick_block', 50).addCondition(profession);
            pool.addItem('engineersdecor:slag_brick_block', 50).addCondition(profession);
            pool.addItem('minecraft:stone_bricks', 50).addCondition(profession);
            pool.addItem('minecraft:terracotta', 50).addCondition(profession);

            // Fletcher Trades
            profession = isProfession('minecraft:fletcher');
            pool.addItem('minecraft:stick', 50).addCondition(profession);
            pool.addItem('minecraft:arrow', 50).addCondition(profession);
            pool.addItem('minecraft:bow', 5).addCondition(profession);
            pool.addItem('minecraft:feather', 50).addCondition(profession);
            pool.addItem('minecraft:flint', 50).addCondition(profession);

            // Armorer Trades
            profession = isProfession('minecraft:armorer');
            pool.addItem('minecraft:diamond_helmet', 1).addCondition(profession);
            pool.addItem('minecraft:coal', 50).addCondition(profession);
            pool.addItem('minecraft:iron_helmet', 5).addCondition(profession);
            pool.addItem('minecraft:iron_chestplate', 5).addCondition(profession);
            pool.addItem('minecraft:iron_leggings', 5).addCondition(profession);
            pool.addItem('minecraft:iron_boots', 5).addCondition(profession);
            pool.addItem('minecraft:chainmail_helmet', 15).addCondition(profession);
            pool.addItem('minecraft:chainmail_chestplate', 15).addCondition(profession);
            pool.addItem('minecraft:chainmail_leggings', 15).addCondition(profession);
            pool.addItem('minecraft:chainmail_boots', 15).addCondition(profession);

            // Toolsmith Trades
            profession = isProfession('minecraft:toolsmith');
            pool.addItem('minecraft:charcoal', 50).addCondition(profession);
            pool.addItem('minecraft:iron_hoe', 25).addCondition(profession);
            pool.addItem('minecraft:iron_pickaxe', 25).addCondition(profession);
            pool.addItem('minecraft:iron_axe', 25).addCondition(profession);
            pool.addItem('minecraft:iron_shovel', 25).addCondition(profession);
            pool.addItem('minecraft:diamond_hoe', 5).addCondition(profession);
            pool.addItem('minecraft:diamond_pickaxe', 5).addCondition(profession);

            // Librarian Trades
            profession = isProfession('minecraft:librarian');
            pool.addItem('minecraft:paper', 50).addCondition(profession);
            pool.addItem('minecraft:book', 50).addCondition(profession);
            pool.addItem('minecraft:lantern', 50).addCondition(profession);
            pool.addItem('minecraft:name_tag', 50).addCondition(profession);
            pool.addItem('minecraft:book', 1)
                .addCondition(profession)
                .addFunction({ function: 'minecraft:enchant_with_levels', levels: { min: 1, max: 10 } });

            // Cleric Trades
            profession = isProfession('minecraft:cleric');
            pool.addItem('minecraft:redstone', 10).addCondition(profession);
            pool.addItem('minecraft:lapis_lazuli', 10).addCondition(profession);
            pool.addItem('minecraft:glowstone_dust', 10).addCondition(profession);
            pool.addItem('minecraft:experience_bottle', 5).addCondition(profession);

            // Pressure Mechanic Trades (Charging Station)
            profession = isProfession('pneumaticcraft:mechanic');
            pool.addItem('pneumaticcraft:pressure_tube', 50).addCondition(profession);
            pool.addItem('pneumaticcraft:programming_puzzle', 50).addCondition(profession);
            pool.addItem('pneumaticcraft:gun_ammo', 50).addCondition(profession);
            pool.addItem('pneumaticcraft:gun_ammo_incendiary', 50).addCondition(profession);
            pool.addItem('pneumaticcraft:gun_ammo_ap', 50).addCondition(profession);

            // Immersive Engineering Structural Engineer (Engineer's Crafting Table)
            profession = isProfession('immersiveengineering:engineer');
            pool.addItem('immersiveengineering:treated_wood_horizontal', 50).addCondition(profession);
            pool.addItem('immersiveengineering:alu_scaffolding_standard', 50).addCondition(profession);
            pool.addItem('immersiveengineering:balloon', 50).addCondition(profession);
            pool.addItem('immersiveengineering:concrete', 50).addCondition(profession);

            // Immersive Engineering Machinist (Anvil)
            profession = isProfession('immersiveengineering:machinist');
            pool.addItem('immersiveengineering:toolbox', 5).addCondition(profession);
            pool.addItem('immersiveengineering:component_iron', 50).addCondition(profession);
            pool.addItem('immersiveengineering:drillhead_iron', 5).addCondition(profession);
            pool.addItem(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), 1).addCondition(
                profession
            );

            // Immersive Engineering Electrician (Engineer's Circuit Table)
            profession = isProfession('immersiveengineering:electrician');
            pool.addItem('immersiveengineering:wirecoil_copper', 50).addCondition(profession);
            pool.addItem('immersiveengineering:armor_faraday_head', 15).addCondition(profession);
            pool.addItem('immersiveengineering:armor_faraday_chest', 15).addCondition(profession);
            pool.addItem('immersiveengineering:armor_faraday_legs', 15).addCondition(profession);
            pool.addItem('immersiveengineering:armor_faraday_feet', 15).addCondition(profession);
            pool.addItem('immersiveengineering:fluorescent_tube', 25).addCondition(profession);

            // Immersive Engineering Outfitter (Banner with Shader Applied by Right-Click)
            profession = isProfession('immersiveengineering:outfitter');
            pool.addItem('immersiveengineering:shader_bag_common', 50).addCondition(profession);
            pool.addItem('immersiveengineering:shader_bag_uncommon', 50).addCondition(profession);
            pool.addItem('immersiveengineering:shader_bag_rare', 50).addCondition(profession);

            // Immersive Engineering Gunsmith (Engineer's Workbench)
            profession = isProfession('immersiveengineering:gunsmith');
            pool.addItem('immersiveengineering:buckshot', 50).addCondition(profession);
            pool.addItem('immersiveengineering:silver', 50).addCondition(profession);
            pool.addItem('immersiveengineering:casull', 50).addCondition(profession);
            pool.addItem('immersiveengineering:armor_piercing', 50).addCondition(profession);
            pool.addItem('immersiveengineering:wolfpack', 50).addCondition(profession);
            pool.addItem(Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'), 1).addCondition(profession);
            pool.addItem(Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'), 1).addCondition(
                profession
            );
        });
    });
});

function isProfession(profession) {
    let condition = {
        condition: 'entity_properties',
        predicate: { nbt: `{VillagerData:{profession:"${profession}"}}` },
        entity: 'this'
    };

    return condition;
}
