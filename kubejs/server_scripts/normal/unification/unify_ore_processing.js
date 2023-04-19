// Ore processing Unification script
// This script uses metal_properties and gem_properties defined in metal_properties.js and gem_properties.js, which can be found in kubejs/constants folder, to create all recipes required for processing raw and block versions of an Ore.
// It uses Almost Unified getPreferredItemForTag() function to get output items, but because it only works for materials unified by AU, it can return empty itemstack for non-unified materials. If that happends, it tries to use any item present in provided tag.
// This is not a problem for materials that return only one thing, however for materials that have 2 or more items returned in provided tag, it is, and it should be added to AU for unification.
// Variable "localDebug" determines if any debugging information, like what material uses fallback output, or printing of recipes, is being executed, use with caution!
let localDebug = false;

//TODO: Rework Fallback to use Tag lists from files >.>
// Main Part
ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/unification/ore_processing/';
    let metals = Object.keys(metal_properties);
    let gems = Object.keys(gem_properties);

    metals.forEach((metal) => {
        auto_fortune(metal, metal_properties, event, id_prefix);
        metal_ore_processing(metal, metal_properties, event, id_prefix);
    });

    gems.forEach((gem) => {
        gem_ore_processing(gem, gem_properties, event, id_prefix);
    });
});

// Functions
function auto_fortune(material, properties, event, id_prefix) {
    if (!properties[material].oreProcessing) {
        return;
    }
    // Auto Fortune for Metals
    let ore_ingredient = Ingredient.of(`#forge:ores/${material}`);
    let raw_itemStack = AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${material}`);
    if (raw_itemStack.isEmpty()) {
        raw_itemStack = Item.of(Ingredient.of(`#forge:raw_materials/${material}`).getItemIds()[0]);
        if (localDebug)
            console.warn(
                ' // Ore Processing Rework // Material "' +
                    material +
                    '" uses fallback output item for metal Auto-Fortune!'
            );
    }

    let recipes = [];

    // Create Crushing Wheels (1,33x)
    recipes.push({
        type: 'create:crushing',
        ingredients: [ore_ingredient.toJson()],
        processingTime: properties[material].oreProcessing.create.processingTime,
        results: [
            raw_itemStack.toJson(),
            {
                item: raw_itemStack.getId(),
                chance: 0.33
            },
            {
                item: 'create:experience_nugget',
                chance: 0.75
            }
        ],
        id: `${id_prefix}create/crushing_wheels/auto_fortune_for_${material}`
    });

    // Mekanism Enrichment (1.25x)
    recipes.push({
        type: 'mekanism:enriching',
        input: { ingredient: ore_ingredient.toJson(), amount: 4 },
        output: Item.of(raw_itemStack, 5).toJson(),
        id: `${id_prefix}mekanism/enriching/auto_fortune_for_${material}`
    });

    // Mekanism Purification Chamber (1,5x)
    recipes.push({
        type: 'mekanism:purifying',
        chemicalInput: { amount: 1, gas: 'mekanism:oxygen' },
        itemInput: { amount: 2, ingredient: ore_ingredient.toJson() },
        output: Item.of(raw_itemStack, 3).toJson(),
        id: `${id_prefix}mekanism/purifying/auto_fortune_for_${material}`
    });

    // Mekanism Chemical Injection (2x)
    recipes.push({
        type: 'mekanism:injecting',
        chemicalInput: { amount: 1, gas: 'mekanism:hydrofluoric_acid' },
        itemInput: { ingredient: ore_ingredient.toJson() },
        output: Item.of(raw_itemStack, 2).toJson(),
        id: `${id_prefix}mekanism/chemical_injecting/auto_fortune_for_${material}`
    });

    // Thermal Pulverizer (1,25x)
    recipes.push({
        type: 'thermal:pulverizer',
        ingredient: ore_ingredient.toJson(),
        result: [{ item: raw_itemStack.getId(), chance: 1.25 }],
        energy: 10000,
        id: `${id_prefix}thermal/pulverizer/auto_fortune_for_${material}`
    });

    // Occultism (1 -> 1)
    recipes.push({
        type: 'occultism:crushing',
        ingredient: ore_ingredient.toJson(),
        result: Item.of(raw_itemStack, 1).toJson(),
        crushing_time: 60,
        ignore_crushing_multiplier: true,
        id: `${id_prefix}occultism/crushing/auto_fortune_for_${material}`
    });

    // Immersive Engineering Crusher (1,5x)
    recipes.push({
        type: 'immersiveengineering:crusher',
        energy: 20000,
        input: ore_ingredient.toJson(),
        result: { base_ingredient: { item: raw_itemStack.getId() }, count: 1 },
        secondaries: [
            {
                chance: 0.5,
                output: Item.of(raw_itemStack, 1).toJson()
            }
        ],
        id: `${id_prefix}ie/crusher/auto_fortune_for_${material}`
    });

    // Ars Noveau Crushing Spell (1,5x)
    recipes.push({
        type: 'ars_nouveau:crush',
        input: ore_ingredient.toJson(),
        output: [
            {
                chance: 1,
                count: 1,
                item: raw_itemStack.getId()
            },
            {
                chance: 0.5,
                count: 1,
                item: raw_itemStack.getId()
            },
            {
                chance: 0.75,
                count: 1,
                item: 'ars_nouveau:experience_gem'
            }
        ],
        id: `${id_prefix}ars_nouveau/crushing/auto_fortune_for_${material}`
    });

    // Recipe Decoding
    recipes.forEach((recipe) => {
        if (localDebug) {
            console.log('// Ore Processing Rework // Recipe for Auto-Fortune with id: ' + recipe.id + '\n');
            console.log(recipe);
        }
        event.custom(recipe).id(recipe.id);
    });
}

function metal_ore_processing(material, properties, event, id_prefix) {
    if (!properties[material].oreProcessing) {
        return;
    }
    // Ore processsing for Metals
    let raw_ingredient = Ingredient.of(`#forge:raw_materials/${material}`);
    let raw_block_ingredient = Ingredient.of(`#forge:storage_blocks/raw_${material}`);
    let crushed_ore_itemStack = AlmostUnified.getPreferredItemForTag(`create:crushed_ores/${material}`);
    let ingot_itemStack = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`);
    let nugget_itemStack = AlmostUnified.getPreferredItemForTag(`forge:nuggets/${material}`);
    let dust_itemStack = AlmostUnified.getPreferredItemForTag(`forge:dusts/${material}`);
    let shard_itemStack = AlmostUnified.getPreferredItemForTag(`mekanism:shards/${material}`);
    let clump_itemStack = AlmostUnified.getPreferredItemForTag(`mekanism:clumps/${material}`);
    let secondaries = {};
    if (properties[material].oreProcessing.output.secondary) {
        let secondary = properties[material].oreProcessing.output.secondary;
        secondaries = {
            crushed_ore_itemStack: AlmostUnified.getPreferredItemForTag(`create:crushed_ores/${secondary}`),
            ingot_itemStack: AlmostUnified.getPreferredItemForTag(`forge:ingots/${secondary}`),
            nugget_itemStack: AlmostUnified.getPreferredItemForTag(`forge:nuggets/${secondary}`),
            dust_itemStack: AlmostUnified.getPreferredItemForTag(`forge:dusts/${secondary}`)
        };
    }

    // Fallback output checks:
    if (crushed_ore_itemStack.isEmpty()) {
        crushed_ore_itemStack = Item.of(Ingredient.of(`#create:crushed_ores/${material}`).getItemIds()[0]);
        if (localDebug)
            console.warn(
                ' // Ore Processing Rework // Material "' +
                    material +
                    '" uses fallback output item (Crushed Ore) for metal processing!'
            );
    }
    if (ingot_itemStack.isEmpty()) {
        ingot_itemStack = Item.of(Ingredient.of(`#forge:ingots/${material}`).getItemIds()[0]);
        if (localDebug)
            console.warn(
                ' // Ore Processing Rework // Material "' +
                    material +
                    '" uses fallback output item (Ingot) for metal processing!'
            );
    }
    if (nugget_itemStack.isEmpty()) {
        nugget_itemStack = Item.of(Ingredient.of(`#forge:nuggets/${material}`).getItemIds()[0]);
        if (localDebug)
            console.warn(
                ' // Ore Processing Rework // Material "' +
                    material +
                    '" uses fallback output item (Nugget) for metal processing!'
            );
    }
    if (dust_itemStack.isEmpty()) {
        dust_itemStack = Item.of(Ingredient.of(`#forge:dusts/${material}`).getItemIds()[0]);
        if (localDebug)
            console.warn(
                ' // Ore Processing Rework // Material "' +
                    material +
                    '" uses fallback output item (Dust) for metal processing!'
            );
    }
    if (shard_itemStack.isEmpty()) {
        shard_itemStack = Item.of(Ingredient.of(`#mekanism:shards${material}`).getItemIds()[0]);
        if (localDebug)
            console.warn(
                ' // Ore Processing Rework // Material "' +
                    material +
                    '" uses fallback output item (Shard) for metal processing!'
            );
    }
    if (clump_itemStack.isEmpty()) {
        clump_itemStack = Item.of(Ingredient.of(`#mekanism:clumps/${material}`).getItemIds()[0]);
        if (localDebug)
            console.warn(
                ' // Ore Processing Rework // Material "' +
                    material +
                    '" uses fallback output item (Clump) for metal processing!'
            );
    }
    Object.keys(secondaries).forEach((secondary) => {
        if (secondaries[secondary].isEmpty()) {
            switch (secondary) {
                case 'crushed_ore_itemStack':
                    secondaries[secondary] = Item.of(
                        Ingredient.of(`#create:crushed_ores/${secondary}`).getItemIds()[0]
                    );
                    break;
                case 'ingot_itemStack':
                    secondaries[secondary] = Item.of(Ingredient.of(`#forge:ingots/${secondary}`).getItemIds()[0]);
                    break;
                case 'nugget_itemStack':
                    secondaries[secondary] = Item.of(Ingredient.of(`#forge:nuggets/${secondary}`).getItemIds()[0]);
                    break;
                case 'dust_itemStack':
                    secondaries[secondary] = Item.of(Ingredient.of(`#forge:dusts/${secondary}`).getItemIds()[0]);
                    break;
            }
            if (localDebug)
                console.warn(
                    `// Ore Processing Rework // Material "${material}" uses fallback output for its secondary "${properties[material].oreProcessing.output.secondary}" (${secondary}) for metal processing!`
                );
        }
    });

    let recipes = [];
    let recipe = {};

    // Create
    // Raw Ore crushing
    recipe = {
        type: 'create:crushing',
        ingredients: [Ingredient.of(raw_ingredient, 1).toJson()],
        processingTime: properties[material].oreProcessing.create.processingTime,
        results: [Item.of(crushed_ore_itemStack).toJson()],
        id: `${id_prefix}create/crushing_wheels/raw_${material}`
    };
    if (secondaries.crushed_ore_itemStack) {
        recipe.results.push({
            item: secondaries.crushed_ore_itemStack.getId(),
            chance: 0.75
        });
    }
    recipe.results.push({
        item: 'create:experience_nugget',
        chance: 0.75
    });
    recipes.push(recipe);

    // Raw Ore Block crushing
    recipe = {
        type: 'create:crushing',
        ingredients: [Ingredient.of(raw_block_ingredient, 1).toJson()],
        processingTime: properties[material].oreProcessing.create.processingTime,
        results: [Item.of(crushed_ore_itemStack, 9).toJson()],
        id: `${id_prefix}create/crushing_wheels/raw_${material}_block`
    };
    if (secondaries.crushed_ore_itemStack) {
        recipe.results.push({
            item: secondaries.crushed_ore_itemStack.getId(),
            count: 9,
            chance: 0.75
        });
    }
    recipe.results.push({
        item: 'create:experience_nugget',
        count: 9,
        chance: 0.75
    });
    recipes.push(recipe);

    // Crushed Ore Washing
    // Create Fan Washing
    recipes.push({
        type: 'create:splashing',
        ingredients: [Item.of(crushed_ore_itemStack, 1).toJson()],
        results: [
            Item.of(nugget_itemStack, 9).toJson(),
            {
                chance: 0.75,
                count: 6,
                item: nugget_itemStack.getId()
            }
        ],
        id: `${id_prefix}create/splashing/${material}`
    });

    // Thermal Centrifugal Separator
    recipe = {
        type: 'thermal:centrifuge',
        ingredient: Item.of(crushed_ore_itemStack, 1).toJson(),
        result: [
            {
                item: nugget_itemStack.getId(),
                count: 9
            },
            {
                item: nugget_itemStack.getId(),
                count: 6,
                chance: 0.75
            }
        ],
        energy: 10000,
        id: `${id_prefix}thermal/centrifuge/crushed_${material}`
    };
    if (secondaries.nugget_itemStack) {
        recipe.result.push({
            item: secondaries.nugget_itemStack.getId(),
            count: 3,
            chance: 0.25
        });
    }
    recipes.push(recipe);

    // Thermal Ore Processing
    // Pulverizer
    recipe = {
        type: 'thermal:pulverizer',
        ingredient: Ingredient.of(raw_ingredient, 1).toJson(),
        result: [{ item: dust_itemStack.getId(), chance: 1.75 }],
        energy: 10000,
        id: `${id_prefix}thermal/pulverizer/raw_${material}`
    };
    if (secondaries.dust_itemStack) {
        recipe.result.push({ item: secondaries.dust_itemStack.getId(), chance: 0.25 });
    }
    recipes.push(recipe);

    // Induction Smelter
    recipe = {
        type: 'thermal:smelter',
        ingredients: [Ingredient.of(raw_ingredient, 1).toJson()],
        result: [{ item: ingot_itemStack.getId(), chance: 1.25 }],
        energy: 10000,
        id: `${id_prefix}thermal/smelter/raw_${material}`
    };
    if (secondaries.ingot_itemStack) {
        recipe.result.push({ item: secondaries.ingot_itemStack.getId(), chance: 0.75 });
    }
    recipes.push(recipe);

    // Mekanism
    // Slurry recipes
    // Raw Ore
    recipes.push({
        type: 'mekanism:dissolution',
        gasInput: { amount: 1, gas: 'mekanism:sulfuric_acid' },
        itemInput: { amount: 1, ingredient: Ingredient.of(raw_ingredient, 1).toJson() },
        output: {
            amount: 1000,
            chemicalType: 'slurry',
            slurry: `emendatusenigmatica:dirty_${material}`
        },
        id: `${id_prefix}mekanism/dissolution/raw_${material}`
    });
    recipes.push({
        type: 'mekanism:dissolution',
        gasInput: { amount: 2, gas: 'mekanism:sulfuric_acid' },
        itemInput: { amount: 1, ingredient: Ingredient.of(raw_block_ingredient, 1).toJson() },
        output: {
            amount: 9000,
            chemicalType: 'slurry',
            slurry: `emendatusenigmatica:dirty_${material}`
        },
        id: `${id_prefix}mekanism/dissolution/raw_${material}_block`
    });

    // Shards
    recipes.push({
        type: 'mekanism:injecting',
        chemicalInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
        itemInput: { ingredient: Ingredient.of(raw_ingredient, 1).toJson() },
        output: Item.of(shard_itemStack, 4).toJson(),
        id: `${id_prefix}mekanism/chemical_injecting/raw_${material}`
    });
    recipes.push({
        type: 'mekanism:injecting',
        chemicalInput: { amount: 2, gas: 'mekanism:hydrogen_chloride' },
        itemInput: { ingredient: Ingredient.of(raw_block_ingredient, 1).toJson() },
        output: Item.of(shard_itemStack, 36).toJson(),
        id: `${id_prefix}mekanism/chemical_injecting/raw_${material}_block`
    });

    // Clumps
    recipes.push({
        type: 'mekanism:purifying',
        chemicalInput: { amount: 1, gas: 'mekanism:oxygen' },
        itemInput: { ingredient: Ingredient.of(raw_ingredient, 1).toJson() },
        output: Item.of(clump_itemStack, 3).toJson(),
        id: `${id_prefix}mekanism/purifying/raw_${material}`
    });
    recipes.push({
        type: 'mekanism:purifying',
        chemicalInput: { amount: 2, gas: 'mekanism:oxygen' },
        itemInput: { ingredient: Ingredient.of(raw_block_ingredient, 1).toJson() },
        output: Item.of(clump_itemStack, 27).toJson(),
        id: `${id_prefix}mekanism/purifying/raw_${material}_block`
    });

    // Enriching
    recipes.push({
        type: 'mekanism:enriching',
        input: { ingredient: Ingredient.of(raw_ingredient, 1).toJson() },
        output: Item.of(dust_itemStack, 2).toJson(),
        id: `${id_prefix}mekanism/enriching/raw_${material}`
    });
    recipes.push({
        type: 'mekanism:enriching',
        input: { ingredient: Ingredient.of(raw_block_ingredient, 1).toJson() },
        output: Item.of(dust_itemStack, 18).toJson(),
        id: `${id_prefix}mekanism/enriching/raw_${material}_block`
    });

    // Immersive Engineering
    // Crusher
    // Raw Ore
    recipe = {
        type: 'immersiveengineering:crusher',
        energy: 50000,
        input: Ingredient.of(raw_ingredient, 1).toJson(),
        result: { base_ingredient: { item: dust_itemStack.getId() }, count: 2 },
        secondaries: [
            {
                chance: 0.75,
                output: Item.of(dust_itemStack, 1).toJson()
            }
        ],
        id: `${id_prefix}ie/crusher/raw_${material}`
    };
    if (secondaries.dust_itemStack) {
        recipe.secondaries.push({
            chance: 0.25,
            output: Item.of(secondaries.dust_itemStack, 1).toJson()
        });
    }
    recipes.push(recipe);

    // Raw Ore Block
    recipe = {
        type: 'immersiveengineering:crusher',
        energy: 75000,
        input: Ingredient.of(raw_block_ingredient, 1).toJson(),
        result: { base_ingredient: { item: dust_itemStack.getId() }, count: 18 },
        secondaries: [
            {
                chance: 0.75,
                output: Item.of(dust_itemStack, 9).toJson()
            }
        ],
        id: `${id_prefix}ie/crusher/raw_${material}_block`
    };
    if (secondaries.dust_itemStack) {
        recipe.secondaries.push({
            chance: 0.25,
            output: Item.of(secondaries.dust_itemStack, 9).toJson()
        });
    }
    recipes.push(recipe);

    // Arc Furnace
    recipe = {
        type: 'immersiveengineering:arc_furnace',
        additives: [],
        energy: 51200,
        input: raw_ingredient.toJson(),
        results: [{ base_ingredient: { item: ingot_itemStack.getId() }, count: 3 }],
        secondaries: [
            {
                chance: 0.25,
                output: { item: ingot_itemStack.getId() } // NOTE: If Arc Furnace Recipes crash the game, this is to blame!
            }
        ],
        slag: Item.of(AlmostUnified.getPreferredItemForTag('forge:slag')).toJson(),
        time: 60,
        id: `${id_prefix}ie/arc_furnace/raw_${material}`
    };
    if (secondaries.ingot_itemStack) {
        recipe.secondaries.push({
            chance: 0.75,
            output: { item: secondaries.ingot_itemStack.getId() } // NOTE: If Arc Furnace Recipes crash the game, this is to blame!
        });
    }
    recipes.push(recipe);

    // Ars Noveau
    // Crushing spell
    recipe = {
        type: 'ars_nouveau:crush',
        input: Ingredient.of(raw_ingredient, 1).toJson(),
        output: [
            {
                chance: 1,
                count: 2,
                item: dust_itemStack.getId()
            },
            {
                chance: 0.5,
                count: 1,
                item: dust_itemStack.getId()
            }
        ],
        id: `${id_prefix}ars_nouveau/crushing/raw_${material}`
    };
    if (secondaries.dust_itemStack) {
        recipe.output.push({
            chance: 0.5,
            count: 1,
            item: secondaries.dust_itemStack.getId()
        });
    } else {
        recipe.output.push({ chance: 0.75, count: 1, item: 'ars_nouveau:experience_gem' });
    }
    recipes.push(recipe);

    // Recipe decoding
    recipes.forEach((recipe) => {
        if (localDebug) {
            console.log('// Ore Processing Rework // Recipe for Metal Processing with id: ' + recipe.id + '\n');
            console.log(recipe);
        }
        event.custom(recipe).id(recipe.id);
    });
}

function gem_ore_processing(material, properties, event, id_prefix) {
    if (!properties[material].oreProcessing) {
        return;
    }
    // Gem Ore Processing
    let gem_properties = properties[material].oreProcessing;
    let ore_ingredient = Ingredient.of(`#forge:ores/${material}`);
    let recipes = [];
    let recipe = {};
    let output_itemStack;

    switch (gem_properties.output.type) {
        case 'dust':
            output_itemStack = AlmostUnified.getPreferredItemForTag(`forge:dusts/${material}`);
            if (output_itemStack.isEmpty()) {
                output_itemStack = Item.of(Ingredient.of(`#forge:dusts/${material}`).getItemIds()[0]);
                if (localDebug)
                    console.warn(
                        ' // Ore Processing Rework // Material "' +
                            material +
                            '" uses fallback output item for gem processing! Type: Dust'
                    );
            }
            break;
        case 'gem':
            output_itemStack = AlmostUnified.getPreferredItemForTag(`forge:gems/${material}`);
            if (output_itemStack.isEmpty()) {
                output_itemStack = Item.of(Ingredient.of(`#forge:gems/${material}`).getItemIds()[0]);
                if (localDebug)
                    console.warn(
                        ' // Ore Processing Rework // Material "' +
                            material +
                            '" uses fallback output item for gem processing! Type: Gem'
                    );
            }
            break;
    }

    // Create Crushing Wheels
    if (gem_properties.create) {
        recipe = {
            type: 'create:crushing',
            ingredients: [ore_ingredient.toJson()],
            processingTime: gem_properties.create.processingTime,
            results: [Item.of(output_itemStack, gem_properties.create.primaryCount).toJson()],
            id: `${id_prefix}create/crushing_wheels/gem/${material}_ore`
        };
        if (gem_properties.output.secondary && gem_properties.create.secondaryCount) {
            recipe.results.push({
                item: gem_properties.output.secondary,
                chance: gem_properties.create.secondaryChance,
                count: gem_properties.create.secondaryCount
            });
        }
        if (gem_properties.output.substrate) {
            recipe.results.push({ item: gem_properties.output.substrate, chance: 0.125 });
        }
        recipe.results.push({ item: 'create:experience_nugget', chance: 0.5 });
        recipes.push(recipe);
    }

    // Mekanism
    if (gem_properties.mekanism) {
        // Mekanism Enrichment Chamber
        if (gem_properties.mekanism.enrichmentCount) {
            recipes.push({
                type: 'mekanism:enriching',
                input: { ingredient: ore_ingredient.toJson() },
                output: Item.of(output_itemStack, gem_properties.mekanism.enrichmentCount).toJson(),
                id: `${id_prefix}mekanism/enriching/gem/${material}_ore`
            });
        }

        // Mekanism Purification Chamber
        if (gem_properties.mekanism.purificationCount && gem_properties.mekanism.purificationGas) {
            recipes.push({
                type: 'mekanism:purifying',
                chemicalInput: gem_properties.mekanism.purificationGas,
                itemInput: { ingredient: ore_ingredient.toJson() },
                output: Item.of(output_itemStack, gem_properties.mekanism.purificationCount).toJson(),
                id: `${id_prefix}mekanism/purifying/gem/${material}_ore`
            });
        }

        // Mekanism Chemical Injection
        if (gem_properties.mekanism.injectionCount && gem_properties.mekanism.injectionGas) {
            recipes.push({
                type: 'mekanism:injecting',
                chemicalInput: gem_properties.mekanism.injectionGas,
                itemInput: { ingredient: ore_ingredient.toJson() },
                output: Item.of(output_itemStack, gem_properties.mekanism.injectionCount).toJson(),
                id: `${id_prefix}mekanism/chemical_injecting/gem/${material}_ore`
            });
        }
    }

    // Thermal Pulverizer
    if (gem_properties.thermal) {
        recipe = {
            type: 'thermal:pulverizer',
            ingredient: ore_ingredient.toJson(),
            result: [{ item: output_itemStack.getId(), count: gem_properties.thermal.primaryCount, chance: 1 }],
            energy: 10000,
            id: `${id_prefix}thermal/pulverizer/gem/${material}_ore`
        };
        if (gem_properties.output.secondary && gem_properties.thermal.secondaryCount) {
            recipe.result.push({
                item: gem_properties.output.secondary,
                count: gem_properties.thermal.secondaryCount,
                chance: gem_properties.thermal.secondaryChance
            });
        }
        if (gem_properties.output.substrate) {
            recipe.result.push({ item: gem_properties.output.substrate, chance: 0.125 });
        }
        recipes.push(recipe);
    }

    // Occultism
    if (gem_properties.occultism) {
        recipes.push({
            type: 'occultism:crushing',
            ingredient: ore_ingredient.toJson(),
            result: Item.of(output_itemStack, gem_properties.occultism.primaryCount).toJson(),
            crushing_time: 60,
            id: `${id_prefix}occultism/crushing/gem/${material}_ore`
        });
    }

    // Immersive Engineering Crusher
    if (gem_properties.immersiveengineering) {
        recipe = {
            type: 'immersiveengineering:crusher',
            energy: 20000,
            input: ore_ingredient.toJson(),
            result: {
                base_ingredient: { item: output_itemStack.getId() },
                count: gem_properties.immersiveengineering.primaryCount
            },
            id: `${id_prefix}ie/crusher/gem/${material}_ore`
        };
        if (gem_properties.output.secondary || gem_properties.output.substrate) {
            recipe.secondaries = [];
            if (gem_properties.output.secondary && gem_properties.immersiveengineering.secondaryCount) {
                recipe.secondaries.push({
                    output: Item.of(
                        gem_properties.output.secondary,
                        gem_properties.immersiveengineering.secondaryCount
                    ).toJson(),
                    chance: gem_properties.immersiveengineering.secondaryChance
                });
            }
            if (gem_properties.output.substrate) {
                recipe.secondaries.push({
                    output: Item.of(gem_properties.output.substrate, 1).toJson(),
                    chance: 0.125
                });
            }
        }
        recipes.push(recipe);
    }

    // Ars Noveau Crushing Spell
    if (gem_properties.ars_nouveau) {
        recipe = {
            type: 'ars_nouveau:crush',
            input: ore_ingredient.toJson(),
            output: [
                {
                    chance: 1,
                    count: gem_properties.ars_nouveau.primaryCount,
                    item: output_itemStack.getId()
                }
            ],
            id: `${id_prefix}ars_nouveau/crushing/gem/${material}_ore`
        };
        if (gem_properties.output.secondary && gem_properties.ars_nouveau.secondaryCount) {
            recipe.output.push({
                chance: gem_properties.ars_nouveau.secondaryChance,
                count: gem_properties.ars_nouveau.secondaryCount,
                item: gem_properties.output.secondary
            });
        }
        recipe.output.push({ chance: 0.75, count: 1, item: 'ars_nouveau:experience_gem' });
        recipes.push(recipe);
    }

    // Recipe decoding
    recipes.forEach((recipe) => {
        if (localDebug) {
            console.log('// Ore Processing Rework // Recipe for Gem Processing with id: ' + recipe.id + '\n');
            console.log(recipe);
        }
        event.custom(recipe).id(recipe.id);
    });
}
