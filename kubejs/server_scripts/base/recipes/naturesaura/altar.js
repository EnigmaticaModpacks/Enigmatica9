ServerEvents.recipes((event) => {
    // Altar's Max Fill rate is 300 aura per tick. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    const id_prefix = 'enigmatica:base/naturesaura/altar/';
    const recipes = [
        {
            output: '4x thermal:basalz_powder',
            input: 'thermal:basalz_rod',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `${id_prefix}basalz_powder`
        },
        {
            output: '4x thermal:blitz_powder',
            input: 'thermal:blitz_rod',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `${id_prefix}blitz_powder`
        },
        {
            output: '4x thermal:blizz_powder',
            input: 'thermal:blizz_rod',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `${id_prefix}blizz_powder`
        },
        {
            output: '4x minecraft:blaze_powder',
            input: 'minecraft:blaze_rod',
            catalyst: 'naturesaura:crushing_catalyst',
            aura: 5000,
            time: 60,
            id: `naturesaura:altar/blaze`
        },
        {
            output: 'minecraft:bamboo',
            input: 'minecraft:stick',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 600,
            time: 20,
            id: `${id_prefix}bamboo`
        },
        {
            output: 'minecraft:prismarine_crystals',
            input: 'ae2:charged_certus_quartz_crystal',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 3000,
            time: 10,
            id: `naturesaura:altar/prismarine_crystal`
        },
        {
            output: 'minecraft:prismarine_shard',
            input: 'ae2:certus_quartz_crystal',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 3000,
            time: 10,
            id: `naturesaura:altar/prismarine`
        },
        {
            output: 'minecraft:golden_apple',
            input: 'create:honeyed_apple',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 60000,
            time: 200,
            id: `${id_prefix}golden_apple`
        },
        {
            output: 'minecraft:golden_carrot',
            input: 'minecraft:carrot',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 30000,
            time: 100,
            id: `${id_prefix}golden_carrot`
        },
        {
            output: 'minecraft:glistering_melon_slice',
            input: 'minecraft:melon_slice',
            catalyst: 'naturesaura:conversion_catalyst',
            aura: 6000,
            time: 20,
            id: `${id_prefix}glistering_melon_slice`
        },
        {
            output: 'naturesaura:birth_spirit',
            input: 'minecraft:honeycomb',
            aura: 45000,
            time: 300,
            id: `${id_prefix}birth_spirit`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.output = Item.of(recipe.output).toJson();
        if (recipe.catalyst) {
            recipe.catalyst = { item: recipe.catalyst };
        }
        event.custom(recipe).id(recipe.id);
    });
});
