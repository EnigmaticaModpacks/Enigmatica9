ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const patchouli_safe_removals = {
        shaped: [
            { id: 'naturesaura:gold_fiber', output: 'naturesaura:gold_fiber' },
            { id: 'naturesaura:wood_stand', output: 'naturesaura:wood_stand' },
            { id: 'naturesaura:offering_table', output: 'naturesaura:offering_table' },
            { id: 'naturesaura:flower_generator', output: 'naturesaura:flower_generator' },
            { id: 'naturesaura:oak_generator', output: 'naturesaura:oak_generator' },
            { id: 'naturesaura:slime_split_generator', output: 'naturesaura:slime_split_generator' },
            { id: 'naturesaura:animal_generator', output: 'naturesaura:animal_generator' },
            { id: 'naturesaura:chorus_generator', output: 'naturesaura:chorus_generator' },
            { id: 'naturesaura:moss_generator', output: 'naturesaura:moss_generator' },
            { id: 'naturesaura:loot_finder', output: 'naturesaura:loot_finder' },
            { id: 'naturesaura:light_staff', output: 'naturesaura:light_staff' },
            { id: 'naturesaura:cave_finder', output: 'naturesaura:cave_finder' },
            { id: 'naturesaura:pet_reviver', output: 'naturesaura:pet_reviver' },
            { id: 'naturesaura:shockwave_creator', output: 'naturesaura:shockwave_creator' }
        ],
        altar: [{ id: 'naturesaura:altar/infused_stone', output: 'naturesaura:infused_stone' }],
        tree_ritual: [
            {
                id: 'naturesaura:tree_ritual/ore_spawn_powder',
                output: Item.of('naturesaura:effect_powder', '{effect:"naturesaura:ore_spawn"}')
            },
            { id: 'naturesaura:tree_ritual/crushing_catalyst', output: 'naturesaura:crushing_catalyst' },
            { id: 'naturesaura:tree_ritual/conversion_catalyst', output: 'naturesaura:conversion_catalyst' },
            { id: 'naturesaura:tree_ritual/nature_altar', output: 'naturesaura:nature_altar' },
            { id: 'naturesaura:tree_ritual/token_sorrow', output: 'naturesaura:token_sorrow' },
            { id: 'naturesaura:tree_ritual/token_anger', output: 'naturesaura:token_anger' },
            { id: 'naturesaura:tree_ritual/token_fear', output: 'naturesaura:token_fear' },
            { id: 'naturesaura:tree_ritual/token_joy', output: 'naturesaura:token_joy' }
        ],
        offering: [
            { id: 'naturesaura:offering/token_grief', output: 'naturesaura:token_grief' },
            { id: 'naturesaura:offering/token_rage', output: 'naturesaura:token_rage' },
            { id: 'naturesaura:offering/token_terror', output: 'naturesaura:token_terror' },
            { id: 'naturesaura:offering/token_euphoria', output: 'naturesaura:token_euphoria' },
            { id: 'naturesaura:offering/sky_ingot_from_gold', output: 'naturesaura:sky_ingot' }
        ]
    };

    patchouli_safe_removals.shaped.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id);
    });

    patchouli_safe_removals.altar.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:altar',
                input: { item: 'kubejs:altered_recipe_indicator' },
                output: Item.of(recipe.output).toJson(),
                aura_type: 'naturesaura:overworld',
                aura: 1,
                time: 1
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.tree_ritual.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:tree_ritual',
                ingredients: [{ item: 'kubejs:altered_recipe_indicator' }],
                sapling: { item: 'minecraft:oak_sapling' },
                output: Item.of(recipe.output).toJson(),
                time: 1
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.offering.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:offering',
                input: { item: 'kubejs:altered_recipe_indicator' },
                start_item: { item: 'kubejs:altered_recipe_indicator' },
                output: Item.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });
});
