ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/pneumaticcraft/heat_properties/';

    const recipes = [
        {
            block: 'twilightforest:fiery_block',
            temperature: 1700,
            thermalResistance: 250,
            heatCapacity: 10000,
            transformCold: { block: 'minecraft:iron_block' },
            id: `${id_prefix}fiery_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe).id(recipe.id);
    });
});
