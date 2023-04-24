ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/createaddition/charging/';
    const recipes = [
        {
            input: { item: 'ae2:certus_quartz_crystal' },
            result: { item: 'ae2:charged_certus_quartz_crystal' },
            energy: 5000,
            id: `${id_prefix}charged_certus_quartz_crystal`
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
            result: { item: 'ars_nouveau:source_gem_block' },
            energy: 20000,
            id: `${id_prefix}source_gem_block`
        },
        {
            input: { tag: 'forge:gems/amethyst' },
            result: { item: 'ars_nouveau:source_gem' },
            energy: 5000,
            id: `${id_prefix}source_gem`
        },
        {
            input: { item: 'minecraft:calcite' },
            result: { item: 'naturesaura:infused_stone' },
            energy: 5000,
            id: `${id_prefix}infused_stone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createaddition:charging';
        event.custom(recipe).id(recipe.id);
    });
});
