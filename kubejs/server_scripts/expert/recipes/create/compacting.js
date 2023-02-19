ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/compacting/';
    const recipes = [
        {
            ingredients: [
                { item: 'minecraft:dandelion' },
                { item: 'minecraft:dandelion' },
                { item: 'minecraft:dandelion' },
                { item: 'minecraft:dandelion' }
            ],
            results: [{ fluid: 'industrialforegoing:latex', amount: 200 }],
            id: `${id_prefix}latex_from_dandelion`
        },
        {
            ingredients: [
                { item: 'minecraft:vine' },
                { item: 'minecraft:vine' },
                { item: 'minecraft:vine' },
                { item: 'minecraft:vine' }
            ],
            results: [{ fluid: 'industrialforegoing:latex', amount: 200 }],
            id: `${id_prefix}latex_from_vine`
        },
        {
            ingredients: [
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }],
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }],
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }],
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }],
                [{ item: 'minecraft:spider_eye' }, { item: 'blue_skies:bug_guts' }],
                [{ item: 'minecraft:spider_eye' }, { item: 'blue_skies:bug_guts' }]
            ],
            results: [
                { fluid: 'hexerei:blood_fluid', amount: 250 },
                { item: 'kubejs:mystery_mash', count: 2 }
            ],
            id: `${id_prefix}mystery_mash`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:compacting';
        event.custom(recipe).id(recipe.id);
    });
});
