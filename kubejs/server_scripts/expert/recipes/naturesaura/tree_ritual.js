ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const time_multiplier = 10;
    const id_prefix = 'enigmatica:expert/naturesaura/tree_ritual/';

    const recipes = [
        {
            output: 'naturesaura:offering_table',
            ingredients: [
                'naturesaura:infused_stone',
                'create:andesite_casing',
                '#forge:gems/source',
                '#forge:gems/source',
                'naturesaura:infused_stone',
                'create:andesite_casing',
                'naturesaura:infused_stone',
                'create:andesite_casing'
            ],
            time: 5 * time_multiplier,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}offering_table`
        },
        {
            output: 'ars_nouveau:blue_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'minecraft:water_bucket',
                'minecraft:water_bucket'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:blue_blossom_sapling',
            id: `${id_prefix}blue_archwood_sapling`
        },
        {
            output: 'ars_nouveau:purple_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'twilightforest:raven_feather',
                'twilightforest:raven_feather'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: `${id_prefix}purple_archwood_sapling`
        },
        {
            output: 'ars_nouveau:green_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'twilightforest:cicada',
                'twilightforest:cicada'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: `${id_prefix}green_archwood_sapling`
        },
        {
            output: 'ars_nouveau:red_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'minecraft:lava_bucket',
                'minecraft:lava_bucket'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: `${id_prefix}red_archwood_sapling`
        },
        {
            output: 'ars_elemental:yellow_archwood_sapling',
            ingredients: [
                'twilightforest:torchberries',
                'twilightforest:liveroot',
                'twilightforest:firefly',
                'twilightforest:firefly'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:orange_blossom_sapling',
            id: `${id_prefix}yellow_archwood_sapling`
        },
        {
            output: '2x naturesaura:ancient_sapling',
            ingredients: [
                'quark:red_blossom_sapling',
                'twilightforest:liveroot',
                'hexerei:belladonna_flowers',
                'hexerei:sage',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: `naturesaura:tree_ritual/ancient_sapling`
        },
        {
            output: '2x quark:ancient_sapling',
            ingredients: [
                'quark:yellow_blossom_sapling',
                'twilightforest:liveroot',
                'hexerei:belladonna_flowers',
                'hexerei:sage',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: `${id_prefix}ancient_sapling`
        },
        {
            output: 'naturesaura:furnace_heater',
            ingredients: [
                'twilightforest:torchberries',
                'naturesaura:infused_stone',
                '#forge:gems/source',
                '#forge:gems/source',
                'naturesaura:gold_leaf',
                'minecraft:flint',
                'naturesaura:gold_leaf',
                'minecraft:flint'
            ],
            time: 5 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: 'naturesaura:tree_ritual/furnace_heater'
        }
        /*
            ,
            {
                ingredients: [
                    item, //top
                    item, //bottom
                    item, //left
                    item, //right

                    item, //topleft
                    item, //bottomright
                    item, //topright
                    item //bottomleft
                output: 'naturesaura:oak_generator',
                sapling: 'quark:yellow_blossom_sapling',
                id: 'naturesaura:oak_generator'
            }
            */
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';

        // ingredients: [{ item: 'minecraft:oak_sapling' }, { tag: '#minecraft:small_flowers' }],
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());

        // sapling: { item: 'minecraft:oak_sapling' },
        recipe.sapling = Item.of(recipe.sapling).toJson();

        // output: { item: 'naturesaura:ancient_sapling', count: 2 },
        recipe.output = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
