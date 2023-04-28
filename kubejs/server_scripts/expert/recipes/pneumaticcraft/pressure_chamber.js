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
                { tag: 'forge:essences/fire' }
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
                { tag: 'forge:essences/air' }
            ],
            pressure: 2.0,
            id: `${id_prefix}beekeeper_fabric`
        },
        {
            results: [{ item: 'thermal:diving_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:lime_wool', count: 8 },
                { tag: 'forge:essences/water' }
            ],
            pressure: 2.0,
            id: `${id_prefix}diving_fabric`
        },
        {
            results: [{ item: 'thermal:hazmat_fabric', count: 8 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:red_wool', count: 8 },
                { tag: 'forge:essences/earth' }
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
                { tag: 'forge:essences/fire' }
            ],
            pressure: -0.5,
            id: `${id_prefix}light_bulb`
        },
        {
            results: [{ item: 'immersiveengineering:empty_casing', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/steeleaf', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'naturesaura:gold_powder', count: 8 },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}empty_casing`
        },
        {
            results: [{ item: 'immersiveengineering:casull', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:empty_casing', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:compressed_stone', count: 8 },
                { tag: 'forge:essences/fire' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_casull`
        },
        {
            results: [{ item: 'immersiveengineering:silver', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { tag: 'forge:essences/anima' },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_silver`
        },
        {
            results: [{ item: 'immersiveengineering:homing', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { tag: 'forge:essences/air' },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_homing`
        },
        {
            results: [{ item: 'immersiveengineering:armor_piercing', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { tag: 'forge:essences/earth' },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_armor_piercing`
        },
        {
            results: [{ item: 'immersiveengineering:he', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { tag: 'forge:essences/fire' },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_he`
        },
        {
            results: [{ item: 'immersiveengineering:potion', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:casull', count: 64 },
                { tag: 'forge:essences/water' },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_potion`
        },
        {
            results: [{ item: 'immersiveengineering:wolfpack', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:homing', count: 64 },
                { tag: 'forge:essences/conjuration' },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_wolfpack`
        },
        {
            results: [{ item: 'immersiveengineering:empty_shell', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/steeleaf', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:paper', count: 8 },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}empty_shell`
        },
        {
            results: [{ item: 'immersiveengineering:buckshot', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:empty_shell', count: 64 },
                { type: 'pneumaticcraft:stacked_item', item: 'occultism:burnt_otherstone', count: 8 },
                { tag: 'forge:essences/fire' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_buckshot`
        },
        {
            results: [{ item: 'immersiveengineering:dragons_breath', count: 64 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'immersiveengineering:buckshot', count: 64 },
                { item: 'minecraft:dragon_breath' },
                { tag: 'forge:essences/manipulation' }
            ],
            pressure: 1.0,
            id: `${id_prefix}bullet_dragons_breath`
        },
        {
            results: [{ item: 'pneumaticcraft:gun_ammo', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:essences/conjuration', count: 2 },
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
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:essences/conjuration', count: 2 },
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
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:essences/conjuration', count: 2 },
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
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:essences/conjuration', count: 2 },
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
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:essences/conjuration', count: 2 },
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
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:essences/conjuration', count: 2 },
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
        },
        {
            results: [{ item: 'immersiveengineering:circuit_board', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:plates/plastic', count: 2 },
                { tag: 'forge:plates/electrum' },
                { item: 'powah:dielectric_paste' }
            ],
            pressure: 2.0,
            id: `${id_prefix}circuit_board`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_empty' }],
            inputs: [{ tag: 'forge:plastic' }, { item: 'pneumaticcraft:upgrade_matrix' }],
            pressure: 2.0,
            id: `${id_prefix}upgrade_empty`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_silk' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_extract' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_silk`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_fortune_1' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_fortune' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_fortune_1`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_fortune_2' }],
            inputs: [
                { item: 'mininggadgets:upgrade_fortune_1' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_amplify' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_fortune_2`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_fortune_3' }],
            inputs: [
                { item: 'mininggadgets:upgrade_fortune_2' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_amplify' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_fortune_3`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_range_1' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_accelerate' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_range_1`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_range_2' }],
            inputs: [
                { item: 'mininggadgets:upgrade_range_1' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_accelerate' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_range_2`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_range_3' }],
            inputs: [
                { item: 'mininggadgets:upgrade_range_3' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_accelerate' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_range_3`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_void_junk' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_crush' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_void_junk`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_magnet' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_pickup' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_magnet`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_light_placer' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_light' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_light_placer`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_freezing' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_freeze' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_freezing`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_efficiency_1' }],
            inputs: [
                { item: 'mininggadgets:upgrade_empty' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_break' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_efficiency_1`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_efficiency_2' }],
            inputs: [
                { item: 'mininggadgets:upgrade_efficiency_1' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_amplify' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_efficiency_2`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_efficiency_3' }],
            inputs: [
                { item: 'mininggadgets:upgrade_efficiency_2' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_amplify' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_efficiency_3`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_efficiency_4' }],
            inputs: [
                { item: 'mininggadgets:upgrade_efficiency_3' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_amplify' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_efficiency_4`
        },
        {
            results: [{ item: 'mininggadgets:upgrade_efficiency_5' }],
            inputs: [
                { item: 'mininggadgets:upgrade_efficiency_4' },
                { item: 'powah:dielectric_paste' },
                { item: 'ars_nouveau:glyph_amplify' }
            ],
            pressure: 4.0,
            id: `${id_prefix}upgrade_efficiency_5`
        },
        {
            results: [{ item: 'naturesaura:vacuum_bottle', count: 1 }],
            inputs: [{ item: 'naturesaura:bottle_two_the_rebottling' }],
            pressure: -0.5,
            id: `${id_prefix}vacuum_bottle`
        },
        {
            results: [{ item: 'ae2:dense_energy_cell', count: 1 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'ae2:energy_cell', count: 8 },
                { tag: 'forge:storage_blocks/source' }
            ],
            pressure: 2.0,
            id: `${id_prefix}dense_energy_cell`
        },
        {
            results: [{ item: 'compactmachines:wall', count: 32 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'occultism:otherstone', count: 32 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:dusts/fluix', count: 4 }
            ],
            pressure: 4.0,
            id: `${id_prefix}compactmachines_wall`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:pressure_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
