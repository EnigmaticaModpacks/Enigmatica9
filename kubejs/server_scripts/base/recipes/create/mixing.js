ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/mixing/';
    const recipes = [
        {
            results: [{ item: 'immersiveengineering:insulating_glass', count: 2 }],
            ingredients: [{ tag: 'forge:glass/colorless' }, { tag: 'forge:glass' }, { tag: 'forge:dusts/iron' }],
            heatRequirement: 'heated',
            id: `${id_prefix}insulating_glass`
        },
        {
            results: [{ amount: 1000, fluid: 'create:tea' }],
            ingredients: [
                { tag: 'forge:storage_blocks/tea' },
                { fluid: 'minecraft:water', amount: 750, nbt: {} },
                { fluidTag: 'forge:milk', amount: 250 }
            ],
            heatRequirement: 'heated',
            id: `create:mixing/tea`
        },
        {
            results: [{ fluid: 'hexerei:tallow_fluid', amount: 2000 }],
            ingredients: [
                { tag: 'hexerei:tallow_meltable' },
                { tag: 'hexerei:tallow_meltable' },
                { tag: 'hexerei:tallow_meltable' },
                { tag: 'hexerei:tallow_meltable' },
                { tag: 'hexerei:tallow_meltable' },
                { tag: 'hexerei:tallow_meltable' },
                { tag: 'hexerei:tallow_meltable' },
                { tag: 'hexerei:tallow_meltable' },
                { fluid: 'minecraft:water', amount: 2000, nbt: {} }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}tallow_fluid`
        },
        {
            results: [{ fluid: 'sophisticatedcore:xp_still', amount: 60 }],
            ingredients: [{ item: 'create:experience_nugget' }],
            heatRequirement: 'heated',
            id: `${id_prefix}experience_nugget_to_liquid`
        },
        {
            results: [{ fluid: 'sophisticatedcore:xp_still', amount: 60 }],
            ingredients: [{ item: 'ars_nouveau:experience_gem' }],
            heatRequirement: 'heated',
            id: `${id_prefix}experience_gem_to_liquid`
        },
        {
            results: [{ fluid: 'sophisticatedcore:xp_still', amount: 240 }],
            ingredients: [{ item: 'ars_nouveau:greater_experience_gem' }],
            heatRequirement: 'heated',
            id: `${id_prefix}greater_experience_gem_to_liquid`
        },
        {
            results: [{ fluid: 'the_bumblezone:honey_fluid_still', amount: 1000 }],
            ingredients: [{ item: 'minecraft:honey_block' }],
            heatRequirement: 'heated',
            id: `create:mixing/honey`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
