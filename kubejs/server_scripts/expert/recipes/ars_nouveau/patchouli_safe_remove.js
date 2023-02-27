ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const patchouli_safe_removals = {
        shaped: [
            { id: 'ars_nouveau:imbuement_chamber', output: 'ars_nouveau:imbuement_chamber' },
            { id: 'ars_nouveau:mycelial_sourcelink', output: 'ars_nouveau:mycelial_sourcelink' },
            { id: 'ars_nouveau:vitalic_sourcelink', output: 'ars_nouveau:vitalic_sourcelink' },
            { id: 'ars_nouveau:volcanic_sourcelink', output: 'ars_nouveau:volcanic_sourcelink' },
            { id: 'ars_nouveau:agronomic_sourcelink', output: 'ars_nouveau:agronomic_sourcelink' },
            { id: 'ars_nouveau:conjuration_essence_to_soul_sand', output: 'minecraft:soul_sand' }
        ],
        enchanting_apparatus: [
            { id: 'ars_nouveau:wixie_charm', output: 'ars_nouveau:wixie_charm' },
            { id: 'ars_nouveau:starbuncle_charm', output: 'ars_nouveau:starbuncle_charm' },
            { id: 'ars_nouveau:magebloom_crop', output: 'ars_nouveau:magebloom_crop' },
            { id: 'ars_nouveau:void_jar', output: 'ars_nouveau:void_jar' },
            { id: 'ars_nouveau:jar_of_light', output: 'ars_nouveau:jar_of_light' }
        ],
        imbuement: [
            // { id: 'ars_nouveau:recipe_id', output: 'ars_nouveau:recipe_output' }
        ]
    };

    patchouli_safe_removals.shaped.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });

    patchouli_safe_removals.enchanting_apparatus.forEach((recipe) => {
        event
            .custom({
                type: 'ars_nouveau:enchanting_apparatus',
                output: { item: recipe.output },
                pedestalItems: [{ item: { item: 'kubejs:altered_recipe_indicator' } }],
                reagent: [{ item: 'kubejs:altered_recipe_indicator' }],
                sourceCost: 0
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.imbuement.forEach((recipe) => {
        event
            .custom({
                type: 'ars_nouveau:imbuement',
                input: { item: 'kubejs:altered_recipe_indicator' },
                output: recipe.output,
                count: 1,
                pedestalItems: [],
                source: 500
            })
            .id(recipe.id);
    });
});
