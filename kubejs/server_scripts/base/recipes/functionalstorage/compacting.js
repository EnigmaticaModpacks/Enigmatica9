ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/functionalstorage/compacting/';
    const recipes = [
        // Example:
        // {
        //     higher_input: { item: 'minecraft:diamond_block'},
        //     lower_input: '9x minecraft:diamond',
        //     id: `example_id`
        // }
        // Inputs support missing count object (defaults to 1) and String used to use in Item.of()
        {
            higher_input: 'minecraft:amethyst_block',
            lower_input: '4x minecraft:amethyst_shard',
            id: `functionalstorage:custom_compacting/amethyst`
        },
        {
            higher_input: 'the_bumblezone:glistering_honey_crystal',
            lower_input: '4x the_bumblezone:honey_crystal_shards',
            id: `${id_prefix}honey_crystal`
        },
        {
            higher_input: 'minecraft:honeycomb_block',
            lower_input: '4x minecraft:honeycomb',
            id: `${id_prefix}honeycomb`
        },
        {
            higher_input: 'byg:subzero_crystal_block',
            lower_input: '4x byg:subzero_crystal_shard',
            id: `${id_prefix}subzero_crystal`
        },
        {
            higher_input: 'byg:therium_crystal_block',
            lower_input: '4x byg:therium_crystal_shard',
            id: `${id_prefix}therium_crystal`
        }
    ];

    recipes.forEach((recipe) => {

        recipe.type = 'functionalstorage:custom_compacting';
    
        if (typeof recipe.higher_input == "string") {
            recipe.higher_input = Item.of(recipe.higher_input).toJson()
        } else if (!Object.keys(recipe.higher_input).includes('count')) {
            recipe.higher_input.count = 1;
        }

        if (typeof recipe.lower_input == "string") {
            recipe.lower_input = Item.of(recipe.lower_input).toJson()
        } else if (!Object.keys(recipe.lower_input).includes('count')) {
            recipe.lower_input.count = 1;
        }
        
        event.custom(recipe).id(recipe.id);
    });
});
