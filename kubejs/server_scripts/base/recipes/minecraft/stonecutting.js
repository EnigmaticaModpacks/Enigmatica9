ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/stonecutting/';

    const recipes = [
        {
            output: '4x minecraft:cut_copper',
            input: 'minecraft:copper_block',
            id: `minecraft:cut_copper_from_copper_block_stonecutting`
        },
        {
            output: 'create:limestone',
            input: 'quark:limestone',
            id: `${id_prefix}quark_to_create_limestone`
        },
        {
            output: 'quark:limestone',
            input: 'create:limestone',
            id: `${id_prefix}create_to_quark_limestone`
        },
        {
            output: 'emendatusenigmatica:source_block',
            input: 'ars_nouveau:source_gem_block',
            id: `${id_prefix}ars_nouveau_to_emendatusenigmatica_source_gem_block`
        },
        {
            output: 'ars_nouveau:source_gem_block',
            input: 'emendatusenigmatica:source_block',
            id: `${id_prefix}emendatusenigmatica_to_ars_nouveau_source_gem_block`
        }
    ];

    // TODO: Rework ALL iterations over tags to use cached FILES!
    let conversionTypes = ['storage_block', 'ore'];
    let materials = Object.keys(metal_properties).concat(Object.keys(gem_properties));
    conversionTypes.forEach((type) => {
        materials.forEach((material) => {
            let tag = Ingredient.of(`#forge:${type}s/${material}`);
            let itemArray = tag.getItemIds();
            if (itemArray.length > 1) {
                let index = 0;
                itemArray.forEach((block) => {
                    if (!block.match(/air/)) {
                        index++;
                        event.stonecutting(block, tag).id(`${id_prefix}${type}_conversion/${material}/${index}`);
                    }
                });
            }
        });
    });

    // Tag conversion
    conversionTypes = [
        `#forge:storage_blocks/gunpowder`,
        `#forge:storage_blocks/rice`,
        `#forge:storage_blocks/onion`,
        `#forge:storage_blocks/tomato`,
        `#forge:storage_blocks/beetroot`,
        `#forge:storage_blocks/potato`,
        `#forge:storage_blocks/carrot`,
        `#forge:storage_blocks/apple`,
        `#forge:storage_blocks/bamboo`,
        `#forge:storage_blocks/sugar_cane`,
        `#forge:workbench`
    ];

    conversionTypes.forEach((tag) => {
        let ingredient = Ingredient.of(tag);

        ingredient.stacks.forEach((block) => {
            let output = block.getId();
            recipes.push({
                output: output,
                input: ingredient,
                id: `${id_prefix}${output.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
