ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/createaddition/charging/';
    const recipes = [
        {
            input: { item: 'ae2:certus_quartz_crystal' },
            result: { item: 'ae2:charged_certus_quartz_crystal' },
            energy: 1000,
            id: `${id_prefix}charged_certus_quartz_crystal`
        },
        {
            input: { item: 'ae2:quartz_block' },
            result: { item: 'ae2:charged_certus_quartz_crystal', count: 4 },
            energy: 4000,
            id: `${id_prefix}charged_certus_quartz_crystal_from_block`
        },
        {
            input: { item: 'minecraft:snowball' },
            result: { item: 'powah:charged_snowball' },
            energy: 5000,
            id: `${id_prefix}charged_snowball`
        },
        {
            input: { tag: 'forge:ingots/ironwood' },
            result: { item: 'emendatusenigmatica:infused_iron_ingot' },
            energy: 600000,
            id: `${id_prefix}infused_iron_ingot`
        },
        {
            input: { tag: 'forge:storage_blocks/ironwood' },
            result: { item: 'emendatusenigmatica:infused_iron_block' },
            energy: 5400000,
            id: `${id_prefix}infused_iron_block`
        },
        {
            input: { tag: 'forge:storage_blocks/amethyst' },
            result: { item: 'emendatusenigmatica:source_block' },
            energy: 4000,
            id: `${id_prefix}source_block`
        },
        {
            input: { tag: 'forge:gems/amethyst' },
            result: { item: 'emendatusenigmatica:source_gem' },
            energy: 1000,
            id: `${id_prefix}source_gem`
        },
        {
            input: { item: 'minecraft:calcite' },
            result: { item: 'naturesaura:infused_stone' },
            energy: 5000,
            id: `${id_prefix}infused_stone`
        },
        {
            input: { item: 'minecraft:clay' },
            result: { item: 'kubejs:kaolin_clay', count: 4 },
            energy: 100,
            id: `${id_prefix}kaolin_clay`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:charging';
        event.custom(recipe).id(recipe.id);
    });
});
