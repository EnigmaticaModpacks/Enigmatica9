ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/crystallizer/';

    const recipes = [
        {
            ingredients: [
                { fluid: 'minecraft:water', amount: 2000 },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { tag: 'forge:dusts/amethyst' }
            ],
            result: [{ item: 'ae2:fluix_crystal', count: 2 }],
            energy: 20000,
            id: `${id_prefix}fluix_crystal_from_amethyst_dust`
        },
        {
            ingredients: [
                { fluid: 'minecraft:water', amount: 1000 },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { item: 'ae2:fluix_dust' }
            ],
            result: [{ item: 'ae2:fluix_crystal' }],
            energy: 10000,
            id: `${id_prefix}fluix_crystal_from_fluix_dust`
        },
        {
            ingredients: [
                { fluid: 'minecraft:water', amount: 500 },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { item: 'ae2:quartz_block' }
            ],
            result: [{ item: 'ae2:damaged_budding_quartz' }],
            energy: 5000,
            id: `${id_prefix}damaged_budding_quartz`
        },
        {
            ingredients: [
                { fluid: 'minecraft:water', amount: 500 },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { item: 'ae2:damaged_budding_quartz' }
            ],
            result: [{ item: 'ae2:chipped_budding_quartz' }],
            energy: 5000,
            id: `${id_prefix}chipped_budding_quartz`
        },
        {
            ingredients: [
                { fluid: 'minecraft:water', amount: 500 },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { item: 'ae2:chipped_budding_quartz' }
            ],
            result: [{ item: 'ae2:flawed_budding_quartz' }],
            energy: 5000,
            id: `${id_prefix}flawed_budding_quartz`
        },
        {
            ingredients: [
                { fluid: 'minecraft:water', amount: 2000 },
                { item: 'ae2:charged_certus_quartz_crystal' },
                { tag: 'forge:dusts/certus_quartz' }
            ],
            result: [{ item: 'ae2:certus_quartz_crystal', count: 2 }],
            energy: 20000,
            id: `${id_prefix}certus_quartz_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crystallizer';

        event.custom(recipe).id(recipe.id);
    });
});
