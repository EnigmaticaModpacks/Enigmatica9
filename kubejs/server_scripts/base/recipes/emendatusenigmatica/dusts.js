ServerEvents.recipes((event) => {
    const recipes = [];

    const recipes_to_remove = [];

    const exceptions = [];

    let props = Object.keys(metal_properties);

    props.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:raw_${metal}`)) {
            recipes.push(
                {
                    output: `emendatusenigmatica:${metal}_dust`,
                    inputs: [`#forge:raw_materials/${metal}`, '#forge:tools/crafting_hammers'],
                    id: `emendatusenigmatica:dust/from_raw/${metal}`
                },
                {
                    output: `emendatusenigmatica:${metal}_dust`,
                    inputs: [`#forge:ores/${metal}`, '#forge:tools/crafting_hammers'],
                    id: `emendatusenigmatica:dust/from_ore/${metal}`
                }
            );
            // Remove other recipes
            // Reason for this is pretty simple, AU doesn't unify recipes that are created / modified by KubeJS, so we need to remove unused recipes manually >.>
            // OR recipe is a bit different, but if we modify it, it will not be Unified as well ^^"
            if (!exceptions.includes(metal)) {
                recipes_to_remove.push(
                    {
                        id: `immersiveengineering:crafting/raw_hammercrushing_${metal}`
                    },
                    {
                        id: `immersiveengineering:crafting/hammercrushing_${metal}`
                    }
                );
            }
        }
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });

    recipes_to_remove.forEach((recipe) => {
        event.remove(recipe);
    });
});
