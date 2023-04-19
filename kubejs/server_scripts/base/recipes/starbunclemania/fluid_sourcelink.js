ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/starbunclemania/fluid_sourcelink/';
    const recipes = [
        {
            fluid: 'industrialforegoing:ether_gas',
            mb_to_source_ratio: 5.0,
            id: `${id_prefix}industrialforegoing_ether_gas`
        },
        {
            fluid: 'starbunclemania:source_fluid',
            mb_to_source_ratio: 0.9,
            id: `${id_prefix}starbunclemania_source_fluid`
        },
        {
            fluid: 'pneumaticcraft:biodiesel',
            mb_to_source_ratio: 0.5,
            id: `${id_prefix}pneumaticcraft_biodiesel`
        },
        {
            fluid: 'immersiveengineering:biodiesel',
            mb_to_source_ratio: 0.5,
            id: `${id_prefix}immersiveengineering_biodiesel`
        },
        {
            fluid: 'industrialforegoing:sludge',
            mb_to_source_ratio: 0.1,
            id: `${id_prefix}industrialforegoing_sludge`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'starbunclemania:fluid_sourcelink';
        event.custom(recipe).id(recipe.id);
    });
});
