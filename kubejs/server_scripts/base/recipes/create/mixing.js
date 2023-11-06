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
            heatRequirement: 'superheated',
            id: `${id_prefix}experience_nugget_to_liquid`
        },
        {
            results: [{ fluid: 'sophisticatedcore:xp_still', amount: 60 }],
            ingredients: [{ item: 'ars_nouveau:experience_gem' }],
            heatRequirement: 'superheated',
            id: `${id_prefix}experience_gem_to_liquid`
        },
        {
            results: [{ fluid: 'sophisticatedcore:xp_still', amount: 240 }],
            ingredients: [{ item: 'ars_nouveau:greater_experience_gem' }],
            heatRequirement: 'superheated',
            id: `${id_prefix}greater_experience_gem_to_liquid`
        },
        {
            results: [{ fluid: 'the_bumblezone:honey_fluid_still', amount: 1000 }],
            ingredients: [{ item: 'minecraft:honey_block' }],
            heatRequirement: 'heated',
            id: `create:mixing/honey`
        }
    ];

    // Farmer's Delight Cooking Compat
    event.forEachRecipe({ type: 'farmersdelight:cooking' }, (r) => {
        let source_recipe = JSON.parse(r.json);
        let output_item = source_recipe.result.item;
        let cook_time = 200;
        let serving_dish = {
            bottle: ['farmersdelight:glow_berry_custard', 'farmersdelight:apple_cider', 'farmersdelight:hot_cocoa'],
            pumpkin: ['farmersdelight:stuffed_pumpkin_block'],
            exclusions: ['farmersdelight:dumplings', 'farmersdelight:cabbage_rolls']
        };

        if (source_recipe.cookingTime) {
            cook_time = source_recipe.cookingTime;
        }

        let ingredients = source_recipe.ingredients.map((ingredient) => {
            if (ingredient.tag && ingredient.tag == 'forge:milk') {
                ingredient = { fluidTag: 'forge:milk', amount: 250 };
            }
            return ingredient;
        });
        let ashes = Math.ceil(ingredients.length / 2);
        let burned_outputs = [{ item: 'supplementaries:ash', count: ashes > 0 ? ashes : 1 }];

        if (!serving_dish.exclusions.includes(output_item)) {
            if (serving_dish.bottle.includes(output_item)) {
                ingredients.push({ item: 'minecraft:glass_bottle' });
                burned_outputs.push({ item: 'minecraft:glass_bottle' });
            } else if (serving_dish.pumpkin.includes(output_item)) {
                ingredients.push({ item: 'minecraft:pumpkin' });
                burned_outputs.push({ item: 'minecraft:charcoal', count: 2 });
            } else {
                ingredients.push({ item: 'minecraft:bowl' });
                burned_outputs.push({ item: 'minecraft:charcoal' });
            }
        }

        recipes.push(
            {
                results: [source_recipe.result],
                ingredients: ingredients,
                heatRequirement: 'heated',
                processingTime: cook_time,
                id: `${id_prefix}${output_item.replace(':', '_')}`
            },
            {
                results: burned_outputs,
                ingredients: ingredients,
                heatRequirement: 'superheated',
                processingTime: cook_time / 10,
                id: `${id_prefix}${output_item.replace(':', '_')}_burned`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
