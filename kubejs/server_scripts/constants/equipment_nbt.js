//priority: 1100
// Used for Apotheosis and Armored Mobs scripts

const enchant_glint = {
    blank: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blank_rune"}`,
    white: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:white_rune"}`,
    orange: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:orange_rune"}`,
    magenta: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:magenta_rune"}`,
    light_blue: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:light_blue_rune"}`,
    yellow: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:yellow_rune"}`,
    lime: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:lime_rune"}`,
    pink: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:pink_rune"}`,
    gray: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:gray_rune"}`,
    light_gray: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:light_gray_rune"}`,
    cyan: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:cyan_rune"}`,
    purple: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:purple_rune"}`,
    blue: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:blue_rune"}`,
    green: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:green_rune"}`,
    red: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:red_rune"}`,
    black: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:black_rune"}`,
    rainbow: `"quark:RuneAttached":1b,"quark:RuneColor":{Count:1b,id:"quark:rainbow_rune"}`
};

const default_nbt = `{Damage:0,${enchant_glint.blank}}`;

const shield_nbt = {
    tree: `{BlockEntityTag:{Base:15,Patterns:[{Color:12,Pattern:"sc"},{Color:12,Pattern:"bts"},{Color:13,Pattern:"cbo"},{Color:15,Pattern:"ls"},{Color:15,Pattern:"rs"},{Color:15,Pattern:"tt"},{Color:13,Pattern:"flo"},{Color:5,Pattern:"mc"},{Color:13,Pattern:"glb"}]},Damage:0,${enchant_glint.blank}}`,
    dark_knight: `{BlockEntityTag:{Base:15,Patterns:[{Color:8,Pattern:"ms"},{Color:8,Pattern:"cs"},{Color:0,Pattern:"sc"},{Color:15,Pattern:"gra"},{Color:15,Pattern:"gru"},{Color:15,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    bi_pride: `{BlockEntityTag:{Base:11,Patterns:[{Color:2,Pattern:"vh"},{Color:10,Pattern:"cs"}]},Damage:0,${enchant_glint.blank}}`,
    trans_pride: `{BlockEntityTag:{Base:6,Patterns:[{Color:3,Pattern:"bo"},{Color:0,Pattern:"cs"},{Color:0,Pattern:"cs"}]},Damage:0,${enchant_glint.blank}}`,
    gay_pride: `{BlockEntityTag:{Base:0,Patterns:[{Color:1,Pattern:"hh"},{Color:5,Pattern:"hhb"},{Color:14,Pattern:"ts"},{Color:4,Pattern:"ms"},{Color:9,Pattern:"bs"}]},Damage:0,${enchant_glint.blank}}`,
    lesbian_pride: `{BlockEntityTag:{Base:0,Patterns:[{Color:6,Pattern:"ls"},{Color:6,Pattern:"rs"},{Color:14,Pattern:"bo"}]},Damage:0,${enchant_glint.blank}}`,
    sunset: `{BlockEntityTag:{Base:9,Patterns:[{Color:1,Pattern:"gra"},{Color:4,Pattern:"flo"},{Color:4,Pattern:"mc"},{Color:9,Pattern:"bs"},{Color:12,Pattern:"bts"},{Color:13,Pattern:"bts"}]},Damage:0,${enchant_glint.blank}}`,
    ender_eye: `{BlockEntityTag:{Base:10,Patterns:[{Color:7,Pattern:"gra"},{Color:5,Pattern:"mc"},{Color:15,Pattern:"cr"},{Color:15,Pattern:"tts"},{Color:15,Pattern:"bts"},{Color:7,Pattern:"bo"}]},Damage:0,${enchant_glint.blank}}`,
    dragon_eye: `{BlockEntityTag:{Base:0,Patterns:[{Color:15,Pattern:"ts"},{Color:15,Pattern:"bs"},{Color:3,Pattern:"flo"},{Color:15,Pattern:"cbo"},{Color:14,Pattern:"mc"},{Color:15,Pattern:"cr"}]},Damage:0,${enchant_glint.blank}}`,
    orange_starburst: `{BlockEntityTag:{Base:0,Patterns:[{Color:15,Pattern:"drs"},{Color:15,Pattern:"dls"},{Color:14,Pattern:"cr"},{Color:1,Pattern:"flo"},{Color:7,Pattern:"bo"}]},Damage:0,${enchant_glint.blank}}`,
    dark_creeper: `{BlockEntityTag:{Base:0,Patterns:[{Color:15,Pattern:"cbo"},{Color:11,Pattern:"sc"},{Color:15,Pattern:"gru"},{Color:15,Pattern:"gra"},{Color:7,Pattern:"mc"},{Color:0,Pattern:"cre"}]},Damage:0,${enchant_glint.blank}}`,
    pale_fire: `{BlockEntityTag:{Base:1,Patterns:[{Color:4,Pattern:"flo"},{Color:1,Pattern:"bri"},{Color:4,Pattern:"bt"},{Color:1,Pattern:"cr"},{Color:4,Pattern:"bts"},{Color:4,Pattern:"gru"}]},Damage:0,${enchant_glint.blank}}`,
    dark_fire: `{BlockEntityTag:{Base:15,Patterns:[{Color:14,Pattern:"moj"},{Color:1,Pattern:"bt"},{Color:15,Pattern:"mr"},{Color:1,Pattern:"gru"},{Color:4,Pattern:"bts"},{Color:15,Pattern:"gra"}]},Damage:0,${enchant_glint.blank}}`,
    ender_swirl: `{BlockEntityTag:{Base:15,Patterns:[{Color:0,Pattern:"dls"},{Color:10,Pattern:"mr"},{Color:15,Pattern:"dls"},{Color:2,Pattern:"mc"},{Color:15,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    grey_knight: `{BlockEntityTag:{Base:12,Patterns:[{Color:15,Pattern:"bri"},{Color:12,Pattern:"gra"},{Color:12,Pattern:"gru"},{Color:8,Pattern:"sc"},{Color:8,Pattern:"mc"},{Color:7,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    blue_burst: `{BlockEntityTag:{Base:0,Patterns:[{Color:8,Pattern:"cbo"},{Color:11,Pattern:"cs"},{Color:0,Pattern:"sc"},{Color:9,Pattern:"mr"},{Color:11,Pattern:"gru"},{Color:3,Pattern:"gra"}]},Damage:0,${enchant_glint.blank}}`,
    blue_panel: `{BlockEntityTag:{Base:4,Patterns:[{Color:9,Pattern:"gra"},{Color:3,Pattern:"gru"},{Color:11,Pattern:"sc"},{Color:3,Pattern:"mc"},{Color:11,Pattern:"bo"},{Color:11,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    dark_cross: `{BlockEntityTag:{Base:11,Patterns:[{Color:15,Pattern:"cbo"},{Color:3,Pattern:"cs"},{Color:3,Pattern:"ms"},{Color:14,Pattern:"mc"},{Color:15,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    red_ornamental: `{BlockEntityTag:{Base:15,Patterns:[{Color:14,Pattern:"tts"},{Color:14,Pattern:"mr"},{Color:15,Pattern:"flo"},{Color:14,Pattern:"bts"},{Color:15,Pattern:"cbo"},{Color:14,Pattern:"bo"}]},Damage:0,${enchant_glint.blank}}`,
    orange_burst: `{BlockEntityTag:{Base:1,Patterns:[{Color:14,Pattern:"ss"},{Color:14,Pattern:"gru"},{Color:1,Pattern:"gra"},{Color:15,Pattern:"mr"},{Color:1,Pattern:"mc"},{Color:14,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    warden_eye: `{BlockEntityTag:{Base:9,Patterns:[{Color:15,Pattern:"gra"},{Color:15,Pattern:"gru"},{Color:15,Pattern:"dls"},{Color:15,Pattern:"drs"},{Color:9,Pattern:"mr"},{Color:15,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    warden_visage: `{BlockEntityTag:{Base:9,Patterns:[{Color:15,Pattern:"gra"},{Color:15,Pattern:"gru"},{Color:15,Pattern:"dls"},{Color:15,Pattern:"drs"},{Color:9,Pattern:"mr"},{Color:15,Pattern:"flo"}]},Damage:0,${enchant_glint.blank}}`,
    sea_scape: `{BlockEntityTag:{Base:15,Patterns:[{Color:3,Pattern:"gra"},{Color:15,Pattern:"tts"},{Color:15,Pattern:"bts"},{Color:3,Pattern:"mc"}]},Damage:0,${enchant_glint.blank}}`,
    dark_blue_cross: `{BlockEntityTag:{Base:15,Patterns:[{Color:3,Pattern:"gra"},{Color:15,Pattern:"tts"},{Color:15,Pattern:"bts"},{Color:3,Pattern:"mc"}]},Damage:0,${enchant_glint.blank}}`
};

const all_shield_designs = [];
Object.keys(shield_nbt).forEach((shield) => {
    all_shield_designs.push({ weight: 1, stack: { item: 'minecraft:shield', nbt: shield_nbt[shield] } });
});

// { weight: 1, stack: { item: 'minecraft:shield', nbt: shield_nbt.dark_knight } }

/*
Credits for Shield Designs

tree: https://www.planetminecraft.com/banner/tree-v2/
dark_knight: https://minecraft.tools/en/shield.php?color_id_0=0&shape_id_1=13&color_id_1=7&shape_id_2=11&color_id_2=7&shape_id_3=14&color_id_3=15&shape_id_4=29&color_id_4=0&shape_id_5=36&color_id_5=0&shape_id_6=32&color_id_6=0#crafting
bi_pride: https://www.planetminecraft.com/banner/bi-flag-306878/
trans_pride: https://minecraft.tools/en/shield.php?color_id_0=9&shape_id_1=26&color_id_1=12&shape_id_2=11&color_id_2=15&shape_id_3=11&color_id_3=15#crafting
gay_pride: https://www.planetminecraft.com/banner/gay-pride-flag-309646/
lesbian_pride: https://www.planetminecraft.com/banner/craftable-lesbian-pride-flag/
sunset: https://minecraft.tools/en/shield.php?color_id_0=6&shape_id_1=29&color_id_1=14&shape_id_2=32&color_id_2=11&shape_id_3=1&color_id_3=11&shape_id_4=7&color_id_4=6&shape_id_5=24&color_id_5=3&shape_id_6=24&color_id_6=2#crafting
ender_eye: https://minecraft.tools/en/shield.php?color_id_0=5&shape_id_1=29&color_id_1=8&shape_id_2=1&color_id_2=10&shape_id_3=17&color_id_3=0&shape_id_4=23&color_id_4=0&shape_id_5=24&color_id_5=0&shape_id_6=26&color_id_6=8#crafting,
dragon_eye: https://minecraft.tools/en/shield.php?color_id_0=15&shape_id_1=8&color_id_1=0&shape_id_2=7&color_id_2=0&shape_id_3=32&color_id_3=12&shape_id_4=25&color_id_4=0&shape_id_5=1&color_id_5=1&shape_id_6=17&color_id_6=0#crafting
orange_starburst: https://minecraft.tools/en/shield.php?color_id_0=15&shape_id_1=16&color_id_1=0&shape_id_2=15&color_id_2=0&shape_id_3=17&color_id_3=1&shape_id_4=32&color_id_4=14&shape_id_5=26&color_id_5=8#crafting
dark_creeper: https://minecraft.tools/en/shield.php?color_id_0=15&shape_id_1=25&color_id_1=0&shape_id_2=14&color_id_2=4&shape_id_3=36&color_id_3=0&shape_id_4=29&color_id_4=0&shape_id_5=1&color_id_5=8&shape_id_6=30&color_id_6=15#crafting
pale_fire: https://minecraft.tools/en/shield.php?color_id_0=14&shape_id_1=32&color_id_1=11&shape_id_2=28&color_id_2=14&shape_id_3=21&color_id_3=11&shape_id_4=17&color_id_4=14&shape_id_5=24&color_id_5=11&shape_id_6=36&color_id_6=11#crafting
dark_fire: https://minecraft.tools/en/shield.php?color_id_0=0&shape_id_1=33&color_id_1=1&shape_id_2=21&color_id_2=14&shape_id_3=22&color_id_3=0&shape_id_4=36&color_id_4=14&shape_id_5=24&color_id_5=11&shape_id_6=29&color_id_6=0#crafting
ender_swirl: https://minecraft.tools/en/shield.php?color_id_0=0&shape_id_1=15&color_id_1=15&shape_id_2=22&color_id_2=5&shape_id_3=15&color_id_3=0&shape_id_4=1&color_id_4=13&shape_id_5=32&color_id_5=0#crafting
grey_knight: https://minecraft.tools/en/shield.php?color_id_0=3&shape_id_1=28&color_id_1=0&shape_id_2=29&color_id_2=3&shape_id_3=36&color_id_3=3&shape_id_4=14&color_id_4=7&shape_id_5=1&color_id_5=7&shape_id_6=32&color_id_6=8#crafting
blue_burst: https://minecraft.tools/en/shield.php?color_id_0=15&shape_id_1=25&color_id_1=7&shape_id_2=11&color_id_2=4&shape_id_3=14&color_id_3=15&shape_id_4=22&color_id_4=6&shape_id_5=36&color_id_5=4&shape_id_6=29&color_id_6=12#crafting
blue_panel: https://minecraft.tools/en/shield.php?color_id_0=11&shape_id_1=29&color_id_1=6&shape_id_2=36&color_id_2=12&shape_id_3=14&color_id_3=4&shape_id_4=1&color_id_4=12&shape_id_5=26&color_id_5=4&shape_id_6=32&color_id_6=4#crafting
dark_cross: https://minecraft.tools/en/shield.php?color_id_0=4&shape_id_1=25&color_id_1=0&shape_id_2=11&color_id_2=12&shape_id_3=13&color_id_3=12&shape_id_4=1&color_id_4=1&shape_id_5=32&color_id_5=0#crafting
red_ornamental: https://minecraft.tools/en/shield.php?color_id_0=0&shape_id_1=23&color_id_1=1&shape_id_2=22&color_id_2=1&shape_id_3=32&color_id_3=0&shape_id_4=24&color_id_4=1&shape_id_5=25&color_id_5=0&shape_id_6=26&color_id_6=1#crafting
orange_burst: https://minecraft.tools/en/shield.php?color_id_0=14&shape_id_1=27&color_id_1=1&shape_id_2=36&color_id_2=1&shape_id_3=29&color_id_3=14&shape_id_4=22&color_id_4=0&shape_id_5=1&color_id_5=14&shape_id_6=32&color_id_6=1#crafting
warden_eye: https://minecraft.tools/en/shield.php?color_id_0=6&shape_id_1=29&color_id_1=0&shape_id_2=36&color_id_2=0&shape_id_3=15&color_id_3=0&shape_id_4=16&color_id_4=0&shape_id_5=22&color_id_5=6&shape_id_6=32&color_id_6=0#crafting
warden_visage: https://minecraft.tools/en/shield.php?color_id_0=6&shape_id_1=30&color_id_1=0&shape_id_2=29&color_id_2=0&shape_id_3=21&color_id_3=0&shape_id_4=20&color_id_4=0&shape_id_5=25&color_id_5=0#crafting
sea_scape: https://minecraft.tools/en/shield.php?color_id_0=0&shape_id_1=29&color_id_1=12&shape_id_2=23&color_id_2=0&shape_id_3=24&color_id_3=0&shape_id_4=1&color_id_4=12#crafting
dark_blue_cross: https://minecraft.tools/en/shield.php?color_id_0=8&shape_id_1=23&color_id_1=0&shape_id_2=24&color_id_2=0&shape_id_3=22&color_id_3=0&shape_id_4=14&color_id_4=12&shape_id_5=1&color_id_5=12&shape_id_6=32&color_id_6=0#crafting


*/
const tipped_arrow_nbt = {
    blasting: '{Potion:"ars_nouveau:blasting_potion"}',
    blasting_long: '{Potion:"ars_nouveau:blasting_potion_long"}',
    blasting_strong: '{Potion:"ars_nouveau:blasting_potion_strong"}',
    freezing: '{Potion:"ars_nouveau:freezing_potion"}',
    freezing_long: '{Potion:"ars_nouveau:freezing_potion_long"}',
    freezing_strong: '{Potion:"ars_nouveau:freezing_potion_strong"}',
    weakness: '{Potion:"minecraft:weakness"}',
    weakness_long: '{Potion:"minecraft:long_weakness"}',
    sundering: '{Potion:"apotheosis:sundering"}',
    sundering_long: '{Potion:"apotheosis:long_sundering"}',
    sundering_strong: '{Potion:"apotheosis:strong_sundering"}',
    poison: '{Potion:"minecraft:poison"}',
    poison_long: '{Potion:"minecraft:long_poison"}',
    poison_strong: '{Potion:"minecraft:strong_poison"}',
    shock: '{Potion:"ars_elemental:shock_potion"}',
    shock_long: '{Potion:"ars_elemental:shock_potion_long"}',
    harming: '{Potion:"minecraft:harming"}',
    harming_strong: '{Potion:"minecraft:strong_harming"}',
    wither: '{Potion:"apotheosis:wither"}',
    wither_long: '{Potion:"apotheosis:long_wither"}',
    wither_strong: '{Potion:"apotheosis:strong_sundering"}'
};

const reactive = {
    poison_bounce: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"Poison Globule",recipe:{part0:"ars_elemental:glyph_curved_projectile",part1:"ars_nouveau:glyph_pierce",part2:"ars_nouveau:glyph_pierce",part3:"ars_nouveau:glyph_linger",part4:"ars_nouveau:glyph_harm",part5:"ars_nouveau:glyph_extend_time",part6:"ars_nouveau:glyph_hex",part7:"ars_elemental:glyph_poison_spores",part8:"ars_nouveau:glyph_extend_time",part9:"ars_nouveau:glyph_amplify",size:10},sound:{pitch:2.55f,soundTag:{id:"ars_nouveau:tempestry_family"},volume:1.0f},spellColor:{b:25,g:255,r:25}}}}`,
    wind_shear: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"Wind Shear",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_launch",part2:"ars_nouveau:glyph_launch",part3:"ars_nouveau:glyph_delay",part4:"ars_nouveau:glyph_extend_time",part5:"ars_nouveau:glyph_wind_shear",size:6},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:255,g:255,r:255}}}}`,
    burning_aura: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"Burning Aura",recipe:{part0:"ars_nouveau:glyph_orbit",part1:"ars_nouveau:glyph_split",part2:"ars_nouveau:glyph_split",part3:"ars_nouveau:glyph_split",part4:"ars_nouveau:glyph_ignite",part5:"ars_nouveau:glyph_flare",part6:"ars_nouveau:glyph_amplify",part7:"ars_nouveau:glyph_amplify",part8:"ars_nouveau:glyph_amplify",part9:"ars_nouveau:glyph_amplify",size:10},sound:{pitch:0.5f,soundTag:{id:"ars_nouveau:fire_family_2"},volume:1.0f},spellColor:{b:1,g:90,r:255}}}}`,
    freezing_aura: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"Freezing Aura",recipe:{part0:"ars_nouveau:glyph_orbit",part1:"ars_nouveau:glyph_split",part2:"ars_nouveau:glyph_split",part3:"ars_nouveau:glyph_split",part4:"ars_nouveau:glyph_freeze",part5:"ars_nouveau:glyph_cold_snap",part6:"ars_nouveau:glyph_cold_snap",part7:"ars_nouveau:glyph_amplify",part8:"ars_nouveau:glyph_amplify",part9:"ars_nouveau:glyph_amplify",size:10},sound:{pitch:0.5f,soundTag:{id:"ars_nouveau:fire_family_2"},volume:1.0f},spellColor:{b:255,g:25,r:30}}}}`,
    drown: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"Drown",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_elemental:glyph_watery_grave",part2:"ars_elemental:glyph_watery_grave",part3:"ars_nouveau:glyph_extend_time",part4:"ars_nouveau:glyph_amplify",part5:"ars_nouveau:glyph_extend_time",size:6},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:255,g:255,r:25}}}}`,
    restoration: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_underfoot",part1:"ars_nouveau:glyph_linger",part2:"ars_nouveau:glyph_accelerate",part3:"ars_nouveau:glyph_accelerate",part4:"ars_nouveau:glyph_accelerate",part5:"ars_nouveau:glyph_accelerate",part6:"ars_nouveau:glyph_accelerate",part7:"ars_nouveau:glyph_accelerate",part8:"ars_nouveau:glyph_accelerate",part9:"ars_nouveau:glyph_heal",size:10},sound:{pitch:0.6f,soundTag:{id:"ars_nouveau:gaia_family"},volume:1.0f},spellColor:{b:25,g:255,r:25}}}}`,
    hex_zone: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_underfoot",part1:"ars_nouveau:glyph_linger",part2:"ars_nouveau:glyph_hex",part3:"ars_nouveau:glyph_amplify",part4:"ars_nouveau:glyph_amplify",part5:"ars_nouveau:glyph_extend_time",part6:"ars_nouveau:glyph_extend_time",size:7},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:255,g:25,r:80}}}}`,
    poison_touch: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_harm",part2:"ars_nouveau:glyph_extend_time",size:3},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:25,g:255,r:25}}}}`,
    come_here: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_pull",part2:"ars_nouveau:glyph_amplify",part3:"ars_nouveau:glyph_amplify",part4:"ars_nouveau:glyph_amplify",size:5},sound:{pitch:0.4f,soundTag:{id:"ars_nouveau:tempestry_family"},volume:1.0f},spellColor:{b:255,g:25,r:80}}}}`,
    life_link: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_elemental:glyph_life_link",part2:"ars_nouveau:glyph_extend_time",part3:"ars_nouveau:glyph_extend_time",part4:"ars_nouveau:glyph_extend_time",size:5},sound:{pitch:2.55f,soundTag:{id:"ars_nouveau:tempestry_family"},volume:1.0f},spellColor:{b:255,g:25,r:80}}}}`,
    vanish: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_self",part1:"ars_nouveau:glyph_invisibility",part2:"ars_nouveau:glyph_duration_down",part3:"ars_nouveau:glyph_duration_down",part4:"ars_nouveau:glyph_duration_down",size:5},sound:{pitch:0.01f,soundTag:{id:"ars_nouveau:tempestry_family"},volume:1.0f},spellColor:{b:255,g:25,r:80}}}}`,
    earth_snare: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_snare",part2:"ars_nouveau:glyph_crush",size:3},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:1,g:74,r:150}}}}`,
    bounce_lightning: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_elemental:glyph_curved_projectile",part1:"ars_nouveau:glyph_pierce",part2:"ars_nouveau:glyph_pierce",part3:"ars_nouveau:glyph_lightning",size:4},sound:{pitch:1.67f,soundTag:{id:"ars_nouveau:tempestry_family"},volume:1.0f},spellColor:{b:255,g:255,r:255}}}}`,
    bounce_freeze: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_elemental:glyph_curved_projectile",part1:"ars_nouveau:glyph_pierce",part2:"ars_nouveau:glyph_pierce",part3:"ars_nouveau:glyph_linger",part4:"ars_nouveau:glyph_freeze",part5:"ars_nouveau:glyph_cold_snap",size:6},sound:{pitch:0.01f,soundTag:{id:"ars_nouveau:tempestry_family"},volume:1.0f},spellColor:{b:255,g:25,r:30}}}}`,
    orbit_lightning: `"ars_nouveau:reactive_caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_orbit",part1:"ars_nouveau:glyph_aoe",part2:"ars_nouveau:glyph_aoe",part3:"ars_nouveau:glyph_aoe",part4:"ars_nouveau:glyph_aoe",part5:"ars_nouveau:glyph_aoe",part6:"ars_nouveau:glyph_aoe",part7:"ars_nouveau:glyph_split",part8:"ars_nouveau:glyph_split",part9:"ars_nouveau:glyph_lightning",size:10},sound:{pitch:1.67f,soundTag:{id:"ars_nouveau:tempestry_family"},volume:1.0f},spellColor:{b:255,g:255,r:255}}}}`
};

const enchanters_sword = {
    hex_blade: `"ars_nouveau:caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"Burn",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_hex",part2:"ars_nouveau:glyph_ignite",part3:"ars_nouveau:glyph_flare",part4:"ars_nouveau:glyph_amplify",size:5},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:25,g:25,r:255}}}}`,
    dispel: `"ars_nouveau:caster":{current_slot:0,flavor:"",spell_count:1,spells:{spell0:{name:"Dispel",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_dispel",part2:"ars_nouveau:glyph_amplify",size:3},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:167,g:25,r:80}}}}`
};
