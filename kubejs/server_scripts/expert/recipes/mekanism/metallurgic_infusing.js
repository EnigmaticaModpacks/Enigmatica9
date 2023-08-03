ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/metallurgic_infusing/';
    const recipes = [
        {
            output: { item: AlmostUnified.getPreferredItemForTag(`forge:ingots/iron`).getId() },
            itemInput: { ingredient: { tag: 'forge:ingots/crude_iron' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 20 },
            id: `${id_prefix}iron_ingot`
        },
        {
            output: { item: 'emendatusenigmatica:steel_ingot' },
            itemInput: { ingredient: { tag: 'forge:ingots/crude_iron' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 20 },
            id: `${id_prefix}steel_ingot`
        },
        {
            output: { item: 'twilightforest:steeleaf_ingot', count: 3 },
            itemInput: { ingredient: { item: 'naturesaura:gold_leaf' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 20 },
            id: `${id_prefix}steeleaf_ingot`
        },
        {
            output: { item: 'emendatusenigmatica:infused_iron_ingot', count: 2 },
            itemInput: { ingredient: { tag: 'forge:ingots/ironwood' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 20 },
            id: `${id_prefix}infused_iron_ingot`
        },
        {
            output: { item: 'emendatusenigmatica:sky_ingot', count: 2 },
            itemInput: { ingredient: { tag: 'forge:ingots/aluminum' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 20 },
            id: `${id_prefix}sky_ingot`
        },
        {
            output: { item: 'emendatusenigmatica:osmium_dirty_dust' },
            itemInput: { ingredient: { tag: 'mekanism:clumps/osmium' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:water_essence', amount: 20 },
            id: `${id_prefix}osmium_dirty_dust`
        },
        {
            output: { item: 'emendatusenigmatica:nickel_dirty_dust', count: 2 },
            itemInput: { ingredient: { tag: 'mekanism:clumps/nickel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 20 },
            id: `${id_prefix}nickel_dirty_dust`
        },
        {
            output: { item: 'compactmachines:tunnel', count: 4, nbt: '{definition:{id:"compactmachines:fluid"}}' },
            itemInput: { ingredient: { item: 'ae2:me_p2p_tunnel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:water_essence', amount: 20 },
            id: `${id_prefix}tunnel_fluid`
        },
        {
            output: { item: 'compactmachines:tunnel', count: 4, nbt: '{definition:{id:"compactmachines:energy"}}' },
            itemInput: { ingredient: { item: 'ae2:me_p2p_tunnel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 20 },
            id: `${id_prefix}tunnel_energy`
        },
        {
            output: { item: 'compactmachines:tunnel', count: 4, nbt: '{definition:{id:"compactmachines:item"}}' },
            itemInput: { ingredient: { item: 'ae2:me_p2p_tunnel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 20 },
            id: `${id_prefix}tunnel_item`
        },
        {
            output: { item: 'powah:crystal_blazing' },
            itemInput: { ingredient: { tag: 'forge:gems/prismarine' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 40 },
            id: `${id_prefix}crystal_blazing`
        },
        {
            output: { item: 'create:sturdy_sheet' },
            itemInput: { ingredient: { tag: 'forge:dusts/obsidian' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 10 },
            id: `${id_prefix}sturdy_sheet`
        },
        {
            output: { item: 'mekanism:structural_glass' },
            itemInput: { ingredient: { item: 'ae2:quartz_glass' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 40 },
            id: `${id_prefix}structural_glass`
        },
        {
            output: { item: 'mekanism:alloy_reinforced' },
            itemInput: { ingredient: { item: 'quark:dragon_scale' } },
            chemicalInput: { infuse_type: 'mekanism:diamond', amount: 20 },
            id: `${id_prefix}alloy_reinforced`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        event.custom(recipe).id(recipe.id);
    });
});
