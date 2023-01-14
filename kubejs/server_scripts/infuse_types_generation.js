ServerEvents.recipes((event) => {
    global.infuse_types.forEach((type) => {
        event.custom({
            type: "mekanism:infusion_conversion",
            input: { ingredient: Ingredient.of(type[1]).toJson() },
            output: {
              amount: 10,
              infuse_type: `mekanism:${type[0]}`
            }
          }).id(`enigmatica:temporary/infuse_type_from_${type[0]}`)
    })
})