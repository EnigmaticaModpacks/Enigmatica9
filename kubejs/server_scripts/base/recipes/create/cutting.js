ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/cutting/';

    const recipes = [
        {
            input: ['naturesaura:ancient_log'],
            outputs: ['6x naturesaura:ancient_planks'],
            processingTime: 50,
            id: `${id_prefix}ancient_planks_from_ancient_log`
        },
        {
            input: ['naturesaura:ancient_bark'],
            outputs: ['6x naturesaura:ancient_planks'],
            processingTime: 50,
            id: `${id_prefix}ancient_planks_from_ancient_bark`
        },
        {
            input: ['minecraft:apple'],
            outputs: ['2x some_assembly_required:apple_slices'],
            processingTime: 30,
            id: `${id_prefix}apple_slices`
        },
        {
            input: ['minecraft:bread'],
            outputs: ['4x some_assembly_required:bread_slice'],
            processingTime: 30,
            id: `${id_prefix}bread_slice`
        },
        {
            input: ['some_assembly_required:burger_bun'],
            outputs: ['some_assembly_required:burger_bun_bottom', 'some_assembly_required:burger_bun_top'],
            processingTime: 30,
            id: `${id_prefix}sliced_burger_bun`
        },
        {
            input: ['minecraft:beetroot'],
            outputs: ['2x some_assembly_required:chopped_beetroot'],
            processingTime: 30,
            id: `${id_prefix}chopped_beetroot`
        },
        {
            input: ['minecraft:carrot'],
            outputs: ['2x some_assembly_required:chopped_carrot'],
            processingTime: 30,
            id: `${id_prefix}chopped_carrot`
        },
        {
            input: ['minecraft:golden_carrot'],
            outputs: ['2x some_assembly_required:chopped_golden_carrot'],
            processingTime: 30,
            id: `${id_prefix}chopped_golden_carrot`
        },
        {
            input: ['minecraft:enchanted_golden_apple'],
            outputs: ['2x some_assembly_required:enchanted_golden_apple_slices'],
            processingTime: 30,
            id: `${id_prefix}enchanted_golden_apple_slices`
        },
        {
            input: ['minecraft:golden_apple'],
            outputs: ['2x some_assembly_required:golden_apple_slices'],
            processingTime: 30,
            id: `${id_prefix}golden_apple_slices`
        },
        {
            input: ['#forge:crops/tomato'],
            outputs: ['2x some_assembly_required:tomato_slices'],
            processingTime: 30,
            id: `${id_prefix}tomato_slices`
        },
        {
            input: ['minecraft:pumpkin'],
            outputs: ['4x farmersdelight:pumpkin_slice'],
            processingTime: 30,
            id: `${id_prefix}pumpkin_slice`
        },
        {
            input: ['minecraft:melon'],
            outputs: ['8x minecraft:melon_slice'],
            processingTime: 30,
            id: `${id_prefix}melon_slice`
        },
        {
            input: ['#forge:rods/all_metal'],
            outputs: ['8x ae2:cable_anchor'],
            processingTime: 30,
            id: `${id_prefix}cable_anchor`
        }
    ];

    wood_properties.forEach((material) => {
        // Log to Stripped
        let input = material.log.block,
            output = material.log.stripped;
        recipes.push({
            input: [input],
            outputs: [output],
            processingTime: 50,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Wood to Stripped
        input = material.wood.block;
        output = material.wood.stripped;
        recipes.push({
            input: [input],
            outputs: [output],
            processingTime: 50,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        // Stripped to Plank
        input = material.log.stripped;
        output = material.plank.block;
        recipes.push({
            input: [input],
            outputs: [`6x ${output}`],
            processingTime: 50,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });

        input = material.wood.stripped;
        recipes.push({
            input: [input],
            outputs: [`6x ${output}`],
            processingTime: 50,
            id: `${id_prefix}${output.replace(':', '_')}_from_${input.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:cutting';
        recipe.ingredients = recipe.input.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.results = recipe.outputs.map((output) => Item.of(output).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
