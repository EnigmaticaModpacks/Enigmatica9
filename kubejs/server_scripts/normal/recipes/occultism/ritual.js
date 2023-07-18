ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/occultism/ritual/';
    const recipes = [
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:foliot',
            spirit_job_type: 'occultism:crush_tier1',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_foliot',
            inputs: [
                '#forge:raw_materials/iron',
                '#forge:raw_materials/gold',
                '#forge:raw_materials/copper',
                '#forge:raw_materials/silver'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            id: 'occultism:ritual/summon_foliot_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:djinni',
            spirit_job_type: 'occultism:crush_tier2',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_djinni',
            inputs: ['#forge:dusts/iron', '#forge:dusts/gold', '#forge:dusts/copper', '#forge:dusts/silver'],
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_djinni',
            duration: 90,
            id: 'occultism:ritual/summon_djinni_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:afrit',
            spirit_job_type: 'occultism:crush_tier3',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_afrit',
            inputs: ['#forge:gems/diamond', '#forge:dusts/iesnium', '#forge:dusts/iesnium', '#forge:gems/emerald'],
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_afrit',
            duration: 120,
            id: 'occultism:ritual/summon_afrit_crusher'
        },
        {
            output: 'occultism:jei_dummy/none',
            entity_to_summon: 'occultism:marid',
            spirit_job_type: 'occultism:crush_tier4',
            spirit_max_age: -1,
            activation_item: 'occultism:book_of_binding_bound_marid',
            inputs: [
                '#forge:storage_blocks/diamond',
                'minecraft:ghast_tear',
                '#forge:storage_blocks/iesnium',
                '#forge:storage_blocks/emerald'
            ],
            ritual_dummy: 'occultism:ritual_dummy/summon_marid_crusher',
            ritual_type: 'occultism:summon_spirit_with_job',
            pentacle_id: 'occultism:summon_marid',
            duration: 150,
            id: 'occultism:ritual/summon_marid_crusher'
        },

        /*
        Custom Summons
        Custom Summon Rituals make use of a dummy item which, 
        when spawned in world is immediately removed, triggering an actual summon. 
        Define the summon in constants/custom_spawns.js

        These should always use the 'occultism:craft' ritual_type
        */
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:wither_council_gate", radius:5}`),
            activation_item: '#forge:essences/anima',
            inputs: [
                'minecraft:wither_skeleton_skull',
                'minecraft:wither_skeleton_skull',
                'spirit:compressed_soul_powder_block',
                'minecraft:wither_skeleton_skull',
                '#forge:ingots/soul_steel',
                '#forge:ingots/soul_steel',
                '#forge:ingots/soul_steel',
                '#forge:ingots/soul_steel',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond'
            ],
            ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:wither_council_gate", radius:5}`),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 10,
            id: `${id_prefix}wither_council_gate`
        },
        {
            output: Item.of('gateways:gate_pearl', `{gateway:"gateways:wilden_grove_gate", radius:5}`),
            activation_item: 'minecraft:skeleton_skull',
            inputs: [
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_horn',

                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_spike',

                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing'
            ],
            ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:wilden_grove_gate", radius:5}`),
            ritual_type: 'occultism:craft',
            pentacle_id: 'occultism:summon_wild_afrit',
            entity_to_sacrifice: {
                tag: 'forge:cows',
                display_name: 'ritual.occultism.sacrifice.cows'
            },
            duration: 10,
            id: `${id_prefix}wilden_grove_gate`
        }
    ];

    /*
        Ingredient Display in JEI
            inputs: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    let gateways = [
        {
            type: 'death_tome',
            inputs: ['#forge:essences/conjuration', '#forge:bookshelves', '#forge:bookshelves', '#forge:bookshelves']
        },
        {
            type: 'creeper',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:storage_blocks/gunpowder',
                '#forge:storage_blocks/gunpowder',
                '#forge:storage_blocks/gunpowder'
            ]
        },
        {
            type: 'enderman',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:gems/ender_pearl',
                '#forge:gems/ender_pearl',
                '#forge:gems/ender_pearl'
            ]
        },
        {
            type: 'ghast',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:ghast_tear',
                '#forge:storage_blocks/gunpowder',
                'minecraft:ghast_tear'
            ]
        },
        {
            type: 'magma_cube',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:magma_block',
                'minecraft:magma_block',
                'minecraft:magma_block'
            ]
        },
        {
            type: 'shulker',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:shulker_shell',
                'minecraft:shulker_shell',
                'minecraft:shulker_shell'
            ]
        },
        {
            type: 'skeleton',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:bone_block',
                'minecraft:bone_block',
                'minecraft:bone_block'
            ]
        },
        {
            type: 'slime',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:slime_block',
                'minecraft:slime_block',
                'minecraft:slime_block'
            ]
        },
        {
            type: 'spider',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:spider_eye',
                'minecraft:fermented_spider_eye',
                'minecraft:spider_eye'
            ]
        },
        {
            type: 'witch',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:storage_blocks/redstone',
                '#forge:storage_blocks/glowstone',
                '#forge:storage_blocks/gunpowder',
                '#forge:storage_blocks/redstone',
                '#forge:storage_blocks/redstone',
                '#forge:storage_blocks/glowstone',
                '#forge:storage_blocks/glowstone',
                '#forge:storage_blocks/gunpowder',
                '#forge:storage_blocks/gunpowder'
            ]
        },
        {
            type: 'zombie',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh'
            ]
        },
        {
            type: 'blaze',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/fire',
                '#forge:essences/fire',
                '#forge:essences/fire'
            ]
        },
        {
            type: 'basalz',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/earth',
                '#forge:essences/earth',
                '#forge:essences/earth'
            ]
        },
        {
            type: 'blizz',
            inputs: [
                '#forge:essences/conjuration',
                '#forge:essences/water',
                '#forge:essences/water',
                '#forge:essences/water'
            ]
        },
        {
            type: 'blitz',
            inputs: ['#forge:essences/conjuration', '#forge:essences/air', '#forge:essences/air', '#forge:essences/air']
        }
    ];

    // Helper for generating lang entries. Leave disabled normally.
    // Static entries generated to facilitate translation.
    // Copy Paste results into assets/kubejs/lang/en_us.json
    /* 
            gateways.forEach((gateway) => {
                let lang_entries = {};
                let formatted_type = toTitleCase(gateway.type.replace(/_/g, ' '));
        
                let ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate_small`;
                lang_entries[`${ritual}.started`] = `Started Opening Small ${formatted_type} Gateway`;
                lang_entries[`${ritual}.finished`] = `Small ${formatted_type} Gateway Opened`;
                lang_entries[`${ritual}.interrupted`] = `Small ${formatted_type} Gateway Interrupted`;
                lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;
        
                ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate`;
                lang_entries[`${ritual}.started`] = `Started Opening ${formatted_type} Gateway`;
                lang_entries[`${ritual}.finished`] = `${formatted_type} Gateway Opened`;
                lang_entries[`${ritual}.interrupted`] = `${formatted_type} Gateway Interrupted`;
                lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;
        
                ritual = `ritual.enigmatica.occultism/ritual/${gateway.type}_gate_large`;
                lang_entries[`${ritual}.started`] = `Started Opening Large ${formatted_type} Gateway`;
                lang_entries[`${ritual}.finished`] = `Large ${formatted_type} Gateway Opened`;
                lang_entries[`${ritual}.interrupted`] = `Large ${formatted_type} Gateway Interrupted`;
                lang_entries[`${ritual}.conditions`] = `Not all requirements for this ritual are met.`;
        
                console.log(JSON.stringify(lang_entries));
            });
            */

    gateways.forEach((gateway) => {
        recipes.push(
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_small", radius:5}`),
                activation_item: 'minecraft:ender_pearl',
                inputs: gateway.inputs,
                ritual_dummy: Item.of(
                    'gateways:gate_pearl',
                    `{gateway:"gateways:${gateway.type}_gate_small", radius:5}`
                ),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:possess_foliot',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate_small`
            },
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate", radius:5}`),
                activation_item: 'minecraft:ender_eye',
                inputs: gateway.inputs,
                ritual_dummy: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate", radius:5}`),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:summon_wild_greater_spirit',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate`
            },
            {
                output: Item.of('gateways:gate_pearl', `{gateway:"gateways:${gateway.type}_gate_large", radius:5}`),
                activation_item: 'minecraft:nether_star',
                inputs: gateway.inputs,
                ritual_dummy: Item.of(
                    'gateways:gate_pearl',
                    `{gateway:"gateways:${gateway.type}_gate_large", radius:5}`
                ),
                ritual_type: 'occultism:craft',
                pentacle_id: 'occultism:summon_wild_afrit',
                duration: 10,
                id: `${id_prefix}${gateway.type}_gate_large`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.activation_item = recipe.activation_item.startsWith('#')
            ? { tag: recipe.activation_item.slice(1) }
            : { item: recipe.activation_item };

        if (recipe.item_to_use)
            recipe.item_to_use = recipe.item_to_use.startsWith('#')
                ? { tag: recipe.item_to_use.slice(1) }
                : { item: recipe.item_to_use };

        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.inputs.map((input) => input.startsWith('#') ? { tag: input.slice(1) } : { item: input });
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
