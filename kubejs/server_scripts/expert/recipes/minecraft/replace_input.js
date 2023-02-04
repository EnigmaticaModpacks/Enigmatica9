ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            filter: { output: 'minecraft:hopper' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/tin'
        },
        {
            filter: { output: 'minecraft:bucket' },
            to_replace: '#forge:ingots/iron',
            replace_with: '#forge:plates/tin'
        },
        {
            filter: { mod: 'create' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'createaddition' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'littlecontraptions' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'compressedcreativity' },
            to_replace: 'create:andesite_alloy',
            replace_with: '#pneumaticcraft:compressed_stone'
        },
        {
            filter: { mod: 'create' },
            to_replace: 'minecraft:dried_kelp',
            replace_with: '#forge:leather'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
