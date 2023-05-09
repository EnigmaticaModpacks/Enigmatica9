ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/metallurgic_infusing/';
    const recipes = [
        {
            output: 'emendatusenigmatica:iron_ingot',
            itemInput: { ingredient: { tag: 'forge:ingots/crude_iron' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 20 },
            id: `${id_prefix}iron_ingot`
        },
        {
            output: 'emendatusenigmatica:steel_ingot',
            itemInput: { ingredient: { tag: 'forge:ingots/crude_iron' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 20 },
            id: `${id_prefix}steel_ingot`
        },
        {
            output: '2x emendatusenigmatica:infused_iron_ingot',
            itemInput: { ingredient: { tag: 'forge:ingots/ironwood' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 20 },
            id: `${id_prefix}infused_iron_ingot`
        },
        {
            output: '2x emendatusenigmatica:sky_ingot',
            itemInput: { ingredient: { tag: 'forge:ingots/aluminum' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 20 },
            id: `${id_prefix}sky_ingot`
        },
        {
            output: 'emendatusenigmatica:osmium_dirty_dust',
            itemInput: { ingredient: { tag: 'mekanism:clumps/osmium' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:water_essence', amount: 20 },
            id: `${id_prefix}osmium_dirty_dust`
        },
        {
            output: '2x emendatusenigmatica:nickel_dirty_dust',
            itemInput: { ingredient: { tag: 'mekanism:clumps/nickel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 20 },
            id: `${id_prefix}nickel_dirty_dust`
        },
        {
            output: Item.of('4x compactmachines:tunnel', '{definition:{id:"compactmachines:fluid"}}'),
            itemInput: { ingredient: { item: 'ae2:me_p2p_tunnel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:water_essence', amount: 20 },
            id: `${id_prefix}tunnel_fluid`
        },
        {
            output: Item.of('4x compactmachines:tunnel', '{definition:{id:"compactmachines:energy"}}'),
            itemInput: { ingredient: { item: 'ae2:me_p2p_tunnel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 20 },
            id: `${id_prefix}tunnel_energy`
        },
        {
            output: Item.of('4x compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'),
            itemInput: { ingredient: { item: 'ae2:me_p2p_tunnel' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 20 },
            id: `${id_prefix}tunnel_item`
        },
        // {
        //     output: 'ars_nouveau:fire_essence',
        //     itemInput: { ingredient: { tag: 'forge:gems/source' } },
        //     chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 10 },
        //     id: `${id_prefix}fire_essence`
        // },
        // {
        //     output: 'ars_nouveau:water_essence',
        //     itemInput: { ingredient: { tag: 'forge:gems/source' } },
        //     chemicalInput: { infuse_type: 'emendatusenigmatica:water_essence', amount: 10 },
        //     id: `${id_prefix}water_essence`
        // },
        // {
        //     output: 'ars_nouveau:air_essence',
        //     itemInput: { ingredient: { tag: 'forge:gems/source' } },
        //     chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 10 },
        //     id: `${id_prefix}air_essence`
        // },
        // {
        //     output: 'ars_nouveau:earth_essence',
        //     itemInput: { ingredient: { tag: 'forge:gems/source' } },
        //     chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 10 },
        //     id: `${id_prefix}earth_essence`
        // },
        {
            output: 'powah:crystal_blazing',
            itemInput: { ingredient: { tag: 'forge:gems/prismarine' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 40 },
            id: `${id_prefix}crystal_blazing`
        },
        {
            output: 'create:sturdy_sheet',
            itemInput: { ingredient: { tag: 'forge:dusts/obsidian' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 10 },
            id: `${id_prefix}sturdy_sheet`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
