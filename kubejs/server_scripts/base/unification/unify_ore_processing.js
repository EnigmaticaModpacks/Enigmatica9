ServerEvents.recipes((event) => {
    let metals = Object.keys(metal_properties)
    let gems = Object.keys(gemProperties)
    let special_gems = [
        `aquite`,
        `charoite`,
    ]
    
    metals.forEach((metal) => {
        auto_fortune(metal, metal_properties, event)
        metal_ore_processing(metal, metal_properties, event)
    })

    gems.forEach((gem) => {

    })

    special_gems.forEach((gem) => {
        auto_fortune(gem, gemProperties, event)
    })
})

const id_prefix = 'enigmatica:unification/ore_processing/'

function auto_fortune(material, properties, event) {
    if (!properties[material].oreProcessing) {
        return
    }
    // Auto Fortune for Metals
    let output_itemStack = AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${material}`)
    let input_ingredient = Ingredient.of(`#forge:ores/${material}`)
    
    // Create Crushing Wheels (1,33x)
    event.custom({
        type: 'create:crushing',
        ingredients: [input_ingredient.toJson()],
        processingTime: properties[material].oreProcessing.create.processingTime,
        results: [
            output_itemStack.toJson(),
            {
                item: output_itemStack.getId(),
                chance: 0.33
            },
            {
                item: 'create:experience_nugget',
                chance: 0.75
            }
        ]
    }).id(`${id_prefix}create/crushing_wheels/auto_fortune_for_${material}`);

    // Mekanism Enrichment (1.25x)
    event.custom({
        type: 'mekanism:enriching',
        input: { ingredient: input_ingredient.toJson(), amount: 4 },
        output: Item.of(output_itemStack, 5).toJson()
    }).id(`${id_prefix}mekanism/enriching/auto_fortune_for_${material}`);

    // Mekanism Purification Chamber (1,5x)
    event.custom({
        type: 'mekanism:purifying',
        chemicalInput: { amount: 1, gas: 'mekanism:oxygen' },
        itemInput: { amount: 2, ingredient: input_ingredient.toJson() },
        output: Item.of(output_itemStack, 3).toJson()
    }).id(`${id_prefix}mekanism/purifying/auto_fortune_for_${material}`);

    // Mekanism Chemical Injection (2x)
    event.custom({
        type: 'mekanism:injecting',
        chemicalInput: { amount: 1, gas: 'mekanism:hydrofluoric_acid' },
        itemInput: { ingredient: input_ingredient.toJson() },
        output: Item.of(output_itemStack, 2).toJson()
    }).id(`${id_prefix}mekanism/chemical_injecting/auto_fortune_for_${material}`);
    
    // Thermal Pulverizer (1,25x)
    event.custom({
        type: 'thermal:pulverizer',
        ingredient: input_ingredient.toJson(),
        result: [{ item: output_itemStack.getId(), chance: 1.25 }],
        energy: 10000
    }).id(`${id_prefix}thermal/pulverizer/auto_fortune_for_${material}`);

    // Occultism (1 -> 1)
    event.custom({
        type: 'occultism:crushing',
        ingredient: input_ingredient.toJson(),
        result: Item.of(output_itemStack, 1).toJson(),
        crushing_time: 60,
        ignore_crushing_multiplier: true
    }).id(`${id_prefix}occultism/crushing/auto_fortune_for_${material}`);

    // Immersive Engineering Crusher (1,5x)
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 20000,
        input: input_ingredient.toJson(),
        result: { base_ingredient: { item: output_itemStack.getId() }, count: 1 },
        secondaries: [
            {
                chance: 0.5,
                output: Item.of(output_itemStack, 1).toJson()
            }
        ]
    }).id(`${id_prefix}ie/crusher/auto_fortune_for_${material}`);

    // Ars Noveau Crushing Spell (1,5x)
    event.custom({
        type: 'ars_nouveau:crush',
        input: input_ingredient.toJson(),
        output: [
            {
                chance: 1,
                count: 1,
                item: output_itemStack.getId()
            },
            {
                chance: 0.5,
                count: 1,
                item: output_itemStack.getId()
            }
        ]
    }).id(`${id_prefix}ars_nouveau/crushing/auto_fortune_for_${material}`);
}

function metal_ore_processing(material, properties, event) {
    if (!properties[material].oreProcessing) {
        return
    }
    // Ore processsing for Metals
    let raw_itemStack = AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${material}`)
    let raw_block_itemStack = AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/raw_${material}`)
    let crushed_ore_itemStack = AlmostUnified.getPreferredItemForTag(`create:crushed_ores/${material}`)
    let ingot_itemStack = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`)
    let nugget_itemStack = AlmostUnified.getPreferredItemForTag(`forge:nuggets/${material}`)
    let dust_itemStack = AlmostUnified.getPreferredItemForTag(`forge:dusts/${material}`)
    let shard_itemStack = AlmostUnified.getPreferredItemForTag(`mekanism:shards/${material}`)
    let clump_itemStack = AlmostUnified.getPreferredItemForTag(`mekanism:clumps/${material}`)
    let secondaries = {}
    if (properties[material].oreProcessing.output.secondary) {
        let secondary = properties[material].oreProcessing.output.secondary
        secondaries = {
            raw_itemStack: AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${secondary}`),
            raw_block_itemStack: AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/raw_${secondary}`),
            crushed_ore_itemStack: AlmostUnified.getPreferredItemForTag(`create:crushed_ores/${secondary}`),
            ingot_itemStack: AlmostUnified.getPreferredItemForTag(`forge:ingots/${secondary}`),
            nugget_itemStack: AlmostUnified.getPreferredItemForTag(`forge:nuggets/${secondary}`),
            dust_itemStack: AlmostUnified.getPreferredItemForTag(`forge:dusts/${secondary}`)
        }
    }

    let recipes = []
    let recipe = {}

    // Create
    // Raw Ore crushing
    recipe = {
        type: 'create:crushing',
        ingredients: [ Item.of(raw_itemStack, 1).toJson() ],
        processingTime: properties[material].oreProcessing.create.processingTime,
        results: [ Item.of(crushed_ore_itemStack).toJson() ],
        id: `${id_prefix}create/crushing_wheels/raw_${material}`
    }
    if (secondaries.crushed_ore_itemStack) {
        recipe.results.push(
            {
                item: secondaries.crushed_ore_itemStack.getId(),
                chance: 0.75
            }
        )
    }
    recipe.results.push(
        {
            item: 'create:experience_nugget',
            chance: 0.75
        }
    )
    recipes.push(recipe)

    // Raw Ore Block crushing
    recipe = {
        type: 'create:crushing',
        ingredients: [ Item.of(raw_block_itemStack, 1).toJson() ],
        processingTime: properties[material].oreProcessing.create.processingTime,
        results: [ Item.of(crushed_ore_itemStack, 9).toJson() ],
        id: `${id_prefix}create/crushing_wheels/raw_${material}_block`
    }
    if (secondaries.crushed_ore_itemStack) {
        recipe.results.push(
            {
                item: secondaries.crushed_ore_itemStack.getId(),
                count: 9,
                chance: 0.75
            }
        )
    }
    recipe.results.push(
        {
            item: 'create:experience_nugget',
            count: 9,
            chance: 0.75
        }
    )
    recipes.push(recipe)

    // Crushed Ore Washing
    // Create Fan Washing
    recipes.push(
        {
            type: "create:splashing",
            ingredients: [ Item.of(crushed_ore_itemStack, 1).toJson() ],
            results: [
                Item.of(nugget_itemStack, 9).toJson(),
                {
                    chance: 0.75,
                    count: 6,
                    item: nugget_itemStack.getId()
                }
            ],
            id: `${id_prefix}create/splashing/${material}`
        }
    )

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
    }
    if (secondaries.nugget_itemStack) {
        recipe.result.push(
            {
                item: secondaries.nugget_itemStack.getId(),
                count: 3,
                chance: 0.25
            }
        )
    }
    recipes.push(recipe)

    // Thermal Ore Processing
    // Pulverizer
    recipe = {
        type: 'thermal:pulverizer',
        ingredient: Item.of(raw_itemStack, 1).toJson(),
        result: [ { item: dust_itemStack.getId(), chance: 1.75 } ],
        energy: 10000,
        id: `${id_prefix}thermal/pulverizer/raw_${material}`
    }
    if (secondaries.dust_itemStack) {
        recipe.result.push({ item: secondaries.dust_itemStack.getId(), chance: 0.25 })
    }
    recipes.push(recipe)

    // Induction Smelter
    recipe = {
        type: 'thermal:smelter',
        ingredients: [ Item.of(raw_itemStack, 1).toJson() ],
        result: [ { item: ingot_itemStack.getId(), chance: 1.25} ],
        energy: 10000,
        id: `${id_prefix}thermal/smelter/raw_${material}`
    }
    if (secondaries.ingot_itemStack) {
        recipe.result.push({ item: secondaries.ingot_itemStack.getId(), chance: 0.75 })
    }
    recipes.push(recipe)

    // Mekanism
    // Slurry recipes
    // Raw Ore
    recipes.push({
        type: 'mekanism:dissolution',
        gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" },
        itemInput: { amount: 1, ingredient: Item.of(raw_itemStack, 1).toJson() },
        output: {
            amount: 1000,
            chemicalType: "slurry",
            slurry: `emendatusenigmatica:dirty_${material}`
        },
        id: `${id_prefix}mekanism/dissolution/raw_${material}`
    })
    recipes.push({
        type: 'mekanism:dissolution',
        gasInput: { amount: 2, gas: "mekanism:sulfuric_acid" },
        itemInput: { amount: 1, ingredient: Item.of(raw_block_itemStack, 1).toJson() },
        output: {
            amount: 9000,
            chemicalType: "slurry",
            slurry: `emendatusenigmatica:dirty_${material}`
        },
        id: `${id_prefix}mekanism/dissolution/raw_${material}_block`
    })

    // Shards
    recipes.push({
        type: 'mekanism:injecting',
        chemicalInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
        itemInput: { ingredient: Item.of(raw_itemStack, 1).toJson() },
        output: Item.of(shard_itemStack, 4).toJson(),
        id: `${id_prefix}mekanism/chemical_injecting/raw_${material}`
    })
    recipes.push({
        type: 'mekanism:injecting',
        chemicalInput: { amount: 2, gas: 'mekanism:hydrogen_chloride' },
        itemInput: { ingredient: Item.of(raw_block_itemStack, 1).toJson() },
        output: Item.of(shard_itemStack, 36).toJson(),
        id: `${id_prefix}mekanism/chemical_injecting/raw_${material}_block`
    })

    // Clumps
    recipes.push({
        type: 'mekanism:purifying',
        chemicalInput: { amount: 1, gas: 'mekanism:oxygen' },
        itemInput: { ingredient: Item.of(raw_itemStack, 1).toJson() },
        output: Item.of(clump_itemStack, 3).toJson(),
        id: `${id_prefix}mekanism/purifying/raw_${material}`
    })
    recipes.push({
        type: 'mekanism:purifying',
        chemicalInput: { amount: 2, gas: 'mekanism:oxygen' },
        itemInput: { ingredient: Item.of(raw_block_itemStack, 1).toJson() },
        output: Item.of(clump_itemStack, 27).toJson(),
        id: `${id_prefix}mekanism/purifying/raw_${material}_block`
    })

    // Enriching
    recipes.push({
        type: 'mekanism:enriching',
        input: { ingredient: Item.of(raw_itemStack, 1).toJson() },
        output: Item.of(dust_itemStack, 2).toJson(),
        id: `${id_prefix}mekanism/enriching/raw_${material}`
    })
    recipes.push({
        type: 'mekanism:enriching',
        input: { ingredient: Item.of(raw_block_itemStack, 1).toJson() },
        output: Item.of(dust_itemStack, 18).toJson(),
        id: `${id_prefix}mekanism/enriching/raw_${material}_block`
    })

    // Immersive Engineering
    // Crusher
    // Raw Ore
    recipe = {
        type: 'immersiveengineering:crusher',
        energy: 50000,
        input: Item.of(raw_itemStack, 1).toJson(),
        result: { base_ingredient: { item: dust_itemStack.getId() }, count: 2 },
        secondaries: [
            {
                chance: 0.75,
                output: Item.of(dust_itemStack, 1).toJson()
            }
        ],
        id: `${id_prefix}ie/crusher/raw_${material}`
    }
    if (secondaries.dust_itemStack) {
        recipe.secondaries.push({
            chance: 0.25,
            output: Item.of(secondaries.dust_itemStack, 1).toJson()
        })
    }
    recipes.push(recipe)

    // Raw Ore Block
    recipe = {
        type: 'immersiveengineering:crusher',
        energy: 75000,
        input: Item.of(raw_block_itemStack, 1).toJson(),
        result: { base_ingredient: { item: dust_itemStack.getId() }, count: 18 },
        secondaries: [
            {
                chance: 0.75,
                output: Item.of(dust_itemStack, 9).toJson()
            }
        ],
        id: `${id_prefix}ie/crusher/raw_${material}_block`
    }
    if (secondaries.dust_itemStack) {
        recipe.secondaries.push({
            chance: 0.25,
            output: Item.of(secondaries.dust_itemStack, 9).toJson()
        })
    }
    recipes.push(recipe)
    
    // Arc Furnace
    // recipe = {
    //     type: "immersiveengineering:arc_furnace",
    //     additives: [],
    //     energy: 51200,
    //     input: { item: raw_itemStack.getId() },
    //     results: [ { base_ingredient: { item: ingot_itemStack.getId() }, count: 2 }],
    //     secondaries: [
    //         {
    //             chance: 0.75,
    //             output: { item: ingot_itemStack.getId() }
    //         }
    //     ],
    //     slag: Item.of(AlmostUnified.getPreferredItemForTag('forge:slag')).toJson(),
    //     time: 60,
    //     id: `${id_prefix}ie/arc_furnace/raw_${material}`
    // }
    // if (secondaries.ingot_itemStack) {
    //     recipe.secondaries.push({
    //         chance: 0.75,
    //         output: { item: secondaries.ingot_itemStack.getId() }
    //     })
    // }
    // recipes.push(recipe)

    // Ars Noveau
    // Crushing spell
    recipe = {
        type: 'ars_nouveau:crush',
        input: Item.of(raw_itemStack, 1).toJson(),
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
    }
    if (secondaries.dust_itemStack) {
        recipe.output.push({
            chance: 0.5,
            count: 1,
            item: secondaries.dust_itemStack.getId()
        })
    }
    recipes.push(recipe)

    // Recipe decoding
    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id)
    })
}