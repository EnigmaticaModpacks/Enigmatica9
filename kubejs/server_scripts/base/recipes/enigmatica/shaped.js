ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/shaped/';

    const recipes = [
        {
            output: 'minecraft:copper_ingot',
            pattern: ['NNN', 'NNN', 'NNN'],
            // Not using tag here to force FunctionalStorage to choose that nugget, instead of checking a tag and failing. Fix for https://github.com/EnigmaticaModpacks/Enigmatica9/issues/537
            key: {
                N: 'emendatusenigmatica:copper_nugget'
            },
            id: `${id_prefix}copper_ingot_from_nuggets`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
