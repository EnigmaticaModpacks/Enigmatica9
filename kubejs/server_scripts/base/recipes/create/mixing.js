ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/mixing/';
    const recipes = [
        {
            inputs: [
                Ingredient.of('#forge:glass').toJson(),
                Ingredient.of('#forge:glass').toJson(),
                Ingredient.of('#forge:dusts/iron').toJson()
            ],
            outputs: [Item.of('immersiveengineering:insulating_glass', 2).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}insulating_glass`
        },
        {
            inputs: [
                Ingredient.of('#forge:crops/tea').toJson(),
                Ingredient.of('#forge:crops/tea').toJson(),
                Ingredient.of('#forge:crops/tea').toJson(),
                Ingredient.of('#forge:crops/tea').toJson(),
                { fluid: 'minecraft:water', amount: 250, nbt: {} },
                { fluidTag: 'forge:milk', amount: 250 }
            ],
            outputs: [{ amount: 500, fluid: 'create:tea' }],
            heatRequirement: 'heated',
            id: `create:mixing/tea`
        },
        {
            inputs: [
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                { fluid: 'minecraft:water', amount: 2000, nbt: {} }
            ],
            outputs: [{ amount: 2000, fluid: 'hexerei:tallow_fluid' }],
            heatRequirement: 'heated',
            id: `${id_prefix}tallow_fluid`
        },
        {
            inputs: [Ingredient.of('create:experience_nugget').toJson()],
            outputs: [{ amount: 60, fluid: 'sophisticatedcore:xp_still' }],
            heatRequirement: 'heated',
            id: `${id_prefix}experience_nugget_to_liquid`
        },
        {
            inputs: [Ingredient.of('ars_nouveau:experience_gem').toJson()],
            outputs: [{ amount: 60, fluid: 'sophisticatedcore:xp_still' }],
            heatRequirement: 'heated',
            id: `${id_prefix}experience_gem_to_liquid`
        },
        {
            inputs: [Ingredient.of('ars_nouveau:greater_experience_gem').toJson()],
            outputs: [{ amount: 240, fluid: 'sophisticatedcore:xp_still' }],
            heatRequirement: 'heated',
            id: `${id_prefix}greater_experience_gem_to_liquid`
        },
        {
            inputs: [
                Ingredient.of('#forge:ingots/copper').toJson(),
                Ingredient.of('#forge:ingots/copper').toJson(),
                Ingredient.of('#forge:ingots/copper').toJson(),
                Ingredient.of('#forge:ingots/tin').toJson()
            ],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/bronze'), 4).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}bronze_ingot`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper').toJson(), Ingredient.of('#forge:ingots/nickel').toJson()],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/constantan'), 2).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}constantan_ingot`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/gold').toJson(), Ingredient.of('#forge:ingots/silver').toJson()],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/electrum'), 2).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}electrum_ingot`
        },
        {
            inputs: [
                Ingredient.of('#forge:ingots/lead').toJson(),
                Ingredient.of('#forge:ingots/lead').toJson(),
                Ingredient.of('#forge:ingots/lead').toJson(),
                Ingredient.of('#forge:ender_pearls').toJson(),
                Ingredient.of('#forge:ender_pearls').toJson(),
                Ingredient.of('#forge:dusts/diamond').toJson()
            ],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/enderium'), 2).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}enderium_ingot`
        },
        {
            inputs: [
                Ingredient.of('#forge:ingots/iron').toJson(),
                Ingredient.of('#forge:ingots/iron').toJson(),
                Ingredient.of('#forge:ingots/nickel').toJson()
            ],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/invar'), 3).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}invar_ingot`
        },
        {
            inputs: [
                Ingredient.of('#forge:ingots/tin').toJson(),
                Ingredient.of('#forge:ingots/tin').toJson(),
                Ingredient.of('#forge:ingots/tin').toJson(),
                Ingredient.of('#forge:dusts/glowstone').toJson(),
                Ingredient.of('#forge:dusts/glowstone').toJson(),
                Ingredient.of('#forge:ingots/silver').toJson()
            ],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/lumium'), 4).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}lumium_ingot`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/gold').toJson(), Ingredient.of('#forge:ingots/copper').toJson()],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/rose_gold'), 2).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}rose_gold_ingot`
        },
        {
            inputs: [
                Ingredient.of('#forge:dusts/redstone').toJson(),
                Ingredient.of('#forge:dusts/redstone').toJson(),
                Ingredient.of('#forge:dusts/redstone').toJson(),
                Ingredient.of('#forge:dusts/redstone').toJson(),
                Ingredient.of('#forge:ingots/copper').toJson(),
                Ingredient.of('#forge:ingots/copper').toJson(),
                Ingredient.of('#forge:ingots/copper').toJson(),
                Ingredient.of('#forge:ingots/silver').toJson()
            ],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/signalum'), 4).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}signalum_ingot`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/iron').toJson(), Ingredient.of('#forge:gems/coal_coke').toJson()],
            outputs: [Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/steel'), 1).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}steel_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        recipe.ingredients = recipe.inputs;
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
