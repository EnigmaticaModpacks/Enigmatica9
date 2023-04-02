ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/stonecutting/';

    const recipes = [
        {
            output: '4x minecraft:cut_copper',
            input: 'minecraft:copper_block',
            id: `minecraft:cut_copper_from_copper_block_stonecutting`
        }
    ];

    // TODO: Rework ALL iterations over tags to use cached FILES!
    let conversionTypes = ['storage_block', 'ore'];
    let materials = Object.keys(metal_properties).concat(Object.keys(gemProperties))
    conversionTypes.forEach((type) => {
       materials.forEach((material) => {
            if (!entryIsBlacklisted(material, type)) {
                let tag = Ingredient.of(`#forge:${type}s/${material}`);
                let itemArray = tag.getItemIds()
                if (itemArray.length > 1) {
                    let index = 0
                    itemArray.forEach((block) => {
                        index++
                        event.stonecutting(block, tag).id(`${id_prefix}${type}_conversion/${material}/${index}`);
                    });
                }
            }
        });
    });

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
