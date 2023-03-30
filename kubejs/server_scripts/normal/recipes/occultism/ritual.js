ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/occultism/ritual/';
    const recipes = [
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
