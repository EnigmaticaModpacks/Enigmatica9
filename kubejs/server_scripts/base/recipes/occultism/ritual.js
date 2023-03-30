ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/ritual/';
    const recipes = [
        /*
        Custom Summons
        Custom Summon Rituals make use of a dummy item which, 
        when spawned in world is immediately removed, triggering an actual summon. 
        Define the summon in constants/custom_spawns.js

        These should always use the 'occultism:craft' ritual_type
        */
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
            type: 'creeper',
            inputs: [
                '#forge:essences/conjuration',
                'thermal:gunpowder_block',
                'thermal:gunpowder_block',
                'thermal:gunpowder_block'
            ]
        },
        {
            type: 'enderman',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:ender_pearl',
                'minecraft:ender_pearl',
                'minecraft:ender_pearl'
            ]
        },
        {
            type: 'ghast',
            inputs: [
                '#forge:essences/conjuration',
                'minecraft:ghast_tear',
                'thermal:gunpowder_block',
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
                'minecraft:redstone_block',
                'minecraft:glowstone',
                'thermal:gunpowder_block',
                'minecraft:redstone_block',
                'minecraft:redstone_block',
                'minecraft:glowstone',
                'minecraft:glowstone',
                'thermal:gunpowder_block',
                'thermal:gunpowder_block'
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
        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
