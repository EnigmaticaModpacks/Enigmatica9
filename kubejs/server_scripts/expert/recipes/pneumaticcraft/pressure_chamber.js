ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            results: [{ item: 'ae2:quartz_fiber', count: 16 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:glass', count: 32 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:dusts/certus_quartz', count: 16 },
                { item: 'ars_nouveau:fire_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}quartz_fiber`
        },
        {
            results: [{ item: 'kubejs:kaolin_powder', count: 2 }],
            inputs: [{ item: 'kubejs:calcined_kaolin_pearls' }],
            pressure: 4.0,
            id: `${id_prefix}kaolin_powder`
        },
        {
            results: [{ item: 'thermal:beekeeper_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:white_wool', count: 8 },
                { item: 'ars_nouveau:air_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}beekeeper_fabric`
        },
        {
            results: [{ item: 'thermal:diving_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:lime_wool', count: 8 },
                { item: 'ars_nouveau:water_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}diving_fabric`
        },
        {
            results: [{ item: 'thermal:hazmat_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:red_wool', count: 8 },
                { item: 'ars_nouveau:earth_essence' }
            ],
            pressure: 2.0,
            id: `${id_prefix}hazmat_fabric`
        },
        {
            results: [{ item: 'immersiveengineering:blastbrick', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:compressed_bricks', count: 8 },
                { tag: 'forge:gems/blazing' }
            ],
            pressure: 4.0,
            id: `${id_prefix}blastbrick`
        },
        {
            results: [{ item: 'quark:blank_rune', count: 4 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:dusts/fluix', count: 4 },
                { item: 'ae2:sky_dust' }
            ],
            pressure: 4.0,
            id: `${id_prefix}blank_rune`
        },
        {
            results: [{ item: 'pneumaticcraft:turbine_blade', count: 3 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:plates/aluminum', count: 3 },
                { item: 'ae2:sky_dust' },
                { item: 'thermal:redstone_servo' }
            ],
            pressure: 1.0,
            id: 'pneumaticcraft:pressure_chamber/turbine_blade'
        },
        {
            results: [{ item: 'immersiveengineering:electron_tube', count: 4 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:wires/copper', count: 4 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:glass_bottle', count: 4 },
                { item: 'create:polished_rose_quartz' },
                { tag: 'forge:plates/nickel' }
            ],
            pressure: -0.5,
            id: `${id_prefix}electron_tube`
        },
        {
            results: [{ item: 'immersiveengineering:light_bulb', count: 4 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:wires/copper', count: 4 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:glass_bottle', count: 4 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:string', count: 4 },
                { item: 'ars_nouveau:fire_essence' }
            ],
            pressure: -0.5,
            id: `${id_prefix}light_bulb`
        },
        {
            results: [{ item: 'immersiveengineering:empty_casing', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/steeleaf', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'naturesaura:gold_powder', count: 8 },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}empty_casing`
        },
        {
            results: [{ item: 'immersiveengineering:casull', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:empty_casing', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:compressed_stone', count: 8 },
                { item: 'ars_nouveau:fire_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_casull`
        },
        {
            results: [{ item: 'immersiveengineering:silver', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { item: 'ars_elemental:anima_essence' },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_silver`
        },
        {
            results: [{ item: 'immersiveengineering:homing', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { item: 'ars_nouveau:air_essence' },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_homing`
        },
        {
            results: [{ item: 'immersiveengineering:armor_piercing', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { item: 'ars_nouveau:earth_essence' },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_armor_piercing`
        },
        {
            results: [{ item: 'immersiveengineering:he', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { item: 'ars_nouveau:fire_essence' },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_he`
        },
        {
            results: [{ item: 'immersiveengineering:potion', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { item: 'ars_nouveau:water_essence' },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_potion`
        },
        {
            results: [{ item: 'immersiveengineering:wolfpack', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:homing', count: 64 },
                { item: 'ars_nouveau:conjuration_essence' },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_wolfpack`
        },
        {
            results: [{ item: 'immersiveengineering:empty_shell', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/steeleaf', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:paper', count: 8 },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}empty_shell`
        },
        {
            results: [{ item: 'immersiveengineering:buckshot', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:empty_shell', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'occultism:burnt_otherstone', count: 8 },
                { item: 'ars_nouveau:fire_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_buckshot`
        },
        {
            results: [{ item: 'immersiveengineering:dragons_breath', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:buckshot', count: 64 },
                { item: 'minecraft:dragon_breath' },
                { item: 'ars_nouveau:manipulation_essence' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_dragons_breath`
        },
        {
            results: [{ item: 'pneumaticcraft:gun_ammo', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'ars_nouveau:conjuration_essence', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'thermal:blitz_powder', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/compressed_iron', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 }
            ],
            pressure: 4.0,
            id: 'pneumaticcraft:gun_ammo'
        },
        {
            results: [{ item: 'pneumaticcraft:gun_ammo_ap', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'ars_nouveau:conjuration_essence', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'thermal:basalz_powder', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/compressed_iron', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:armor_piercing', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:armor_piercing', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:armor_piercing', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:armor_piercing', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:armor_piercing', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:armor_piercing', count: 64 }
            ],
            pressure: 4.0,
            id: 'pneumaticcraft:gun_ammo_ap'
        },
        {
            results: [{ item: 'pneumaticcraft:gun_ammo_freezing', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'ars_nouveau:conjuration_essence', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'thermal:blizz_powder', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/compressed_iron', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 }
            ],
            pressure: 4.0,
            id: 'pneumaticcraft:gun_ammo_freezing'
        },
        {
            results: [{ item: 'pneumaticcraft:gun_ammo_explosive', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'ars_nouveau:conjuration_essence', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:blaze_powder', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/compressed_iron', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:he', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:he', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:he', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:he', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:he', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:he', count: 64 }
            ],
            pressure: 4.0,
            id: 'pneumaticcraft:gun_ammo_explosive'
        },
        {
            results: [{ item: 'pneumaticcraft:gun_ammo_incendiary', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'ars_nouveau:conjuration_essence', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:blaze_powder', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/compressed_iron', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 }
            ],
            pressure: 4.0,
            id: 'pneumaticcraft:gun_ammo_incendiary'
        },
        {
            results: [{ item: 'pneumaticcraft:gun_ammo_weighted', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'ars_nouveau:conjuration_essence', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'thermal:basalz_powder', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/compressed_iron', count: 2 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 }
            ],
            pressure: 4.0,
            id: 'pneumaticcraft:gun_ammo_weighted'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:pressure_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
