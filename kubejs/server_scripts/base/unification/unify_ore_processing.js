ServerEvents.recipes((event) => {
    let metals = Object.keys(metal_properties)
    let gems = Object.keys(gemProperties)
    let special_gems = [
        `aquite`,
        `charoite`,
    ]
    

    metals.forEach((metal) => {
        auto_fortune(metal, metal_properties, event)
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
    
    // Create Crushing Wheels
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
        energy: 150000
    }).id(`${id_prefix}thermal/pulverizer/auto_fortune_for_${material}`);

    // Occultism (1 -> 1)
    event.custom({
        type: 'occultism:crushing',
        ingredient: input_ingredient.toJson(),
        result: Item.of(output_itemStack, 1).toJson(),
        crushing_time: 60,
        ignore_crushing_multiplier: true
    }).id(`${id_prefix}occultism_crushing/auto_fortune_for_${material}`);

    // Immersive Engineering Crusher (1,33x)
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
    }).id(`${id_prefix}immersiveengineering_crusher/auto_fortune_for_${material}`);

    // Ars Noveau Crushing Spell (1,33x)
    console.log(Item.of(output_itemStack).withChance(0.33))
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
    }).id(`${id_prefix}ars_nouveau_crushing/auto_fortune_for_${material}`);
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

    if (properties[material].oreProcessing.output.secondary) {
        let secondary = properties[material].oreProcessing.output.secondary
        let secondaries = {
            raw_itemStack: AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${secondary}`),
            raw_block_itemStack: AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/raw_${secondary}`),
            crushed_ore_itemStack: AlmostUnified.getPreferredItemForTag(`create:crushed_ores/${secondary}`),
            ingot_itemStack: AlmostUnified.getPreferredItemForTag(`forge:ingots/${secondary}`),
            nugget_itemStack: AlmostUnified.getPreferredItemForTag(`forge:nuggets/${secondary}`)
        }
    }

    // Create

}