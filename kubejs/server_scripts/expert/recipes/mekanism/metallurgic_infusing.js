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
            output: 'emendatusenigmatica:horizonite_ingot',
            itemInput: { ingredient: { tag: 'forge:ingots/fiery' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 20 },
            id: `${id_prefix}horizonite_ingot`
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
        {
            output: 'ars_nouveau:fire_essence',
            itemInput: { ingredient: { tag: 'forge:gems/source' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:fire_essence', amount: 10 },
            id: `${id_prefix}fire_essence`
        },
        {
            output: 'ars_nouveau:water_essence',
            itemInput: { ingredient: { tag: 'forge:gems/source' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:water_essence', amount: 10 },
            id: `${id_prefix}water_essence`
        },
        {
            output: 'ars_nouveau:air_essence',
            itemInput: { ingredient: { tag: 'forge:gems/source' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 10 },
            id: `${id_prefix}air_essence`
        },
        {
            output: 'ars_nouveau:earth_essence',
            itemInput: { ingredient: { tag: 'forge:gems/source' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:earth_essence', amount: 10 },
            id: `${id_prefix}earth_essence`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
