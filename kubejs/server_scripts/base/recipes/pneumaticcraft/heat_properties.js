ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/heat_properties/';

    const recipes = [
        {
            description: 'pneumaticcraft.gui.jei.description.createaddition_liquid_blaze_burner.smouldering',
            block: 'createaddition:liquid_blaze_burner',
            statePredicate: { blaze: 'smouldering' },
            temperature: 1700,
            thermalResistance: 100000,
            id: `${id_prefix}blaze_burner/smouldering`
        },
        {
            description: 'pneumaticcraft.gui.jei.description.createaddition_liquid_blaze_burner.fading',
            block: 'createaddition:liquid_blaze_burner',
            statePredicate: { blaze: 'fading' },
            temperature: 1700,
            thermalResistance: 1000,
            id: `${id_prefix}blaze_burner/fading`
        },
        {
            description: 'pneumaticcraft.gui.jei.description.createaddition_liquid_blaze_burner.kindled',
            block: 'createaddition:liquid_blaze_burner',
            statePredicate: { blaze: 'kindled' },
            temperature: 1700,
            thermalResistance: 500,
            id: `${id_prefix}blaze_burner/kindled`
        },
        {
            description: 'pneumaticcraft.gui.jei.description.createaddition_liquid_blaze_burner.seething',
            block: 'createaddition:liquid_blaze_burner',
            statePredicate: { blaze: 'seething' },
            temperature: 1700,
            thermalResistance: 50,
            id: `${id_prefix}blaze_burner/seething`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe).id(recipe.id);
    });
});
